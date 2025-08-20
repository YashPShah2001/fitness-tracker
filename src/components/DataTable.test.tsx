import { render, screen } from '@testing-library/react';
import DataTable from './DataTable';
import type { ExerciseData } from '../models/models';

const mockData: ExerciseData[] = [
    { date: 'Aug 1', calories: 450, durationMinutes: 40, steps: 4000 },
    { date: 'Aug 2', calories: 320, durationMinutes: 30, steps: 3000 },
  ];

  describe('DataTable', () => {
    it('renders table headers correctly', () => {
      render(<DataTable data={mockData} />);
      expect(screen.getByText(/Date/i)).toBeInTheDocument();
      expect(screen.getByText(/Calories Burnt/i)).toBeInTheDocument();
      expect(screen.getByText(/Steps/i)).toBeInTheDocument();
    });
  
    it('renders all rows correctly', () => {
      render(<DataTable data={mockData} />);
      expect(screen.getByText('Aug 1')).toBeInTheDocument();
      expect(screen.getByText('450')).toBeInTheDocument();
      expect(screen.getByText('4000')).toBeInTheDocument();
  
      expect(screen.getByText('Aug 2')).toBeInTheDocument();
      expect(screen.getByText('320')).toBeInTheDocument();
      expect(screen.getByText('3000')).toBeInTheDocument();
    });
  });