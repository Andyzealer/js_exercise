<template>
  <div>
    <h2>schoolName: {{ name }}</h2>
    <h2>age:{{ age }}</h2>
    <button @click="showName" class="demo">click me and give you name</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "Andy",
      age: 16,
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>

<style lang="">
.demo {
  background-color: orange;
}
</style>
