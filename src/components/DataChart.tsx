import type { ExerciseData } from "../models/models";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface props {
    data: ExerciseData[]
}

export default function ({ data }: props) {

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Detect system or Tailwind dark mode
        const matchDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDark(matchDark);
    
        // Listen for changes
        const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", listener);
        return () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", listener);
    }, []);

    const axisColor = isDark ? "#f1f5f9" : "#0f172a"; // slate-100 / slate-900

    return (
        //This rechart was initally developed using AI, then styled based upon my interests
        <div className="w-full h-90 md:h-full bg-slate-100 dark:bg-slate-800 md:rounded-xl pt-2 pr-2 border border-slate-950 dark:border-slate-50">
            <ResponsiveContainer >
                <LineChart data={data}>
                    <XAxis
                        dataKey="date"
                        stroke={axisColor} // axis line color (slate-400)
                        tick={{ fill: axisColor, fontSize: 15 }} // label color + size
                    />
                    <YAxis
                        stroke={axisColor} // axis line color
                        tick={{ fill: axisColor, fontSize: 15 }} // label color + size
                    />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="calories" stroke="#ef4444" strokeWidth={2} />
                    <Line type="monotone" dataKey="steps" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
        
    );
}