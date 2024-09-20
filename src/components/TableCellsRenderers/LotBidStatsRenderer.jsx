import React from "react";

export default (params)=>{
    //use context to check the current username to compare it with the top bidder username
    var myusername="username1"
    if(params.value.closed){
        return(
            <div style={{color:"grey"}}>
                Sold
            </div>
        )
    }else if(params.value.top_bidder_username===myusername){
        return(
            <div style={{color:"#29ADB2"}}>
                +{params.value.users_bid-params.value.max_bid}$
            </div>
        )
    }else{
        return(
            <div style={{color:"#FF3A20"}}>
                {params.value.users_bid-params.value.max_bid}$
            </div>
        )
    }
}