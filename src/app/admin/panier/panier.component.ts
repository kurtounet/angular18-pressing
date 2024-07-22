import { Component, OnInit } from '@angular/core';
import { Article } from '../../interface/article.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../service/data.service';

//import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  constructor(private dataService: DataService) { }

  ListeArticlesDansPanier: Article[] = [
    {
      id: 1,
      nom: "Nom Du produit ",
      image: "assets/image/articles/94-home_default.jpg",
      description: " ",
      prix: 15.23,
      quantite: 2,
      prestation: [1, 2],
    },
    {
      id: 2,
      nom: "Nom Du produit ",
      image: "assets/image/articles/94-home_default.jpg",
      description: " ",
      prix: 15.23,
      quantite: 2,
      prestation: [4, 2],
    }
  ];


  listeDesArticles = this.dataService.listArticles;
  listeDesPrestations = this.dataService.listPrestations;

  NbArticle: number = 0;
  selectedArticleId: number = 0;
  selectedPrestationId: number = 0;
  listeIdPrestationNouvelArticle = []

  /*
  nouvelArticle: Article = {
    id: 0,
    nom: "",
    description: "",
    prix: 0.00,
    quantite: this.NbArticle,
    prestation: []
    
  };*/
  diminuerQuantite() {
    // Implement logic to decrease the quantity
    if (this.NbArticle > 0) {
      this.NbArticle--;
    }
    console.log(this.NbArticle)
  }

  augmenterQuantite() {
    // Implement logic to increase the quantity
    this.NbArticle++;
    console.log(this.NbArticle)
  }

  ajouterAuPanier() {
    console.log("Nouvel article ajouter au panier");
    // Logique pour ajouter un article au panier
    /*
   const nouvelArticle: Article = {
     id: this.selectedArticleId ,
    
     nom: article.nom,
     description: article.description,
     prix: article.prix,
     quantite: this.NbArticle,
     prestation:[]
     
   };*/

    // Ajoute l'article au panier et réinitialise la quantité
    // this.ListeArticlesDansPanier.push(nouvelArticle);
    this.NbArticle = 0;


  }
  ajouterPrestation() {

  }
  supprimerPrestation(idPrestation: number) {

  }
  supprimerArticle(article: Article) {
    // Logique pour supprimer un article du panier
    //this.dataService.ListeDesArticlesCommander;
  }

  calculerTotalArticle(article: Article): number {
    // Logique pour calculer le total d'un article (quantité * prix + prestation)
    return (article.quantite * article.prix);
  }
  /*
    calculerTotalPanier(): number {
      // Logique pour calculer le total du panier
     // return this.ArticlesCommander.reduce((total, article) => total + this.calculerTotalArticle(article), 0);
    }
  
    validerCommande() {
      // Logique pour valider la commande
    }
  */
  onArticleChange() {
    // Cette méthode sera appelée à chaque changement de sélection dans le menu déroulant
    console.log('Article sélectionnée :', this.selectedArticleId);
    // Vous pouvez faire d'autres traitements ici en fonction de la prestation sélectionnée
  }
  onPrestationChange() {
    // Cette méthode sera appelée à chaque changement de sélection dans le menu déroulant

    console.log('Prestation sélectionnée :', this.selectedPrestationId);
    // Vous pouvez faire d'autres traitements ici en fonction de la prestation sélectionnée
  }
  ngOnInit() {
    console.log(this.ListeArticlesDansPanier[0]);
  }

}
