import React from "react";

export default (params)=>{
    //use context to check the current username to compare it with the top bidder username
    var myusername="username1"
    if(params.value.closed){
        return(
            <div style={{color:"grey"}}>
                Sold for {params.value.max_bid}
            </div>
        )
    }else if(params.value.top_bidder_username===params.value.myusername){
        return(
            <div style={{color:"green"}}>
                {params.value.max_bid-params.value.start_price}$ in advance for you
            </div>
        )
    }else{
        return(
            <div style={{color:"red"}}>
                {params.value.max_bid-params.value.start_price}$ more offered by {params.value.top_bidder_username}
            </div>
        )
    }
}