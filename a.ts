const obj ={
    name: "xxx",
    age: 10,
    sex: "F"
}

// type A = "name"|"age"|"sex"

type TPerson = typeof obj;
type K1  = keyof TPerson;
