import './App.css'
import type { ExerciseData } from './models/models';
import rawData from "./data/exerciseData.json";
import DataTable from './components/DataTable';
import DataChart from './components/DataChart';

function App() {

  // As per requirement, we need to derive the steps field from durationMinutes field. I am assuming 100 steps per minute.
  // Here, as the data is static and there are no states to cause re-render of the component, I am avoiding the use of memoizing hook.
  const exerciseData: ExerciseData[] = rawData.map(record => ({
    ...record,
    steps: record.durationMinutes * 100,
  }));

  return (
    <>
      <div className="p-4 w-full 
                      bg-gradient-to-r dark:bg-gradient-to-l from-slate-300 via-slate-500 to-slate-700
                      shadow-md shadow-slate-500">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-300">Weekly exercise summary</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 p-3">
        <div className="h-auto flex-1">
          <DataTable data={exerciseData} />
        </div>
        <div className="h-auto flex-2">
          <DataChart data={exerciseData} />
        </div>
      </div>
    </>
  )
}

export default App
