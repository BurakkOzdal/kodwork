import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './Button.styles';

function Button({ buttonText, iconName, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon style={styles.icon} name={iconName} size={30} color="white"/>
            <Text style={styles.text}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

export default Button;