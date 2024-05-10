export const state = () => ({
  name: "Home",
});


export const mutations = {
  updateName(state, newName) {
    console.log("newName", newName);
    state.name = newName;
  },
};

export const actions = {
    updateName({ commit }, newValue) {
    commit("updateName", newValue);
  },
};
