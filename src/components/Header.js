import logo from "../assets/images/calculatrice.png";

const Header = (props) => {
  return (
    <div className="header-container">
      <img src={logo} alt="image calculatrice"></img>
      <h1>React Counter</h1>
    </div>
  );
};

export default Header;
