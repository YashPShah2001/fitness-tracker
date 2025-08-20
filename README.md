# Fitness Tracker

A simple React + TypeScript application to display a user’s exercise data for the past week.  
The app shows a table view of exercise data (calories burned, steps taken) and a chart visualization of the same data.

---

## 🚀 Features

- Load exercise data from a local JSON file (no APIs required).
- Display the data in a **styled table**.
- Visualize **calories and steps trends** in a line chart.
- Clean, modern styling with **Tailwind CSS**.
- Responsive layout (table and chart side-by-side on larger screens).

---

## Setup Instructions

1. Clone the repository:
``` git clone https://github.com/YashPShah2001/fitness-tracker.git ```

2. Install dependencies:
``` npm install ```

3. Run the app:
``` npm run dev ```

4. Open the brower at:
``` http://localhost:5173 ```

## Data
The data is stored locally in exerciseData.json:
``` 
[
  { "date": "2025-08-01", "calories": 450, "durationMinutes": 40 },
  { "date": "2025-08-02", "calories": 320, "durationMinutes": 30 },
  { "date": "2025-08-03", "calories": 600, "durationMinutes": 55 },
  { "date": "2025-08-04", "calories": 290, "durationMinutes": 25 },
  { "date": "2025-08-05", "calories": 500, "durationMinutes": 45 }
] 
```
`Steps` are derived from `durationMinutes x 100`.

## Tools & Libraries used
- [Vite](https://vitejs.dev/)– React + TypeScript fast build tool.
- [React](https://react.dev/) – Frontend UI library.
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling.
- [Recharts](https://recharts.org/) – Charting library.
- **TypeScript** – Type safety for React components.

## AI Assistance
AI tool(ChatGPT) was used for:
- As a documentation assistance for tailwind and recharts.
- Develop base code for table.
- Configuring recharts.
- README documentation.

## Improvements / Future Scope
- Theme based styling.
- Add unit tests (Jest + React Testing Library).