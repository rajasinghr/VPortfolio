import Vue from 'vue'
import Router from 'vue-router'

import Profile from '@/components/Profile'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/certifications',
      name: 'Certifications',
      component: Certifications
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
