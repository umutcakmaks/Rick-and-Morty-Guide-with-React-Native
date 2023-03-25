import update from 'immutability-helper';

export default function (state, action) {

    switch (action.type) {

        case "NEXT_PAGE":
            if (state.nextPage) {
                return update(state, {
                    currentPage: { $set: state.nextPage },
                    isLoad: { $set: true }
                })
            } else {
                return state
            }

        case "PREV_PAGE":
            if (state.prevPage) {
                return update(state, {
                    currentPage: { $set: state.prevPage },
                    isLoad: { $set: true }
                })
            } else {
                return state
            }

        case "RESET_LOAD":
            return update(state, {
                isLoad: { $set: false }
            })

        case "EPISODE_DETAIL":
            const { detail } = action.payload;
            return update(state, {
                episodeDetail: { $set: detail },
                visible: {$set: true}
            })

        case "CHARACTER_DETAIL":
            const { characterDetails } = action.payload;
            return update(state, {
                characterDetail: { $set: characterDetails },
            })
        case "EPISODE_CLOSE":
            return update(state, {
                visible: {$set: false}
            })

        case "LIST_EPISODE":
            const { data } = action.payload;
            if (data.info.prev) {
                return update(state, {
                    episodeList: { $set: data },
                    nextPage: { $set: data.info.next },
                    prevPage: { $set: data.info.prev }
                })
            } else {
                return update(state, {
                    episodeList: { $set: data },
                    nextPage: { $set: data.info.next }
                })
            }

        default:
            return state
    }
}
