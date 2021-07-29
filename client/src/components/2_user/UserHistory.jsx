import HistoryTable from './HistoryTable'


const UserHistory = (props) => {
    return (
        <>
        <div className = "historyname"><h1>{props.user.first_name}'s Order History</h1></div>
        <HistoryTable user={props.user}/>
        </>
    )
}
export default UserHistory