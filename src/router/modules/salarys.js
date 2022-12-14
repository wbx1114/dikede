import Layout from '@/layout'
export default {
  path: '/salarys', // 路径
  name: 'salarys', // 给路由规则加一个name
  component: Layout, // 组件
  children: [{
    path: '',
    component: () => import('@/views/salarys'),
    meta: {
      title: '策略管理',
      icon: 'table'
    }
  }]
}
