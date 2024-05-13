  export const state = () => ({
    values: {
        username: "",
        password: ""
    },
    accessToken: null,
  });
  
  export const mutations = {
    updatevalues(state, newName) {
      console.log("newName", newName.password);
      state.values.username = newName.username;
      state.values.password = newName.password;
    },
    updateloginvalues(state, newAccessTOken) {
      console.log("newAccessTOken",newAccessTOken );
      state.values.access_token = newAccessTOken
    },
  };
  
  export const actions = {
    updatevalues({ commit }, newValue) {
        console.log("newvalue from update action", newValue);
      commit("updatevalues", newValue);
    },
    async postLoginData({ commit }, newValue) {
      console.log("postLoginData",newValue.password, )
      let header = newValue
      try{

      let res = await this.$axios.post('http://116.202.210.102:5000/login',{
          username: header.username,
          password: header.password
      })
      if(res?.data?.access_token){
        commit('updateloginvalues',res.data.access_token)
        localStorage.setItem('accessToken', res.data.access_token)
        alert("user logeed in successfully")
        this.$router.push('/home/feed')
      }else{
        alert(res?.data?.detail)
      }
      console.log(res,"responssse of axios")
      return res;
      
    }catch(error){
        console.log(error)
    }
    }
  };
  