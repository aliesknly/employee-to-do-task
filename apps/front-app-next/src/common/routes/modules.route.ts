import { RoutesType } from "../types/route.type";


export const MODULES_ROUTE: RoutesType[] = [
  {
    name: 'employee',
    path: '/employees',
    label: 'Employees',
  },
  {
    name: 'task',
    path: '/tasks',
    label: 'Tasks',
  },
  {
    name: 'station',
    path: '/stations',
    label: 'Stations',
  },
] as const;
