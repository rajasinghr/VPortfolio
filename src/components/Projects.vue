<template>
  <div class=" h-100">
    <div class=" h-100">
      <div class="row h-100">
        <LeftMain class="col-md-3 no-float" id="leftMainDiv"></LeftMain>
        <RightMain class="col-md-9 no-float" id="rightMainDiv">
          <div slot="content" class="contentDiv">
            <div id="projectsHeading">
              <h1 class="titleText">A selection of projects that I have worked on . . .</h1>
            </div>
            <div class="contentMain" id="projectsContent">
              <div>
                <!--<h5>Featured Projects</h5>-->
                <b-card-group deck>
                  <b-card title="Analysing sentiment of product features with user reviews"
                          :img-src="require('../assets/sentiment_analysis2.png')"
                          img-height="180px" img-alt="Image" img-top>
                    <b-card-text style="font-size:14px">
                      The ratings that we usually see in shopping portals are
                      mostly based on product and/or service provided.
                      <i> What if they are rated based on its individual features? </i>
                      How useful it is to compare!
                    </b-card-text>
                    <b-button href="https://github.com/rajasinghr/Sentiment-Analyser" target="_blank" size="sm" variant="secondary">Github Repo</b-button>
                    <b-button href="https://drive.google.com/open?id=1hnlWvEfFE9kAwH7H0kSzdj4O5egS3qB3" size="sm" target="_blank" variant="secondary">Report</b-button>
                    <b-button href="https://drive.google.com/open?id=1YjynK9uZcoelW02bpOMaqSTBFogfL7gk" size="sm" target="_blank" variant="secondary">Presentation</b-button>
                    <div slot="footer"><small class="text-muted">NLTK, Web Scrapping, SciKit-Learn, Feature Extraction, Naive Bayes, Support Vector Machine, Model Evaluation</small></div>
                  </b-card>

                  <b-card title="ResumeBot – an Interactive Chatbot"
                          :img-src="require('../assets/chatbot1.png')"
                          img-height="180px" img-alt="Image" img-top>
                    <b-card-text style="font-size:14px">

                      Recruiters do not get immediate responses to process the job application because of the non-availability of a job seeker.
                      Applicants have limitations to provide all the details in Job portals and Resume.
                      <br /><i>How useful if we have a personal assistant to handle these situations when we are not available?</i>
                    </b-card-text>
                    <b-button href="https://github.com/rajasinghr/ResumeBot" target="_blank" size="sm" variant="secondary">Github Repo</b-button>
                    <b-button href="https://drive.google.com/open?id=1UN1xfkvnXoZ2TeiSUFHdtoMNbDTTNVZ0" target="_blank" size="sm" variant="secondary">Report</b-button>
                    <b-button href="https://drive.google.com/open?id=1NCeI8W-tsTOAvmR2f0k2K98u6ZaEE-pG" target="_blank" size="sm" variant="secondary">Presentation</b-button>
                    <div slot="footer"><small class="text-muted">NLTK, SpaCy, Naive Bayes, Neural Networks, Flask</small></div>
                  </b-card>


                </b-card-group>
                <br />
                <b-card-group deck>

                  <b-card title="Sentiment Analysis of Amazon Reviews using PySpark and MLlib" :img-src="require('../assets/bigdata.jpg')"
                          img-height="180px" img-alt="Image" img-top>
                    <b-card-text style="font-size:14px">
                      Building a Sentiment Analysis model with the data of 2M reviews stored in a Hadoop File System using Apache PySpark and MLlib
                    </b-card-text>
                    <b-button href="https://github.com/rajasinghr/Sentiment-Analyzer-Big-Data-Project" target="_blank" size="sm" variant="secondary">Github Repo</b-button>
                    <div slot="footer"><small class="text-muted">Apache PySpark, Hadoop, Linux, Apache MLlib Library, Matplotlib</small></div>
                  </b-card>
                  <b-card title="A Personal Portfolio using VueJS"
                          :img-src="require('../assets/portfolio2.jpg')"
                          img-height="180px" img-alt="Image" img-top>
                    <b-card-text style="font-size:14px">
                      A Data scientist with the knowledge of Software Web development is a good skill to have.
                      This skill helps me to present my findings and works in a better way.
                      <br />A fully funtional personal portfolio using latest front-end technology VueJS.
                      <i>Hope you like this portfolio</i>
                    </b-card-text>
                    <b-button href="https://github.com/rajasinghr/VPortfolio" target="_blank" size="sm" variant="secondary">Github Repo</b-button>
                    <div slot="footer"><small class="text-muted">VueJS, HTML5, CSS3, Bootstrap-Vue</small></div>
                  </b-card>


                </b-card-group>
                <br />
                <h3>Micro Projects</h3>

                <b-card title="Binary Classification: Occupancy Detection ">

                  <b-card-text>
                    <div class="row">
                      <div class="col-md-11">
                        <i>Is it possible to detect whether the room is occupied or not using the recorded parameters like light, temperature, humidity and CO2 levels?</i>
                        <br />Check out this binary classifier with 94% accuracy and 95% precision for predicting an occupancy of a room from the recorded parameters like light, temperature, humidity and CO2 measurements.
                      </div>
                      <div class="col-md-1" style="padding-right:5px;padding-left:0px">
                        <b-button href="https://drive.google.com/open?id=1MQEVKqrLKnictsMh3Bg3JOXb98uxBJUV" target="_blank" size="sm" variant="secondary">Report</b-button>

                      </div>
                    </div>
                  </b-card-text>
                  <div slot="footer"><small class="text-muted">Microsoft Azure Machine Learning Studio, Desicion Forest Classifier, SOAP Web Services</small></div>
                </b-card>
                <br />
                <b-card title="File Processor - A .NET MVC Project">
                  <b-card-text>
                    <div class="row">
                      <div class="col-md-11">
                        A simple web-based File Format Conversion application is used to convert
                        <ul>
                          <li> .doc/.docx files to .pdf files</li>
                          <li> .pdf to .doc/.docx files and</li>
                          <li> .pdf to .txt files.</li>
                        </ul>
                      </div>
                      <div class="col-md-1" style="padding-right:5px;padding-left:0px">
                        <div><b-button href="https://github.com/rajasinghr/file_processor" target="_blank" size="sm" variant="secondary">Github</b-button></div>
                        <br />
                        <div><b-button href="https://drive.google.com/open?id=1n08i6zBqC2ssv6ky6RYBQNJ8Z01hEruq" target="_blank" size="sm" variant="secondary">Report</b-button></div>

                      </div>
                    </div>
                  </b-card-text>
              <div slot="footer"><small class="text-muted">Microsoft Azure Machine Learning Studio, Desicion Forest Classifier, SOAP Web Services</small></div>
              </b-card>
              <br />
              <b-card title="How to detect a phishing attack using the website URL">
                <b-card-text>
                  <div class="row">
                    <div class="col-md-11">
                      Two classifiers are built and compared for detecting phishing websites from the variety of parameters like URL length, Google Index, etc.
                      The obtained data is having important nominal features to characterize phishing websites.
                      Decision Tree and Neural Network models are built using SAS Enterprise Miner
                    </div>
                    <div class="col-md-1" style="padding-right:5px;padding-left:0px">
                      <div><b-button href="https://drive.google.com/open?id=1L74UdzAijNJrEEcGKIUxtNSGEo6e_JF9" target="_blank" size="sm" variant="secondary">Report</b-button></div>

                    </div>
                  </div>
                  
                </b-card-text>

                <div slot="footer"><small class="text-muted">SAS Enterprise Miner</small></div>
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
    name: 'Projects',
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
    padding-top:20px;
  }

  .contentDiv {
    padding-right: 0px !important;
  }

  .card-deck {
     margin-right: 0px !important; 
     margin-left: 0px !important; 
  }

  .card-body {
    padding: 0.55rem 1.25rem !important;
  }

  .card-footer {
    padding: 0.25rem 0.75rem !important;
  }

  .card-title{
    font-size: 18px;
    font-weight:400;
  }
</style>
