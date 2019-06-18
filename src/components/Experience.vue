<template>
  <div class=" h-100">
    <div class=" h-100">
      <div class="row h-100">
        <LeftMain class="col-md-3 no-float" id="leftMainDiv"></LeftMain>
        <RightMain class="col-md-9 no-float" id="rightMainDiv">
          <div slot="content" class="contentDiv">
            <div id="projectsHeading">
              <h1 class="titleText">My Journey till now. . .</h1>
            </div>
            <div class="contentMain" id="experienceContent">
              <div class="job">
                <div class="jobTitle">
                  <span><b>Chatbot Study, University of South Florida,</b> Tampa, US. </span><span style="float:right"><i>May 2019 – Recent</i></span>
                </div>
                <div class="jobContent">
                  <ul>
                    <li style="text-align:justify">
                      An independent study under the guidance of prof. Triparna on measuring the human behavior with the help of Chatbots.
                    </li>
                    <li style="text-align:justify">
                      This work is to cognize how humans behave for high/low levels of Autonomy, Competency & Relatedness.
                    </li>

                  </ul>
                </div>
              </div>
              <div class="job">
                <div class="jobTitle">
                  <span><b>Graduate Assistant, MyReviewers, University of South Florida,</b> Tampa, US. </span><span style="float:right"><i>Aug 2018 – Recent</i></span>
                </div>
                <div class="jobContent">
                  <ul>
                    <li style="text-align:justify">
                      Created RESTful APIs in .NET MVC, Entity Framework with C#, MS SQL using Domain Driven Design.
                    </li>
                    <li style="text-align:justify">
                      Developed Responsive Web UI in HTML5, CSS3, JQuery, JavaScript, Bootstrap, VueJS.
                    </li>
                    <li style="text-align:justify">
                      Converting existing HTML/ JQuey scripts into VueJS.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="job">
                <div class="jobTitle">
                  <span><b>Data Analyst, CareTech Solutions,</b> Chennai, India. </span><span style="float:right">Oct 2016 – Jul 2018</span>
                </div>
                <div class="jobContent">
                  <ul>
                    <li style="text-align:justify">
                      Implemented a Knowledge Base Management System for classifying tickets using Support Vector Machine classifier and indexing manuals using Whoosh in Python.
                      The application is integrated with a Ticketing system using Web APIs.
                    </li>
                    <li style="text-align:justify">
                      Designed Chatbots to book a doctor appointment and raise support requests using NLP packages in Python.
                    </li>
                    <li style="text-align:justify">
                      Involved in an Agile software design and development of a complete BI ETL and Reporting platform for generating and distributing thousands of reports to more than 110 hospitals in the USA.
                    </li>
                    <li style="text-align:justify">
                      Developed a custom SOAP web services project by consuming web services provided by Teleopti SDK (Service Desk forecasting and scheduling application). The services are deployed in ISS and consumed by a JAVA application.
                    </li>
                    <li style="text-align:justify">
                      Built a Self-Service Portal application in CareWorks (CMS) which helps hospitals for creating service tickets and other requests. Implemented JavaScript event handling and developed Web APIs for all the basic and advanced controls.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="job">
                <div class="jobTitle">
                  <span><b>Business Intelligence Analyst, HTC Global Services,</b> Chennai, India. </span><span style="float:right">Aug 2014 – Oct 2016</span>
                </div>
                <div class="jobContent">
                  <ul>
                    <li style="text-align:justify">
                      Worked on 3 turnkey projects in Customer domain while at HTC’s BI Center of Excellence.
                      These projects included Data Profiling, Data Cleansing, ETL, De-duplication, Data Masking and creating an MDM solution integrating with other systems in the organizations using Informatica products.
                    </li>
                    <li style="text-align:justify">
                      Developed a Customer Identification System for a Non-banking Finance company to filter fraud loan applicants using Informatica Identity Resolution.
                      Wrote ETL jobs in Talend to extract, cleanse and load data in Customer Base system.
                    </li>
                    <li style="text-align:justify">
                      Developed a Customer Identification System for a Non-banking Finance company to filter fraud loan applicants using Informatica Identity Resolution. Wrote ETL jobs in Talend to extract, cleanse and load data in Customer Base system.
                    </li>

                  </ul>
                </div>
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
    name: 'Experience',
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

  .titleDiv {
    background-color: #bec1c4;
    color: #3e3f41;
    border-radius: 2px;
    padding: 3px 10px 3px 10px;
  }

  .job{
    padding-right:10px;
  }

  .jobTitle{

  }

  .jobContent{

  }

</style>
