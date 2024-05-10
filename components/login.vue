<template>
  <div class="Container">
    <div class="Right-cont">
      <div class="logindiv">
        <div>
          <div class="heading">
            <h3>Welcome Back !</h3>
            <p>Log in to continue with JustConnect</p>
          </div>
        </div>
        <form @submit.prevent="onSubmit">
          <div class="usernamediv">
            <label class="usernametext" for="name">Username</label>
            <input
              class="usernameinputbox"
              placeholder="Enter Username"
              type="text"
              v-model="values.username"
            />
            <!-- <span class="errormsg">{{ errors?.username }}</span> -->
          </div>
          <div class="userpassworddiv">
            <label class="userpasswordtext" for="password">Password</label>
            <input
              class="userpasswordinputbox"
              placeholder="Enter Password"
              type="password"
              v-model="values.password"
            />
            <!-- <span cl
              ass="errormsg">{{ errors?.password }}</span> -->
          </div>
          <div class="Loginbtndiv">
            <!-- <button v-if="isloading" class="loginbtn btnspinner">
              <i class="pi pi-spin pi-spinner-dotted"></i>
            </button> -->
            <!-- <Nuxt-link to="/signup" class="signup">Sign Up</Nuxt-link> -->
            <button   class="loginbtn">Login</button>
            <!-- <Nuxt-link  to="/home/feed" v-else class="loginbtn">Login</Nuxt-link> -->
          </div>
          <div class="Signinwithdiv">
            <div class="leftLine"></div>
            <div class="signinwithtext">Sign in with</div>
            <div class="rightLine"></div>
          </div>
          <div class="socialicons">
            <div class="piDiv">
              <i class="pi pi-facebook"></i>
            </div>
            <div class="piDiv">
              <i class="pi pi-twitter"></i>
            </div>
            <div class="piDiv">
              <i class="pi pi-google"></i>
            </div>
          </div>
        </form>
        <div class="Registerdiv">
          <p class="Registercontent">
            Don't have an account ?
            <Nuxt-link to="/signup" class="signup">Sign Up</Nuxt-link>
          </p>
        </div>
      </div>
    </div>
    {{ JSON.stringify(values, 0, 1) }}
    <div> {{ usersignupData }}</div>
    <div> {{ userloginData }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      values: {
        username: null,
      password: null,
      }
    
    };
  },
  computed:{
    userloginData(){
      return this.$store.state.loginStore.values
    },
    usersignupData(){
      return this.$store.state.signupStore.values
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('updatevalues',this.values)
      console.log("values");
    },
  },
};
</script>

<style scoped>
/* Overall container */

.Container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #201d22;
  color: white;
}


/* Right container */
.Right-cont {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55vw;
  padding: 20px;
  background-color: #2c282e;
  border-radius: 10px;
  padding: 30px;
}

.logindiv {
  width: 35vw;
  padding: 30px;
  background-color: #2c282e;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

}

.heading {
  text-align: center;
}

.heading h3 {
  font-size: 29px;
  margin: 0 0 10px 0;
}

.heading p {

  font-size: 20px;
  margin: 20px 0;
}

.usernamediv,
.userpassworddiv,
.RememberMediv,
.Loginbtndiv {
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
}

.userpassworddiv {
  padding-bottom: 10px;
}

.usernametext,
.userpasswordtext {
  padding-bottom: 10px;
}

.usernameinputbox,
.userpasswordinputbox {
  width: 100%;
  padding: 10px;
  border: 1px solid #201d22;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #201d22;
  color: #fff
}

.errormsg {
  color: #bf3030;
  margin: 7px 0px 5px 5px;
}

.Remembercheckbox {
  margin-right: 10px;
}

.loginbtn {
  width: 100%;
  padding: 9px;
  background-color: #6838cf;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
    text-align: center;
}

.btnspinner {
  padding: 5px;
}

.pi-spin {
  font-size: 16px;
  padding: 5px;
  color: white;
}

.Signinwithdiv {
  display: flex;
  align-items: center;
  margin: 15px 0;
  padding-top: 7px;
}

.leftLine,
.rightLine {
  flex: 1;
  height: 1px;
  background-color: #3f3b3b;
}

.signinwithtext {
  margin: 0 10px;
  text-transform: uppercase;
  font-size: 14px;
}

.piDiv {
  width: 5vw;
  /* border: 1px solid black; */
  border-radius: 4px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2c282e;
  padding-top: 7px;

}

.socialicons {
  display: flex;
  justify-content: space-evenly;
  padding-top: 7px;
}

.Registerdiv {
  text-align: center;
}

.Registercontent {
  text-align: center;
  font-size: 16px;
  padding-top: 15px; 
 
}
.signup {
  color: #6838cf;
}
/* Media Query for responsiveness */
@media (max-width: 768px) {
}
</style>
