import { itemsNavigation } from '../../data';
import { useTranslation } from 'react-i18next';

export const NavbarCollapsibleMenu = ({ isOpened }) => {
  // Referencia al idioma seleccionado
  const [t] = useTranslation('global');

  return (
    <ul className={`${isOpened ? 'max-h-40' : 'max-h-0'} overflow-hidden transition-all ease-in-out duration-500`}>
      
      { // Iterar para crear las opciones de navegación
        itemsNavigation.map( ( item, index ) => {
          const { id, icon } = item;

          // Array con los nombres traducibles de las opciones de navegación
          const names = t('navigation.options', { returnObjects: true});

          // Asociar cada item de navegación con su correspondiente nombre traducible
          const name = names[index];
          return (
            <li key={ id } className="py-1 pl-3 text-black-500 border-b duration-300 cursor-pointer hover:text-pink hover:bg-lightpurple">
              <a href="#" className="flex items-center gap-3">
                { icon }{ name }
              </a>
            </li>
          )
        })
      }

    </ul>
  )
}
