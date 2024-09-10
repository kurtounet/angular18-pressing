import { Component, inject } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { CommandeService } from '../../services/commande.service';
import { ICommande } from '../../models/commande.model';
import { ClientService } from '../../services/client.service';
import { IUser, User } from '../../models/user.model';

@Component({
  standalone: true,
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrl: './orderlist.component.css',

  imports: [NgFor, NgIf, DatePipe]
})
export class OrderlistComponent {

  arrayCommandes: ICommande[] = [];

  commandeService = inject(CommandeService);
  clientService = inject(ClientService);

  user: User = new User();


  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString) as User;
      if (this.user.roles?.includes('ROLE_ADMIN')) {
        this.loadAllCommande();
      } else if (this.user.roles?.includes('ROLE_EMPLOYEE')) {
        this.loadEmployeeCommande();
      } else if (this.user.roles?.includes('ROLE_CLIENT')) {
        this.getCommandesClient();
      }
    }
  }

  loadAllCommande() {
    this.commandeService.getAllCommandes().subscribe(data => {
      this.arrayCommandes = data;

    });
  }

  getCommandesClient() {
    this.clientService.getCommandesClient().subscribe(data => {

      this.arrayCommandes = data;

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
