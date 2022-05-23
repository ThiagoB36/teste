import { Platform } from 'react-native'
import DndAndroid from "./DnDAndroid"
import DndWeb from "./DnDWeb"


export const DnDNat=()=>{
    const sistem= Platform.OS
    console.log({sistem})
    const dnd = sistem ==="web" ? <DndWeb />  : <DndAndroid/>

return dnd
}
export default DnDNat