<script >
import { ref } from 'vue';
// import axios from "axios";
// import { BASE_URL } from "@/assets/assets";

export default {
  layout: 'home',
  setup() {
    const phone_number = ref(null);
    const username = ref(null);
    const password = ref(null);
    const email = ref(null);

    const onSubmit = () => {
      const values = {
        username: username.value,
        email: email.value,
        password: password.value,
        phone_number: phone_number.value
      };

      console.log("values", values);

      // axios.post(`${BASE_URL}register`, values)
      //   .then(
      //     (response) => {
      //       console.log(response);
      //       alert("User signed up successfully");
      //       // Do other stuff after successful sign up
      //     },
      //     (error) => {
      //       console.error(error);
      //       // Handle error
      //     }
      //   );
    };

    return {
      phone_number,
      username,
      password,
      email,
      onSubmit
    };
  }
};
</script>

<template>
  <div class="Container">
    <div class="Right-cont">
      <div class="logindiv">
        <div>
          <div class="heading">
            <h3>Register Account</h3>
            <p>Get your free JustConnect account now</p>
          </div>
        </div>
        <form @submit="onSubmit">
          <div class="useremaildiv">
            <label class="useremailtext" for="email">Email</label>
            <input
              class="useremailinputbox"
              placeholder="Enter Email"
              type="text"
              v-model="email"
            />
            <label class="useremailtext" for="email">Phone Number</label>
            <input
              class="userphoneinputbox"
              placeholder="Enter Phone Num"
              type="text"
              v-model="phone_number"
            />
            <label class="usernametext" for="name">Username</label>
            <input
              class="usernameinputbox"
              placeholder="Enter Username"
              type="text"
              v-model="username"
            />
            
            <label class="userpasswordtext" for="password">Password</label>
            <input
              class="userpasswordinputbox"
              placeholder="Enter Password"
              v-model="password"
            />
            <!-- <button v-if="isloading" class="loginbtn btnspinner">
              <i class="pi pi-spin pi-spinner-dotted"></i>
            </button>
            <button v-else class="loginbtn">Register</button>-->
            <button  class="loginbtn">Register</button>
          </div> 
          <div class="Signinwithdiv">
            <div class="leftLine"></div>
            <div class="signinwithtext">Sign up using</div>
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
            Already have an account ?
            <Nuxt-link to="/" class="signup">Login</Nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

/* Overall container */
.Container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #000;
  color: white;
}

/* Right container */
.Right-cont {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55vw;
  margin: 20px;
  background-color: #2c282e;
  border-radius: 10px;
  padding: 30px;
}

.logindiv {
  width: 35vw;
  padding: 20px 30px;
  background-color: #201d22;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.heading {
  text-align: center;
}

.heading h3 {
  font-size: 24px;
  margin: 0 0 18px 0;
}

.heading p {
  font-size: 17px;
  margin: 0px 0 20px 0;
}

.usernamediv,
.userpassworddiv,
.useremaildiv,
.userphonediv,
.RememberMediv,
.Loginbtndiv {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
}

.userpassworddiv {
  padding-bottom: 10px;
}

.usernametext,
.useremailtext,
.userphonetext,
.userpasswordtext {
  padding-bottom: 10px;
  font-size: 15px;
  margin-top: 10px;
}

.usernameinputbox,
.userphoneinputbox,
.useremailinputbox,
.userpasswordinputbox {
  width: 100%;
  padding: 10px;
  border: 1px solid #201d22;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #0d0c0d;
  color: #fff;
}

.errormsg {
  color: #bf3030;
  margin: 7px 0px 5px 5px;
}

.loginbtn {
  width: 100%;
  padding: 9px;
  background-color: #6838cf;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
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
  padding-top: 2px;
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
  margin: 5px 0;
}

.signup {
  color: #6838cf;
}
/* Media Query for responsiveness */
@media (max-width: 768px) {
}
</style>
