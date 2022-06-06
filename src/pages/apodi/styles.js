import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 0rem;
  padding-left: 1rem;
  background-color: #ffff;

  > h1 {
    margin-top: 2rem;
    margin-left: 3rem;
  }
`;

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 100%;
  margin-bottom: 2rem;
  align-items: center;

  > img {
    max-width: 20rem;
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
  margin-left: 3rem;
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  font-weight: bold;

  border-radius: 2rem;
  padding: 0.875rem 2rem;

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
  padding: 0rem 3.25rem;
  gap: 2rem;
`;

export const Adverts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  > div h3 {
    color: #38b000;
    font-size: 1.5rem;
  }

  > div p {
    max-width: 30rem;
  }
  > div button {
    display: flex;
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
`;

export const ContainerLanding = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;

  padding: 0rem 1rem;
  gap: 2rem;

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
    justify-content: space-between;
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

  main.cards section.card h4 {
    margin: 16px 0;

    .estrela {
      width: 20px;
      height: 20px;
    }

    .estrela:first-child {
      margin-left: 40px;
    }
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

export const ContainerAbout = styled.div`
  display: grid;
  .wrapper {
    display: grid;
    grid-template-columns: 1.5fr 2fr 1fr;
  }

  .acao {
    border: 1px solid;
    padding: 11px 21px;
    vertical-align: middle;
    background: #000000;
    color: white;
    border-radius: 6px;
    font-size: 20px;
    font-family: helvetica, serif;
  }

  .lapis {
    border: 1px solid;
    padding: 11px 21px;
    vertical-align: middle;
    background: #fd0505;
    color: white;
    border-radius: 6px;
    font-size: 20px;
    font-family: helvetica, serif;
  }

  .nota {
    font-size: 5rem;
    font-family: Times;
    margin-right: 1rem;
  }

  .avalia {
    margin-left: 1rem;
    font-style: italic;
    text-decoration: underline;
  }

  .circle {
    width: 20px;
    margin: 2px;
  }

  .text {
    width: 22rem;
    font-size: 18px;
  }

  .subtitle {
    font-style: italic;
  }

  .sub {
    display: grid;
    grid-template-columns: repeat(6, auto) 1fr;
  }

  .local {
    margin-left: 1rem;
  }

  .separar {
    margin: 1rem;
  }

  .services {
    display: grid;
    grid-template-columns: 0fr 1fr 1.5fr;
    grid-column-gap: 10px;
    > img {
      width: 25px;
    }
  }

  @media (max-width: 1070px) {
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
