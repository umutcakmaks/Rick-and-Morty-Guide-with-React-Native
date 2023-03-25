import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import axios from "axios";

import Item from "../CardDesign/Item";
import ItemSection from "../CardDesign/ItemSection";



const Character = ({ props }) => {
    const [char, setChar] = useState([]);
    const [vis, setVis] = useState(false);

    const fetchCharacter = async () => {
        await axios.get(props)
            .then((response) => {
                const detail = response.data
                setChar(detail)
            });
    }

    fetchCharacter()
    return (
            <Item>
                <TouchableOpacity onPress={() => setVis(true)}>
                    <ItemSection>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerText}>{char.name}</Text>
                            <Text style={styles.text}>Detay için tıklayınız...</Text>
                        </View>
                    </ItemSection>
                    <ItemSection>
                        <Image source={{ uri: char.image ? char.image : "https://cdn.discordapp.com/attachments/796385181921181696/1089212970761998417/pngwing.com_1.png" }} style={styles.imageStyle} />
                    </ItemSection>
                    {vis && <ItemSection>
                        <View style={styles.headerContainer}>
                            <Text style={styles.detailText}>Durumu: {char.status}</Text>
                            <Text style={styles.detailText}>Türü: {char.species}</Text>
                            <Text style={styles.detailText}>Cinsiyeti: {char.gender}</Text>
                            <Text style={styles.detailText}>Memleketi: {char.origin.name}</Text>
                            <Text style={styles.detailText}>Konumu: {char.location.name}</Text>
                        </View>
                    </ItemSection>}
                </TouchableOpacity>
            </Item>
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
    },

    text: {
        fontSize: 12,
    },

    detailText: {
        color: "black",
        fontSize: 16,
    }
}

export default Character;