import { BoardModel } from '../models/board.model';

export const searchBoard = (boards: BoardModel[], phrase: string) => {
  return boards.filter((el) => el.name.toLowerCase().includes(phrase.toLowerCase()));
};
