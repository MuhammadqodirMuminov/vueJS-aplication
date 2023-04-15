import { ArticleDetailView, HomeView, LoginView, RegisterView } from '@/views';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/register',
			name: 'register',
			component: RegisterView,
		},
		{
			path: '/login',
			name: 'login',
			component: LoginView,
		},
		{
			path: '/article/:slug',
			name: 'article',
			component: ArticleDetailView,
		},
	],
});

export default router;
