export const state = () => ({
  values: {
    username: "",
    password: "",
    email: "",
    phone_number: "",
  },
   
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
  async postSignupData({ commit }, newValue) {    

    let res = await this.$axios.post("http://116.202.210.102:5000/register", {
      username: newValue.username,
      password: newValue.password,
      email: newValue.email,
      phone_number: newValue.phone_number,
    });
      // if (res?.data?.status == 201) {
      //   alert(res.data.detail);
      //   this.$route.push('/')
      // } else if (res?.data?.status == 400) {
      //   alert(res?.data?.message);
      // } else if (message == 400) {
      //   alert(res?.data?.message);
      // }  else {
      //   alert(res?.data?.message);
      // }
      console.log(res, "responssse of axios");
      return res;
   
  },
};
