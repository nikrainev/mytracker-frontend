import React, {useEffect, useState} from "react";


const UsersList = (props) => {
    let users
    if(props.usersList !== undefined){
         users = props.usersList.map((user) => <div>{user.city}</div>)
        console.log(users)
    }


    return (
            <div className="container">
                Список счётчиков
                {users}
            </div>
    )
}





export default UsersList