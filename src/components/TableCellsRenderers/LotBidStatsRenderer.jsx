import React from "react";

export default (params)=>{
    if(params.value.closed){
        return(
            <div style={{color:"grey"}}>
                Sold
            </div>
        )
    }else if(params.value.max_bid===params.value.users_bid){
        return(
            <div style={{color:"#29ADB2"}}>
                You are on top{/*+{params.value.users_bid-params.value.max_bid}$*/}
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