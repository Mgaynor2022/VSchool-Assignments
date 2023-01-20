import React from "react";
import data from "../data"
import Friend from "../friend";

export default function FriendList (){
    const friendList = data.map(item => <Friend key={item.name} item={item}/>)
        
    return(
        <div>
            {friendList}
        </div>
    )
}
      