let person = {
  name: "Andy",
  sex: "male",
  age: 18,
};
//直接写入的属性可以枚举，更改，删除。
let person1 = {
  name: "Andy",
  sex: "male",
};
Object.defineProperty(person, "age", {
  // value: 18,
  // enumerable
  // writable
  // configurable

  get() {
    //有人获取age属性
    return number;
  },
  //当有人读取person的age属性时候，get函数会被调用，并且返回值就是age的值。

  set(value) {
    //有人修改age
    number = value;
  },
  //有人修改person的age属性时，setter会被调用，并且会收到修改的具体值
}); //写入的属性默认是不可枚举的，不可更改的，不可删除的
Object.keys(person);
