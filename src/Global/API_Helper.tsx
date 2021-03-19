import qs from 'qs';

export const LOGIN_API = 'http://inventoryapi.planetsurf.id/token';

export const apiLogin = async (username: string, password: string) => {
  let data: any = null;

  await fetch('http://inventoryapi.planetsurf.id/token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: qs.stringify({
      grant_type: 'password',
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((responJson) => {      
      data = responJson;
    })

    .catch((e) => {
     data = {error:e}
    });
  return data;
};
