import Layout from '@/layout'
export default {
  path: '/attendances', // 路径
  name: 'attendances', // 给路由规则加一个name
  component: Layout, // 组件
  children: [{
    path: '',
    component: () => import('@/views/attendances'),
    meta: {
      title: '商品管理',
      icon: 'lock'
    }

  }
  ]
}

