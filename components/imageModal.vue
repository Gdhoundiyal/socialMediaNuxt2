<template>
    <img class="modalprofileimg"src="../assets/userImg.jpg" alt="An Image of a Man" height="300px" width="300px">
 </template>
 
 <script >
 import { defineProps } from 'vue'

export default {
  props: {
    imagePath: {
      type: String,
      required: true
    }
  },
  created() {
    console.log("imagepath", this.imagePath)
  }
}
 </script>
 
 <style scoped>
 .modalprofileimg{
     border-radius: 5px;
     margin: 0 100px 150px 0;
 }
 </style>