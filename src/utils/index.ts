export const addCommaSecond = (priceNumber: number) =>
  priceNumber.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');

export const IMAGE_WIDTH = 800;

export const SLIDE = {
  PAD: 20,
  ITEM_WIDTH: 118,
  SCROLL_COUNT: 7,
};
