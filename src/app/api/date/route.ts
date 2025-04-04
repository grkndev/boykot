import { NextResponse } from "next/server";

export async function GET() {
    const startDate = new Date('2025-04-02');
    const today = new Date();
    
    // Calculate days passed since the start date
    const daysPassed = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    
    // Calculate how many complete 6-day periods have passed
    const completedPeriods = Math.floor(daysPassed / 6);
    
    // Calculate the next date (next multiple of 6 days from the start date)
    const nextDate = new Date(startDate);
    nextDate.setDate(startDate.getDate() + 6 * (completedPeriods + 1));
    
    return NextResponse.json({
        startDate: startDate.toISOString().split('T')[0],
        currentDate: today.toISOString().split('T')[0],
        daysPassed,
        nextDate: nextDate.toISOString().split('T')[0]
    });
}

