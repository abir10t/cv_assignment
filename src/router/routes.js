
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/Index.vue') },
      { path: '', name:'dashboard', component: () => import('pages/Dashboard.vue') },
      { path: 'createcv', component: () => import('pages/CreateCV.vue') },
      { path: 'cvlist', component: () => import('pages/CvList.vue') },
      { path: 'cv/:id', component: () => import('pages/CV.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
