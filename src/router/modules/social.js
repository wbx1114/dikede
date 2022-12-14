import Layout from '@/layout'
export default {
  path: '/social', // 路径
  name: 'social', // 给路由规则加一个name
  component: Layout, // 组件
  children: [{
    path: '',
    component: () => import('@/views/setting'),
    meta: {
      title: '对账统计',
      icon: 'money'
    }
  }]
}
