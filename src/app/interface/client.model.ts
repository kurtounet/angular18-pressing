// client.interface.ts
export interface Client {
  id: number;
  genre: string;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  tel: string;
  naissance: string;  // Assuming naissance is of type string, you can adjust it accordingly
  username: string;
  pwd: string;
  rue: string;
  codepostale: string;
  ville: string;
}

