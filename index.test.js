import array2D from "./index.js";

describe("input is an array of one element or invalid input", () => {
  test("should return a 2D array with only one set", () => {
    const actual = array2D([{ id: 1 }]);
    const expected = [[{ id: 1 }]];

    expect(actual).toEqual(expected);
  });
  test("print a message if input is not an array", () => {
    const actual = array2D(34);
    const expected = console.log("insert valid input");
    expect(actual).toEqual(expected);
  });
  test("print a message if input is an empty array", () => {
    const actual = array2D([]);
    const expected = console.log("insert valid input");
    expect(actual).toEqual(expected);
  });
});

describe("input is an array of two objects", () => {
  test("should return a 2D array with a only one set of lenght of 2", () => {
    const actual = array2D([{ id: 1 }, { id: 2 }]);
    const expected = [[{ id: 1 }, { id: 2 }]];

    expect(actual).toEqual(expected);
  });

  test("should return a 2D array with two sets of lenght of 1", () => {
    const actual = array2D([{ id: 1 }, { id: 1 }]);
    const expected = [[{ id: 1 }], [{ id: 1 }]];

    expect(actual).toEqual(expected);
  });
});

describe("input is an array of 3 objects", () => {
  test("should return a 2 x 2 dimensional array", () => {
    const actual = array2D([{ id: 1 }, { id: 1 }, { id: 2 }]);
    const expected = [
      [{ id: 1 }, { id: 2 }],
      [{ id: 1 }, { id: 2 }],
    ];

    expect(actual).toEqual(expected);
  });
  test("should return a 3 x 1 dimensional array", () => {
    const actual = array2D([{ id: 1 }, { id: 1 }, { id: 1 }]);
    const expected = [[{ id: 1 }], [{ id: 1 }], [{ id: 1 }]];

    expect(actual).toEqual(expected);
  });
  test("should return a 1 x 3 dimensional array", () => {
    const actual = array2D([{ id: 1 }, { id: 2 }, { id: 3 }]);
    const expected = [[{ id: 1 }, { id: 2 }, { id: 3 }]];

    expect(actual).toEqual(expected);
  });
});

describe("input is an array of 5 objects", () => {
  test("should return 4 x 3 dimensional array", () => {
    const actual = array2D([
      { id: 1 },
      { id: 1 },
      { id: 2 },
      { id: 2 },
      { id: 3 },
    ]);
    const expected = [
      [{ id: 1 }, { id: 2 }, { id: 3 }],
      [{ id: 1 }, { id: 2 }, { id: 3 }],
      [{ id: 1 }, { id: 2 }, { id: 3 }],
      [{ id: 1 }, { id: 2 }, { id: 3 }],
    ];

    expect(actual).toEqual(expected);
  });
  test("should return 5 x 1 dimensional array", () => {
    const actual = array2D([
      { id: 2 },
      { id: 2 },
      { id: 2 },
      { id: 2 },
      { id: 2 },
    ]);
    const expected = [
      [{ id: 2 }],
      [{ id: 2 }],
      [{ id: 2 }],
      [{ id: 2 }],
      [{ id: 2 }],
    ];

    expect(actual).toEqual(expected);
  });
});
