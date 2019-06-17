<template>
  <div class="h-100">
    <div class=" h-100">
      <div class="row h-100">
        <LeftMain class="col-md-3 no-float" id="leftMainDiv"></LeftMain>
        <RightMain class="col-md-9 no-float" id="rightMainDiv">
          <div slot="content" class="contentDiv">
            <div id="contactHeading">
              <span class="titleText">Let me make it easier to get in touch. . .</span>
              <br />
              
              
            </div>
            <div class="contentMain" id="contactContent">
              <div class="col-sm-10" style="padding:30px 0px 30px 30px">
                <span style="font-size:16px;font-style:italic;font-weight:600">
                  Have work opportunities? Want to collaborate on a project? Need advice?
                </span>
                <br />
                <span>
                  Just send me an email <a href="mailto:rajasinghravi93@gmail.com">rajasinghravi93@gmail.com</a>
                </span>
                <span> or give me a phone call at (813) 534-2162.</span>
                <br />
                <span>
                  I'll get back to you as soon as possible.
                </span>
              </div>
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
    name: 'Resume',
    data: function () {
      return {
        name:'',

      }
    },
    components: {
      LeftMain,
      RightMain
    }
  }
</script>
<style scoped>
  .titleText {
    font-size: 120%;
    font-weight: 800;
    color: #4a4a4a;
    letter-spacing: 0;
  }

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

  .contentMain {
    height: 77vh;
    overflow: auto;
    padding-top: 20px;
  }

  .contentDiv {
    padding-right: 0px !important;
  }
</style>
