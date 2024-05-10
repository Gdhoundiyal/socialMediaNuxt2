export const state = () => ({
    values: {
        username: "",
        password: ""
    }
  });
  
  export const mutations = {
    updatevalues(state, newName) {
      console.log("newName", newName.password);
      state.values.username = newName.username;
      state.values.password = newName.password;
    },
  };
  
  export const actions = {
    updatevalues({ commit }, newValue) {
        console.log("newvalue from update action", newValue);
      commit("updatevalues", newValue);
    },
  };
  