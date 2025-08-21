import type { ExerciseData } from "../models/models";

interface props{
    data:ExerciseData[]
}

export default function DataTable({data}:props){
    return (
        <div className="overflow-y-auto bg-slate-100 dark:bg-slate-800 md:rounded-xl border border-slate-950 dark:border-slate-50">
            <table className="w-full table-fixed divide-y divide-slate-950 dark:divide-slate-50 ">
                <thead className="bg-slate-200 dark:bg-slate-700">
                    <tr className="text-slate-900 dark:text-slate-200">
                        <th className="font-semibold p-4 text-left">Date</th>
                        <th className="font-semibold p-4 text-left">Calories Burnt</th>
                        <th className="font-semibold p-4 text-left">Steps</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-500 ">
                    {data.map((record) => (
                        <tr key={record.date} className="hover:bg-gray-400 hover:text-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 ease-in-out">
                            <td className="p-4 text-sm">{record.date}</td>
                            <td className="p-4 text-sm">{record.calories}</td>
                            <td className="p-4 text-sm">{record.steps}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
} 