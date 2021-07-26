<template>
	<div class="icon d-flex text-center justify-content-center">
		<Icon :icon="icon" class="iconify" />
	</div>
</template>
<script>
import { Icon, addIcon } from '@iconify/vue2/dist/offline';
import homeOutline from '@iconify/icons-eva/home-outline'
import plus from '@iconify/icons-bi/plus'
import swordLine from '@iconify/icons-ri/sword-line'
import notification from '@iconify/icons-ci/notification'
import chatBubblesQuestion16Regular from '@iconify/icons-fluent/chat-bubbles-question-16-regular'
import peopleAudience24Filled from '@iconify/icons-fluent/people-audience-24-filled'
import userCircleDuotone from '@iconify/icons-ph/user-circle-duotone'

addIcon('home', homeOutline);
addIcon('plus', plus);
addIcon('sword-line', swordLine);
addIcon('chat-bubbles-question-16-regular', chatBubblesQuestion16Regular)
addIcon('ci-notification', notification);
addIcon('user-circle-duotone', userCircleDuotone);
addIcon('people-audience-24-filled', peopleAudience24Filled);

export default {
	components: {
	  Icon,
	},
	props: {
		icon : {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
	// svg.iconify {
	// 	margin-top: 0;
	// 	font-size: 10em !important;
	// }
	// svg.iconify {
	// 	vertical-align: unset;
	// }
</style>
