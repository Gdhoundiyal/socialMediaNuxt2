export const state = () => ({
    values: {
        username: "",
        password: "",
        email: "",
        phone_number: "",
    }
  });
  
  export const mutations = {
    updatesignupvalues(state, newName) {
      console.log("newName", newName.password);
      state.values.username = newName.username;
      state.values.password = newName.password;
      state.values.email = newName.email;
      state.values.phone_number = newName.phone_number;
    },
  };
  
  export const actions = {
    updatesignupvalues({ commit }, newValue) {
        console.log("newvalue from update action", newValue);
      commit("updatesignupvalues", newValue);
    },
  };
  