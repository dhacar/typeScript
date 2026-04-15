function echo<T>(input: T): T {
  return input;
}


const str = echo("Hello");
const num = echo(42);
const arr = echo([1, 2, 3]);
const obj = echo({ name: "Zaki", age: 20 });


str.toUpperCase();     
num.toFixed(2);       
arr.push(4);           
obj.name;              

//2


interface ApiResult<T> {
  status: string;
  data: T;
}


const result1: ApiResult<string> = {
  status: "success",
  data: "Hello world",
};


const result2: ApiResult<{ id: number; name: string }> = {
  status: "success",
  data: {
    id: 1,
    name: "Zaki",
  },
};




//3
function first<T>(items: T[]): T {
  return items[0];
}


const firstNumber = first([10, 20, 30]);


const firstString = first(["a", "b", "c"]);


const firstObject = first([
  { id: 1 },
  { id: 2 },
]);

// 🔍 TypeScript knows:
firstNumber.toFixed(2);  
firstString.toUpperCase(); 
firstObject.id;           

