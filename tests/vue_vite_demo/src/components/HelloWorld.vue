<template>
  <div>
    <div id="apple-sign-in-button"></div>
    <div id="apple-sign-out-button"></div>
  </div>
  {{ messageInfo }}
</template>

<script setup lang="ts">

import { onMounted, ref } from "vue";
import * as CloudKit from 'tsl-apple-cloudkit';
import { UserIdentity } from "tsl-apple-cloudkit";
let container: CloudKit.Container | undefined = undefined
let messageInfo = ref("")

onMounted(() => {
  let cloudKit = window.CloudKit
  const containerIdentifier = "iCloud.org.netzkonform.CloudKitTS"
  const apiToken = "825628f17af22927b7e8901ad7ec3db8ada33ce8c31e870b4f09d9e3d3a4b13c"
  const configuredCloudKit = cloudKit.configure({
    containers: [{
      containerIdentifier: containerIdentifier,
      apiTokenAuth: {
        apiToken: apiToken,
        persist: true,
        signInButton: {
          id: "apple-sign-in-button",
          theme: "dark"
        },
        signOutButton: {
          id: "apple-sign-out-button",
          theme: "dark"
        }
      },
      apnsEnvironment: "development",
      environment: "development"
    }],
  });

  container = configuredCloudKit.getContainer(containerIdentifier)
  container?.setUpAuth()
  container?.whenUserSignsIn()
      .then((userIdentity: UserIdentity) => {
          messageInfo.value = userIdentity.userRecordName
      })
      .catch((error: CKError) => {
          messageInfo.value = error.toString()
      });
})

</script>

