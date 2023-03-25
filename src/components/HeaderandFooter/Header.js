import React from 'react';
import { View, Text} from 'react-native';


const Header = (props) => {
    const { textStyling, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyling}>{props.title}</Text>
        </View>
    );
}

const styles = {
    textStyling: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 17,
        lineHeight: 19,
        display: "flex",
        alignItems: "center",
        color: "#212121",
    },

    viewStyle: {
        backgroundColor: '#FFFFFF',
        height: 55,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',


    },
};

export default Header