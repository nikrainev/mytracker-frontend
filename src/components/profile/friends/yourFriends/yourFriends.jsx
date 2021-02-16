import React from 'react';
import s from '../friends.module.scss';
import s2 from './yourFriends.module.scss'
import {offsetText} from "../../../../utils/textTransformation";
const YourFriends = (props) => {
    let friendsList = []
    let deleteFriend = (userId) =>{
      props.deleteFriend(userId)
    }
    if(props.friends !== "no friends"){
        friendsList = props.friends.map((friend)=> <div className={s.line}>
            <div className={s.names_row}>
                <p className="name">{friend.name}</p>
                <p className="soname">{friend.soName}</p>
            </div>
            <div className={s.company}>{friend.company}</div>
            <div className={s.description}><p className={s.description_p}>{offsetText(friend.description)}</p></div>
            <button className={s2.delete_button} onClick={()=>{deleteFriend(friend.userId)}}>Удалить из друзей</button>
        </div>)
    }else{
        friendsList = "No friends"
    }
    return  (
            <div className={s2.yourFriends}>
                <h2>Ваши друзья:</h2>
                {friendsList}


                <button className={s.load_more+" attractive-button"}>Загрузить ещё</button>
            </div>


    );
}
export default YourFriends;