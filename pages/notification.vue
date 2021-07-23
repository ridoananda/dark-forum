<template>
	<div id="notification">
    <div class="container">
	    <div id="detail-post" class="row justify-content-center">
  	    <div class="col-sm-10 col-lg-8 px-0 px-md-2">
					<div class="header">
						<div class="d-flex justify-content-between align-items-center">
							<h5 class="font-weight-bold">Notification</h5>
							<iconify icon="sword-line" />
						</div>
					</div>
					<div class="wrapper">
						<div class="d-flex align-items-center notif">
							<img src="~/assets/img/pajak_bertutur.jpg" width="60" height="60" class="rounded-circle mr-3">
							<div class="text-notif">
								<p class="mb-2">
									Seseorang bernama <span class="text-icon">Rido Ananda</span> menantang anda!
								</p>
								<div class="action d-flex justify-content-between align-items-end">
									<small class="text-muted"><b-icon icon="clock"></b-icon> 22 minute ago</small>
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
						<hr class="line"></hr>
						<div class="d-flex align-items-center notif">
							<img src="~/assets/img/pajak_bertutur.jpg" width="60" height="60" class="rounded-circle mr-3">
							<div class="text-notif">
								<p class="mb-2">
									Seseorang bernama <span class="text-icon">Rido Ananda</span> menantang anda!
								</p>
								<div class="action d-flex justify-content-between align-items-end">
									<small class="text-muted"><b-icon icon="clock"></b-icon> 22 minute ago</small>
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
						<hr class="line"></hr>
						<div class="d-flex align-items-center notif">
							<img src="~/assets/img/pajak_bertutur.jpg" width="60" height="60" class="rounded-circle mr-3">
							<div class="text-notif">
								<p class="mb-2">
									Seseorang bernama <span class="text-icon">Rido Ananda</span> menantang anda!
								</p>
								<div class="action d-flex justify-content-between align-items-end">
									<small class="text-muted"><b-icon icon="clock"></b-icon> 22 minute ago</small>
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
						<hr class="line"></hr>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/bootstrap.scss';
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
		padding-top: .8em;
		.notif {
			padding: .2em .8em 0 .8em;
		}
		hr.line{
			background-color: #ffffff;
			opacity: .1;
		}
	}
</style>