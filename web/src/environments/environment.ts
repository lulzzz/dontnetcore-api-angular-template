// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  config: {
    tenant: 'careportfol.io',
    clientId: '14c39115-7cae-4c02-b865-20d7b2d205f8',
    endpoints: {
      'https://graph.microsoft.com': '00000003-0000-0000-c000-000000000000'
    },
  },
    apiUrl: 'https://localhost:5001/api/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
