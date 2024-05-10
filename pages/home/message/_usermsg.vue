<script setup>
// import chatheader from './chat-header.vue'
// import chatfooter from './chat-footer.vue'
// import Messagebox from './chat-messages.vue';
// import { object } from 'yup';
// import Messages from './chat-messages.vue';
// const data = this.$route.params.userdata;
// console.log(data);
// let props = defineProps({
//   userdata: Object,
// });
// const userdetail = JSON.parse(props.userData);
// console.log("userdatafrom props", props.userdata);
</script>
<template>
  <div class="Chatcontainer">
    <userMsgHeader :userdetails="$route.query.userdata" />
    <userMsg class="msgbox" />
    <userMsgFooter />
  </div>
</template>


<style scoped>
.Chatcontainer {
  padding: 5px;
  width: 65.6vw;
  height: 100%;
  border-radius: 5px;
}
.msgbox {
  position: fixed;
  top: 162px;
  padding: 13px 8px;
  width: 64%;
  height: 61.7vh;
}
</style>
