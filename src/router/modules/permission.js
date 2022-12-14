import Layout from '@/layout'
export default {
  path: '/permission', // 路径
  name: 'permission', // 给路由规则加一个name
  component: Layout, // 组件
  children: [{
    path: '',
    component: () => import('@/views/permission'),
    meta: {
      title: '人员管理',
      icon: 'user'
    }
  }]
}
