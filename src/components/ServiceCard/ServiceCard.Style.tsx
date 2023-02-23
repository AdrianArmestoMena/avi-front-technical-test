import styled from "styled-components";

const ServiceCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  @media (max-width: 700px) {
    width: 90vw;
  }
  .service-card {
    &__desktop-table {
      @media (max-width: 700px) {
        display: none;
      }
    }
    &__mobile-table {
      @media (min-width: 700px) {
        display: none;
      }
    }
  }
  table {
    border: 2px solid black;
    width: 100%;
  }
  caption {
    padding: 0.5rem;
    border: 2px solid black;
    background-color: #d1d1d1;
    border-bottom: none;
    font-size: 2rem;
    font-weight: 500;
    @media (max-width: 700px) {
      font-size: 1.2rem;
    }
  }
  th {
    padding: 0.5rem;
    border: 1px solid black;
    font-weight: 700;
    color: black;
    font-size: 1.5rem;
    @media (max-width: 700px) {
      font-size: 0.8rem;
    }
  }
  td {
    text-align: center;
    border: 1px solid black;
    padding: 0.5rem;
    font-size: 1.5rem;
    @media (max-width: 700px) {
      font-size: 0.8rem;
    }
  }
`;
export default ServiceCardStyled;
