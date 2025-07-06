export const TEST_ACCOUNTS = [
	{
		user: 'user1',
		password: 'password',
	},
	{
		user: 'user2',
		password: 'password',
	},
	{
		user: 'user3',
		password: 'password',
	},
];

export const verifyAccount = (username: string, password: string) => {
	return TEST_ACCOUNTS.find(a => {
		return a.user === username && a.password === password;
	})
}