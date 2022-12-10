import CloudKit from 'tsl-apple-cloudkit';

let testsconfig: CloudKit.ContainerConfig = <CloudKit.ContainerConfig>{
	containerIdentifier: "iCloud.org.netzkonform.CloudKitTS",
	apiTokenAuth: {
		apiToken: "825628f17af22927b7e8901ad7ec3db8ada33ce8c31e870b4f09d9e3d3a4b13c",
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
