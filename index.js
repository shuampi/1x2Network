
export default function array2D(arrayInput) {

if(Array.isArray(arrayInput) && arrayInput.length > 0)
  {

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
  } else {
    console.log('insert valid input')
  }
}

// console.log("array2D(arrayObjects3", array2D(arrayObjects1));
