// Información para cada una de las opciones de navegación a mostrar en el navbar y el sidebar

import { HomeIcon, NotebookIcon, CardIcon, BagMoneyIcon } from '../icons';

export const itemsNavigation = [
  {
    id: 1,
    name: 'Inicio',
    icon: HomeIcon(),
  },
  {
    id: 2,
    name: 'Pagos',
    icon: NotebookIcon(),
  },
  {
    id: 3,
    name: 'Nómina',
    icon: CardIcon(),
  },
  {
    id: 4,
    name: 'Saldos',
    icon: BagMoneyIcon(),
  },
]