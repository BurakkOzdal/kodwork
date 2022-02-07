import React from "react"
import FavoriteProvider from './context/FavoriteProvider';
import Router from './Router';
export default ()=>{
    return(
        <FavoriteProvider>
            <Router/>
        </FavoriteProvider>
    )
}