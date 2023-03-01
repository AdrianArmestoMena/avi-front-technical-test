import { useContext } from "react";
import { closeModalActionCreator } from "../../store/actions/uiActions/uiActionCreators";
import UiContext from "../../store/contexts/uiContext/UiContext";
import CalendarModal from "../calendarModal/calendarModal";
import ModalStyled from "./Modal.Style";

const Modal = (): JSX.Element => {
  const {
    ui: { isCondition, isOpen, textContent },
  } = useContext(UiContext);
  const { dispatch } = useContext(UiContext);

  return (
    <ModalStyled isOpen={isOpen}>
      <span>{textContent}</span>
      {isCondition && <CalendarModal />}
      <button
        className="modal__close"
        onClick={() => dispatch(closeModalActionCreator())}
      >
        Cerrar
      </button>
    </ModalStyled>
  );
};

export default Modal;
