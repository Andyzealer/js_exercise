<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>name: {{ name }}</h2>
    <h2>sex: {{ sex }}</h2>
    <h2>age: {{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "Andy",
      sex: "male",
      age: 18,
      msg: "I am a student.",
    };
  },
  props: ["name", "age", "sex"], //接收到的props不能更改。
  // props: ["name", "age", "sex"],
};
</script>

<style></style>
