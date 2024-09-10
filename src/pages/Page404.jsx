import React from "react";
import { Link } from "react-router-dom";
const Page404=()=>{
    return(
        <>
            <div>
                Bro I don't know what page you are accessing
            </div>
            <div >
                <img src="https://cdn2.iconfinder.com/data/icons/auction-and-competition-smooth-3/64/lose-break-hammer-broken-bid-auction-512.png" alt="Broken auction hammer" />
            </div>
            <div>
                <Link to="/">
                    Go Home
                </Link>
            </div>
        </>
    )
}
export default Page404