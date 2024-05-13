<script >

export default {
  data() {
    return {
      a: 56,
      updatedImg: null,
      logoutbtn: false
    };
  },
  computed: {
    navData() {
      return this.$store.state.navStore.name
    },
	},
  methods: {
    logoutOn() {
      
    },
   
    logoutFunc() {
      localStorage.clear()
      this.$router.push('/')
    },
    logbtnoff() {
       this.logoutbtn = true
    },
    outside() {
        this.logoutbtn = false
    }
  }
};
</script>

<template>
    <div class="Navcont" >
        <div class="sectionName">
            <!-- <i class="pi pi-align-justify"></i> -->
            <!-- <p>justconnect</p> -->
            <p>{{navData}}</p>
        </div>
        
        <div>
            <div class="imagediv">
                <img v-if="updatedImg" :src="profile" alt="an image of a boy" @click="logbtnoff" height="45px" width="45px"
                    class="image" />
                <img v-else src="../assets/userImg.jpg" alt="an image of a boy" @click="logbtnoff" height="45px" width="45px"
                    class="image" />
                <div> 
                <div v-if="logoutbtn" class="logoutdiv">
                   <p  @click="logoutFunc" v-click-outside="outside" class="logoutbtn">LogOut</p>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped >
.Navcont {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    width: 99%;
    height: 54px;
    background: #1d1d1f;
    border-radius: 5px;
}

.sectionName {
    padding: 10px 0 10px 30px;
    display: flex;
    align-items: center;
}

.sectionName p {
    font-size: 21px;
    color: #9d9d97;
    font-family: sans-serif;
    font-weight: 700;
}

.imagediv {
    display: flex;
    flex-direction: column;
   
    padding: 10px;
    height: 8vh;
    width: 8vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image {
    border-radius: 5px;
}

.logoutdiv{
    position: absolute;
    right: 24px;
}
.logoutbtn{
    position: relative;
    top: 10px;
    text-align: center;
    right: 20px;
    font-size: 14px;
    width: 4rem;
    padding: 4px;
    background-color: #6838cf;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

}
</style>