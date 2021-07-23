<template>
	<!-- Post comment -->
	<nav class="navbar navbar-comment navbar-dark fixed-bottom">
	  <form class="container-fluid" action="">
	   <div class="input-group">
	    <input type="text" class="form-control form-control-sm mr-2" placeholder="Comment here ..." aria-label="Username" aria-describedby="basic-addon1">
	    <button type="button" class="btn bg-transparent">
	      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 35 35" fill="none">
        	<path d="M2.93121 30.625L33.5416 17.5L2.93121 4.375L2.91663 14.5833L24.7916 17.5L2.91663 20.4167L2.93121 30.625Z" fill="#949EB9"/>
      	</svg>
	    </button>
	   </div>
	  </form>
	</nav>
</template>
<style lang="scss" scoped>
@import '~/assets/scss/bootstrap.scss';
// NAVBAR COMMENT
nav.navbar-comment {
  background-color: $navbar;
  border-top-right-radius: 18px;
  border-top-left-radius: 18px;
  padding: 0.7em 0em;
  input {
    &:focus {
      border-radius: 30px;
      background-color: $soft;
      color: $text;
    }
    padding: 0.4em 0.9em;
    color: $text;
    height: 2.8em;
    border-radius: 30px !important;
    background-color: $soft;
    border: none;
  }
  button.btn {
    padding: 0;
    box-shadow: none;
  }
  @include position-responsive();
}
</style>