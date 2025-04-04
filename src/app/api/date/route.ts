import { NextResponse } from "next/server";

export async function GET() {
    // Set the timezone to Turkey (Istanbul)
    const timezone = 'Europe/Istanbul';
    
    // Create dates in Turkey timezone
    const formatTurkeyDate = (date: Date): Date => {
        const options = { timeZone: timezone };
        return new Date(date.toLocaleString('en-US', options));
    };

    // Getting dates in Turkey timezone
    const startDateRaw = new Date('2025-04-02T00:00:00Z');
    const startDate = formatTurkeyDate(startDateRaw);
    
    const todayRaw = new Date();
    const today = formatTurkeyDate(todayRaw);
    
    // Calculate days passed since the start date
    const startDay = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const todayDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
    // Use UTC timestamps to avoid timezone issues when calculating difference
    const daysPassed = Math.round((todayDay.getTime() - startDay.getTime()) / (1000 * 60 * 60 * 24));
    
    // Calculate how many complete 6-day periods have passed
    const completedPeriods = Math.floor(daysPassed / 6);
    
    // Calculate the next date (next multiple of 6 days from the start date)
    const nextDate = new Date(startDay);
    nextDate.setDate(startDay.getDate() + 6 * (completedPeriods + 1));
    
    // Format dates to ISO format (YYYY-MM-DD)
    const formatDateISO = (date: Date): string => {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    };
    
    return NextResponse.json({
        startDate: formatDateISO(startDate),
        currentDate: formatDateISO(today),
        daysPassed,
        nextDate: formatDateISO(nextDate)
    });
}

