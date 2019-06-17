<template>
  <div>
    <div class="navBar">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/"><span style="font-size:30px">RS</span></router-link>

        <ul class="navbar-nav">
          <li class="nav-item" v-bind:class="{'active':toURL=='Experience'}">
            <router-link class="nav-link" to="/experience">
              Work Experience
            </router-link>
          </li>
          <li class="nav-item" v-bind:class="{'active':toURL=='Projects'}">
            <router-link class="nav-link" to="/projects">
              Projects
            </router-link>
          </li>
          <li class="nav-item" v-bind:class="{'active':toURL=='Certifications'}">
            <router-link class="nav-link" to="/certifications">
              Certifications
            </router-link>
          </li>
          <li class="nav-item" v-bind:class="{'active':toURL=='Resume'}">
            <router-link class="nav-link" to="/resume">
              Resume
            </router-link>
          </li>
          <li class="nav-item" v-bind:class="{'active':toURL=='Contact'}">
            <router-link class="nav-link" to="/contact">
              Contact
            </router-link>
          </li>
        </ul>

      </nav>

      <slot name="content">

      </slot>
    </div>
  </div>
</template>
<script>
  
  export default {
    data: function () {
      return {
        toURL: this.$route.name
      }
    },
    methods: {
      
    }
  }
</script>
<style scoped>
  .contentDiv {
    background-color: #fcfffc;
    padding: 15px 0px 20px 20px;
  }
</style>
