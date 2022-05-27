import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Hands from "../../assets/washing_hands.svg";
import Logo from "../../assets/logo-name.svg";
import LogoIcon from "../../assets/logo.svg";
import Search from "../../assets/search.svg";
import LoadingImg from "../../assets/loading.gif";
import ImgPortoAlegre from "../../assets/portalegre.png";
import ImgMartins from "../../assets/martins.png";
import ImgApodi from "../../assets/apodi.png";
import ImgAguaNova from "../../assets/agua-nova.png";
import ImgSitio from "../../assets/sitio-portalegre.png";
import ImgMirante from "../../assets/mirante.png";
import IconEstaciona from "../../assets/icons/estacionamento.png";
import IconWifi from "../../assets/icons/wifi.png";
import IconNadar from "../../assets/icons/nadar.png";
import IconBar from "../../assets/icons/bar.png";
import IconRestaurante from "../../assets/icons/restaurante.png";
import IconCafe from "../../assets/icons/caneca.png";
import IconNeve from "../../assets/icons/neve.png";
import IconCama from "../../assets/icons/cama.png";
import IconCircle from "../../assets/icons/circle.jpg";
import Mapa from "../../assets/mapa_portalegre.png";

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

const Portalegre = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(ITEMSPONTOS);
  const [loading, setLoading] = useState(false);

  const removeAccents = (str) => {
    return str
      ?.toLocaleLowerCase()
      ?.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  useEffect(() => {
    console.log(ITEMSPONTOS);
    if (search?.trim()?.length >= 3) {
      setLoading(true);
      setData(
        ITEMSPONTOS.filter((item) =>
          removeAccents(item?.title)?.includes(removeAccents(search))
        )
      );
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } else {
      setData(ITEMSPONTOS);
    }
  }, [search]);
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
          <S.ContainerSearch>
            <input
              type="text"
              placeholder="Procurar ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <img src={Search} alt="" />
          </S.ContainerSearch>
        </S.ContainerItems>
        <S.ContainerAdverts>
          <S.ContainerLanding search={!search}>
            <div>
              <div className="casa">
                <h5>Casa de temporada</h5>
              </div>
              <h1 className="name">Portalegre</h1>
              <h5 className="description">
                Sítio bonsucesso, Portalegre - RN, CEP 59810-000, Brasil - {""}
                <a href="https://www.google.com/maps/place/Portalegre+-+RN/@-6.0296325,-38.0205726,12z/data=!3m1!4b1!4m5!3m4!1s0x7bb281bedec5301:0x1b6b19b5bfae9e76!8m2!3d-6.0226536!4d-37.9868993">
                  Visualizar mapa
                </a>
              </h5>
              <img src={ImgSitio} alt="Sitio BonSucesso" className="sitio" />
            </div>
            <div>
              <h2 className="title">
                O Recanto Alto da Serra oferece restaurante, piscina ao ar
                livre, bar e jardim em Portalegre.
              </h2>
              <img src={ImgMirante} alt="mirante" className="mirante" />
            </div>
          </S.ContainerLanding>
          <S.ContainerAbout search={!search}>
            <div>
              <h1>Sobre</h1>
            </div>
            <div className="wrapper">
              <div>
                <span className="nota">5,0</span>
                <img src={IconCircle} alt="circle" className="circle" />
                <img src={IconCircle} alt="circle" className="circle" />
                <img src={IconCircle} alt="circle" className="circle" />
                <img src={IconCircle} alt="circle" className="circle" />
                <img src={IconCircle} alt="circle" className="circle" />
                <span className="avalia">7 avaliações</span>
                <div>
                  <span className="subtitle">#1 de 2 em Portalegre</span>
                </div>
                <br></br>
                <div className="sub">
                  <img src={IconCircle} alt="circle" className="circle" />
                  <img src={IconCircle} alt="circle" className="circle" />
                  <img src={IconCircle} alt="circle" className="circle" />
                  <img src={IconCircle} alt="circle" className="circle" />
                  <img src={IconCircle} alt="circle" className="circle" />
                  <span className="local">Localização</span>
                </div>
                <br></br>
                <div className="sub">
                  <img src={IconCircle} alt="circle" className="circle" />
                  <img src={IconCircle} alt="circle" className="circle" />
                  <img src={IconCircle} alt="circle" className="circle" />
                  <img src={IconCircle} alt="circle" className="circle" />
                  <img src={IconCircle} alt="circle" className="circle" />
                  <span className="local">Atendimento</span>
                </div>
                <br></br>
                <div className="text">
                  A Pousada Recanto Alto da Serra se lança como uma das
                  principais opções de hospedagem da região Alto Oeste do RN.
                  Trata-se de um empreendimento portalegrense já reconhecido
                  pela Gastronomia e que agora desponta na arte da
                  hospitalidade, bem recebendo seus visitantes. O proprietário,
                  que também é Chef do Restaurante, cuida pessoalmente de todos
                  os detalhes, inclusive do café da manhã, servido entre 7:30 às
                  9:30. Recebemos sua visita de quarta a domingo!
                </div>
              </div>
              <div>
                <h4>Serviços do estabelecimento</h4>
                <div className="services">
                  <img
                    src={IconEstaciona}
                    alt="estacionamento"
                    className="estaciona"
                  />
                  Estacionamento gratuito
                  <div className="services">
                    <img src={IconWifi} alt="wifi" className="wifi" />
                    Internet sem fio gratuita e de alta velocidade (WiFi)
                  </div>
                </div>
                <br></br>
                <div className="services">
                  <img src={IconWifi} alt="wifi" className="wifi" />
                  Wi-fi
                  <div className="services">
                    <img src={IconNadar} alt="natacao" className="natacao" />
                    Piscina
                  </div>
                </div>
                <br></br>
                <div className="services">
                  <img src={IconCafe} alt="cafe da manha" className="cafe" />
                  Café da manhã gratuito
                  <div className="services">
                    <img src={IconBar} alt="bar" className="bar" />
                    Bar/lounge
                  </div>
                </div>
                <br></br>
                <div className="services">
                  <img
                    src={IconRestaurante}
                    alt="restaurante"
                    className="comida"
                  />
                  Restaurante
                </div>
                <br></br>
                <h4>Comodidades nos quartos</h4>
                <div className="services">
                  <img src={IconNeve} alt="neve" className="neve" />
                  Ar-condicionado
                  <div className="services">
                    <img src={IconRestaurante} alt="frigo" className="frigo" />
                    Frigobar
                  </div>
                </div>
                <br></br>
                <h4>Tipos de quarto</h4>
                <div className="services">
                  <img src={IconCama} alt="cama" className="cama" />
                  Quartos para família
                </div>
              </div>
              <div>
                <img src={Mapa} alt="mapa" className="mapa" />
              </div>
            </div>
            <br></br>

            <div className="wrapper">
              <div>
                <h1>Avaliações</h1>
              </div>
              <div className="avaliar">
                <br></br>
                <button className="acao">Faça uma avaliação</button>
                <span className="separar">ou</span>
                <button className="lapis">Denunciar</button>
              </div>
            </div>

            <div className="wrapper">
              <div></div>
              <div></div>
              <div>
                {/* <img src={Comida} alt="comida" className="comida" /> */}
              </div>
            </div>
          </S.ContainerAbout>
          {loading ? (
            <S.ContainerLoading>
              <img src={LoadingImg} alt="" />
            </S.ContainerLoading>
          ) : !!data.length ? (
            React.Children.toArray(
              data.map((item) => (
                <S.Adverts reverse={!(item?.id % 2 === 0)} search={search}>
                  <div>
                    <h3>{item?.title}</h3>
                    <p>{item?.description}</p>
                    <button>Saiba mais</button>
                  </div>
                  <img src={item?.photo} alt="" />
                </S.Adverts>
              ))
            )
          ) : (
            <S.ContainerEmpty>
              <img src={LogoIcon} alt="" />
              <h3>Nenhum ponto turistico foi encontrado!</h3>
            </S.ContainerEmpty>
          )}
        </S.ContainerAdverts>
      </S.ContainerPage>
      <S.Footer>
        <img src={LogoIcon} alt="" /> Todos os direitos reservados ©
      </S.Footer>
    </S.Container>
  );
};

export default Portalegre;
