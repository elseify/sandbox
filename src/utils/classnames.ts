export function classNames(...args: UnionType[]) {
  const array: string[] = [];

  for (let arg of args) {
    if (typeof arg === 'string') {
      array.push(arg);
    }

    if (typeof arg === 'object') {
      Object.entries(arg).forEach(arrayEach);
    }
  }

  return array.join(' ');

  function arrayEach([key, value]: [key: string, value: ValueType]) {
    if (value) {
      array.push(key);
    }
  }
}

type ValueType = string | number | boolean | undefined;
type UnionType = ValueType | {
  [key: string]: ValueType;
};
