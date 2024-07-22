export interface Article {
    id_article: number;
    article_name: string;
    article_url_image: string;
    sub_category_id: number;
}

export interface Category {
    id_category: number;
    category_name: string;
}

export interface City {
    id_city: number;
    city_zc: string;
    country_id: number;
}

export interface Commande {
    id_order: number;
    date_depot: Date;
    date_restitution: Date;
    order_payment_date: Date;
    moyen_payment_id: number;
    user_id: number;
}

export interface Country {
    id_country: number;
    country_name: string;
    // Note: Ceci semble être une erreur dans l'extraction; cela devrait probablement être 'string'
}

export interface Item {
    id_item: number;
    commande_id: number;
    user_employee_id: number;
    item_etat_id: number;
    service_status_id: number;
    detail_item: string;
    article_id: number;
    service_id: number;
    material_id: number;
}

export interface ItemEtat {
    id_item_etat: number;
    item_etat_name: string;
    item_etat_coeff: number;
}

export interface Material {
    id_material: number;
    // Note: Manque des champs spécifiques à 'material'
}

export interface MoyenPayment {
    id_moyen_payment: number;
    moyen_payment_name: string;
}

export interface Role {
    id_role: number;
    role_name: string;
}

export interface Service {
    id_service: number;
    service_image: string;
    service_html: string;
}

export interface SubCategory {
    id_sub_category: number;
    category_id: number;
}

export interface User {
    id_user: number;
    user_firstname: string;
    user_lastname: string;
    user_phone: string;
    user_email: string;
    user_pwd: string;
    user_born: Date;
    user_num_adrs_billing: number;
    user_adrs1_billing: string;
    user_adrs2_billing: string;
    user_num_adrs_delivery: number;
    user_adrs1_delivery: string;
    user_adrs2_delivery: string;
    id_city_billing: number;
    id_city_delivery: number;
    role_id: number;
}
