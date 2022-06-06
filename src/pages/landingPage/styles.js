import styled from "styled-components";
import backgroundSection from "../../assets/background-section.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  overflow-x: hidden;
  overflow-y: scroll;

  .container-center {
    display: flex;
    margin: 0 auto;
    padding: 0rem 6.25rem;
  }

  .carousel-wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .description {
    font-size: 15px;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
  }

  .name {
    color: #457d2b;
  }

  .mirante {
    margin-top: 2rem;
    margin-left: 2rem;
  }

  .title {
    text-align: center;
    width: 40rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    /* color: #ffff; */
    color: #38b000;
    border-left: solid #0071c2;
  }

  .iconLocaliza {
    width: 30px;
    height: 25px;
  }

  .links {
    text-decoration: none;
    color: #2e8fd5;
  }

  //style carrousel
  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px black;
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }

  .rec.rec-arrow {
    background-color: #38b000;
    color: #ffffff;
  }
  //

  //style cards
  main.cards {
    display: flex;
  }

  main.cards section.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-left: 50px;
  }

  main.cards section.card:first-child {
    margin-left: 0;
  }

  main.cards section.card img {
    width: 100%;
  }

  main.cards section.card h3 {
    font-size: 100%;
    margin: 16px 0;
  }

  main.cards section.card span {
    font-weight: 300;
    max-width: 240px;
    font-size: 80%;
    margin-bottom: 16px;
  }

  main.cards section.card.contact {
    box-shadow: 10px 20px 30px -30px #000000;
  }

  //

  @media (max-width: 1070px) {
    flex-direction: column;
    align-items: center;
    .title {
      border-left: none;
    }

    main {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 500px;
  padding: 1rem 0rem;

  background: url(${backgroundSection}) no-repeat center;
`;

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1500px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0rem;
  margin-top: 10rem;
  background-color: #ffff;
  border: 1px solid #eceaea;
  font-weight: bold;

  .container-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 4rem;
    > div > p {
      font-weight: 400;
    }
  }

  > p {
    color: #000000;
    font-weight: 400;
    margin-top: 7rem;
  }

  > img {
    margin-right: 0.5rem;
  }
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
  align-items: center;
  background-color: #ffffff;
  max-width: 30rem;
  max-height: 10rem;
  padding: 2rem 4.5rem;
  border-radius: 0.5rem;
  justify-content: center;

  > img {
    max-width: 20rem;
  }

  > h3 {
    font-size: 2rem;
    margin: 0rem;
    margin-bottom: 0.875rem;
  }
  > p {
    font-size: 0.875rem;
    margin: 0rem;
    margin-bottom: 0.875rem;
    color: #457d2b;
  }

  @media (max-width: 1070px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;

  max-height: 1rem;
  box-shadow: 0rem 0.125rem 1.25rem rgba(67, 67, 67, 0.3);
  font-weight: bold;
  background-color: #ffffff;

  border-radius: 2rem;
  padding: 0.875rem 2rem;
  width: 100%;

  > img {
    max-height: 1.5rem;
  }

  > input {
    border: none;
    width: 100%;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;

export const ContainerAdverts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Adverts = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row" : "row-reverse")};
  background-color: ${(props) => (props.reverse ? "#FFFFFF" : "#ECEAEA")};
  justify-content: space-between;
  align-items: center;
  padding: 1rem 6.25rem;

  > div h3 {
    color: #38b000;
    font-size: 1.5rem;
  }

  > div p {
    max-width: 30rem;
    line-height: 1.5rem;
    text-align: justify;
  }
  > div button {
    display: flex;
    text-decoration: none;
    margin: 1rem auto;
    background-color: #d9fd00;
    font-weight: bold;

    border-radius: 2rem;
    border: none;
    padding: 0.875rem 2rem;

    cursor: pointer;
  }

  > img {
    max-width: 30rem;
  }

  @media (min-width: 1630px) {
    justify-content: center;
    gap: 10rem;
    > div h3 {
      font-size: 2rem;
    }
    > div p {
      font-size: 1rem;
    }
    > div button {
      padding: 1rem 2.5rem;
    }
    > img {
      max-width: 35rem;
    }
  }

  @media (max-width: 1070px) {
    flex-direction: column-reverse;
    > img {
      max-width: 17rem;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;

  margin-left: 3rem;

  @media (max-width: 1070px) {
    display: none;
  }
`;

export const Button = styled.button`
  min-width: 7rem;
  min-height: 2rem;

  font-weight: bold;
  border: none;
  border-radius: 3rem;
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const ContainerEmpty = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  > img {
    max-height: 10rem;
  }
`;

export const ContainerLoading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  > img {
    max-height: 10rem;
  }
`;

export const TitleCities = styled.div`
  display: flex;
  padding: 0rem 6.25rem;

  > p {
    font-size: 2rem;
    color: #38b000;
    font-weight: 700;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 0rem 0rem 3rem;
`;

export const Container100vw = styled.div`
  display: flex;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
`;

export const ContainerBoxSearch = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 300px;
  width: 90%;
  color: #000000;

  .titles {
    margin-left: 3rem;
    margin-top: 5rem;
  }

  .titles:first-child {
    text-align: center;
  }

  .description {
    font-size: 15px;
    display: block;
    margin-left: 10%;
    margin-right: 20%;
  }
  .img-ponto-turistico {
    max-width: 40rem;
  }
`;
