import React from 'react'
export default (params)=>{
    
    var formatDate=(inputDate)=> {
        const date = new Date(inputDate);
      
        const day = date.getDate().toString().padStart(2, '0');
        const month = date.getMonth().toString().padStart(2, '0');
        //const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        //"9 September 2024 //13:34"
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
    var formated_date=formatDate(params.value);
    return (
        <div className="end_date">
            {formated_date}
        </div>
    ) 
}
