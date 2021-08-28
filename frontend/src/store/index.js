import { createStore } from 'vuex';

import Records from "./modules/records";
import Auth from "./modules/auth";
import SearchQuery from "./modules/searchQuery";


export default createStore({
    modules:{
        Records,
        Auth,
        SearchQuery
    }
})