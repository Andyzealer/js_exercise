//通过一个对象代理对另一个对象中属性的操作
let obj1 = {
  x: 100,
};
let obj2 = {
  y: 200,
};
Object.defineProperty(obj2, "x", {
  get() {
    return obj1.x;
  },
  set(value) {
    console.log("changed");
    obj1.x = value;
  },
});
