let testsconfig = {
	containerIdentifier: "[YOUR_CONTAINER_ID]",
	apiTokenAuth: {
		apiToken: "[YOUR_API_TOKEN]",
		persist: false,
		signInButton: {
			id: "apple-sign-in-button"
		},
		signOutButton: {
			id: "apple-sign-out-button"
		}
	},
	apnsEnvironment: "development",
	environment: "development"
};

export default testsconfig;
