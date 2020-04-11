export interface IProgram {
  name: string;
  description: string;
  price: number;
  color: string;
  level?: string;
}

export interface IProgramCategory {
  id: number;
  list: IProgram[];
  name: string;
  description?: string;
  color: string;
}
