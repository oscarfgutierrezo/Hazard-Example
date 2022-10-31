export const randomColor = (item) => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  var rgb;
  var rgba;

  // Para los items 1 y 2 se conservan los colores incluidos en el diseño, a partir del item 3 se generan de manera aleatoria
  switch (item) {
    case 'item1':
      rgb = 'rgb(217,85,248)';
      rgba = 'rgba(217,85,248,0.1)';
      break;
    case 'item2':
      rgb = 'rgb(235,175,111)';
      rgba = 'rgba(235,175,111,0.1)';
      break;
    default:
      rgb = `rgb(${r},${g},${b})`;
      rgba = `rgba(${r},${g},${b},0.1)`;
      break;
  }

  return {
    rgb,
    rgba,
  }
}