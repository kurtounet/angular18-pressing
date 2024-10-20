import { createSecretKey } from "crypto";

export const environment = {
  // baseUrl: 'https://ab-web.fr:9000',
  // baseApiUrl: 'https://ab-web.fr:9000/api',
  // authUrl: 'https://ab-web.fr:9000/api/login_check',


  baseUrl: 'http://localhost:8080',
  baseApiUrl: 'http://localhost:8080/api',
  authUrl: 'http://localhost:8080/api/login_check',
  assertsImageCategories: '/uploads/images/categories',
  assertsImageServices: '/uploads/images/services',
  assertsImageSite: '/uploads/images/site',
  production: false,
  LEMONSQUEEZY_API_KEY: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NGQ1OWNlZi1kYmI4LTRlYTUtYjE3OC1kMjU0MGZjZDY5MTkiLCJqdGkiOiJjYTM5MzIxMGU4OWVhMjhiYjYzMmExNzkzZTllMjQ2N2I0NWIzN2MyMzQxZmYwOWNlMDYwYTk0ZjAxZTg4ZTJkZGFkMTUyNzk1MjViMTI0MCIsImlhdCI6MTcyNDQyODE5Ni4zODc3MTcsIm5iZiI6MTcyNDQyODE5Ni4zODc3MiwiZXhwIjoyMDM5OTYwOTk2LjM1NDQ4Niwic3ViIjoiMzA4MjM2NiIsInNjb3BlcyI6W119.FXUSA-V1Z283AD6R7gOhrrjLjwUCahOjo5k0sYoobk1H5TsUVoeT-8-uuzdOj16g1Nh3K1xVt33xKhT8nSDNRcQ6mjg7RTMga3FhgYygR9IIgzha_eu711a2-172AgI3fUYg9jqL7UmUPQA_CczU9JT2OwxPrl-M5VqcfR_YsU0tjpLyv2pN-8pvPnlxPa5n9LywpI883bNqSn8UF_gPhWIdUt8bcyfif8PW5lgR-MNw2fS58Sb6dIvUKEILnFkPktNyy1pnOPI6N14eeVwBhQ4ILq1jjuwPoe9eOZHrWVY2gR8HykzkKqdDs7q66IGDuM13ODpThEgBqGCyHzccGHJ-mvFavI72B87OWcJY1rqo5T8fN9MOaBRCrDJAx6lQk2BMrIfoqxWtVj-bcai9S1oReWJpYQMrwPqNcklj6MWpDh2AgZmw_CoRsm5Yl53y56RetCaA1HTqh4ONf4kgQxNMIGd5SvI-Mn4tP67QsYywe5f9O3QVQW67vHNSiEuk",
  STRIPE_API_KEY: "pk_test_51Omce8AuLNZA3gy9ODJsvyclPTv7Vj6uKJyWMsgEeZsMj0mbSmjzX2UDCxTAsPH2catC5ZZ4YsRZwcG2L0H8OlJv00ZdccCxUx",
  STRIPE_SECRET_KEY: "sk_test_51Omce8AuLNZA3gy90oXdmAFG0QNfpVankIU0HkaiNQ0NUEWFZE9qcbyD48g0lrmLJjUDg9Btec92P4EjkgxuoSLB00aq6jUaAg"
};
