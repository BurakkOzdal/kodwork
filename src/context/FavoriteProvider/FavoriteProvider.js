import AsyncStorageLib from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

function FavoriteProvider({children}) {
    const[favorite,setFavorite]=useState([]);
    const[isFavoriteLoading,setFavoriteLoading]=useState(true);

    useEffect(()=>{
        AsyncStorageLib.getItem("@FAVORITE").then(favoriteSession=>{
            favoriteSession && setFavorite(JSON.parse(favoriteSession))
            setFavoriteLoading(false)
        })
    },[])

    const store=createStore(reducers,{favorite,isFavoriteLoading})
    return <Provider store={store}>{children}</Provider>
}
export default FavoriteProvider;