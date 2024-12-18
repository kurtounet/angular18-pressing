import { createSecretKey } from "crypto";

export const environment = {
 

  addressUrl: 'https://api-adresse.data.gouv.fr/search/',
  baseUrl: 'https://localhost:8000',
  baseApiUrl: 'https://localhost:8000/api',
  authUrl: 'https://localhost:8000/api/login_check',
  assertsImageCategories: '/uploads/images/categories',
  assertsImageServices: '/uploads/images/services',
  assertsImageSite: '/uploads/images/site',
  production: false
};
