import HistoryTable from './HistoryTable'
import { useMain } from '../utils/MainProvider'


const UserHistory = (props) => {
    const { mainState } = useMain()
    const {user, isAutenticated} = mainState
    const firstName = user.first_name
    
    return (
        <>
        <div className = "historyname"><h1>{firstName}'s Order History</h1></div>
        <HistoryTable user={props.user}/>
        </>
    )
}
export default UserHistory