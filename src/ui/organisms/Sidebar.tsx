import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import DashboardLogo from "../atoms/DashboardLogo";
import SidebarItem from "../molecules/SidebarItem";
import { SidebarContext } from "../../contexts/Sidebar";
import useWindowDimensions from "../../hooks/useWindowDimension";

// * react-icons
import { IoMenu } from "react-icons/io5";
import { MdOutlineDashboard, MdOutlineRecentActors } from "react-icons/md";
import { sidebarRoutes } from "../../routes/routes";

// auth hook
import useAuth from "../../hooks/useAuth";

const SideBar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  const [isIsSmall, setIsSmall] = useState(false);
  //   const { user } = useAuth();
  // use -- window dimension hook
  const { width } = useWindowDimensions();

  //for getting location to check active
  const location = useLocation().pathname;

  const handleMinimize = () => {
    if (width >= 991) {
      setIsSidebarOpen(!isSidebarOpen);
    } else {
      setIsSmall(!isIsSmall);
    }
  };

  useEffect(() => {
    // for make default hide sidebar on small screen
    if (width <= 991) {
      setIsSmall(true);
      setIsSidebarOpen(true);
    } else {
      setIsSmall(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);
  return (
    <section className={`dashboardSidebar_section`}>
      <div className="brand_title">
        {isSidebarOpen ? (
          <div className="">
            <DashboardLogo />
          </div>
        ) : (
          ""
        )}
        <div className="toggle_button" onClick={handleMinimize}>
          <IoMenu />
        </div>
      </div>

      {isIsSmall ? (
        ""
      ) : (
        <>
          <div>
            <div className="menu_name pb-1 pt-3">
              {isSidebarOpen ? <small>Menu</small> : ""}
            </div>

            <div className="item_menu pb-5">
              {sidebarRoutes.map((el, index) => {
                return (
                  <SidebarItem
                    link={el.path}
                    item={el.name}
                    isActive={location === `/dashboard/${el.path}`}
                    icon={el.icon ? el.icon : <MdOutlineRecentActors />}
                  />
                );
              })}
              ) : ( ""
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default SideBar;
