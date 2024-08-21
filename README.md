# Angular Pressing

"src/favicon.ico",
"src/assets"

# USER

admin: < <admin@gmail.com> >pwd : Jean
manager: < <jane.doe@gmail.com> > pwd: Jane
client: < <emma.wilson@gmail.com> > pwd : Emma
employee: < <lucy.liu@gmail.com> > pwd :Lucy

# PROJET DU BUSINESS CASE POUR L'EXAMEN DE FORMATION DEVELOPPEUR WEB/WEB MOBILE

## À FAIRE

API

- created et update entity
- choix du service -> article -> quantité
- Faire une route pour récupérer les commandes sans employé : api/commandes/noassign (fait)
- Faire une route pour récupérer les commandes du client : api/client/commandes (fait)
- Faire une route pour Assigner une Commande a un employé ROLE_Employee: api/employee/items (fait)
- Faire une route pour Assigner une Commande a un employé ROLE_Employee: api/employee/items
- Faire une route pour Employé qui indique qu'il a fini l' item Employee:api/item/{id}/complete
- Faire avec les catégories parent
-
  -

| **Espace**             | **Page**                                          | **Route**                    |
|------------------------|---------------------------------------------------|------------------------------|
| **inscription**        |                                                   | PATCH /api/check_login       |
| **Login**              |                                                   | /api/check_login             |
| **Visiteur**           | Landing page (fait)                               | /api/services                |
|                        | Présentation des services (fait)                  | /api/services                |
| **Espace Utilisateur** | **Espace Client**                                 |                              |
|                        | Page dépôt                                        |                              |
|                        | Processus de dépôt : Choix du service             | GET /api/services            |
|                        | Processus de dépôt : Choix des articles ManyToMany | GET /api/articles            |
|                        | Processus de dépôt : Choix de la quantité         | /api/services                |
|                        | Processus de dépôt : Valider le dépôt             | POST /api/items              |
|                        | Page liste commandes                              | /api/commande/user/{id}      |
|                        | Page panier<br/>                                  | Stocker dans le localStorage |
|                        | Page Profile                                      | /api/user/{id}               |
|                        | Page contact                                      | /api/contact/                |
| **Espace Admin**       | Page liste des utilisateurs                       | /api/users                   |
|                        | Page liste commandes                              |                              |
|                        | Page liste des tâches                             |                              |
|                        | Page Profile                                      |                              |
| **Espace Employé**     | Page liste des tâches                             | /api/employee/{id}/task/     |
|                        | Page Profile                                      | /api/users/{id}              |
|                        | Page contact                                      |                              |
| **Employé - Admin**    | Liste des commandes pour l'employé                |                              |
| **Admin**              | Admin                                             |                              |
|                        | Liste de commandes                                | /api/commandes               |
|                        | Liste des utilisateurs                            | /api/user                    |
|                        | Employé                                           |                              |
|                        | Client                                            |                              |

Faire une route pour

# Page côté front

### Login

>
> routes: /api/check_login

### Visiteur

#### Landing page (fait)

liste 3 services
> routes: /api/services
>

#### Présentation des services (fait)

>
> routes: /api/services

## **Espace Utilisateur**

### Espace Client

>
>#### Page dépôt
>
>### Processuse de dépot
>
>- 1 Choix du service
>- route: GET /api/services
>- 2 Choix des article ManyToMany entre SERVICE et ARTICLE
>- routes: GET /api/articles
>- 3 Choix du quantité
>- route: /api/services
>- 4 Valider le dépot
>- route:POST /api/items

#### Page liste commandes

>
> controller -> route personnalisé : /api/commande/user/{id}
>

#### Page panier

>
> stocker dans le localStorage
>

#### Page Profile

>
> routes: /api/user/{id}
>

#### Page  contact

> routes: /api/contact/
>

## Espace Admin

#### Page liste des utilisateurs

>
> routes: /api/users
>

#### Page liste commandes

#### Page liste des taches

#### Page Profile

## Espace Employee

#### Page liste des taches

controller route /api/employee/{id}/task/

#### Page Profile

routes: /api/users/{id}

#### Page contact

## Employé - Admin

>
> list des commande pour l'employer

## Admin

