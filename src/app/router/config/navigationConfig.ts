import { ModelPageConfig } from 'src/pages/model'
import { StatisticsPageConfig } from 'src/pages/statistics'
import { UsersPageConfig } from 'src/pages/users'
import { BarChartIcon, RagModelIcon, UsersIcon } from 'src/shared/ui/assets/icons'

import type { NavigationLinkConfig } from 'src/widgets/layout/sidebar'

export const navigationConfig: NavigationLinkConfig[] = [
	{ to: StatisticsPageConfig.STATISTICS_PAGE_PATH, icon: BarChartIcon },
	{ to: UsersPageConfig.USERS_PAGE_PATH, icon: UsersIcon },
	{ to: ModelPageConfig.MODEL_PAGE_PATH, icon: RagModelIcon },
]