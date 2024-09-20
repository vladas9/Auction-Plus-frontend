import React from 'react'
export default (params)=>{
    //console.log(params)
    return (
        <div className="status">
            {params.value?<div style={{color: "#0766AD"}}>Closed</div>:<div style={{color: "#29ADB2"}}>Opened</div>}
        </div>
    ) 
}
