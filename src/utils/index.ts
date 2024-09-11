import { ItemsType } from "../types";

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function generateRandomArray() {
  const minArrayLength = 18;
  const maxArrayLength = 23;
  const arrayLength = Math.floor(Math.random() * (maxArrayLength - minArrayLength + 1)) + minArrayLength;

  const uniqueColors = new Set();
  const result: ItemsType = [];

  while (uniqueColors.size < arrayLength) {
    const color = getRandomColor();
    if (!uniqueColors.has(color)) {
      uniqueColors.add(color);
      result.push({ color, rating: Math.floor(Math.random() * 100) });
    }
  }

  return result;
}

export function sortByRating(arr) {
  return arr.sort((a: { rating: number; }, b: { rating: number; }) => b.rating - a.rating);
}

function randomRotation() {
  return Math.floor(Math.random() * 360);
}

export function rotateArrayToMatchArrow(arr) {
  const sortedArray = sortByRating(arr);
  const rotation = randomRotation();

  const numberOfItems = sortedArray.length;
  const rotationPerItem = 360 / numberOfItems;

  const lowestRatedIndex = sortedArray.length - 1; 

  const additionalRotation = lowestRatedIndex * rotationPerItem;

  const finalRotation = (rotation + additionalRotation) % 360;

  return finalRotation
  ;
}

export function calculateCircumference(radius : number) {
  const pi = Math.PI;
  const circumference = 2 * pi * radius;
  return circumference;
}

export function calculateRotation(startAngle, endAngle) {
  let rotation = (endAngle - startAngle) % 360;
  if (rotation < 0) {
    rotation += 360;
  }
  return rotation;
}
