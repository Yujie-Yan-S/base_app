const navigation = () => [
  {
    title: 'Home',
    path: '/home',
    icon: 'mdi:home-outline',
    auth: false,
    hidden: true
  },
  {
    title: 'Courses',

    auth: false,

    path: '/course/list/?pageNum=0&pageSize=12',
    icon: 'mdi:email-outline'
  },
  {
    title: 'Programs',
    path: '/programs',
    icon: 'mdi:email-outline',
    auth: false,

  },

]

export default navigation
