// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  organizationList: "https://ongapi.alkemy.org/api/organization",
  members: "https://ongapi.alkemy.org/api/members",
  baseUrl:"https://ongapi.alkemy.org/api",
  news: "/news",
  slidesUrl : "/slides",
  contacts: "/contacts",
  firebaseConfig : {
    apiKey: "AIzaSyBYZL3yR8hSnzilQVMTs4yCNWJUzzGqa9M",
    authDomain: "somos-mas-9f3e8.firebaseapp.com",
    projectId: "somos-mas-9f3e8",
    storageBucket: "somos-mas-9f3e8.appspot.com",
    messagingSenderId: "483767622137",
    appId: "1:483767622137:web:d6bcac613c59f1d9178528",
    measurementId: "G-3M3YFNBRSN"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
