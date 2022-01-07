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

// 通过vm对象来代理data对象中属性的操作（读/写）

// 通过 Object.defineProperty()把对象中所有属性添加到VM上。为每一个添加到VM上的属性都指定getter/setter 在内部去操作读和写data中对应的属性
