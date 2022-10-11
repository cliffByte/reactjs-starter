type prosType = {
  title?: string;
};

const Title = (props: prosType) => {
  return <div className="title_text">{props.title}</div>;
};

export default Title;
