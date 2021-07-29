<template>
  <div>
    <div class="container">
      <div id="detail-post" class="row justify-content-center">
        <div class="col-sm-10 col-lg-8 px-0 px-md-2">
          <div id="column">
            <div class="back" @click="$router.back()">
              <b-icon icon="chevron-left"></b-icon>
            </div>
            <div class="info-uploader">
              <img
                src="~/assets/img/logo.png"
                alt=""
                class="logo rounded-circle"
                width="50"
                height="50"
              />
              <div class="date">
                {{ post.created_at.month }}
                <div>2021</div>
              </div>
            </div>
            <img
              src="~/assets/img/pajak_bertutur.jpg"
              class="img-fluid thumbnail-post"
            />
            <div class="info-detail px-3 px-md-3">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <div class="d-flex align-items-center">
                    <h5 class="post-title mt-2 font-weight-bold">{{ post.title }}</h5>
                  </div>
                </div>
                <div class="love-comment-bookmark w-100 text-right">
                  <span class="comments mr-1">
                    <b-icon icon="chat-square-text"></b-icon> 3
                  </span>
                  <span class="love bg-background mr-2">
                    <b-icon icon="heart"></b-icon> 16
                  </span>
                  <span class="bookmark bg-background">
                    <b-icon icon="bookmark"></b-icon>
                  </span>
                  
                  
                </div>
              </div>
              <div class="my-2 tags">
                <span class="mr-2">Tags</span>
                <div class="btn-tags d-inline">
                  <a href="#" class="btn">bypass</a>
                  <a href="#" class="btn">forbidden</a>
                  <a href="#" class="btn">403</a>
                </div>
              </div>
              <p class="text mb-2">
                {{ post.text }}
              
              <hr class="mt-2" />
              <h5 class="my-3 header-comment">
                <b-icon icon="chat-left-text"></b-icon> 3 Comments
              </h5>
              <div class="comments">
                <div class="d-flex align-items-start mt-3">
                  <img
                    src="~/assets/img/logo.png"
                    alt=""
                    class="logo rounded-circle"
                    width="55"
                    height="55"
                  />
                  <div class="wrap-comment ml-2">
                    <a href="profil.html" class="username text-decoration-none"
                      >{{ post.title }}</a
                    >
                    <p class="mb-1">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsa asperiores, neque fuga repellendus eius consequatur
                      dolore veniam itaque harum officia ipsum aspernatur officiis
                      earum at molestias amet nostrum et cupiditate.
                    </p>
                  </div>
                </div>
              </div>
              <div class="comments">
                <div class="d-flex align-items-start mt-3">
                  <img
                    src="~/assets/img/logo.png"
                    alt=""
                    class="logo rounded-circle"
                    width="55"
                    height="55"
                  />
                  <div class="wrap-comment ml-2">
                    <a
                      href="profil.html"
                      class="username text-decoration-none is_posted"
                      >Ardyan Vicky Ramadhan</a
                    >
                    <p class="mb-1">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsa asperiores, neque fuga repellendus eius consequatur
                      dolore veniam itaque harum officia ipsum aspernatur officiis
                      earum at molestias amet nostrum et cupiditate.
                    </p>
                  </div>
                </div>
              </div>
              <div class="comments">
                <div class="d-flex align-items-start mt-3">
                  <img
                    src="~/assets/img/logo.png"
                    alt=""
                    class="logo rounded-circle"
                    width="55"
                    height="55"
                  />
                  <div class="wrap-comment ml-2">
                    <a href="profil.html" class="username text-decoration-none"
                      >Rido Ananda</a
                    >
                    <p class="mb-1">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsa asperiores, neque fuga repellendus eius consequatur
                      dolore veniam itaque harum officia ipsum aspernatur officiis
                      earum at molestias amet nostrum et cupiditate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavbarComment></NavbarComment>
  </div>
</template>
<script>
export default {
  async asyncData({params, $axios}) {
    const post = await $axios.get(`api/post/${params.slug}`);
    console.log(post)
    return { post: post.data.data }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/bootstrap.scss';

#detail-post {
  #column {
    background: white;
  }
  padding-bottom: 3em;
  .back {
    position: absolute;
    font-size: 1.7em;
    cursor: pointer;
    margin-left: 0.4em;
    margin-top: 0.4em;
  }
  .info-uploader {
    position: absolute;
    font-size: 1.7em;
    cursor: pointer;
    margin-left: 0.4em;
    margin-top: 3em;
    .date {
      text-align: center;
      margin-top: .4em;
      font-size: .4em;
      line-height: 1.6em;
      text-shadow: 1px 1px rgba(0,0,0,0.5);
      div {
        font-size: 1.4em;
        font-weight: 600;
      }
    }
  }
  .thumbnail-post {
    border-bottom-right-radius: 2em;
    border-bottom-left-radius: 2em;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.58);
  }
  .info-detail {
    margin-top: 2.5em;
    padding-top: 1em;
    padding-bottom: 2em;
    position: relative;
    background-color: $soft;
    border-top-right-radius: 2em;
    border-top-left-radius: 2em;
    h5.post-title {
      font-size: 1.1em;
    }
    .uploader {
      span {
        display: block;
        font-size: 0.9em;
        line-height: 1.2em;
        word-break: break-all;
        color: $text;
        font-weight: 500;
      }
      div {
        color: #45b250;
        font-size: 0.7em;
      }
    }
    .love-comment-bookmark {
      @include bg-backgound(.3em, .3em, .5em);
      span,div{
        cursor: pointer;
        font-size: 0.8em;
      }
    }
    p.text {
      font-size: 0.9em;
      color: $text;
    }
    .header-comment {
      font-size: 1em;
    }
    .tags {
      span {
        font-weight: 600;
      }
    }
    @include btn-tags();
  }
  .comments {
    .wrap-comment {
      background: $background;
      padding: 0.5em 0.8em;
      border-radius: 18px;
      .username {
        font-size: 0.9em;
        color: $text2;
        font-weight: 600;
        &.is_posted {
          background-color: $soft;
          color: $text;
          padding: 0.2em 0.5em;
          border-radius: 8px;
        }
      }
      p {
        margin-top: 0.2em;
        font-size: 0.8em;
        color: $text;
      }
    }
  }
}
</style>