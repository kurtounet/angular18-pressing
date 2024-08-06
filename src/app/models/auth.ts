export interface ICredentials {
  username: string;
  password: string;
}

export interface IToken {
  token: string;
  exp: number // temps d'expiration du token;
  roles: string[];
}
