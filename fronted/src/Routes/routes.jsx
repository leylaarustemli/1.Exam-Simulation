
import SiteRoot from "../Pages/site/SiteRoot";
import Home from "../Pages/site/Home/Home";
import Basket from "../Pages/site/Basket/Basket";
import AdminRoot from "../Pages/admin/AdminRoot";
import Detail from "../Pages/site/Detail/Detail";
import Add from "../Pages/admin/Add/Add";


const ROUTES = [
    {
      path: "/",
      element: <SiteRoot />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/basket",
          element: <Basket />,
        },{
          path:"/detail/:id",
          element: <Detail />,
        }
      ],
    },
    {
      path: "/admin",
      element: <AdminRoot />,
      children: [
    {
          path: "add",
          element: <Add />,
        },
      
      ],
    },
  ];
  export default ROUTES