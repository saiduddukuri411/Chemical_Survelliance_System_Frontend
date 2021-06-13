import { getInitialSamplesData, getInitialPatientsData } from "./getters.js";
import { MANUAL_TOKEN as token } from "./baseURLS.js";

const state = {
  samples: null,
  patients: null,
  globalLoader: false,
};

const mutations = {
  INITIALIZE_SAMPLES: (state, payload) => {
    state.samples = payload;
  },
  INITIALIZE_PATIENTS: (state, payload) => {
    state.patients = payload;
  },
  CHANGE_GLOBAL_LOADER_STATE: (state, payload) => {
    state.globalLoader = payload;
  },
};

const actions = {
  getInitialSamplesData: async (ctx) => {
    await getInitialSamplesData(ctx, "CHANGE_GLOBAL_LOADER_STATE", token, "INITIALIZE_SAMPLES");
  },
  getInitialPatientsData: async (ctx) => {
    await getInitialPatientsData(ctx, "CHANGE_GLOBAL_LOADER_STATE", token, "INITIALIZE_PATIENTS");
  },
};

const getters = {

    getLoaderState: ( state ) => {
      return state.globalLoader
    },

    getSamplesList: ( state ) => {
        return state.samples
    },

    getPatientsList: ( state ) => {
        return state.patients;
    }
}

export default { state, mutations, actions, getters }
