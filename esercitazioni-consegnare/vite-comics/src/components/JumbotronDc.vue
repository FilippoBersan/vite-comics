<script>
export default {
  name: 'Jumbotron component',
  data() {
    return {};
  },
};
</script>

<template>
  <div class="container-jumbotron">a</div>
</template>

<style scoped lang="scss">
.container-jumbotron {
  background-image: url('/public/jumbotron.jpg');
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 300px;
}
</style>
