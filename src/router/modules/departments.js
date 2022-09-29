import Layout from '@/layout'
export default {
  path: '/departments', // 路径
  name: 'departments', // 给路由规则加一个name
  component: Layout, // 组件
  children: [{
    path: '',
    component: () => import('@/views/departments'),
    meta: {
      title: '点位管理',
      icon: 'skill'
    }
  }]
}

