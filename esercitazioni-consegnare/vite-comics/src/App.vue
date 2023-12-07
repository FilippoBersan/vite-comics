<script>
import FooterDc from './components/FooterDc.vue';
import HeaderDc from './components/HeaderDc.vue';

export default {
  data() {
    return {};
  },
  components: {
    HeaderDc,
    FooterDc,
  },
};
</script>

<template>
  <header>
    <HeaderDc></HeaderDc>
    <FooterDc></FooterDc>
  </header>
</template>

<style scoped></style>
