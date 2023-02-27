import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  @media (max-width: 700px) {
    .header__logo {
      width: 130px;
      height: 75.4px;
    }
  }
`;

export default HeaderStyled;
