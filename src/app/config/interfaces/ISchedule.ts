export interface ISchedule {
  dates: IScheduleDate[];
  time: string;
}

export interface IScheduleDate {
  name: string;
  trainer: string;
  color: string;
  backgroundColor?: string;
}
