<script>
export default {
  name: 'Header component',
  data() {
    return {
      categories: [
        {
          text: 'Characters',
        },

        {
          text: 'Comics',
        },

        {
          text: 'Movies',
        },

        {
          text: 'Tv',
        },
        {
          text: 'Games',
        },
        {
          text: 'Collectibles',
        },
        {
          text: 'Videos',
        },

        {
          text: 'Fans',
        },

        {
          text: 'News',
        },

        {
          text: ' Shop',
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container-head">
    <img src="/public/dc-logo.png" alt="" />

    <ul>
      <li v-for="categories in categories">
        <a href="">{{ categories.text }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.container-head {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

ul {
  display: flex;
  align-items: center;
  gap: 20px;
  li {
    list-style-type: none;
    text-transform: uppercase;

    a {
      text-decoration: none;
      color: black;
    }
  }
}
</style>
