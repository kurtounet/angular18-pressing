import { Component, Pipe } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { CommandeService } from '../../services/commande.service';
import { Commande, CommandeCollection } from '../../models/commande.model';
import { ClientService } from '../../services/client.service';
import { User } from '../../models/user.model';
import { Client } from '../../models/client.model';
@Component({
  standalone: true,
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrl: './orderlist.component.css',

  imports: [NgFor, NgIf, DatePipe]
})
export class OrderlistComponent {
  commandes: CommandeCollection | null = null;
  arrayCommandes: Commande[] = [];
  constructor(
    private commandeService: CommandeService,
    private clientService: ClientService
  ) { }
  user: User = new  User();
  //client: Client = new Client();
  ngOnInit(): void {
    //Récupérer le user de local storage
    const userString = localStorage.getItem('user');
    console.log(userString);
    //Verifier si userString n'est pas null
    if (userString) {
      //Convertir userString en objet User
      this.user = JSON.parse(userString) as User;
      if (this.user.roles?.includes('ROLE_ADMIN')) {
        console.log('Admin');
        this.loadAllCommande();
      } else if (this.user.roles?.includes('ROLE_EMPLOYEE')) {
        console.log('Employee');
        this.loadEmployeeCommande();
      } else if (this.user.roles?.includes('ROLE_CLIENT')) {
        console.log('Client');
        this.getClientCommande();
      }
    }
  }

  loadAllCommande() {
    this.commandeService.getAllCommandes().subscribe(data => {
      this.commandes = data;
      console.log(this.commandes);
    });
  }
  getClientCommande() {
    this.clientService.getClientById(this.user.id).subscribe(data => {
      this.arrayCommandes = data['commande'];
      console.log(this.arrayCommandes);
    });
  }
  loadEmployeeCommande() {
    this.clientService.getClientById(this.user.id).subscribe(data => {
     // this.arrayCommandes = data['commande'];
      console.log(data);
    });
  }
  /*
    onCommandeSelect(event: any) {
      console.log(this.selectedServicesId);
    }
     */

}
