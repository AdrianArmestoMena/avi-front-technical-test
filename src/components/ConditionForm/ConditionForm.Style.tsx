import styled from "styled-components";

const ConditionFormStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-conditions {
    font-size: 1.5rem;
    font-weight: 600;
    @media (max-width: 700px) {
      margin: 0.2rem 0;
      font-size: 1;
    }
  }
  .conditions {
    display: flex;
    margin: 0 auto;
    list-style: none;
    width: 90vw;
    gap: 0.5rem;
    padding: 1rem;
    @media (max-width: 700px) {
      overflow-x: scroll;
      gap: 0.5rem;
    }
    &__title {
      margin: 0 auto;
      @media (max-width: 700px) {
        overflow-x: scroll;
        gap: 0.5rem;
      }
    }
    &__list-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    &__item {
      display: flex;
      flex-direction: column;
      flex: 1;
      width: 100%;
      //border: 2px solid black;
      background-color: #d1d1d1;
      @media (max-width: 400px) {
        min-width: 40vw;
      }
    }
    &__condition {
      display: flex;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      text-align: center;
      gap: 0.5rem;
      &--actual {
        color: gray;
      }
    }
    &__name {
      font-size: 1.2rem;
      color: black;
      font-weight: 500;
      &--actual {
        color: gray;
      }
      @media (max-width: 700px) {
        font-size: 1rem;
      }
    }
    &__select {
      width: 100%;
      background-color: #00bfb2;
      padding: 0.5rem;
      font-size: 1.5rem;
      border: none;
      border-radius: 0 0 5px 5px;
      &:hover {
        background-color: #53d3cb;
      }
      &--actual {
        color: gray;
        background-color: gray;
        &:hover {
          background-color: gray;
        }
      }
      @media (max-width: 700px) {
        font-size: 1rem;
      }
    }
  }
`;
export default ConditionFormStyled;
