<template>
	<div id="question">
    <div class="container">
	    <div class="row justify-content-center">
  	    <div class="col-sm-10 col-lg-8 px-0 px-md-2">
					<div class="header mb-3">
						<div class="d-flex justify-content-between align-items-center">
							<h5 class="font-weight-bold">Question</h5>
							<iconify icon="people-audience-24-filled" />
						</div>
					</div>
					<div class="swipe">
            <nuxt-link to="" class="btn active" exact> All Question </nuxt-link>
            <nuxt-link to="hacking" class="btn"> Hacking </nuxt-link>
            <nuxt-link to="programming" class="btn"> Programming </nuxt-link>
            <nuxt-link to="bug-bounty" class="btn"> Bug Bounty </nuxt-link>
          </div>
				</div>
			</div>
		</div>
		<NavbarAndroid/>
	</div>
</template>
<style lang="scss" scoped>
@import '~/assets/scss/bootstrap.scss';
#question {
	.swipe {
		background-color: $navbar;
		border-radius: 5px;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin-top: 0.5em;
    padding: 0.25em 0.3em;
    white-space: nowrap;
    overflow-y: hidden;
    height: 3.8em;
    overflow-x: scroll;
    a {
      &.active {
        color: $text;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          width: 18px;
          height: 2px;
          border-radius: 10px;
          background-color: #4B6DC0;
          bottom: 0px;
          left: 0;
          right: 0;
          margin: auto;
        }
      }
      margin-top: .6em;
      margin-right: 0.4em;
      color: darken($color: $text, $amount: 20);
      font-size: 0.8em;
      padding: 0.4em 1.2em;
      font-weight: 400;
      background-color: transparent;
    }
  }
}
</style>