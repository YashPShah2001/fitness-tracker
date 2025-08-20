import type { ExerciseData } from "../models/models";

interface props{
    data:ExerciseData[]
}

export default function DataTable({data}:props){
    return (
        <div className="overflow-auto my-4 bg-slate-800 ">
            <table className="w-full table-fixed shadow-md rounded-lg divide-y divide-slate-950 ">
                <thead className="bg-slate-700">
                    <tr>
                        <th className="font-semibold p-4 text-slate-200 text-left">Date</th>
                        <th className="font-semibold p-4 text-slate-200 text-left">Calories Burned</th>
                        <th className="font-semibold p-4 text-slate-200 text-left">Steps</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-950 ">
                    {data.map((e) => (
                        <tr key={e.date} className="hover:bg-gray-50">
                            <td className="p-4 text-sm  text-slate-400">{e.date}</td>
                            <td className="p-4 text-sm text-slate-400">{e.calories}</td>
                            <td className="p-4 text-sm text-slate-400">{e.steps}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}