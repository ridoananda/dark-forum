<template>
	<div id="notification">
    <div class="container">
	    <div class="row justify-content-center">
  	    <div class="col-sm-10 col-lg-8 px-0 px-md-2">
					<div class="header">
						<div class="d-flex justify-content-between align-items-center">
							<h5 class="font-weight-bold">Notification</h5>
							<iconify icon="sword-line" />
						</div>
					</div>
					<b-skeleton-wrapper :loading="loading">
            <template #loading>
              <b-card id="card-loader" class="mt-3" v-for="n in 6" :key="n">
                <b-skeleton width="85%"></b-skeleton>
                <b-skeleton width="60%"></b-skeleton>
              </b-card>
            </template>
						<div class="d-flex justify-content-center">
							<div class="wrapper">
								<div v-if="notif.length">
									<div class="notif d-flex align-items-center" v-for="notif in notif" :key="notif">
										<img src="~/assets/img/pajak_bertutur.jpg" width="50" height="50" class="rounded-circle mr-2">
										<div class="text-notif">
											<p class="mb-2">
												{{ notif.text }}
											</p>
											<div class="action d-flex justify-content-between align-items-end">
												<small class="text-muted d-flex align-items-center">
													<b-icon icon="clock" class="mr-1"></b-icon>{{ notif.time }}
												</small>
												<div>
													<b-button variant="danger" size="sm" class="mr-1">
														<b-icon icon="x"></b-icon> Tolak
													</b-button>
													<b-button variant="success" size="sm">
														<b-icon icon="check"></b-icon> Terima
													</b-button>
												</div>
											</div>
										</div>
									</div>
									<hr>
								</div>
								<div v-else>
									<div class="notif d-flex align-items-center">
										<img src="~/assets/img/pajak_bertutur.jpg" width="50" height="50" class="rounded-circle mr-2">
										<div class="text-notif">
											<p class="mb-2">
												Seseorang bernama <span class="text-icon">Rido Ananda</span> menantang anda! wwkwk canda bang:V
											</p>
											<div class="action d-flex justify-content-between align-items-end">
												<small class="text-muted d-flex align-items-center">
													<b-icon icon="clock" class="mr-1"></b-icon>10 minutes ago
												</small>
												<div>
													<b-button variant="danger" size="sm" class="mr-1">
														<b-icon icon="x"></b-icon> Tolak
													</b-button>
													<b-button variant="success" size="sm">
														<b-icon icon="check"></b-icon> Terima
													</b-button>
												</div>
											</div>
										</div>
									</div>
									<hr>
									<div class="notif d-flex align-items-center">
										<img src="~/assets/img/pajak_bertutur.jpg" width="50" height="50" class="rounded-circle mr-2">
										<div class="text-notif">
											<p class="mb-2">
												Seseorang bernama <span class="text-icon">Rido Ananda</span> menantang anda! wwkwk canda bang:V
											</p>
											<div class="action d-flex justify-content-between align-items-end">
												<small class="text-muted d-flex align-items-center">
													<b-icon icon="clock" class="mr-1"></b-icon>10 minutes ago
												</small>
												<div>
													<b-button variant="danger" size="sm" class="mr-1">
														<b-icon icon="x"></b-icon> Tolak
													</b-button>
													<b-button variant="success" size="sm">
														<b-icon icon="check"></b-icon> Terima
													</b-button>
												</div>
											</div>
										</div>
									</div>
									<hr>
								</div>
							</div>
						</div>
					</b-skeleton-wrapper>
				</div>
			</div>
		</div>
		<NavbarAndroid/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loading: false,
			loadingTime: 0,
			notif: [],
			maxLoadingTime: 3
		}
	},
	watch: {
    loading(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.clearLoadingTimeInterval()

        if (newValue) {
          this.$_loadingTimeInterval = setInterval(() => {
            this.loadingTime++
          }, 1000)
        }
      }
    },
    loadingTime(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue === this.maxLoadingTime) {
          this.loading = false
        }
      }
    }
  },
  created() {
    this.$_loadingTimeInterval = null
  },
  mounted() {
    this.startLoading();
  },
	methods: {
		clearLoadingTimeInterval() {
      clearInterval(this.$_loadingTimeInterval)
      this.$_loadingTimeInterval = null
    },
    startLoading() {
      this.loading = true
      this.loadingTime = 0
    },
    async getNotif() {
    	const res = await this.$axios.get(`notification/1`)
    	this.notif = res.data.data
    	this.loading = false
    }
	}
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/bootstrap.scss';
	#notification {
		padding-bottom: 5em;
		.header {
			h5 {
				font-size: 1.4em;
			}
			.icon {
				font-size: 1.8em;
				color: $icon
			}
		}
		.wrapper {
			padding-top: 1em;
			.notif {
				padding: 0em .8em 0 .8em;
				.text-notif {
					font-size: .85em;
					line-height: 1.3em;
				}
				.action {
					font-size: .85em;
					button {
						padding: .3em .6em;
						// padding-bottom: .3em;
						font-size: .9em;
					}
				}
			}
			hr{
				background-color: #ffffff;
				opacity: .1;
				margin: .8em;
			}
		}
	}
</style>