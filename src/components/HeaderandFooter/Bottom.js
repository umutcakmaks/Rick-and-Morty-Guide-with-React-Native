import React from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/Entypo";
import { useDispatch } from "react-redux";

const width = Dimensions.get("window").width;

const Bottom = () => {
    const { viewStyle, button } = styles;
    const dispatch = useDispatch();

    return (
        <View style={viewStyle}>
            <TouchableOpacity onPress={() => {
                dispatch({ type: "PREV_PAGE" })
            }} style={[button, { borderWidth: 0, borderColor: 'black', borderRightWidth: 0.5 }]}><Icon name="arrow-left" color="black" size={32}></Icon></TouchableOpacity>
            <TouchableOpacity onPress={() => {
                dispatch({ type: "NEXT_PAGE" })
            }} style={[button, { borderWidth: 0, borderColor: 'black', borderLeftWidth: 0.5 }]}><Icon name="arrow-right" color="black" size={32}></Icon></TouchableOpacity>
        </View>
    );
}

const styles = {
    viewStyle: {
        backgroundColor: '#FFFFFF',
        height: 55,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',

    },

    button: {
        width: width / 2,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export default Bottom