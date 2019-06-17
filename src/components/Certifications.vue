<template>
  <div class=" h-100">
    <div class=" h-100">
      <div class="row h-100">
        <LeftMain class="col-md-3 no-float" id="leftMainDiv"></LeftMain>
        <RightMain class="col-md-9 no-float" id="rightMainDiv">
          <div slot="content" class="contentDiv">
            <div id="projectsHeading">
              <h1 class="titleText">The valuable assets that I acquired. . .</h1>
            </div>
            <div class="contentMain" id="projectsContent">
              <div role="tablist">
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <div block v-b-toggle.accordion-1 variant="info" class="titleDiv">
                      <div class="row">
                        <div class="col-md-9" style="line-height: 0.2px;padding-bottom: 10px;">
                          <img src="@/assets/python3.png" width="30" height="30" />
                          <span class="certTitle">Python 3</span>
                          <br />
                          <span class="issuedByText">issued by </span><span class="providerName">SoloLearn</span>

                        </div>
                        <div class="col-md-3" style="line-height: 19px;padding-bottom: 0px;">
                          <a class="certCredentialLink" target="_blank" href="https://www.sololearn.com/Certificate/1073-8089965/pdf/">See Certificate</a>

                          <br />
                          <span class="expirationText">Feb 2018 - No Expiration</span>
                        </div>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-1"  accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>What I learned! </b-card-text>
                      <b-card-text>Certificate 1</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <div block v-b-toggle.accordion-2 variant="info" class="titleDiv">
                      <div class="row">
                        <div class="col-md-9" style="line-height: 0.2px;padding-bottom: 10px;">
                          <img src="@/assets/python3.png" width="30" height="30" />
                          <span class="certTitle">The Python Mega Course: Build 10 Real World Applications</span>
                          <br />
                          <span class="issuedByText">issued by </span><span class="providerName">Udemy</span>

                        </div>
                        <div class="col-md-3" style="line-height: 19px;padding-bottom: 0px;">
                          <a class="certCredentialLink" target="_blank" href="https://www.udemy.com/certificate/UC-TMPK6OF8/">See Certificate</a>

                          <br />
                          <span class="expirationText">Mar 2018 - No Expiration</span>
                        </div>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-2"  accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>What I learned! </b-card-text>
                      <b-card-text>Certificate 1</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <div block v-b-toggle.accordion-3 variant="info" class="titleDiv">
                      <div class="row">
                        <div class="col-md-9" style="line-height: 0.2px;padding-bottom: 10px;">
                          <img src="@/assets/sas.jpg" width="30" height="30" />
                          <span class="certTitle">SAS Programming 1: Essentials</span>
                          <br />
                          <span class="issuedByText">issued by </span><span class="providerName">SAS</span>

                        </div>
                        <div class="col-md-3" style="line-height: 19px;padding-bottom: 0px;">
                          <a class="certCredentialLink" href="https://www.youracclaim.com/badges/b147bd44-ed59-4be7-849c-09f1b31f7d55/linked_in_profile">See Certificate</a>
                          <br />
                          <span class="expirationText">Sep 2018 - No Expiration</span>
                        </div>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-3"  accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>What I learned! </b-card-text>
                      <b-card-text>Certificate 1</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <div block v-b-toggle.accordion-3 variant="info" class="titleDiv">
                      <div class="row">
                        <div class="col-md-9" style="line-height: 0.2px;padding-bottom: 10px;">
                          <img src="@/assets/sas.jpg" width="30" height="30" />
                          <span class="certTitle">SAS Programming 2: Data Manipulation Techniques</span>
                          <br />
                          <span class="issuedByText">issued by </span><span class="providerName">SAS</span>

                        </div>
                        <div class="col-md-3" style="line-height: 19px;padding-bottom: 0px;">
                          <a class="certCredentialLink" href="https://www.youracclaim.com/badges/44cb0650-5965-4113-b178-2c61fa7756e7/linked_in_profile">See Certificate</a>

                          <br />
                          <span class="expirationText">Oct 2018 - No Expiration</span>
                        </div>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-3"  accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>What I learned! </b-card-text>
                      <b-card-text>Certificate 1</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <div block v-b-toggle.accordion-4 variant="info" class="titleDiv">
                      <div class="row">
                        <div class="col-md-9" style="line-height: 0.2px;padding-bottom: 10px;">
                          <img src="@/assets/vue.png" width="30" height="30" />
                          <span class="certTitle">Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)</span>
                          <br />
                          <span class="issuedByText">issued by </span><span class="providerName">Udemy</span>

                        </div>
                        <div class="col-md-3" style="line-height: 19px;padding-bottom: 0px;">
                          <a class="certCredentialLink" href="https://www.udemy.com/certificate/UC-L9MTUAIY/">See Certificate</a>

                          <br />
                          <span class="expirationText">Jun 2019 - No Expiration</span>
                        </div>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-4"  accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>What I learned! </b-card-text>
                      <b-card-text>Certificate 1</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <div block v-b-toggle.accordion-5 variant="info" class="titleDiv">
                      <div class="row">
                        <div class="col-md-9" style="line-height: 0.2px;padding-bottom: 10px;">
                          <img src="@/assets/accounting.jpg" width="30" height="30" />
                          <span class="certTitle">Introduction to Financial Accounting</span>
                          <br />
                          <span class="issuedByText">issued by </span><span class="providerName">Coursera</span>

                        </div>
                        <div class="col-md-3" style="line-height: 19px;padding-bottom: 0px;">
                          <a class="certCredentialLink" href="https://www.coursera.org/account/accomplishments/verify/TLEELS7XAC4Y">See Certificate</a>

                          <br />
                          <span class="expirationText">Jan 2019 - No Expiration</span>
                        </div>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-5"  accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>What I learned! </b-card-text>
                      <b-card-text>Certificate 1</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

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
    name: 'Certifications',
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

  .titleDiv{
    background-color:#bec1c4;
    color:#3e3f41;
    
    border-radius:2px;
    padding: 3px 10px 3px 10px;
  }

  .certCredentialLink{
    
    text-decoration:none;
  }

  .certTitle {
    font-weight: 600;
    font-size: medium;
  }

  .issuedByText {
    padding: 0px 5px 0px 35px;
    font-weight: 400;
    font-size:12px;
    
  }

  .providerName {
    font-weight: 600;
    font-size: medium;
  }

  .expirationText {
    
    font-weight: 400;
    font-size: 14px;
  }
</style>
