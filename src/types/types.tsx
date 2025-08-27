// USER
type user = {
    username:string, name:string, password:string, email:string, theme:string,
    inventories:Array<string>,
    profile:user_profile, settings: user_settings
}

type user_profile = {

}

type user_settings = {

}


// INVENTORY
type inventory = Array<inventory_slot>

type inventory_slot = {
    index:number, row:number, column:number, tag:string, 
    item:string
} // the item property is a pointer that points to an item stored in the items Table in the database


type inventory_item = {
    id:string, name:string, rarity:string
}

export type { 
    user, user_profile, user_settings,
    inventory, inventory_slot, inventory_item 
}