import React from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import useFetch from '../../hooks/useFetch';
import Config from "react-native-config";
import JobCard from "../../components/JobCard";


function Jobs({ navigation }) {
    const { data } = useFetch(`${Config.API_JOBS_URL}?page=${1}`)

    const handleSelected = (id) => {
        console.log(id)
        navigation.navigate("JobDetails", { id })
    }
    const renderItem = ({ item }) => <JobCard job={item} onSelected={() => handleSelected(item.id)} />
    return (
        <SafeAreaView>
            <FlatList data={data.results} renderItem={renderItem} />
        </SafeAreaView>
    )
}
export default Jobs;