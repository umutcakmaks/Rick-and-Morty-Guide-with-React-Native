import React from "react";
import { Text, View, Image, Modal } from "react-native";

import Item from "../CardDesign/Item";
import ItemSection from "../CardDesign/ItemSection";


const CharacterDetail = ({ vis, onClose }) => {
    return (
        <Modal>
            <Item>
                <ItemSection>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>data.name</Text>
                        <Text style={styles.headerText}> </Text>
                    </View>
                </ItemSection>
            </Item>
        </Modal>
    );
}

const styles = {
    headerContainer: {
        flexDirection: "column",
        justifyContent: "space-between"
    },

    headerText: {
        fontSize: 18,
        fontWeight: "700",
        textTransform: "uppercase",
        color: "black"
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: 0
    }
}

export default CharacterDetail;