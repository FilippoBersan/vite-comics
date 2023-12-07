<script>
export default {
  name: 'Footer component',
  data() {
    return {
      dccomics: [
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
      ],

      shop: [
        {
          text: 'Shop Dc',
        },
        {
          text: 'Shop Dc Collections',
        },
      ],

      dc: [
        {
          text: 'Terms of use',
        },

        {
          text: 'Privacy policy(New)',
        },

        {
          text: 'Add Choices',
        },

        {
          text: 'Advertising',
        },
        {
          text: 'Jobs',
        },
        {
          text: 'Subscriptions',
        },
        {
          text: 'Talent Workshop',
        },

        {
          text: 'CPSC Certificate',
        },

        {
          text: 'Ratings',
        },

        {
          text: 'Shop Help',
        },

        {
          text: 'Contact Us',
        },
      ],

      sites: [
        {
          text: ' Dc',
        },
        {
          text: 'Dc Magazine',
        },

        {
          text: 'Dc Kids',
        },

        {
          text: 'Dc Universe',
        },

        {
          text: 'Dc Power Visa',
        },
      ],
    };
  },
};
</script>

<template>
  <div class="background-footer">
    <div class="list-container">
      <h2>Dc Comics</h2>

      <div v-for="dccomics in dccomics" class="container-footer">
        <ul>
          <li>
            <a href="">{{ dccomics.text }}</a>
          </li>
        </ul>
      </div>
      <h2>Shop</h2>
      <div v-for="shop in shop" class="container-footer">
        <ul>
          <li>
            <a href="">{{ shop.text }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="list-container">
      <h2>DC</h2>
      <div v-for="dc in dc" class="container-footer">
        <ul>
          <li>
            <a href="">{{ dc.text }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="list-container">
      <h2>Sites</h2>
      <div v-for="sites in sites" class="container-footer">
        <ul>
          <li>
            <a href="">{{ sites.text }}</a>
          </li>
        </ul>
      </div>
    </div>
    <img src="/public/dc-logo-bg.png" alt="" />
  </div>
</template>

<style scoped lang="scss">
.background-footer {
  background-image: url('/public/footer-bg.jpg');
  display: flex;
  flex-direction: row;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;

  h2 {
    color: white;
    text-transform: uppercase;
    text-align: center;
  }

  li {
    list-style-type: none;

    line-height: 10px;
  }

  a {
    text-decoration: none;
    color: gray;
  }
}
</style>
