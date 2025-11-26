import type { Serializer } from '@vueuse/core'
import type { User } from 'src/entities/users'

export const userSerializer: Serializer<User | null> = {
	read: (user: string): User | null => {
		return user ? JSON.parse(user) as User : null
	},
	write: (user: User | null): string => {
		return JSON.stringify(user)
	}
}