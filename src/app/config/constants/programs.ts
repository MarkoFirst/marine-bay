import {IProgramCategory} from '../interfaces/IProgram';

export const PROGRAMS: IProgramCategory[] = [
  {
    id: 0,
    list: [
      {name: '1 тренировка', description: '', price: 150, color: '#4df'},
      {name: '10 тренировок/мес', description: 'срок действия 5 недель', price: 1250, color: '#f61'},
      {name: '1 месяц безлимит', description: '', price: 1600, color: '#f43'},
      {name: '3 месяца безлимит', description: '1 неделя заморозки', price: 4300, color: '#c37'},
      {name: '6 месяцев безлимит', description: '2 недели заморозки', price: 7700, color: '#bae'},
    ],
    name: 'ГРУППОВЫЕ',
    description: 'Тренировка в коллективе, мотивирующем на большие результаты. ' +
      'Занятие по общей программе, с индивидуальным подбором уровня сложности, контролем техники и обучением.' +
      '<ul class="list"><li>Тренировка направлена на мышечный «тонус», похудение, физическое здоровье</li>' +
      '<li>Обязательная предварительная запись</li>' +
      '<li>Группа до 10 человек</li></ul>',
    color: 'dodgerblue',
  },
  {
    id: 1,
    list: [
      {name: 'Ознакомление', description: 'Три первых занятия, для ознакомления с тренировочной системой клуба', price: 600, color: '#ec9e34'},
      {name: '1 тренировка', description: '', price: 350, color: '#c37', level: 'CrossFit Lvl 1 Trainer'},
      {name: '10 тренировок', description: 'срок действия 5 недель', price: 3000, color: '#9f4eec', level: 'CrossFit Lvl 1 Trainer'},
      {name: '1 тренировка', description: '', price: 400, color: '#4df', level: 'CrossFit Lvl 2-3 Trainer'},
      {name: '10 тренировок', description: 'срок действия 5 недель', price: 3500, color: '#bae', level: 'CrossFit Lvl 2-3 Trainer'},
    ],
    name: 'С ТРЕНЕРОМ',
    description: 'Занятие по индивидуальному графику с персональной программой для достижения ваших целей',
    color: '#bae',
  },
  {
    id: 2,
    list: [
      {name: '1 тренировка', description: '', price: 100, color: '#c37'},
      {name: '10 тренировок', description: 'срок действия 5 недель', price: 750, color: '#4df'},
    ],
    name: 'ЖЕНСКИЕ',
    description: 'Занятия с учетом женских особенностей и проблемных зон, с акцентом на похудение',
    color: '#4df',
  },
  {
    id: 3,
    list: [
      {name: '1 тренировка ГРУППА', description: '', price: 150, color: '#c37'},
      {name: '5 тренировок ГРУППА', description: 'срок действия 5 недель', price: 500, color: '#9f4eec'},
      {name: '10 тренировок ГРУППА', description: 'срок действия 8 недель', price: 900, color: '#9f4eec'},
      {name: '1 тренировка с ТРЕНЕРОМ', description: '', price: 300, color: '#4df'},
      {name: '10 тренировок с ТРЕНЕРОМ', description: 'срок действия 5 недель', price: 2500, color: '#bae'},
    ],
    name: 'ДЕТСКИЕ',
    description: 'Общая Физическая Подготовка для детей и подростков в малых группах под руководством квалифицированного тренера',
    color: '#ec9e34',
  }
];
