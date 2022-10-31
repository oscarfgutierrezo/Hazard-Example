import { randomColor } from '../../helpers';

export const buildChartData = (data) => {
  let items = [];

  for(const [key, value] of Object.entries(data)) {
    // Para cada uno de los items de la data se genera un objeto con las propiedades necesarias para dibujar la gráfica respectiva
    if (key.includes('item')) {
      const { rgb, rgba } = randomColor(key)
      items = [ ...items, {
        id: key.slice(4),
        name: key,
        data: value,
        color: rgb,
        backgroundColor: rgba,
      }] 
    }
  };

  return items;
};

