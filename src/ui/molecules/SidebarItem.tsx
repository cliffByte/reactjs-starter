import { useContext, useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../contexts/Sidebar";

// interface for submenu item
interface SubMenuItem {
  item: string;
  link?: string;
  isActive?: boolean;
  icon?: any;
  submenuList?: any[];
}

const SidebarItem = (props: SubMenuItem) => {
  const { isSidebarOpen } = useContext(SidebarContext);
  // * State to maintain visibility of its submenu
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);
  const stateChangeHandler = () => setIsSubmenuOpen(!isSubmenuOpen);
  return (
    <div
      className={`sidebarItem_section cursor-pointer ${
        props.isActive ? "active" : ""
      } `}
    >
      <Link to={props.link ? props.link : ""}>
        <div className="item_box" onClick={stateChangeHandler}>
          <div className="d-flex gap-2">
            {props.icon}
            {
              // * if sidebar is open then show the name
              isSidebarOpen ? <div>{props.item}</div> : ""
            }
          </div>
          {
            // * if submenu is open then show the up arrow
            <div>
              {isSidebarOpen &&
              props.submenuList &&
              props.submenuList.length !== 0 ? (
                isSubmenuOpen ? (
                  <IoChevronUp />
                ) : (
                  <IoChevronDown />
                )
              ) : (
                ""
              )}
            </div>
          }
        </div>
      </Link>

      {/* //* submenu component */}
      {isSidebarOpen &&
        isSubmenuOpen &&
        props.submenuList &&
        props.submenuList.map((item: any, index: number) => {
          return (
            <div key={index}>
              <Link to={item.link ? item.link : ""}>
                <div
                  className={`sub_menu ${item.isActive ? "sub_active" : ""}`}
                >
                  <div className="icon">{item.icon}</div>
                  <div className="name">{item.name}</div>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default SidebarItem;
