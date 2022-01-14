<template>
  <div>
    <school></school>
    <student></student>
  </div>
</template>

<script>
import school from "./school.vue";
import student from "./student.vue";
export default {
  name: "App",
  components: {
    school,
    student,
  },
};
</script>

<style></style>
