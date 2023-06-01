// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: icon('ic_user'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general v4.3.0',
    items: [
      { title: 'Active customers/members', path: PATH_DASHBOARD.one, icon: ICONS.dashboard },
      { title: 'Active listing (new/used car)', path: PATH_DASHBOARD.two, icon: ICONS.ecommerce },
      { title: 'Pending listing', path: PATH_DASHBOARD.three, icon: ICONS.analytics },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'management',
    items: [
      {
        title: 'Car listing management',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'Create/update/delete', path: PATH_DASHBOARD.user.four },
          { title: 'Assign car listing to a consultant', path: PATH_DASHBOARD.user.five },
          { title: 'Assign car listing to a dealer', path: PATH_DASHBOARD.user.six },
          { title: 'Track progress of the listing', path: PATH_DASHBOARD.user.six },
        ],
      },
    ],
  },
];

export default navConfig;
