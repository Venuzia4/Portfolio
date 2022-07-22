
import Nav from "../components/Nav";

import { Outlet } from "react-router-dom";

function BaseLayout() {
  return (
    <div className=" bg-primary">
        <div>
          <Nav />

          <Outlet />
          
        </div>
      </div>
   
  );
}

export default BaseLayout;
