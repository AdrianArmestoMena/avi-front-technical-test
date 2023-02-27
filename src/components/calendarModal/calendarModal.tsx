import { useContext } from "react";
import DatePicker from "react-datepicker";
import ServiceContext from "../../store/contexts/ServiceContext/ServiceContext";
import "react-datepicker/dist/react-datepicker.css";
import useApi from "../../hooks/useApi";
import { useParams } from "react-router-dom";
import CalendarFormStyled from "./calendarModal.Style";

const CalendarModal = (): JSX.Element => {
  const {
    service: { date },
  } = useContext(ServiceContext);
  const { id } = useParams();
  const { updateDateService } = useApi();

  const sendDate = (newDate: Date) => {
    let date;
    let month;
    let year;
    let day;

    const dateDay = new Date(newDate);
    dateDay.setDate(dateDay.getDate() + 1);

    month = dateDay.getUTCMonth() + 1; //months from 1-12
    day = dateDay.getUTCDate();
    year = dateDay.getUTCFullYear();

    date = year + "-" + month + "-" + day;
    updateDateService(`${id}`, date);
  };

  const today = new Date();

  return (
    <CalendarFormStyled>
      <label className="calendar-form__label" htmlFor="datePicker">
        Actualizar fecha de entrega
      </label>
      <DatePicker
        className="calendar-form__input"
        id="datePicker"
        selected={date ? new Date(date) : today}
        onChange={(date: Date) => sendDate(date)}
      />
    </CalendarFormStyled>
  );
};

export default CalendarModal;
