export const addCommaSecond = (priceNumber: number) =>
  priceNumber.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');

export const IMAGE_WIDTH = 800;
