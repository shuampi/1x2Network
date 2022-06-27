import array2D from "./index.js"

describe("input is an array of one element",() =>{
 test("should return a 2D array with only one set", () =>{

const actual = array2D([{id:1}])
const expected = [[{id:1}]]

expect(actual).toEqual(expected)

 })
// test("print a message if input is not an array", ()=>{
// const actual = array2D(23)
// const expected =  console.log('input should be an array of objects')
// expect(actual).toEqual(expected)

// })

});

describe("input is an array of two objects", () => {
test("should return a 2D array with a only one set of lenght of 2", () =>{
    const actual = array2D([{id:1}, {id:2}])
    const expected = [[{id:1},{id:2}]]
    
    expect(actual).toEqual(expected)


})



})