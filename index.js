const arrayObjects1 = [{ id: 1 }, { id: 2 }]; //   [[{ id: 1 }, { id: 2 }]]
const arrayObjects2 = [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 2 }]; //  [[{ id: 1 }]]
const arrayObjects3 = [{ id: 1 }, { id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }];
const arrayObjects4 = [
  { id: 1 },
  { id: 2 },
  { id: 2 },
  { id: 3 },
  { id: 3 },
  { id: 4 },
  { id: 4 },
];
const arrayObjects5 = [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }];
///
export default function array2D(arrayInput) {
  const container = [];
  const duplicatesRemoved = [];

  arrayInput.filter((object) => {
    const duplicate = duplicatesRemoved.includes(object.id);
    if (!duplicate) {
      duplicatesRemoved.push(object.id);
      return true;
    }
    return false;
  });

  const objectsWithoutDuplicates = duplicatesRemoved.map((value) => {
    return { id: value };
  });

  const idValues = arrayInput.map((object) => object.id);

  let counter = {};
  idValues.forEach(function (value) {
    counter[value] = (counter[value] || 0) + 1;
  });

  const counterValues = Object.values(counter);

  const combinations = counterValues.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );

  for (let i = 0; i < combinations; i++) {
    container.push(objectsWithoutDuplicates);
  }

  return container;
}

console.log("array2D(arrayObjects3", array2D(arrayObjects1));
