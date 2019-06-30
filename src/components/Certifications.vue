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
                          <img src="@/assets/aws.png" width="30" height="30" />
                          <span class="certTitle">
                            AWS Essentials (2019)
                          </span>
                          <br />
                          <span class="issuedByText">issued by </span><span class="providerName">Udemy</span>

                        </div>
                        <div class="col-md-3" style="line-height: 19px;padding-bottom: 0px;">
                          <a class="certCredentialLink" target="_blank" href="https://www.udemy.com/certificate/UC-MQ2NNN9S/">See Certificate</a>

                          <br />
                          <span class="expirationText">Jun 2019 - No Expiration</span>
                        </div>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text><i>What I learned!</i> </b-card-text>
                      <b-card-text style="text-align:justify">
                        A long wait to get into Cloud Computing has come to an end.
                        <br />
                        I built a complete cloud architecture starting from IAM, setting network services (VPC), creating EC2 instances in subnets, S3 buckets and a RDS database inside a private subnet.
                        Built monitoring services and alerts using SNS and Cloudwatch. Also, I learned Elastic Load Balancer, how to auto scale the instances and Route 53.
                        Finally amazed with the concept of Serverless computing and it is still a long way to go.

                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>


                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <div block v-b-toggle.accordion-2 variant="info" class="titleDiv">
                      <div class="row">

                        <div class="col-md-9" style="line-height: 0.2px;padding-bottom: 10px;">
                          <img src="@/assets/tableau.png" width="30" height="30" />
                          <span class="certTitle">
                            Tableau 10 A-Z: Hands-On Tableau Training For Data Science!
                          </span>
                          <br />
                          <span class="issuedByText">issued by </span><span class="providerName">Udemy</span>

                        </div>
                        <div class="col-md-3" style="line-height: 19px;padding-bottom: 0px;">
                          <a class="certCredentialLink" target="_blank" href="https://www.udemy.com/certificate/UC-1DN669NA/">See Certificate</a>

                          <br />
                          <span class="expirationText">Jun 2019 - No Expiration</span>
                        </div>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text><i>What I learned!</i> </b-card-text>
                      <b-card-text style="text-align:justify">
                        I practised the cool features available in Tableau 10 and developed visually appealing Charts, Dashboards and Storylines. Moreover, I worked on Tableau 10 new features.
                        Cross Table joins and Tableau Analytics are the new interesting topics to learn in Tableau.
                        <br />
                        Apart from visualizations, I realized that cleansing and understanding the data are the two important tasks to do before analysing the data. I can happily say that I spent most of the time for data analysis.
                        <br />Happy analysing!
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>


                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <div block v-b-toggle.accordion-3 variant="info" class="titleDiv">
                      <div class="row">

                        <div class="col-md-9" style="line-height: 0.2px;padding-bottom: 10px;">
                          <img src="@/assets/python3.png" width="30" height="30" />
                          <span class="certTitle">
                            Python 3
                            <!--<a class="certCredentialLink" target="_blank" href="https://www.sololearn.com/Course/Python/">
                <i class="fa fa-external-link-alt fa-2x" aria-hidden="true" style="color:black"></i>
              </a>-->

                          </span>
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
                  <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text><i>What I learned!</i> </b-card-text>
                      <b-card-text style="text-align:justify">
                        Great course to start for the one who gets into the python language. I learned how to use OOPS concepts in python. Apart from the language syntaxes and concepts,
                        I studied and practiced how to build package modules in python. Functional programming using lambdas, map, and filter are new things to learn.
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <div block v-b-toggle.accordion-4 variant="info" class="titleDiv">
                      <div class="row">
                        <div class="col-md-9" style="line-height: 0.2px;padding-bottom: 10px;">
                          <img src="@/assets/python3.png" width="30" height="30" />
                          <span class="certTitle">

                            The Python Mega Course: Build 10 Real World Applications

                          </span>

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
                  <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <i>What I learned!</i>
                        <!--<a style="float:right" class="certCredentialLink" target="_blank" href="https://www.udemy.com/the-python-mega-course/">Click here to know more about this course!</a>-->
                      </b-card-text>
                      <b-card-text style="text-align:justify">
                        The best way to learn something is to get your hands dirty.
                        I spent more than a month to complete this course. Apart from learning, I built 10 projects covering various topics like web scrapping using BeautifulSoup, desktop application, web application and deployment in Heruko, computer vision using OpenCV and database application.
                        I am applying all the skills that I learned in this course even today.
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <div block v-b-toggle.accordion-5 variant="info" class="titleDiv">
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
                  <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text><i>What I learned! </i></b-card-text>
                      <b-card-text style="text-align:justify">
                        This course was taken as a challenge to learn a new statistical language, SAS. I got introduced with the basics of SAS programming.
                        This helps me to understand how SAS works and to compare the concepts with python.
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <div block v-b-toggle.accordion-6 variant="info" class="titleDiv">
                      <div class="row">
                        <div class="col-md-9" style="line-height: 3px;padding-bottom: 10px;">
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
                  <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text><i>What I learned!</i> </b-card-text>
                      <b-card-text style="text-align:justify">
                        This is the part 2 course of SAS Programming. I learned how to understand and control SAS Data processing. I spent a lot of time on practicing data operations in SAS tables.
                        <br />
                        <i>What’s next?</i> Planning to complete the SAS Programming Certification.
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <div block v-b-toggle.accordion-7 variant="info" class="titleDiv">
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
                  <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text><i>What I learned!</i> </b-card-text>
                      <b-card-text style="text-align:justify">
                        In my employment, I was put in a challenge to move a 5 years old front-end application into Vue Framework. I purchased this course and it helps to build a production-ready VueJS application.
                        <br />More importantly, I build my personal portfolio using the things that I learned in this course.
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <div block v-b-toggle.accordion-8 variant="info" class="titleDiv">
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
                  <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text><i>What I learned!</i> </b-card-text>
                      <b-card-text style="text-align:justify">
                        I took this course to complete my academic prerequisite with no knowledge in Finance domain.
                        In this, I understand the basics and jargons in Financial accounting domain.
                      </b-card-text>
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
    font-weight: 400;
    font-family:'Times New Roman', Times, serif;
    font-size: 16px;
    font-weight: 600
  }

  .issuedByText {
    padding: 0px 5px 0px 35px;
    font-weight: 400;
    font-size:12px;
    
  }

  .providerName {
    font-weight: 400;
    font-size: 14px;
    font-weight:500
  }

  .expirationText {
    
    font-weight: 400;
    font-size: 14px;
  }
</style>
