<script>
import FooterDc from './components/FooterDc.vue';
import JumbotronDc from './components/JumbotronDc.vue';
import MainDc from './components/MainDc.vue';
import BarBlue from './components/BarBlue.vue';
import HeaderDc from './components/HeaderDc.vue';
import FooterLow from './components/FooterLow.vue';

export default {
  data() {
    return {};
  },
  components: {
    HeaderDc,
    JumbotronDc,
    MainDc,
    FooterDc,
    BarBlue,
    FooterLow,
  },
};
</script>

<template>
  <header>
    <HeaderDc></HeaderDc>
    <JumbotronDc></JumbotronDc>
    <MainDc></MainDc>
    <BarBlue></BarBlue>
    <FooterDc></FooterDc>
    <FooterLow></FooterLow>
  </header>
</template>

<style scoped></style>
