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
  padding: 0.5rem 0rem;
  padding-left: 4.375rem;

  background-color: #38b000;
  color: #fff;
  font-weight: bold;

  > img {
    margin-left: 0.5rem;
  }
`;

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0rem;
  margin-top: 10rem;

  background-color: #38b000;
  color: #fff;
  font-weight: bold;

  > img {
    margin-top: -2rem;
    margin-right: 0.5rem;
  }
`;

export const ContainerItems = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;

  > img {
    max-width: 20rem;
  }

  @media (max-width: 1070px) {
    flex-direction: column;
    align-items: center;
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
  flex-direction: ${(props) => (props.reverse ? "row" : "row-reverse")};
  justify-content: space-between;
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

  @media(max-width: 1070px){
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