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
        <div className={styles.container}>
            <div className={styles.toolbar}>
                <div className={styles.actions}>
                    <button onClick={handleClear} className="btn btn-secondary" title="Clear All">
                        <Trash2 size={18} />
                    </button>
                    <button onClick={handleCopy} className="btn btn-primary" title="Copy Cron Expression">
                        <Copy size={18} /> Copy
                    </button>
                </div>
            </div>

            <div className={styles.workspace}>
                <div className={styles.builderSection}>
                    <div className={styles.sectionTitle}>Cron Builder</div>
                    <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>Minute (0-59)</label>
                        <input
                            type="text"
                            className={styles.fieldInput}
                            value={minute}
                            onChange={(e) => setMinute(e.target.value)}
                            placeholder="0"
                        />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>Hour (0-23)</label>
                        <input
                            type="text"
                            className={styles.fieldInput}
                            value={hour}
                            onChange={(e) => setHour(e.target.value)}
                            placeholder="0"
                        />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>Day of Month (1-31)</label>
                        <input
                            type="text"
                            className={styles.fieldInput}
                            value={dayOfMonth}
                            onChange={(e) => setDayOfMonth(e.target.value)}
                            placeholder="*"
                        />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>Month (1-12)</label>
                        <input
                            type="text"
                            className={styles.fieldInput}
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                            placeholder="*"
                        />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>Day of Week (0-7, 0 or 7 = Sunday)</label>
                        <input
                            type="text"
                            className={styles.fieldInput}
                            value={dayOfWeek}
                            onChange={(e) => setDayOfWeek(e.target.value)}
                            placeholder="*"
                        />
                    </div>
                </div>

                <div className={styles.inputSection}>
                    <div className={styles.sectionTitle}>Cron Expression</div>
                    <input
                        type="text"
                        className={clsx(styles.cronInput, !isValid && styles.statusError)}
                        value={cronExpression}
                        onChange={(e) => handleExpressionChange(e.target.value)}
                        placeholder="0 0 * * *"
                    />

                    {status.message && (
                        <div className={clsx(styles.status, status.type === "error" ? styles.statusError : styles.statusSuccess)}>
                            {status.type === "error" ? <AlertTriangle size={18} style={{ display: 'inline', marginRight: 8 }} /> : <CheckCircle size={18} style={{ display: 'inline', marginRight: 8 }} />}
                            {status.message}
                        </div>
                    )}

                    <div className={styles.description}>
                        <div className={styles.descriptionTitle}>
                            <Clock size={18} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} />
                            Description
                        </div>
                        <div className={styles.descriptionText}>{getDescription(cronExpression)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

