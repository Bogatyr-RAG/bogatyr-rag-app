import type { UserRoles } from './UserRoles'

export interface User {
	lastName: string;
	firstName: string;
	middleName?: string;
	role: UserRoles;
	login: string;
}