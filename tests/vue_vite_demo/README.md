# tsl-apple-cloudkit vue.js demo

# Requirements

- Vue3
- Vite
- tsl-apple-cloudkit

## Usage

`npm install`

## How to configuration in your project

1. `npm i tsl-apple-cloudkit` 

   

2. index.html:

   ```javascript
   <script type="text/javascript" src="https://requirejs.org/docs/release/2.0.3/minified/require.js"></script>
   <script>
       require.config({
           paths: {
               'tsl-apple-cloudkit': 'lib/tsl-apple-cloudkit',
           }
       });
   </script>
   ```

3. Create Vue file:

   ```html
   <template>
     <div>
       <div id="apple-sign-in-button"></div>
       <div id="apple-sign-out-button"></div>
     </div>
     {{ messageInfo }}
   </template>
   ```

4. 

5. ```typescript
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
   ```
