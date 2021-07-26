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
          <CardPost></CardPost>
          <CardPost></CardPost>
          <CardPost></CardPost>
        </div>
      </div>
    </div>

    <!-- NAVBAR ANDROID -->
    <NavbarAndroid />
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/bootstrap.scss';
// HOME
#home {
  padding-top: 9.8em;
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
        font-size: .5em;
        top: 0;
        left: 1.2em;
        right: 0;
        border-radius: 50%;
        background: red;
        width: 14px;
        height: 14px;
        margin: auto;
        padding: .2em .55em;
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
</style>

