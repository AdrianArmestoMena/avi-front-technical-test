import styled from "styled-components";

const CalendarFormStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  margin: 0;
  .calendar-form {
    &__label {
      gap: 0.5rem;
      padding: 01rem;
      margin: 0;
      white-space: nowrap;
      text-align: center;
      background-color: aliceblue;
      border: 2px solid black;
      background-color: #00bfb2;
      font-size: 1rem;
      border: none;
      display: flex;
      flex-direction: column;
      @media (min-width: 700px) {
        font-size: 1.5rem;
      }
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
