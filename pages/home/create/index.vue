<template>
    <div>
        <button @click="openMOdal">CREATE A POST </button>
        <div v-if="openmodal" class="modalContainer">
            <create v-click-outside="outside"/>
        </div>
    </div>
  </template>
  <script>
    import vClickOutside from 'v-click-outside'

  export default {
    data() {
        return {
            openmodal: false
        }
    },
    directives: {
      clickOutside: vClickOutside.directive
    },
   
    methods:{
        openMOdal(){
            this.openmodal = true
        },
         outside() {
      this.openmodal = false;
      console.log(' outside modal clicked created');
    }
    }
  }
</script>

<style scoped>
.modalContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.62);
  
}
</style>