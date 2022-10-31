import { useEffect } from "react";

export const useClickOutside = (ref, handler) => {
  // Ejecutar la función handler cuando el evento se detecta por fuera del elemento referenciado  
  useEffect(() => {
    const listener = e => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };
    
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
  
    return () => {
      document.removeEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
    }
  }, [ref, handler]);
};