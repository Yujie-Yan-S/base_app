const navigation = () => [
  {
    title: 'Home',
    path: '/home',
    icon: 'mdi:home-outline',
    auth: false
  },
  {
    title: 'Courses',
    path: '/course/list/?pageNum=0&pageSize=12',
    icon: 'mdi:email-outline'
  },
  {
    title: 'Programs',
    path: '/programs',
    icon: 'mdi:email-outline'
  }
]

export default navigation
