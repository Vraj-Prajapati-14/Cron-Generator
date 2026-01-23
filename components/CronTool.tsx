"use client";

import { useState, useEffect } from "react";
import { Copy, Trash2, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import styles from "./CronTool.module.css";
import clsx from "clsx";
import { isValidCron } from "cron-validator";
import { months, daysOfWeek } from "@/lib/cron-utils";

export default function CronTool() {
    const [cronExpression, setCronExpression] = useState<string>("0 0 * * *");
    const [minute, setMinute] = useState<string>("0");
    const [hour, setHour] = useState<string>("0");
    const [dayOfMonth, setDayOfMonth] = useState<string>("*");
    const [month, setMonth] = useState<string>("*");
    const [dayOfWeek, setDayOfWeek] = useState<string>("*");
    const [isValid, setIsValid] = useState<boolean>(true);
    const [status, setStatus] = useState<{ type: "error" | "success" | null; message: string }>({ type: null, message: "" });

    useEffect(() => {
        const expr = `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;
        setCronExpression(expr);
        try {
            const valid = isValidCron(expr, { seconds: false });
            setIsValid(valid);
            if (valid) {
                setStatus({ type: "success", message: "Valid cron expression" });
            } else {
                setStatus({ type: "error", message: "Invalid cron expression" });
            }
        } catch {
            setIsValid(false);
            setStatus({ type: "error", message: "Invalid cron expression" });
        }
    }, [minute, hour, dayOfMonth, month, dayOfWeek]);

    const handleExpressionChange = (expr: string) => {
        setCronExpression(expr);
        const parts = expr.trim().split(/\s+/);
        if (parts.length === 5) {
            setMinute(parts[0]);
            setHour(parts[1]);
            setDayOfMonth(parts[2]);
            setMonth(parts[3]);
            setDayOfWeek(parts[4]);
        }
        try {
            const valid = isValidCron(expr, { seconds: false });
            setIsValid(valid);
            if (valid) {
                setStatus({ type: "success", message: "Valid cron expression" });
            } else {
                setStatus({ type: "error", message: "Invalid cron expression" });
            }
        } catch {
            setIsValid(false);
            setStatus({ type: "error", message: "Invalid cron expression" });
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(cronExpression);
        setStatus({ type: "success", message: "Cron expression copied to clipboard!" });
        setTimeout(() => setStatus({ type: null, message: "" }), 2000);
    };

    const handleClear = () => {
        setCronExpression("0 0 * * *");
        setMinute("0");
        setHour("0");
        setDayOfMonth("*");
        setMonth("*");
        setDayOfWeek("*");
        setStatus({ type: null, message: "" });
    };

    const getDescription = (expr: string): string => {
        if (!isValid) return "Invalid cron expression";

        const parts = expr.trim().split(/\s+/);
        if (parts.length !== 5) return "Invalid format";

        const [min, hr, dom, mon, dow] = parts;

        if (min === "*" && hr === "*" && dom === "*" && mon === "*" && dow === "*") {
            return "Every minute";
        }

        if (min !== "*" && hr === "*" && dom === "*" && mon === "*" && dow === "*") {
            return `Every hour at minute ${min}`;
        }

        if (min !== "*" && hr !== "*" && dom === "*" && mon === "*" && dow === "*") {
            return `Every day at ${hr.padStart(2, "0")}:${min.padStart(2, "0")}`;
        }

        if (min !== "*" && hr !== "*" && dom !== "*" && mon === "*" && dow === "*") {
            return `Every month on day ${dom} at ${hr.padStart(2, "0")}:${min.padStart(2, "0")}`;
        }

        if (min !== "*" && hr !== "*" && dom === "*" && mon === "*" && dow !== "*") {
            const dayLabel = daysOfWeek.find(d => d.value === dow)?.label;
            const day = dayLabel ? `day of week ${dow} (${dayLabel})` : `day of week ${dow}`;
            return `Every ${day} at ${hr.padStart(2, "0")}:${min.padStart(2, "0")}`;
        }

        const monthLabel = months.find(m => m.value === mon)?.label;
        const dayOfWeekLabel = daysOfWeek.find(d => d.value === dow)?.label;

        let description = `At ${hr.padStart(2, "0")}:${min.padStart(2, "0")}`;

        if (dom !== "*") {
            description += ` on day ${dom}`;
        }

        if (mon !== "*") {
            const monthDesc = monthLabel ? `month ${mon} (${monthLabel})` : `month ${mon}`;
            description += ` of ${monthDesc}`;
        } else if (dom !== "*") {
            description += ` of every month`;
        }

        if (dow !== "*") {
            const dayDesc = dayOfWeekLabel ? `day of week ${dow} (${dayOfWeekLabel})` : `day of week ${dow}`;
            description += `, ${dayDesc}`;
        }

        return description;
    };

    return (
        <section className={styles.container} aria-label="Cron Expression Generator">
            <div className={styles.toolbar} role="toolbar" aria-label="Cron generator actions">
                <div className={styles.actions}>
                    <button 
                        onClick={handleClear} 
                        className="btn btn-secondary" 
                        title="Clear All"
                        aria-label="Clear all cron expression fields"
                        type="button"
                    >
                        <Trash2 size={18} aria-hidden="true" />
                        <span className="sr-only">Clear All</span>
                    </button>
                    <button 
                        onClick={handleCopy} 
                        className="btn btn-primary" 
                        title="Copy Cron Expression"
                        aria-label="Copy cron expression to clipboard"
                        type="button"
                    >
                        <Copy size={18} aria-hidden="true" /> 
                        <span>Copy</span>
                    </button>
                </div>
            </div>

            <div className={styles.workspace}>
                <div className={styles.builderSection} role="group" aria-labelledby="builder-title">
                    <h2 id="builder-title" className={styles.sectionTitle}>Cron Builder</h2>
                    <div className={styles.fieldGroup}>
                        <label htmlFor="minute-field" className={styles.fieldLabel}>Minute (0-59)</label>
                        <input
                            id="minute-field"
                            type="text"
                            className={styles.fieldInput}
                            value={minute}
                            onChange={(e) => setMinute(e.target.value)}
                            placeholder="0"
                            aria-describedby="minute-help"
                            aria-label="Minute field for cron expression"
                        />
                        <span id="minute-help" className="sr-only">Enter minute value from 0 to 59, or use * for every minute</span>
                    </div>
                    <div className={styles.fieldGroup}>
                        <label htmlFor="hour-field" className={styles.fieldLabel}>Hour (0-23)</label>
                        <input
                            id="hour-field"
                            type="text"
                            className={styles.fieldInput}
                            value={hour}
                            onChange={(e) => setHour(e.target.value)}
                            placeholder="0"
                            aria-describedby="hour-help"
                            aria-label="Hour field for cron expression"
                        />
                        <span id="hour-help" className="sr-only">Enter hour value from 0 to 23, or use * for every hour</span>
                    </div>
                    <div className={styles.fieldGroup}>
                        <label htmlFor="day-of-month-field" className={styles.fieldLabel}>Day of Month (1-31)</label>
                        <input
                            id="day-of-month-field"
                            type="text"
                            className={styles.fieldInput}
                            value={dayOfMonth}
                            onChange={(e) => setDayOfMonth(e.target.value)}
                            placeholder="*"
                            aria-describedby="day-of-month-help"
                            aria-label="Day of month field for cron expression"
                        />
                        <span id="day-of-month-help" className="sr-only">Enter day of month from 1 to 31, or use * for every day</span>
                    </div>
                    <div className={styles.fieldGroup}>
                        <label htmlFor="month-field" className={styles.fieldLabel}>Month (1-12)</label>
                        <input
                            id="month-field"
                            type="text"
                            className={styles.fieldInput}
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                            placeholder="*"
                            aria-describedby="month-help"
                            aria-label="Month field for cron expression"
                        />
                        <span id="month-help" className="sr-only">Enter month value from 1 to 12, or use * for every month</span>
                    </div>
                    <div className={styles.fieldGroup}>
                        <label htmlFor="day-of-week-field" className={styles.fieldLabel}>Day of Week (0-7, 0 or 7 = Sunday)</label>
                        <input
                            id="day-of-week-field"
                            type="text"
                            className={styles.fieldInput}
                            value={dayOfWeek}
                            onChange={(e) => setDayOfWeek(e.target.value)}
                            placeholder="*"
                            aria-describedby="day-of-week-help"
                            aria-label="Day of week field for cron expression"
                        />
                        <span id="day-of-week-help" className="sr-only">Enter day of week from 0 to 7 (0 and 7 are Sunday), or use * for every day</span>
                    </div>
                </div>

                <div className={styles.inputSection} role="group" aria-labelledby="expression-title">
                    <h2 id="expression-title" className={styles.sectionTitle}>Cron Expression</h2>
                    <input
                        type="text"
                        className={clsx(styles.cronInput, !isValid && styles.statusError)}
                        value={cronExpression}
                        onChange={(e) => handleExpressionChange(e.target.value)}
                        placeholder="0 0 * * *"
                        aria-label="Cron expression input"
                        aria-describedby="cron-status cron-description"
                        aria-invalid={!isValid}
                    />
                    <div id="cron-status" role="status" aria-live="polite" aria-atomic="true">
                        {status.message && (
                            <div className={clsx(styles.status, status.type === "error" ? styles.statusError : styles.statusSuccess)}>
                                {status.type === "error" ? (
                                    <>
                                        <AlertTriangle size={18} style={{ display: 'inline', marginRight: 8 }} aria-hidden="true" />
                                        <span>{status.message}</span>
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle size={18} style={{ display: 'inline', marginRight: 8 }} aria-hidden="true" />
                                        <span>{status.message}</span>
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                    <div id="cron-description" className={styles.description} role="region" aria-label="Cron expression description">
                        <h3 className={styles.descriptionTitle}>
                            <Clock size={18} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} aria-hidden="true" />
                            Description
                        </h3>
                        <div className={styles.descriptionText} aria-live="polite">{getDescription(cronExpression)}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

