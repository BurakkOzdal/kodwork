import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        borderRadius:5,
        borderWidth:2,
        borderColor:"#aeaeae",
        backgroundColor:"#e0e0e0",
        margin:10,
        padding:10
    },
    title:{
        fontSize:23,
        fontWeight:"bold",
    },
    company_name:{
        fontSize:21
    },
    job_location_view:{
        padding:8,
        borderRadius:8,
        backgroundColor:"red",
        alignSelf:"baseline"
    },
    job_location_title:{
        fontSize:20,
        color:"white"
    },
    job_level_view:{
        alignSelf:"flex-end",
        padding:8,
    },
    job_level_title:{
        color:"red",
        fontWeight:"bold",
        fontSize:18
    },
});
