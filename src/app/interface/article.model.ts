// models/article.model.ts

export interface Article {
  id: number;
  nom: string;
  description: string;
  image: string;
  prix: number;
  quantite: number;
  prestation: number[];
}

// Exemple d'utilisation :
// Vous pouvez créer une instance d'article comme suit :
// const monArticle: Article = {
//   id: 1,
//   nom: 'Chemise',
//   description: 'Chemise en coton',
//   prix: 15.99,
//   quantite: 2,
//   prestation: 'standard'
// };
