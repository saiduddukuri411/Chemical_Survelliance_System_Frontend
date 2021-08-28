
const state = {
    query:""
};

const mutations = {
    UPDATE_SEARCH_QUERY: ( state, payload ) => {
        state.query = payload;
    }
};

const getters = {
    getSearchQuery: ( state ) => {
         return state.query
    }
}


export default { state, mutations, getters }