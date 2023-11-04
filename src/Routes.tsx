
import Home from "./pages/home"
import Detail from "./pages/detail";

const Routes: any = [

  {
    path: `/`,
    component: Home,
  },

  {
    path: `/:id`,
    component: Detail,
  },
];

export default Routes;
