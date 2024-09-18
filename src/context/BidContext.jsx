import React, {createContext, useState} from "react";
export const BidContext=createContext()

export default function BidContextProvider(props){
    const [profilePicUrl, setProfilePicUrl] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    
    const saveProfilePic=(img_src)=>{
        setProfilePicUrl(img_src);
        //console.log(`provided link to context: ${img_src}`);
    }
    const setUserType = (type)=>{
        type==="admin"? setIsAdmin(true): setIsAdmin(false)
    }
    const contextValue={profilePicUrl, isAuthenticated, isAdmin, saveProfilePic, setUserType};//profile image url, is authenticated, is admin
    return (
        <BidContext.Provider value={contextValue}>
            {props.children}
        </BidContext.Provider>
    )
}