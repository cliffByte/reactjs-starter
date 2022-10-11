import React, { FC } from "react";
interface MenuProps {}

const dummyData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
];

const Menu: FC<MenuProps> = () => {
  return (
    <ul>
      {dummyData.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
};

export default Menu;
