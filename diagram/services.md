classDiagram
direction TB
class node10 {
    TestBed
}
class node34 {
    Injectable
    inject
}
class node40 {
    HttpClient
    HttpErrorResponse
    HttpHeaders
}
class node41 {
    Router
}
class node26 {
    environment
}
class node35 {
    Category
}
class node29 {
    jwtDecode
}
class node24 {
    IToken
}
class node36 {
    CategoryCollection
}
class node32 {
    ClientCollection
    IClient
}
class node27 {
    ICommande
}
class node1 {
    Employee
    EmployeeCollection
}
class node21 {
    IHydraCollection
}
class node19 {
    Iitem
}
class node5 {
    IitemStatus
}
class node11 {
    IService
}
class node13 {
    IshoppingCartItem
}
class node25 {
    IUser
    User
}
class node3 {
    Observable
}
class node28 {
    map
    throwError
}
class node14 {
    AuthService
    TestBed
}
class node22 {
    AuthService
    HttpClient
    HttpErrorResponse
    IToken
    IUser
    Injectable
    Observable
    Router
    environment
    inject
    jwtDecode
    throwError
}
class node12 {
    CartService
    TestBed
}
class node6 {
    CartService
    Injectable
    IshoppingCartItem
}
class node15 {
    CategoryService
    TestBed
}
class node30 {
    Category
    CategoryCollection
    CategoryService
    HttpClient
    Injectable
    Observable
    environment
    inject
}
class node31 {
    ClientService
    TestBed
}
class node39 {
    ClientCollection
    ClientService
    HttpClient
    IClient
    ICommande
    Injectable
    Observable
    environment
    inject
}
class node20 {
    CommandeService
    TestBed
}
class node9 {
    CommandeService
    HttpClient
    HttpHeaders
    ICommande
    Injectable
    Observable
    environment
    inject
}
class node17 {
    EmployeeService
    TestBed
}
class node18 {
    Employee
    EmployeeCollection
    EmployeeService
    HttpClient
    Injectable
    Observable
    environment
    inject
}
class node4 {
    ItemStatusService
    TestBed
}
class node37 {
    HttpClient
    IHydraCollection
    IitemStatus
    Injectable
    ItemStatusService
    Observable
    environment
    inject
    map
}
class node38 {
    ItemService
    TestBed
}
class node23 {
    HttpClient
    IHydraCollection
    Iitem
    Injectable
    ItemService
    Observable
    environment
    inject
    map
}
class node2 {
    ServiceService
    TestBed
}
class node7 {
    HttpClient
    IHydraCollection
    IService
    Injectable
    Observable
    ServiceService
    environment
    inject
    map
}
class node8 {
    ShoppingCartService
    TestBed
}
class node0 {
    Injectable
    IshoppingCartItem
    ShoppingCartService
}
class node16 {
    TestBed
    UserService
}
class node33 {
    HttpClient
    HttpHeaders
    IUser
    Injectable
    Observable
    User
    UserService
    environment
    inject
}

node10  -->  node14 
node22  -->  node14 
node40  -->  node22 
node40  -->  node22 
node41  -->  node22 
node34  -->  node22 
node34  -->  node22 
node26  -->  node22 
node29  -->  node22 
node24  -->  node22 
node25  -->  node22 
node3  -->  node22 
node28  -->  node22 
node10  -->  node12 
node6  -->  node12 
node34  -->  node6 
node13  -->  node6 
node10  -->  node15 
node30  -->  node15 
node40  -->  node30 
node34  -->  node30 
node34  -->  node30 
node26  -->  node30 
node35  -->  node30 
node36  -->  node30 
node3  -->  node30 
node10  -->  node31 
node39  -->  node31 
node34  -->  node39 
node34  -->  node39 
node40  -->  node39 
node26  -->  node39 
node32  -->  node39 
node32  -->  node39 
node27  -->  node39 
node3  -->  node39 
node10  -->  node20 
node9  -->  node20 
node34  -->  node9 
node34  -->  node9 
node40  -->  node9 
node40  -->  node9 
node26  -->  node9 
node27  -->  node9 
node3  -->  node9 
node10  -->  node17 
node18  -->  node17 
node40  -->  node18 
node34  -->  node18 
node34  -->  node18 
node26  -->  node18 
node1  -->  node18 
node1  -->  node18 
node3  -->  node18 
node10  -->  node4 
node37  -->  node4 
node34  -->  node37 
node40  -->  node37 
node34  -->  node37 
node26  -->  node37 
node21  -->  node37 
node5  -->  node37 
node3  -->  node37 
node28  -->  node37 
node10  -->  node38 
node23  -->  node38 
node34  -->  node23 
node34  -->  node23 
node40  -->  node23 
node26  -->  node23 
node21  -->  node23 
node19  -->  node23 
node3  -->  node23 
node28  -->  node23 
node10  -->  node2 
node7  -->  node2 
node40  -->  node7 
node34  -->  node7 
node34  -->  node7 
node26  -->  node7 
node21  -->  node7 
node11  -->  node7 
node3  -->  node7 
node28  -->  node7 
node10  -->  node8 
node0  -->  node8 
node34  -->  node0 
node13  -->  node0 
node10  -->  node16 
node33  -->  node16 
node40  -->  node33 
node34  -->  node33 
node34  -->  node33 
node40  -->  node33 
node26  -->  node33 
node25  -->  node33 
node25  -->  node33 
node3  -->  node33 
