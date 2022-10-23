import { randomColor } from "./randomColor";

export const buildChartData = (data) => {
  let items = [];

  for(const [key, value] of Object.entries(data)) {
    if (key.includes('item')) {
      const { rgb, rgba } = randomColor(key)
      items = [ ...items, {
        name: key,
        data: value,
        borderColor: rgb,
        backgroundColor: rgba,
      }] 
    }
  };

  return items;
};

