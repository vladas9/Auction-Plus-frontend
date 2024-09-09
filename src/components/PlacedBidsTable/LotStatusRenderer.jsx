import React from 'react'
export default (params)=>{
    console.log(params)
    return (
        <div className="status">
            {params.value?<div style={{color: "red"}}>Closed</div>:<div style={{color: "green"}}>Opened</div>}
        </div>
    ) 
}
