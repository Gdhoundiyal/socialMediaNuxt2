export const state = () => ({
  name: "Home",
  openModal: false
});


export const mutations = {
  updateName(state, newName) {
    console.log("newName", newName);
    state.name = newName;
  },
  updateModal(state, newName) {
    console.log("newName", newName);
    state.openModal = newName;
  },
};

export const actions = {
    updateName({ commit }, newValue) {
    commit("updateName", newValue);
  },
  updateModal({ commit }, newValue) {
    commit("updateModal", newValue);
  },
};
