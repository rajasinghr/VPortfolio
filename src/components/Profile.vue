<template>
  <div class="h-100">
    <div class=" h-100">
      <div class="row h-100">
        <LeftMain class="col-md-3 no-float" id="leftMainDiv"></LeftMain>
        <RightMain class="col-md-9 no-float" id="rightMainDiv">
          <div slot="content" class="contentDiv" >
            <div id="contentHeading">
              <h1 class="titleText">Hi, there! I am Raja Singh.</h1>
            </div>
            <div id="contentMain">
              
              <p style="text-align:justify">
                I am currently pursuing Masters of Science focused in Business Analytics and Information Systems from Muma College of Business at the University of South Florida, Tampa.
                I will be graduating on May 2020.
                <br />
                <br />Actively looking for Fall 2019 internships in the fields of Data Science, Big Data Analytics, Business Intelligence, and Product Development.
              </p>
              <div>
                <p style="font-size: 100%;font-weight: 700;color: #4a4a4a;letter-spacing: 0;">A brief intro of my interests</p>
                <ul>
                  <li style="text-align:justify">
                    Good in developing Data Mining models such as Linear and Logistic Regression, Clustering and Classification problems along with good knowledge of algorithms like Naive Bayes, Random Forest, Decision Trees, K-Nearest Neighbor, Stochastic Gradient, Neural Networks.
                  </li>
                  <li style="text-align:justify">
                    A thorough understanding of the entire process of data analysis including importing, cleaning, transforming and visualizing using a wide variety of tools such as R, Python, and SAS programming languages, leveraging specific libraries such as NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn.
                  </li>
                  <li style="text-align:justify">
                    Passionate about Natural Language Processing and Text Mining
                  </li>
                  <li style="text-align:justify">
                    Good knowledge in Big Data domain with experience in Hadoop, Hive, PySpark, and Cassandra.
                    Experience in Relational (MSSQL, MySQL, Oracle-SQL, PostgreSQL) and NoSQL (HBase, Cassandra) databases.
                  </li>
                  <li style="text-align:justify">
                    Understandings on AWS Cloud platform with basic hands-on experience on EC2, VPC, S3.
                  </li>
                </ul>
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
