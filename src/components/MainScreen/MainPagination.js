import React, { Component } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { connect } from "react-redux";
import axios from 'axios';

import EpisodeDetail from './EpisodeDetail';
import EpisodePagination from './EpisodePagination';

class MainPagination extends Component {


  componentDidMount() {
    axios.get(this.props.currentPage)
      .then((response) => {
        const data = response.data
        this.props.listEpisode(data)
      });
  }

  componentDidUpdate() {
    setTimeout(this.fetchData, 10000);
  }

  fetchData = async () => {
    await axios.get(this.props.currentPage)
      .then((response) => {
        const data = response.data
        this.props.listEpisode(data)
      });
    this.props.load()
  }

  renderList = () => {
    if (this.props.episode.results) {
      return this.props.episode.results.map((episode) => {
        return <EpisodeDetail key={episode.id} episode={episode} />
      });
    }
  }

  render() {
    return (
      <>
        <ScrollView>
          {this.renderList()}
        </ScrollView>
        {this.props.isLoad && <ActivityIndicator style={styles.indicator} size="large" color="white" />}
        {this.props.visible && <EpisodePagination />}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    nextPage: state.nextPage,
    episode: state.episodeList,
    isLoad: state.isLoad,
    visible: state.visible
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    listEpisode: (data) => dispatch({ type: 'LIST_EPISODE', payload: { data } }),
    load: () => dispatch({ type: 'RESET_LOAD' })
  }
}

const styles = {
  indicator: {
    position: "absolute",
    width: 75,
    height: 75,
    left: "40%",
    top: "45%",
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPagination);