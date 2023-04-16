<template>


	<div class="w-50 mx-auto">
		<form @submit.prevent>
			<Input type="text" label="Title" v-model="title" />
			<TextArea type="text" label="Description" v-model="description" />
			<TextArea type="text" label="Body" v-model="body" />
			<Button :disabled="isLoading" @click="editArticle">Edit Article</Button>
		</form>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import Button from '../ui-components/Button.vue';
import Input from '../ui-components/Input.vue';
import TextArea from '../ui-components/TextArea.vue';

export default {
	props: {
		initialValue: {
			type: Object,
			required: true,
		},
		editArticlehandler: {
			type: Function,
			required: true,
		},
	},
	computed: {
		...mapState({
			isLoading: state => state.control.isLoading,
		}),
	},
	components: {
		Button,
		TextArea,
		Input,
	},
	data() {
		return {
			title: this.initialValue.title,
			description: this.initialValue.description,
			body: this.initialValue.body,
		};
	},
	methods: {
		editArticle() {
			const article = {
				title: this.title,
				description: this.description,
				body: this.body,
				tagList: [],
			};
			this.editArticlehandler(article);
		},
	},
};
</script>
