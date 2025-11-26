import { StatisticsPageConfig } from 'pages/statistics'
import { ModelPageConfig } from 'src/pages/model'
import { UsersPageConfig } from 'src/pages/users'

import AppLayout from '../layout/AppLayout.vue'
import { navigationConfig } from './config/navigationConfig'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: StatisticsPageConfig.STATISTICS_PAGE_PATH,
		component: AppLayout,
		props: { navigationConfig },
		children: [
			{
				path: ModelPageConfig.MODEL_PAGE_PATH,
				name: ModelPageConfig.MODEL_PAGE_NAME,
				component:  () =>
					import('pages/model').then(module => {
						return module.ModelPage
					})
			},
			{
				path: StatisticsPageConfig.STATISTICS_PAGE_PATH,
				name: StatisticsPageConfig.STATISTICS_PAGE_NAME,
				component:  () =>
					import('pages/statistics').then(module => {
						return module.StatisticsPage
					})
			},
			{
				path: UsersPageConfig.USERS_PAGE_PATH,
				name: UsersPageConfig.USERS_PAGE_NAME,
				component:  () =>
					import('pages/users').then(module => {
						return module.UsersPage
					})
			},
		]
	}
]

export default routes
