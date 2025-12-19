/**
 * Utility functions for cron expression handling
 */

export interface CronParts {
    minute: string;
    hour: string;
    dayOfMonth: string;
    month: string;
    dayOfWeek: string;
}

/**
 * Parses a cron expression string into its component parts
 */
export function parseCronExpression(expression: string): CronParts | null {
    const parts = expression.trim().split(/\s+/);
    if (parts.length !== 5) return null;

    return {
        minute: parts[0],
        hour: parts[1],
        dayOfMonth: parts[2],
        month: parts[3],
        dayOfWeek: parts[4],
    };
}

/**
 * Builds a cron expression from its component parts
 */
export function buildCronExpression(parts: CronParts): string {
    return `${parts.minute} ${parts.hour} ${parts.dayOfMonth} ${parts.month} ${parts.dayOfWeek}`;
}

/**
 * Common cron presets for quick selection
 */
export const cronPresets = [
    { label: 'Every minute', expression: '* * * * *' },
    { label: 'Every hour', expression: '0 * * * *' },
    { label: 'Every day at midnight', expression: '0 0 * * *' },
    { label: 'Every day at noon', expression: '0 12 * * *' },
    { label: 'Every Monday at midnight', expression: '0 0 * * 1' },
    { label: 'Every weekday at 9 AM', expression: '0 9 * * 1-5' },
    { label: 'First day of every month', expression: '0 0 1 * *' },
    { label: 'Every Sunday at midnight', expression: '0 0 * * 0' },
];

/**
 * Days of the week mapping
 */
export const daysOfWeek = [
    { value: '0', label: 'Sunday' },
    { value: '1', label: 'Monday' },
    { value: '2', label: 'Tuesday' },
    { value: '3', label: 'Wednesday' },
    { value: '4', label: 'Thursday' },
    { value: '5', label: 'Friday' },
    { value: '6', label: 'Saturday' },
    { value: '7', label: 'Sunday' },
];

/**
 * Months mapping
 */
export const months = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
];

/**
 * Generates a human-readable description from a cron expression
 */
export function getCronDescription(expression: string): string {
    const parts = parseCronExpression(expression);
    if (!parts) return 'Invalid cron expression';

    const { minute, hour, dayOfMonth, month, dayOfWeek } = parts;

    // All wildcards = every minute
    if (minute === '*' && hour === '*' && dayOfMonth === '*' && month === '*' && dayOfWeek === '*') {
        return 'Every minute';
    }

    // Specific minute, all other wildcards = every hour at that minute
    if (minute !== '*' && hour === '*' && dayOfMonth === '*' && month === '*' && dayOfWeek === '*') {
        return `Every hour at minute ${minute}`;
    }

    // Specific minute and hour = every day at that time
    if (minute !== '*' && hour !== '*' && dayOfMonth === '*' && month === '*' && dayOfWeek === '*') {
        return `Every day at ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
    }

    // Specific minute, hour, and day of month = every month on that day at that time
    if (minute !== '*' && hour !== '*' && dayOfMonth !== '*' && month === '*' && dayOfWeek === '*') {
        return `Every month on day ${dayOfMonth} at ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
    }

    // Specific minute, hour, and day of week = every week on that day at that time
    if (minute !== '*' && hour !== '*' && dayOfMonth === '*' && month === '*' && dayOfWeek !== '*') {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayIndex = parseInt(dayOfWeek, 10);
        const day = dayIndex >= 0 && dayIndex <= 6 ? days[dayIndex] : `Day ${dayOfWeek}`;
        return `Every ${day} at ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
    }

    // Generic fallback
    const monthLabel = months.find(m => m.value === month)?.label;
    const dayOfWeekLabel = daysOfWeek.find(d => d.value === dayOfWeek)?.label;

    let description = `At ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;

    if (dayOfMonth !== '*') {
        description += ` on day ${dayOfMonth}`;
    }

    if (month !== '*') {
        const monthDesc = monthLabel ? `month ${month} (${monthLabel})` : `month ${month}`;
        description += ` of ${monthDesc}`;
    } else if (dayOfMonth !== '*') {
        description += ` of every month`;
    }

    if (dayOfWeek !== '*') {
        const dayDesc = dayOfWeekLabel ? `day of week ${dayOfWeek} (${dayOfWeekLabel})` : `day of week ${dayOfWeek}`;
        description += `, ${dayDesc}`;
    }

    return description;
}
