
<template>
  <div id="header-Container">

    <div class="logo">
      <p>JustConnect</p>
    </div>
    <div id="icons">
        <NuxtLink :to="{name: 'home-feed'}" class="routestyle">
        <div class="icon-div" name="Feed" @click="changeScreen">
          <i class="pi pi-th-large" id="styles"></i>
          <p>Home</p>
        </div>
    </NuxtLink>
      <NuxtLink to="/home/Search" class="routestyle">
        <div class="icon-div" name="Search" @click="changeScreen">
          <i class="pi pi-search" id="styles"></i>
          <p>Search</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/home/Notification" class="routestyle">
        <div class="icon-div" name="Notification" @click="changeScreen">
          <i class="pi pi-bell" id="styles"></i>
          <p>Notification</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/home/message" class="routestyle">
        <div class="icon-div" name="Message" @click="changeScreen">
          <i class="pi pi-comments" id="styles"></i>
          <p>Message</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/home/create" class="routestyle">
      <div class="icon-div routestyle" name="Create" @click="changeScreen">
        <i class="pi pi-plus-circle" id="styles"></i>
        <p>Create</p>
      </div>
      </NuxtLink>
      <NuxtLink to="/home/profile" class="routestyle">
        <div class="icon-div" name="Profile" @click="changeScreen">
          <i class="pi pi-user" id="styles"></i>
          <p>Profile</p>
        </div>
      </NuxtLink>
    </div>
    <div v-if="openmodal"  class="modalContainer">
      <create v-click-outside="outside"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openmodal: false
    }
  },
  computed:{
    openModal(){
      this.openModal = true
      return this.$store.state.navStore.openModal
    }
  },
 
  methods: {
    changeScreen(event) {
      const name = event.currentTarget.getAttribute('name');
      console.log('clicked',  name);
      this.$store.dispatch('updateName', name)
      if(name === 'Create'){
        this.openmodal = true;
        this.$store.dispatch('updateModal', true)
      }
    },
    
    outside() {
      this.openmodal = false;
      console.log(' outside modal clicked');
      this.$store.dispatch('updateModal', false)
    }
  }
}

</script>

<style scoped>
#header-Container {
  height: 100vh;
  padding: 7px;
}
.modalContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #1d1d1f;
  border-radius: 5px;
}

.logo p {
  font-size: 20px;
  padding: 2px;
  color: #75d375;
    font-family: sans-serif;
    font-weight: 600;
}

.routestyle {
  color: white;
  text-decoration: none;
}
.routestyle:hover {
  background-color: #1e1e1f;
    border-radius: 5px;
}

#icons {
  display: flex;
  flex-direction: column;
  padding: 20px 10px 10px 10px;
  gap: 0.4rem;
}

.icon-div {
  display: flex;
  align-items: center;
}

.pi {
  font-size: 22px;
  padding: 10px;
}

.icon-div p {
  font-size: 18px;
  padding: 10px;
}

.added {
  display: none;
}

.modaldiv {
  color: white;
}

</style>