- Admin
  - liste de commande
  > routes: /api/commandes
  - liste des users
  > routes: /api/user
  - employer
  - client

# Page côté BACK

### Authentification

### Dashboard (a faire)

>
> - Services
> - utilisateurs
> - commandes

## liste des routes de l'api

| **Category**    | **Method** | **Route**                   | **Description**                                   |
|-----------------|------------|-----------------------------|---------------------------------------------------|
| **Login Check** | POST       | /api/login_check            | Creates a user token.                             |
| **Category**    | GET        | /api/categories             | Retrieves the collection of Category resources.   |
|                 | POST       | /api/categories             | Creates a Category resource.                      |
|                 | GET        | /api/categories/{id}        | Retrieves a Category resource.                    |
|                 | DELETE     | /api/categories/{id}        | Removes the Category resource.                    |
|                 | PATCH      | /api/categories/{id}        | Updates the Category resource.                    |
| **Client**      | GET        | /api/clients                | Retrieves the collection of Client resources.     |
|                 | POST       | /api/clients                | Creates a Client resource.                        |
|                 | GET        | /api/clients/commandes/{id} | Retrieves the collection of Client resources.     |
|                 | GET        | /api/clients/{id}           | Retrieves a Client resource.                      |
|                 | DELETE     | /api/clients/{id}           | Removes the Client resource.                      |
|                 | PATCH      | /api/clients/{id}           | Updates the Client resource.                      |
| **Commande**    | GET        | /api/commandes              | Retrieves the collection of Commande resources.   |
|                 | POST       | /api/commandes              | Creates a Commande resource.                      |
|                 | GET        | /api/commandes/{id}         | Retrieves a Commande resource.                    |
|                 | DELETE     | /api/commandes/{id}         | Removes the Commande resource.                    |
|                 | PATCH      | /api/commandes/{id}         | Updates the Commande resource.                    |
| **User**        | GET        | /api/currentuser            | Retrieves the collection of User resources.       |
|                 | GET        | /api/users                  | Retrieves the collection of User resources.       |
|                 | POST       | /api/users                  | Creates a User resource.                          |
|                 | GET        | /api/users/{id}             | Retrieves a User resource.                        |
|                 | DELETE     | /api/users/{id}             | Removes the User resource.                        |
|                 | PATCH      | /api/users/{id}             | Updates the User resource.                        |
| **Employee**    | GET        | /api/employees              | Retrieves the collection of Employee resources.   |
|                 | POST       | /api/employees              | Creates a Employee resource.                      |
|                 | GET        | /api/employees/{id}         | Retrieves a Employee resource.                    |
|                 | DELETE     | /api/employees/{id}         | Removes the Employee resource.                    |
|                 | PATCH      | /api/employees/{id}         | Updates the Employee resource.                    |
| **ItemStatus**  | GET        | /api/item_statuses          | Retrieves the collection of ItemStatus resources. |
|                 | POST       | /api/item_statuses          | Creates a ItemStatus resource.                    |
|                 | GET        | /api/item_statuses/{id}     | Retrieves a ItemStatus resource.                  |
|                 | DELETE     | /api/item_statuses/{id}     | Removes the ItemStatus resource.                  |
|                 | PATCH      | /api/item_statuses/{id}     | Updates the ItemStatus resource.                  |
| **Item**        | GET        | /api/items                  | Retrieves the collection of Item resources.       |
|                 | POST       | /api/items                  | Creates a Item resource.                          |
|                 | GET        | /api/items/employees        | Retrieves the collection of Item resources.       |
|                 | GET        | /api/items/noassigned       | Retrieves the collection of Item resources.       |
|                 | GET        | /api/items/{id}             | Retrieves a Item resource.                        |
|                 | DELETE     | /api/items/{id}             | Removes the Item resource.                        |
|                 | PATCH      | /api/items/{id}             | Updates the Item resource.                        |
| **Service**     | GET        | /api/services               | Retrieves the collection of Service resources.    |
|                 | POST       | /api/services               | Creates a Service resource.                       |
|                 | GET        | /api/services/{id}          | Retrieves a Service resource.                     |
|                 | DELETE     | /api/services/{id}          | Removes the Service resource.                     |
|                 | PATCH      | /api/services/{id}          | Updates the Service resource.                     |
