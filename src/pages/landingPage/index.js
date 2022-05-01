import React from "react";
import * as S from "./styles";
import Hands from "../../assets/washing_hands.svg";
import Logo from "../../assets/logo-name.svg";
import LogoIcon from "../../assets/logo.svg";
import ImgPortoAlegre from "../../assets/portalegre.svg";
import ImgMartins from "../../assets/martins.svg";
import ImgApodi from "../../assets/apodi.svg";
import ImgAguaNova from "../../assets/agua-nova.svg";

const ITEMSPONTOS = [
  {
    id: 1,
    title: "Portalegre",
    description:
      "Portalegre é um dos nossos paraísos serranos. A cidade é conhecida pelas belas paisagens, pousadas charmosas, ótima gastronomia, além da receptividade e hospitalidade do seu povo. Localiza-se na região do Alto Oeste potiguar, a 370 km de Natal",
    photo: ImgPortoAlegre,
  },
  {
    id: 2,
    title: "Martins",
    description:
      "Martins Rio Grande do Norte é uma das principais cidades do interior do Estado Potiguar,  e aqui a falta de praias não deixa nada a desejar  aos visitantes, pois o município é  reflexo de atrativos naturais que incluem cachoeiras,sítio arqueológicos e mata preservada.Quer saber o que mais você encontra por aqui?",
    photo: ImgMartins,
  },
  {
    id: 3,
    title: "Apodi",
    description:
      "Localizada a 420 Km da capital Natal, Apodi é conhecida por ser o município que reserva um dos principais sítios arqueológicos do Brasil para visitação. O sítio, localizado no Distrito de Soledade, e que leva o nome Lajedo de Soledade, tem mais de 5 mil anos e é um dos 5 sítios arqueológicos dentre os 300 que existem no país que recebem visitas regulares.",
    photo: ImgApodi,
  },
  {
    id: 4,
    title: "Água Nova",
    description:
      "Água Nova é um município brasileiro no interior do estado do Rio Grande do Norte. Sua origem está ligada à existência de um bebedouro construído às margens do riacho do Meio, na serra do Bom Será, com água considerada de boa qualidade, atraindo os moradores que moravam nas redondezas.",
    photo: ImgAguaNova,
  },
];

const LandingPage = () => {
  return (
    <S.Container>
      <S.ContainerPage>
        <S.Header>
          Acessibilidade: <img src={Hands} alt="" />
        </S.Header>
        <S.ContainerItems>
          <img src={Logo} alt="" />
          <S.ContainerButtons>
            <S.Button>Guia</S.Button>
            <S.Button>Hotéis</S.Button>
            <S.Button>Restaurantes</S.Button>
            <S.Button>Login</S.Button>
          </S.ContainerButtons>
        </S.ContainerItems>
        <S.ContainerAdverts>
          {React.Children.toArray(
            ITEMSPONTOS.map((item) => (
              <S.Adverts reverse={!(item?.id % 2 === 0)}>
                <div>
                  <h3>{item?.title}</h3>
                  <p>{item?.description}</p>
                  <button>Saiba mais</button>
                </div>
                <img src={item?.photo} alt="" />
              </S.Adverts>
            ))
          )}
        </S.ContainerAdverts>
      </S.ContainerPage>
      <S.Footer>
        <img src={LogoIcon} alt="" /> Todos os direitos reservados ©
      </S.Footer>
    </S.Container>
  );
};

export default LandingPage;
