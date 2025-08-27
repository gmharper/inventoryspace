// IMPORTS
import { type inventory_slot } from "../../../../types/types"

// TYPE DECLARATION
type InventorySpaceProps = {
    inventory_slot:inventory_slot
}

const empty_slot = {
    index:0, tag:'empty', item:''
}

function InventorySlot ({ inventory_slot=empty_slot }:InventorySpaceProps):React.JSX.Element {
    return (
        <div className='flex w-16 h-16 rounded-sm overflow-hidden bg-stone-200 outline-1 outline-zinc-600 p-1'>
            <p className='text-black'>{ inventory_slot? inventory_slot.tag : empty_slot.tag }</p>
        </div>
    )
}

export default InventorySlot