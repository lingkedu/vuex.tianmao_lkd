
const Home = () => import(/* webpackChunkName: "group-foo" */ '../views/home')
const Cinema= () => import(/* webpackChunkName: "group-foo" */ '../views/cinema')
const Mine = () => import(/* webpackChunkName: "group-foo" */ '../views/mine')
const Error= () => import(/* webpackChunkName: "group-foo" */ '../views/error')
const HomeComing= () => import(/* webpackChunkName: "group-foo" */ '../views/home/HomeComing')
const HomeHot= () => import(/* webpackChunkName: "group-foo" */ '../views/home/HomeHot')
const City= () => import(/* webpackChunkName: "group-foo" */ '../views/city')
const Search= () => import(/* webpackChunkName: "group-foo" */ '../views/search')

const routes = [
    { //我们要求这个路由的配置要放在路由表的最上方
        path: '/',
        redirect: '/home'
    }, 
    {
      path: '/home',
      component: Home,
      name: "home",
      redirect: '/home/f-hot',
      children: [
        {
          path: 'h-coming',
          component: HomeComing,
          name: 'h-coming',
        },
        {
          path: 'f-hot',
          component: HomeHot,
          name: 'f-hot',
        },
      ]  
    },//每一个对象就是一个路由
    {
      path: '/cinema',
      component: Cinema,
      name: 'cinema',
    },
    {
      path: '/mine',
      component: Mine,
      name: 'mine',      
    },
    {
      path: '/city',
      component: City,
      name: 'city',
    },
    {
      path: '/search',
      component: Search,
      name: 'search',
    },
    {
      path: '/error',
      component: Error,
      name: 'error',
    }
  ]


export default routes  