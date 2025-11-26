import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed } from 'vue'

import { USER_STORAGE_NAME } from '../config/storage'
import { userSerializer } from '../lib/storage/userSerializer'
import type { User } from 'src/entities/users'

const STORE_NAME = 'authenticated-user'

export const useAuthenticatedUserStore = defineStore(STORE_NAME, () => {

	const user = useStorage(USER_STORAGE_NAME, null, localStorage, { serializer: userSerializer })

	const authenticatedUser = computed(() => {
		return user
	})

	const isAuthenticated = computed<boolean>(() => {
		if (!authenticatedUser.value) {
			return false
		}

		return true
	})

	function setAuthenticatedUser(newUser: User): void {
		user.value = newUser
	}

	function clearAuthenticatedUser(): void {
		user.value = null
	}

	return {
		authenticatedUser,
		isAuthenticated,
		setAuthenticatedUser,
		clearAuthenticatedUser
	}
})
