import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
}

const ModalStyled = styled.div<ModalProps>`
  position: absolute;
  top: 60%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
  background-color: aliceblue;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 2rem;
  width: 90vw;
  height: 70vw;
  gap: 1rem;
  flex-direction: column;
  text-align: center;
  ${({ isOpen }) => {
    return isOpen ? "display: flex;" : "display: none;";
  }};
  @media (min-width: 700px) {
    height: 40vw;
    font-size: 1.5rem;
  }
  .modal__close {
    font-size: 1rem;
    background-color: transparent;
    border: 0.5px solid black;
    padding: 5px;
    color: black;
    &:hover {
      background-color: white;
    }
    @media (min-width: 700px) {
      font-size: 1.5rem;
    }
  }
`;

export default ModalStyled;
