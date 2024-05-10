  <template>
    <div id="App-Container">
      <div id="Header-Sec">
        <sidebar/>
      </div>
      <div id="Chat-Sec">
        <div class="navcontainer">
          <navbar />
          <div class="userfeedcontainer" >
              <Nuxt />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  #App-Container {
    display: flex;
    overflow: hidden;
  }
  
  #Header-Sec {
  height: 100vh;
  width: 20vw;
  background-color: #121212;
  color: #878a92;
}

#Chat-Sec {
  height: 100vh;
  width: 80vw;
  background: #0e0f0f;
  color: #878a92;
}



  
  .navcontainer{
      padding: 7px
  }
  .userfeedcontainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px;
      overflow: scroll;
      height: 88vh;
      scrollbar-width: none;
  }
  </style>