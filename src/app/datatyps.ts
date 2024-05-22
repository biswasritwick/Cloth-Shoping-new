export interface adminData {
    id: string,
    firstname: string,
    lastname: string,
    password: number,
    email: string,
    phone: number,
    workphone: number,
    service: undefined | boolean,
    telecaller: undefined | boolean,
    createdOn: string
}
export interface Dealersdata {
    firstname: string,
    lastname: string,
    password: number,
    email: string,
    phone: number,
    workphone: number,
    seller: undefined | boolean,
    id: string,
    address: string,
    createdOn: string,
    deller: string
}
export interface logdata {

    email: string,
    password: number,

}
export interface length {

    length: number | undefined

}
export interface sellerProduct {
    id: string,
    dealerName: string,
    product_name: string,
    product_price: number,
    product_colour: string,
    product_category: string,
    product_details: string,
    product_image_link: string,
    createdOn: string,
    quantity: number
}
export interface coustomerData {
    id: string,
    name: string,
    email: string,
    contact: number,
    password: number

}
export interface cartData {
    id: string | undefined,
    dealerName: string,
    product_name: string,
    product_price: number,
    product_colour: string,
    product_category: string,
    product_details: string,
    product_image_link: string,
    createdOn: string,
    quantity: number,
    productId: string,
    coustomerId: string,

}
export interface getcartData {
    id: string,
    dealerName: string,
    product_name: string,
    product_price: number,
    product_colour: string,
    product_category: string,
    product_details: string,
    product_image_link: string,
    createdOn: string,
    quantity: number,
    productId: string,
    coustomerId: string,

}
export interface localcartData {
    createdOn: string,
    dealerID: string,
    id: string,
    product_category: string,
    product_colour: string,
    product_details: string,
    product_image_link: string,
    product_name: string,
    product_price: string,
    quantity: number
}
export interface pricesummery {
    price: number,
    subtotal: number
    Tax: number
    Shipping: number
    total: number
}

export interface coustomerAddress {
    Address: string,
    Email: string,
    Contact_no: number,
    Land_mark: string
}
export interface coustomerorderProduct {
    id?:string,
    coustomerId:string,
    productId:string,
    dealerID:string,
    quantity:number,
    product_price:number,
    product_name:string,
   address:string,
   product_image_link: string,
   productOrder_stamp:string,
   sellerOrder_stamp:string|boolean,
   deliveryOrder_stamp:string|boolean,
   dealerAcceptedOrder:boolean|string
   deliveryOrder:boolean
}
