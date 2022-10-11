type prosType = {
  title?: string;
};

const Header = (props: prosType) => {
  return <div className="header_text">{props.title}</div>;
};

export default Header;
