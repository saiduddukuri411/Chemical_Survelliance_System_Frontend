
const state = {
    authToken: '',
    isLoggedIn: false
    
};

const mutations = {
    UPDATE_TOKEN: ( state, payload ) => {
        state.authToken = payload;
    },
    UPDATE_LOGIN: ( state ) => {
        state.isLoggedIn = !state.isLoggedIn;
    }
}

// these actions are triggered based on key passed to the function
const actions = {
    
    getActions: () => {
        console.log('')
    }
}



const getters = {

    getToken: ( state ) => {
        return state.authToken
    },
    getLoginStatus: ( state ) => {
        return state.isLoggedIn
    }
};

export default { state, mutations, actions, getters };