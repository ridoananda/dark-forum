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
					<div class=" d-flex justify-content-center">
						
					<div class="wrapper">
						<div class="notif d-flex align-items-center">
							<img src="~/assets/img/pajak_bertutur.jpg" width="50" height="50" class="rounded-circle mr-2">
							<div class="text-notif">
								<p class="mb-2">
									Seseorang bernama <span class="text-icon">Rido Ananda</span> menantang anda! wwkwk canda bang:V
								</p>
								<div class="action d-flex justify-content-between align-items-end">
									<small class="text-muted d-flex align-items-center">
										<b-icon icon="clock" class="mr-1"></b-icon>22 minute ago
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
						<div class="d-flex align-items-center justify-content-start notif">
							<img src="~/assets/img/pajak_bertutur.jpg" width="50" height="50" class="rounded-circle mr-2">
							<div class="text-notif">
								<p class="mb-2">
									Seseorang bernama <span class="text-icon">Rido Ananda</span> menantang anda! wwkwk canda bang:V
								</p>
								<div class="action d-flex justify-content-between align-items-end">
									<small class="text-muted d-flex align-items-center">
										<b-icon icon="clock" class="mr-1"></b-icon>18 minute ago
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
						<div class="d-flex align-items-center justify-content-start notif">
							<img src="~/assets/img/pajak_bertutur.jpg" width="50" height="50" class="rounded-circle mr-2">
							<div class="text-notif">
								<p class="mb-2">
									Seseorang bernama <span class="text-icon">Rido Ananda</span> menantang anda! wwkwk canda bang:V
								</p>
								<div class="action d-flex justify-content-between align-items-end">
									<small class="text-muted d-flex align-items-center">
										<b-icon icon="clock" class="mr-1"></b-icon>4 minute ago
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
						<div class="d-flex align-items-center justify-content-start notif">
							<img src="~/assets/img/pajak_bertutur.jpg" width="50" height="50" class="rounded-circle mr-2">
							<div class="text-notif">
								<p class="mb-2">
									Seseorang bernama <span class="text-icon">Rido Ananda</span> menantang anda! wwkwk canda bang:V
								</p>
								<div class="action d-flex justify-content-between align-items-end">
									<small class="text-muted d-flex align-items-center">
										<b-icon icon="clock" class="mr-1"></b-icon>22 minute ago
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
						<div class="d-flex align-items-center justify-content-start notif">
							<img src="~/assets/img/pajak_bertutur.jpg" width="50" height="50" class="rounded-circle mr-2">
							<div class="text-notif">
								<p class="mb-2">
									<span class="text-icon">Cipto Ardian</span> Mengomentari postingan anda.
								</p>
								<div class="action d-flex justify-content-between align-items-end">
									<small class="text-muted d-flex align-items-center">
										<b-icon icon="clock" class="mr-1"></b-icon>1 hours ago
									</small>
									<!-- <div>
										<b-button variant="info" size="sm">
											Lihat <b-icon icon="arrow-right"></b-icon>
										</b-button>
									</div> -->
								</div>
							</div>
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>
		<NavbarAndroid/>
	</div>
</template>

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