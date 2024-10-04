import { useState } from 'react';

export interface TopWinner {
  number: number;
  name: string;
  dValue: number;
  xValue: number;
}

export const useTopWinners = () => {
  const [topWinners] = useState<TopWinner[]>([
    { number: 1, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 2, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 3, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 4, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 5, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 6, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 7, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 8, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 9, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 10, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 11, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 12, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 13, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 54, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 55, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 56, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 57, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 58, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 59, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 60, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 61, name: 'Username', dValue: 777777.77, xValue: 777777.77 }
  ]);

  return topWinners;
};