<template>
  <div class="demo">
    <h2>studentName: {{ schoolName }}</h2>
    <h2>schooladdress:{{ address }}</h2>
    <button @click="showName">click me and give you school name</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      schoolName: "Andy",
      address: "Beijing",
    };
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  },
};
</script>

<style lang="">
.demo {
  background-color: orange;
}
</style>
