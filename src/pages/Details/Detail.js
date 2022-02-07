import React from "react";
import { Dimensions, SafeAreaView, ScrollView, Linking, View, Text } from "react-native";
import Config from "react-native-config";
import RenderHTML from "react-native-render-html";
import useFetch from "../../hooks/useFetch";
import styles from './Detail.styles';
import Button from '../../components/Buttons';

function JobDetail({ route }) {
    const { id } = route.params;
    const { data } = useFetch(`${Config.API_JOBS_URL}/${id}`)
    const { width } = Dimensions.get("window")
    const htmlSource = {
        html: data.contents
    }

    const handleSubmit = () => {
        Linking.openURL(data.refs.landing_page);
    }
    const addFavorite = () => {
        console.log(id)
    }

    const Buttons = ({ onPress, onSubmit }) => {
        return (
            <View style={styles.buttons}>
                <Button buttonText="Submit" onPress={onSubmit} iconName="login" />
                <Button buttonText="Favorite Job" onPress={onPress} iconName="heart" />
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollview}>
                <RenderHTML source={htmlSource} contentWidth={width} />
            </ScrollView>
            <Buttons onPress={() => handleSubmit} onSubmit={() => addFavorite} />
        </SafeAreaView>
    )
}

export default JobDetail;