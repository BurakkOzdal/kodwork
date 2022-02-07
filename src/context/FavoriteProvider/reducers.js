import AsyncStorageLib from "@react-native-async-storage/async-storage";

function reducers(state, action) {
    switch (action.type) {
        case "SET_FAVORITE":
            const{favorite}=action.payload;
            AsyncStorageLib.setItem("@FAVORİTE",JSON.stringify(favorite))
            return{...state,action}
        case "REMOVE_FAVORITE":
            const {favorite}=action.payload;
            AsyncStorageLib.removeItem("@FAVORITE")
            return{...state,favorite:null}
        default:
            return state;
    }
}
export default reducers