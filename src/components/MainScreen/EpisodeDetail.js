import axios from "axios";
import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import Item from "../CardDesign/Item";
import ItemSection from "../CardDesign/ItemSection";



class EpisodeDetail extends Component {

    fetchEpisode = async () => {
        await axios.get(this.props.episode.url)
            .then((response) => {
                const detail = response.data
                this.props.episodeDetails(detail)
            });
    }
    render() {
        return (
                <Item>
                    <TouchableOpacity onPress={async () => {
                        await this.fetchEpisode()
                    }}>
                        <ItemSection>
                            <View style={styles.headerContainer}>
                                <Text style={styles.headerText}>Adı:    {this.props.episode.name}</Text>
                                <Text style={styles.headerText}>Bölüm:   {this.props.episode.episode} </Text>
                                <Text style={styles.headerText}>Çıkış Tarihi:    {this.props.episode.air_date} </Text>
                            </View>
                        </ItemSection>
                    </TouchableOpacity>

                </Item>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        episodeDetail: state.episodeDetail,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        episodeDetails: (detail) => dispatch({ type: 'EPISODE_DETAIL', payload: { detail } }),
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeDetail);