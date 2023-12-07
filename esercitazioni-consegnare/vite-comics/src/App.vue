<script>
import FooterDc from './components/FooterDc.vue';
import BarBlue from './components/BarBlue.vue';
import HeaderDc from './components/HeaderDc.vue';

export default {
  data() {
    return {};
  },
  components: {
    HeaderDc,
    FooterDc,
    BarBlue,
  },
};
</script>

<template>
  <header>
    <HeaderDc></HeaderDc>
    <BarBlue></BarBlue>
    <FooterDc></FooterDc>
  </header>
</template>

<style scoped></style>
