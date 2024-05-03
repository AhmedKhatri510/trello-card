export const initialList = [
  {
    list: "todo",
    cards: [],
  },
  {
    list: "doing",
    cards: [],
  },
  {
    list: "done",
    cards: [],
  },
];

export const capitalizeFirstLetter = (str: string): string => {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const deepEqual = (
  obj1: Record<string, string | number>,
  obj2: Record<string, string | number>
): boolean => {
  // Check if both objects have the same keys
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (
    keys1.length !== keys2.length ||
    !keys1.every((key) => keys2.includes(key))
  ) {
    return false;
  }

  // Compare the values of each key
  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    if (val1 !== val2) {
      return false;
    }
  }

  return true;
};
