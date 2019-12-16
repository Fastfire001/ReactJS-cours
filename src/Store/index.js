import { createStore } from 'redux'

import Movies from '../Movies'

const initState = {
    currentPage: "home",
    movies: Movies,
}

const reducer = (state = initState, action) => {

    if (action.type === 'CHANGE_CURRENTPAGE') {

        return {
           ...state,
            currentPage: action.data.currentPage
        }

    }

    

    return state
}

const store = createStore(reducer)

export default store
