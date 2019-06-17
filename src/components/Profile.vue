<template>
  <div class="h-100">
    <div class=" h-100">
      <div class="row h-100">
        <LeftMain class="col-md-3 no-float" id="leftMainDiv"></LeftMain>
        <RightMain class="col-md-9 no-float" id="rightMainDiv">
          <div slot="content" class="contentDiv" >
            <div id="contentHeading">
              <h3>Profile</h3>
            </div>
            <div id="contentMain">
              <p>
                Hi, there! I am Raja.
              </p>
              <p>
                I am doing my Master's degree in Business Analytics and Information Systems at the University of South Florida
              </p>
            </div>
          </div>
        </RightMain>
      </div>
    </div>
  </div>
</template>
<script>
  import LeftMain from '@/components/LeftMain'
  import RightMain from '@/components/RightMain'
  export default {
    name: 'Profile',
    data: function () {
      return {

      }
    },
    components: {
      LeftMain,
      RightMain
    }
  }
</script>
<style scoped>


  @media (min-width: 992px) and (max-width: 1199.98px) {
    .container {
    }
  }

  #leftMainDiv {
    background-color: #202020;
    color: #a3a3a3
  }

  #rightMainDiv {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }

  #contentMain{
    height:75vh;
    overflow:auto;
  }

</style>
