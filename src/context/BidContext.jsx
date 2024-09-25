import React, {createContext, useState} from "react";
export const BidContext=createContext()

export default function BidContextProvider(props){
    const [profilePicUrl, setProfilePicUrl] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    
    if(localStorage.getItem("auth-token")){
        fetch("http://localhost:1169/api/user-data", {
            method: "GET",
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("auth-token")}`
            } 
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            setProfilePicUrl(data.img_src);
            data.user_type==="admin"?setIsAdmin(true):setIsAdmin(false);
        }).catch(err=>{
            console.log(err);
            localStorage.clear("auth-token");
        })
    }
    
    const saveProfilePic=(img_src)=>{
        setProfilePicUrl(img_src);
        //console.log(`provided link to context: ${img_src}`);
    }
    const setUserType = (type)=>{
        type==="admin"? setIsAdmin(true): setIsAdmin(false)
        //console.log(`user's role set: ${type}`)
    }
    const contextValue={profilePicUrl, isAdmin, saveProfilePic, setUserType};
    return (
        <BidContext.Provider value={contextValue}>
            {props.children}
        </BidContext.Provider>
    )
}