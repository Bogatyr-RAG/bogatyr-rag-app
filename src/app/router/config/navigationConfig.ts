import { ChatPageConfig } from 'src/pages/chat'

import { RagModelIcon } from 'src/shared/ui/assets/icons'

import type { NavigationLinkConfig } from 'src/widgets/layout/sidebar'

export const navigationConfig: NavigationLinkConfig[] = [
	{ to: ChatPageConfig.CHAT_PAGE_PATH, icon: RagModelIcon },
]