
// COMPONENTS
import { Inventory } from "./main_panel/inventory"

function MainPanel ():React.JSX.Element {
    const mockInventory = [
            { index:0, row:0, column:0, tag:'A1', item:''},
            { index:1, row:0, column:1, tag:'A2', item:''},
            { index:2, row:0, column:2, tag:'A3', item:''},
            { index:3, row:0, column:3, tag:'A4', item:''},
            { index:4, row:0, column:4, tag:'A5', item:''},
            { index:5, row:0, column:5, tag:'A6', item:''},
            { index:6, row:0, column:6, tag:'A7', item:''},
            { index:7, row:0, column:7, tag:'A8', item:''},

            { index:8, row:1, column:0, tag:'B1', item:''},
            { index:9, row:1, column:1, tag:'B2', item:''},
            { index:10, row:1, column:2, tag:'B3', item:''},
            { index:11, row:1, column:3, tag:'B4', item:''},
            { index:12, row:1, column:4, tag:'B5', item:''},
            { index:13, row:1, column:5, tag:'B6', item:''},
            { index:14, row:1, column:6, tag:'B7', item:''},
            { index:15, row:1, column:7, tag:'B8', item:''},

            { index:16, row:2, column:0, tag:'C1', item:''},
            { index:17, row:2, column:1, tag:'C2', item:''},
            { index:18, row:2, column:2, tag:'C3', item:''},
            { index:19, row:2, column:3, tag:'C4', item:''},
            { index:20, row:2, column:4, tag:'C5', item:''},
            { index:21, row:2, column:5, tag:'C6', item:''},
            { index:22, row:2, column:6, tag:'C7', item:''},
            { index:23, row:2, column:7, tag:'C8', item:''},

            { index:24, row:3, column:0, tag:'D1', item:''},
            { index:25, row:3, column:1, tag:'D2', item:''},
            { index:26, row:3, column:2, tag:'D3', item:''},
            { index:27, row:3, column:3, tag:'D4', item:''},
            { index:28, row:3, column:4, tag:'D5', item:''},
            { index:29, row:3, column:5, tag:'D6', item:''},
            { index:30, row:3, column:6, tag:'D7', item:''},
            { index:31, row:3, column:7, tag:'D8', item:''},           
        ]

    return (
        <div className='flex flex-row w-full h-full items-center content-center justify-center bg-white'>
            <Inventory inventory={mockInventory}/>
        </div>
    )
}

export default MainPanel