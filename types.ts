
export type Day = 'LUNEDÌ' | 'MARTEDÌ' | 'MERCOLEDÌ' | 'GIOVEDÌ' | 'VENERDÌ';

export interface Exercise {
  id: string;
  name: string;
  reps: string;
  description: string;
}

export interface WorkoutDay {
  title: string;
  exercises: Exercise[];
}

export interface Meal {
  type: string;
  content: string;
}

export interface DayMeals {
  [key: string]: string; // colazione, spuntino, pranzo, cena
}

export interface ShoppingItem {
  id: string;
  name: string;
  category: string;
  checked: boolean;
}

export interface WeeklyData {
  diet: Record<Day, DayMeals>;
  shopping: Record<string, string[]>;
}
