import type { ExerciseData } from "../models/models";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface props {
    data: ExerciseData[]
}

export default function ({ data }: props) {
    return (
        //This rechart was initally developed using AI, then styled based upon my interests
        <div className="w-full h-90 md:h-full bg-slate-100 dark:bg-slate-800 md:rounded-xl pt-2 pr-2 border border-slate-950 dark:border-slate-50">
            <ResponsiveContainer >
                <LineChart data={data}>
                    <XAxis
                        dataKey="date"
                        stroke="#64748b" // axis line color (slate-400)
                        tick={{ fill: "#64748b", fontSize: 15 }} // label color + size
                    />
                    <YAxis
                        stroke="#64748b" // axis line color
                        tick={{ fill: "#64748b", fontSize: 15 }} // label color + size
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