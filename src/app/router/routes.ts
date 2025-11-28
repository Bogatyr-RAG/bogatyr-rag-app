import { ChatPageConfig } from 'src/pages/chat'
import AppLayout from '../layout/AppLayout.vue'
import { navigationConfig } from './config/navigationConfig'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: ChatPageConfig.CHAT_PAGE_PATH,
		component: AppLayout,
		props: { navigationConfig },
		children: [
			{
				path: ChatPageConfig.CHAT_PAGE_PATH,
				name: ChatPageConfig.CHAT_PAGE_NAME,
				component: () =>
					import('pages/chat').then(module => {
						return module.CurrentChat
					})
			},
		]
	}
]

export default routes
