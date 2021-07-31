export const state = () => ({
	posts: [],
	skeleton: true
})

export const mutations = {
	SET_POST(state, posts) {
		state.posts = posts
	},
	SET_SKELETON(state, skeleton) {
		state.skeleton = skeleton
	}
}

export const actions = {
	async getPost({ commit, state }) {
    const response = await this.$axios.get('api/post');
    if (response.status === 200) {
			commit('SET_SKELETON', false)
		}
    commit('SET_POST', response.data.data)
  },
}