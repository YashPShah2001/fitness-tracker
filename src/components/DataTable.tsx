import type { ExerciseData } from "../models/models";

interface props{
    data:ExerciseData[]
}

export default function DataTable({data}:props){
    return (
        <div className="overflow-y-auto bg-slate-800 md:rounded-xl border border-slate-50">
            <table className="w-full table-fixed divide-y divide-slate-50 ">
                <thead className="bg-slate-700 sticky top-0 z-10">
                    <tr className="text-slate-200">
                        <th className="font-semibold p-4 text-left">Date</th>
                        <th className="font-semibold p-4 text-left">Calories Burnt</th>
                        <th className="font-semibold p-4 text-left">Steps</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-500 ">
                    {data.map((e) => (
                        <tr key={e.date} className="hover:bg-gray-400 hover:text-slate-950 text-slate-400 transition-colors duration-300 ease-in-out">
                            <td className="p-4 text-sm">{e.date}</td>
                            <td className="p-4 text-sm">{e.calories}</td>
                            <td className="p-4 text-sm">{e.steps}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
} 