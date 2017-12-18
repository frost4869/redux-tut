const initialStates = {
    reactVotes: 0,
    angularVotes: 0,
    vueVotes: 0
}

export default (state = initialStates, action) => {
    switch (action.type) {
        case 'VOTE_REACT':
            {
                console.log('click react')
                return Object.assign({}, state, {
                    reactVotes: state.reactVotes + 1
                })
                break;
            }
        case 'VOTE_ANGULAR':
            {
                console.log('click angular')
                
                return Object.assign({}, state, {
                    angularVotes: state.angularVotes + 1
                })
                break;
            }
        case 'VOTE_VUE':
            {
                console.log('click vue')
                
                return Object.assign({}, state, {
                    vueVotes: state.vueVotes + 1
                })
                break;
            }
        default:
            return state;
    }
}