<template>
  <div>
    <div class="container">
      <div id="home" class="row justify-content-center">
        <div class="col-sm-10 col-lg-8 px-0 px-md-2">
          <div class="navbar-atas fixed-top">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="font-weight-bold">DarkForum</h4>
              <div class="notification" @click="$router.push('/notification')">
                <Iconify icon="ci-notification"/>
                <div class="count-notif">3</div>
              </div>
            </div>
            <div class="swipe">
              <a href="#" class="btn active"> All Post </a>
              <a href="#" class="btn"> Popular Post </a>
              <a href="#" class="btn"> Recent Post </a>
              <a href="#" class="btn"> Bookmark </a>
            </div>
          </div>
          <b-skeleton-wrapper :loading="loading">
            <template #loading>
              <b-card id="card-loader" v-for="n in 6" :key="n">
                <b-skeleton type="avatar" class="float-left mr-2"></b-skeleton>
                <b-skeleton width="70%"></b-skeleton>
                <b-skeleton width="50%"></b-skeleton>
                <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
              </b-card>
            </template>

            <!-- <div v-if="loadPost == true"> -->
              <div v-for="post in posts" :key="post.id">                
                <CardPost 
                  :title="post.title.limit"
                  :createdAt="post.created_at.month"
                  :userName="post.user.name"
                  :slug="post.slug"
                  :thumbnail="post.thumbnail"
                  ></CardPost>
              </div>
            <!-- </div> -->
          </b-skeleton-wrapper>
        </div>
      </div>
    </div>

    <!-- NAVBAR ANDROID -->
    <NavbarAndroid />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loadingTime: 2000,
      }
    },
    created() {
      this.$_loadingTimeInterval = null
    },
    mounted() {
      this.startLoading();
      this.$store.dispatch('getPost');
    },
    methods: {
      clearLoadingTimeInterval() {
        clearInterval(this.$_loadingTimeInterval)
        this.$_loadingTimeInterval = null
      },
      startLoading() {
        this.$store.commit('SET_SKELETON', true)
        this.loadingTime = 0
      },
    },
    computed: {
      posts() {
        return this.$store.state.posts;
      },
      loading() {
        return this.$store.state.skeleton
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/bootstrap.scss';
// HOME
#home {
  padding-top: 9.4em;
  padding-bottom: 4.5em;
  .navbar-atas {
    @include position-responsive();
    box-shadow: 0px 1px 10px opacify($color: #000000, $amount: 0.6);
    background: $soft;
    padding: 1.2em 1em 0.2em 1em;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-bottom: 1.2em;
    .notification {
      position: relative;
      cursor: pointer;
      .icon {
        font-size: 1.7em;
      }
      .count-notif {
        position: absolute;
        font-size: .6em;
        top: 0;
        left: 1.3em;
        right: 0;
        border-radius: 50%;
        background: red;
        width: 14px;
        height: 14px;
        margin: auto;
        padding: .08em .48em;
        font-weight: bold;
      }
    }
    .swipe {
      &::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none;
      scrollbar-width: none;
      margin-top: 0.5em;
      padding: 0.25em 0.3em;
      white-space: nowrap;
      overflow-y: hidden;
      height: 4em;
      overflow-x: scroll;
      a {
        &.active {
          background-color: $bginput;
          color: $text;
          position: relative;
          &::after {
            content: '';
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: $bginput;
            border-radius: 50%;
            bottom: -18px;
            left: 0;
            right: 0;
            margin: auto;
          }
        }
        margin-right: 0.4em;
        border-radius: 12px;
        color: darken($color: $text, $amount: 20);
        font-size: 0.8em;
        padding: 0.4em 1.2em;
        font-weight: 600;
        background-color: transparent;
        border: 2px solid $bginput;
      }
    }
  }
}
#card-loader .b-skeleton-img {
  margin-top: 1em;
}
</style>

