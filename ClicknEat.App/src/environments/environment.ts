// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: false
};

export function httpHeaders(): any {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    body: {}
  };

  return options;
}

// export function httpHeadersAuth(): any {
//   const headers = new Headers();
//   headers.append('', '');

//   const options = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': sessionStorage.getItem('.AspNetCore.Session')
//     })
//   };

//   return options;
// }

export const httpOptionsWCredentials = () => {
  const headers = new Headers();
  headers.append('Access-Control-Allow-Origin', 'true');
  headers.append('Content-Type', 'application/json');

  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true
  };

  return options;
};
