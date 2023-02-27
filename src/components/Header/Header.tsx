import { useContext } from "react";
import ServiceContext from "../../store/contexts/ServiceContext/ServiceContext";
import HeaderStyle from "./Header.styled";

const Header = (): JSX.Element => {
  const {
    service: { licenePlate },
  } = useContext(ServiceContext);
  return (
    <HeaderStyle>
      <a className="header__logo-container" href="https://www.aviproject.com/">
        <img
          className="header__logo"
          width={130}
          height={75}
          src={"../avi.png"}
          alt="essenza"
        />
      </a>
      <span>{licenePlate ? licenePlate : "Gestor Reparaciones"}</span>
    </HeaderStyle>
  );
};
export default Header;
