<template>
	<div class="w-50 mx-auto">
		<form @submit.prevent>
			<Input type="text" label="Title" v-model="title" />
			<TextArea type="text" label="Description" v-model="description" />
			<TextArea type="text" label="Body" v-model="body" />
			<Button :disabled="isLoading" @click="createArticlehandler">Create Article</Button>
		</form>
	</div>
</template>
<script>
import { mapState } from 'vuex';
import Button from '../ui-components/Button.vue';
import Input from '../ui-components/Input.vue';
import TextArea from '../ui-components/TextArea.vue';

export default {
	data() {
		return {
			title: '',
			description: '',
			body: '',
		};
	},

	components: {
		Input,
		TextArea,
		Button,
	},

	computed: {
		...mapState({
			isLoading: state => state.control.isLoading,
		}),
	},

	methods: {
		createArticlehandler() {
			const article = {
				title: this.title,
				description: this.description,
				body: this.body,
				tagList: [],
			};

			this.$store.dispatch('createArticle', article);

			if (this.isLoading) {
				console.log('salom');
				this.title = '';
				this.description = '';
				this.body = '';
			}
		},
	},
};
</script>
<style></style>
