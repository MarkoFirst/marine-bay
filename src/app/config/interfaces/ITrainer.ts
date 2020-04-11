export interface ITrainer {
  name: string;
  instagram: string;
  description: string;
  photo: string;
  rank: number;
  gradient: {
    firstColor: string;
    secondColor: string;
  };
}
