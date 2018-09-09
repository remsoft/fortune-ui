import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Accounting',
    icon: 'ion-clipboard',
    children: [
      {
        title: 'Transaction',
        link: '/pages/accounting/transaction',
      }, 
      {
        title: 'Reconcilitation',
        link: '/pages/accounting/reconciliation',
      }, 
      {
        title: 'Chart of Account',
        link: '/pages/accounting/chart',
      },
    ] 
  },
  {
    title: 'Maintenance',
    icon: 'ion-clipboard',
    children:[{
      title:'Supplier',
      link:'/pages/maintenance/supplier'
    }]
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
