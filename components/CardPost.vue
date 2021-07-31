<template>
  <div class="card-post mx-2 mx-sm-0">
    <div class="info">
      <nuxt-link to="/profil" class="text-decoration-none">
        <img
          src="~assets/img/logo.png"
          width="55"
          height="55"
          class="logo rounded-circle float-left mr-2"
        />
      </nuxt-link>
      <div class="uploader">
        <nuxt-link :to="`/post/${slug}`" class="text-decoration-none text">
          <p>{{ title }}</p>
        </nuxt-link>
        <div class="info-post d-flex justify-content-between align-items-center">
          <small class="d-block">
            <nuxt-link :to="`/post/${slug}`" class="text-decoration-none date">
              <b-icon icon="calendar4" class="mr-1"></b-icon>{{ createdAt }}
            </nuxt-link>
            <nuxt-link :to="`/post/${slug}`" class="text-decoration-none text d-block">
              <b-icon icon="chat-square-text" class="mr-1"></b-icon>2 comment
            </nuxt-link>
          </small>
          <div class="add text-center">
            <b-icon icon="heart" class="mr-2"></b-icon>
            <span>
              <b-icon icon="bookmark"></b-icon>
            </span>
          </div>
        </div>
      </div>
    </div>
      
    <nuxt-link :to="`/post/${slug}`">
       <div v-if="thumbnail">
        <img
          :src="thumbnail" 
          class="thumbnail img-fluid" 
        />
      </div>  
    </nuxt-link>
    <div class="btn-tags mt-2">
      <a href="#" class="btn"> bug hunter </a>
      <a href="#" class="btn"> programming </a>
      <a href="#" class="btn"> hacking </a>
    </div>
    
    
    
  </div>
</template>
<script>
export default{
  props: ['title', 'createdAt', 'userName', 'slug', 'thumbnail']
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/bootstrap.scss';
@include card-post();
</style>

