<script>
export default {
  name: 'Header component',
  data() {
    return {
      info: [
        {
          img: './public/buy-comics-digital-comics.png',
          text: 'Digital Comics',
        },

        {
          img: './public/buy-comics-merchandise.png',
          text: 'Dc Merchandise',
        },

        {
          img: './public/buy-comics-subscriptions.png',
          text: 'Subscription',
        },

        {
          img: './public/buy-comics-shop-locator.png',
          text: 'Comic Shop Locator',
        },
        {
          img: './public/buy-dc-power-visa.svg',
          text: 'Dc Power Visa',
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container-bar">
    <ul>
      <li v-for="info in info">
        <img class="" :src="info.img" alt="" />
        <a href="">{{ info.text }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.container-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  background-color: #0282f9;

  img {
    height: 50px;
    width: 40px;
  }
}

ul {
  display: flex;
  align-items: center;
  gap: 40px;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    list-style-type: none;
    text-transform: uppercase;

    a {
      text-decoration: none;
      color: rgb(255, 255, 255);
    }
  }
}
</style>
