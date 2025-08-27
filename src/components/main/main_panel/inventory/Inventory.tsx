// COMPONENTS
import { InventorySlot } from "./index"

import { type inventory, type inventory_slot } from "../../../../types/types"

// TYPE DECLARATIONS
type InventoryProps = {
    inventory: Array<inventory_slot>
}

function Inventory ({ inventory }:InventoryProps):React.JSX.Element {
    var number_of_rows = (inventory? 
        inventory[inventory.length-1]? 
        inventory[inventory.length-1].row? 
        (inventory[inventory.length-1].row + 1) : 0 : 0 : 0)

    var number_of_columns = (inventory? 
        number_of_rows? 
        (inventory.length / number_of_rows) : 0 : 0)

    return (
        <div className='flex flex-col gap-1 bg-zinc-900 rounded-md p-2'>
        { inventory? inventory.length > 0?
            [...Array(number_of_rows).keys()].map((a, row) => {
                return (
                    <div className='flex flex-row gap-1'>
                    {    [...Array(number_of_columns).keys()].map((a, column) => {
                            return <InventorySlot 
                                key={inventory[row*(number_of_columns) + column].tag} 
                                inventory_slot={inventory[row*(number_of_columns) + column]} />
                        })
                    }
                    </div>
                )
            })
            : <></> : <></>
        }
        {/* // })
        //     inventory[].map((inventory_slot:inventory_slot) => {
        //         return (
        //             
        //         )
        //     })
        // } */}
        </div>
    )
}

export default Inventory