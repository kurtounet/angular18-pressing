import { Component, inject } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { CommandeService } from '../../services/commande.service';
import { ICommande } from '../../models/commande.model';
import { ClientService } from '../../services/client.service';
import { IUser, User } from '../../models/user.model';
import { ItemService } from '../../services/item.service';
import { Iitem } from '../../models/item.model';
import { CommandeDetailComponent } from '../commande-detail/commande-detail.component';

@Component({
  standalone: true,
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrl: './orderlist.component.css',

  imports: [NgFor, NgIf, DatePipe, CommandeDetailComponent]
})
export class OrderlistComponent {

  arrayCommandes: ICommande[] = [];
  arrayItemCommande: Iitem[] = [];
  commandeService = inject(CommandeService);
  clientService = inject(ClientService);
  itemService = inject(ItemService);
  isShowDetail: boolean = false;
  selectedCommande: any = null;
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

    });
  }
  toggleDetail(commande: any) {
    if (this.selectedCommande?.id === commande.id) {
      this.isShowDetail = !this.isShowDetail; // Cache ou montre les détails pour la même commande
    } else {
      this.selectedCommande = commande;
      this.isShowDetail = true; // Affiche les détails pour une nouvelle commande
    }

    if (this.isShowDetail) {
      this.itemService.getItemCommandesById(commande.id).subscribe(
        (data: Iitem[]) => {
          this.arrayItemCommande = data;
        }
      );
    }
  }
  calculateTotalCommande() {
    let total = this.arrayItemCommande.reduce((total, item) => {
      return total + item.price!;
    }, 0);
    return total;
  }


  deleteCommande(commande: ICommande) {
    this.commandeService.deleteCommande(commande.id!).subscribe(() => {
      this.ngOnInit();
    });
  }
}

