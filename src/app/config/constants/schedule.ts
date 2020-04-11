import {ISchedule} from '../interfaces/ISchedule';

// colors
const blueText = 'steelblue';
const redText = '#e32';
const pinkText = '#9f4eec';
const customBG = 'white';

// programs
const all       = {name: 'Общая', color: blueText};
const women     = {name: 'Женская', color: redText};
const kidSmall  = {name: 'Детская мл', color: pinkText};
const kidBig    = {name: 'Детская ст', color: pinkText};
const empty     = {name: '', color: '', trainer: ''};

export const SCHEDULE: ISchedule[] = [
  {
    dates: [
      {trainer: '', ...all},
      {trainer: '', ...all},
      {trainer: '', ...all},
      {trainer: '', ...all},
      {trainer: '', ...all},
      empty,
    ],
    time: '8'
  },
  {
    dates: [
      {trainer: '', ...women},
      empty,
      {trainer: '', ...women},
      empty,
      {trainer: '', ...women},
      {trainer: '', ...all},
    ],
    time: '9'
  },
  {
    dates: [
      empty,
      {trainer: '', ...women},
      empty,
      {trainer: '', ...women},
      empty,
      {trainer: '', ...kidBig},
    ],
    time: '10'
  },
  {
    dates: [
      empty,
      empty,
      empty,
      empty,
      empty,
      {trainer: '', ...all},
    ],
    time: '11'
  },
  {
    dates: [
      {trainer: '', ...all},
      {trainer: '', ...all},
      {trainer: '', ...all},
      {trainer: '', ...all},
      {trainer: '', ...all},
      {trainer: '', ...kidSmall},
    ],
    time: '12'
  },
  {
    dates: [
      empty,
      empty,
      empty,
      empty,
      empty,
      empty,
    ],
    time: '13:00 - 16'
  },
  {
    dates: [
      {trainer: '', ...kidSmall},
      {trainer: '', ...kidBig},
      {trainer: '', ...kidSmall},
      {trainer: '', ...kidBig},
      empty,
      empty,
    ],
    time: '17'
  },
  {
    dates: [
      {trainer: '', ...all},
      {trainer: '', ...all},
      {name: 'Бодибилдинг', trainer: '', color: blueText, backgroundColor: customBG},
      {trainer: '', ...all},
      {trainer: '', ...all},
      empty,
    ],
    time: '18'
  },
  {
    dates: [
      {name: 'Силовая', trainer: '', color: blueText, backgroundColor: customBG},
      {trainer: '', ...all},
      {trainer: '', ...all},
      {trainer: '', ...all},
      {trainer: '', ...all},
      empty,
    ],
    time: '19'
  },
  {
    dates: [
      {trainer: '', ...all},
      {name: 'Растяжка', trainer: '', color: blueText, backgroundColor: customBG},
      {trainer: '', ...all},
      {name: 'Растяжка', trainer: '', color: blueText, backgroundColor: customBG},
      {trainer: '', ...all},
      empty,
    ],
    time: '20'
  },
];
