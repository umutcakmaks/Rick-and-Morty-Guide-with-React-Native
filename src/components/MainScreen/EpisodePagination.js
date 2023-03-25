import React from "react";
import { Text, ScrollView, Modal, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Entypo"


import Item from "../CardDesign/Item";
import ItemSection from "../CardDesign/ItemSection";
import Character from "./Character";


const EpisodePagination = () => {
    const dispatch = useDispatch();
    const episodeDetail = useSelector(episode => episode.episodeDetail)

    const renderList = () => {
        if (episodeDetail) {
            return episodeDetail.characters.map((character, index) => {
                return <Character key={index} props={character} />
            });
        }
    }

    return (
        <Modal>
            <View style={styles.viewStyle} >
                <TouchableOpacity onPress={() => { dispatch({ type: "EPISODE_CLOSE" }) }} style={styles.close} ><Icon name="chevron-left" color="black" size={32}></Icon></TouchableOpacity>
                <View style={styles.viewRow}>
                    <Text style={styles.headerText}>{episodeDetail.name}</Text>
                    <Text style={styles.episodeText}> {episodeDetail.episode} </Text>
                </View>
            </View>
            <Item>
                <ItemSection>
                    <ScrollView>
                        {renderList()}
                    </ScrollView>
                </ItemSection>
            </Item>
        </Modal>
    );
}

const styles = {

    headerText: {
        fontSize: 15,
        fontWeight: "700",
        textTransform: "uppercase",
        color: "black",
        textAlign: "center"
    },

    episodeText: {
        fontSize: 15,
        textTransform: "uppercase",
        color: "black",
        textAlign: "center"
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: 0
    },

    viewRow: {
        justifyContent: "center",
        alignItems: "center",
    },

    viewStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

    },

    close: {
        position: "absolute",
        height: 30,
        width: 30,
        borderRadius: 12,
        left:0,
    }

}

export default EpisodePagination;