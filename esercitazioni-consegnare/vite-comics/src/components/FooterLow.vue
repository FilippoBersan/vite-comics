<script>
export default {
  name: 'Footer low component',
  data() {
    return {
      social: [
        {
          img: './public/footer-facebook.png',
        },

        {
          img: './public/footer-twitter.png',
        },

        {
          img: './public/footer-youtube.png',
        },

        {
          img: './public/footer-pinterest.png',
        },

        {
          img: './public/footer-periscope.png',
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container-bar">
    <div class="btn-sign">
      <a href="">Sign-up Now!</a>
    </div>
    <ul class="list-footer">
      <strong>Follow us!</strong>
      <li v-for="social in social">
        <a href=""> <img :src="social.img" alt="" /></a>
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
  background-color: #303030;

  .btn-sign {
    border: 1px solid #0282f9;

    padding: 10px;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: #ffffff;
    }
  }
}

.list-footer {
  display: flex;
  gap: 20px;
  list-style: none;
  align-items: center;

  strong {
    color: #0282f9;
    text-transform: uppercase;
    font-size: 20px;
  }
}
</style>
