// IMPORTS
import { type inventory_slot } from "../../../../types/types"

// TYPE DECLARATION
type InventorySpaceProps = {
    inventory_slot:inventory_slot
}

const empty_slot = {
    index:0, row:0, column:0, tag:'empty', item:''
}

function InventorySlot ({ inventory_slot=empty_slot }:InventorySpaceProps):React.JSX.Element {
    return (
        <button 
            className='flex w-16 h-16 rounded-sm overflow-hidden bg-stone-200 outline-2 outline-zinc-600 p-1'
            onClick={() => {}}>
            <p className='text-black'>{ inventory_slot? inventory_slot.tag? inventory_slot.tag : empty_slot.tag : empty_slot.tag }</p>
        </button>
    )
}

export default InventorySlot