import { useRef, useState } from 'react';
import { NavbarCollapsibleMenu, NavbarDropdown } from '../navbar';
import { useClickOutside } from '../../hooks';
import { HamburgerIcon } from '../../icons';
import { BritishFlag } from '../../icons/BritishFlag';
import { SpanishFlag } from '../../icons/SpanishFlag';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  // Referencia al idioma seleccionado
  const [t, i18n] = useTranslation('global');
  
  // Control sobre el estado del menu desplegable
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  // Referenciar el botón que controla el despliegue del menú
  const buttonRef = useRef();

  // Abrir y cerrar el menú
  const handleClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  // Cerrar el menú al hacer click por fuera de buttonRef
  useClickOutside( buttonRef, () => setIsMenuOpened(false) );
  
  return (
    <nav className="relative w-full h-min py-3 grid grid-cols-2 items-center gap-2 border-b sm:grid-cols-6 md:px-10">
      <div className="col-span-1 w-10 order-0 md:hidden">
        <img src="https://i.ibb.co/dpzvnbS/logo.png" alt="Logo" />
      </div>
      <div className="col-span-1 justify-self-end order-1 sm:col-span-2 sm:order-2 md:col-span-1">
        <div className='flex items-center gap-2 sm:gap-4'>
          <NavbarDropdown/>
          
          { // Renderizado condicional del botón en función del idioma seleccionado
            (i18n.resolvedLanguage === 'es') 
            ?
              <button className='h-7 w-auto overflow-hidden rounded-full' onClick={ () => i18n.changeLanguage('en') }>
                <BritishFlag/>
              </button>
            :
              <button className='h-7 w-auto overflow-hidden rounded-full' onClick={ () => i18n.changeLanguage('es') }>
                <SpanishFlag/>
              </button>
          }
          
          <button ref={ buttonRef } type="button" className="p-1 rounded-md duration-300 hover:bg-black-300/20 md:hidden" onClick={ handleClick }>
            <HamburgerIcon/>
          </button>
        </div>
      </div>
      <div className='col-span-2 order-2 sm:col-span-6 sm:order-3 md:hidden'>
        <NavbarCollapsibleMenu isOpened={ isMenuOpened } />
      </div>
      <div className="col-span-2 order-4 sm:col-span-3 sm:order-1 md:col-span-5 ">
        <div className='flex flex-col text-center sm:text-left md:flex-row md:items-baseline'>
          <h2 className="text-2xl font-bold text-black-900">{t("navbar.hello")},<span className="font-normal"> Andrea Sotil</span></h2>
          <p className="font-medium text-black-300 md:pl-6">{t("navbar.have")} <span className="text-blue">{ t("navbar.alerts", {quantity: 3}) }</span> {t("navbar.waiting")}</p>
        </div>
      </div>
    </nav>
  )
}
