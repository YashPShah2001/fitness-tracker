import { render, screen } from '@testing-library/react';
import DataChart from './DataChart';
import type { ExerciseData } from '../models/models';

const mockData: ExerciseData[] = [
  { date: 'Aug 1', calories: 450, durationMinutes: 40, steps: 4000 },
];

// I shall test rechart with DOM presence as visual rendering is hard to assert.
test('renders chart container', () => {
  render(<DataChart data={mockData} />);
  const chartDiv = screen.getByTestId('chart-container'); //getting 
  expect(chartDiv).toBeInTheDocument();
});