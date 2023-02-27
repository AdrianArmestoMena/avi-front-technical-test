import styled from "styled-components";

const CalendarFormStyled = styled.section`
  width: fit-content;
  margin: 20px;
  align-items: center;
  gap: 0.5rem;

  .calendar-form {
    &__label {
      white-space: nowrap;
      text-align: center;
      background-color: aliceblue;
      border: 2px solid black;
      background-color: #00bfb2;
      padding: 0.5rem;
      font-size: 1.5rem;
      border: none;
      &:hover {
        background-color: #53d3cb;
      }
    }
    &__input {
      display: none;
    }
  }
`;

export default CalendarFormStyled;
