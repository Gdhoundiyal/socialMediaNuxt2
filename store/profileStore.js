export const state = () => ({
  modalstat: false,
  });
  
  
  export const mutations = {
    updateModal(state, value) {
      console.log("value from modal mutations", value);
      state.modalstat = value;
    },
  };
  
  export const actions = {
    updateModal({ commit }, newValue) {
      console.log("value from modal actions", newValue);
      commit("updateModal", newValue);
    },
  };
  