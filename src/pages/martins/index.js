import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import Logo from "../../assets/logo-name.svg";
import LogoIcon from "../../assets/logo.svg";
import Search from "../../assets/search.svg";
import LoadingImg from "../../assets/loading.gif";
import ImgPortoAlegre from "../../assets/portalegre.png";
import ImgMartins from "../../assets/martins.png";
import ImgApodi from "../../assets/apodi.png";
import ImgPatu from "../../assets/patu.png";
import ImgSitio from "../../assets/martins-2.png";
import ImgMirante from "../../assets/martins-3.png";
import IconEstaciona from "../../assets/icons/estacionamento.png";
import IconWifi from "../../assets/icons/internet.png";
import IconNadar from "../../assets/icons/nadar.png";
import IconPessoa from "../../assets/icons/responsavel.png";
import IconRestaurante from "../../assets/icons/sala.png";
import IconCafe from "../../assets/icons/caneca.png";
import IconNeve from "../../assets/icons/neve.png";
import IconCama from "../../assets/icons/cama.png";
import IconCircle from "../../assets/icons/circle.jpg";
import IconLocalizacao from "../../assets/icons/localizacao.png";

import Modal from "react-modal";

Modal.setAppElement("#root");

const ITEMSPONTOS = [
  {
    id: 1,
    title: "Portalegre",
    description:
      "Portalegre é um dos nossos paraísos serranos. A cidade é conhecida pelas belas paisagens, pousadas charmosas, ótima gastronomia, além da receptividade e hospitalidade do seu povo. Localiza-se na região do Alto Oeste potiguar, a 370 km de Natal",
    photo: ImgPortoAlegre,
    page: "/portalegre",
  },
  {
    id: 2,
    title: "Martins",
    description:
      "Martins Rio Grande do Norte é uma das principais cidades do interior do Estado Potiguar,  e aqui a falta de praias não deixa nada a desejar  aos visitantes, pois o município é  reflexo de atrativos naturais que incluem cachoeiras,sítio arqueológicos e mata preservada.Quer saber o que mais você encontra por aqui?",
    photo: ImgMartins,
    page: "/martins",
  },
  {
    id: 3,
    title: "Apodi",
    description:
      "Localizada a 420 Km da capital Natal, Apodi é conhecida por ser o município que reserva um dos principais sítios arqueológicos do Brasil para visitação. O sítio, localizado no Distrito de Soledade, e que leva o nome Lajedo de Soledade, tem mais de 5 mil anos e é um dos 5 sítios arqueológicos dentre os 300 que existem no país que recebem visitas regulares.",
    photo: ImgApodi,
    page: "/apodi",
  },
  {
    id: 4,
    title: "Patu",
    description:
      "Patu se destaca por seu grande potencial turístico em vários segmentos: religioso, cultural, ecológico e também o turismo de aventura. Unindo-se a tudo isso, podemos destacar o seu povo vibrante e hospitaleiro, a sua típica culinária e o seu rico artesanato que reforçam a base da potencial turístico.",
    photo: ImgPatu,
    page: "/patu",
  },
];

const Martins = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(ITEMSPONTOS);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      width: "40%",
      height: "55%",
      left: "30%",
      top: "15%",
      background: "#38B00040",
    },
  };

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
        <S.Header></S.Header>
        <S.ContainerItems>
          <img src={Logo} alt="" />
          <S.ContainerButtons>
            <Link to="/">
              <S.Button>Inicio</S.Button>
            </Link>
            <S.Button>Guia</S.Button>
            <S.Button>Hotéis</S.Button>
            <S.Button>Restaurantes</S.Button>
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
              <h1 className="name">Martins</h1>
              <h5 className="description">
                <img
                  src={IconLocalizacao}
                  alt="Iconlocalizacao"
                  className="iconLocaliza"
                />
                Pç. Almino Afonso N° 18 - Centro, Martins, CEP 59800-000, Brasil
                - {""}
                <a
                  href="https://www.google.com/maps/place/Martins+-+RN/@-6.0905309,-37.9066847,12z/data=!3m1!4b1!4m5!3m4!1s0x7bad421ef112245:0x3be863d4a8f76d82!8m2!3d-6.0891673!4d-37.9119312"
                  className="links"
                >
                  Visualizar mapa
                </a>
              </h5>
              <img src={ImgSitio} alt="Sitio BonSucesso" className="sitio" />
            </div>
            <div>
              <h2 className="title">
                O Hotel Serrano oferece restaurante, piscina ao ar <br /> livre,
                sala de jogos e várias outras atrações
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
                <span className="nota">4,0</span>
                <img src={IconCircle} alt="circle" className="circle" />
                <img src={IconCircle} alt="circle" className="circle" />
                <img src={IconCircle} alt="circle" className="circle" />
                <img src={IconCircle} alt="circle" className="circle" />
                <img src={IconCircle} alt="circle" className="circle" />
                <span className="avalia">201 avaliações</span>
                <div>
                  <span className="subtitle"></span>
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
                  <span className="local">Limpeza</span>
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
                  Encontrar uma hospedaria em Martins não precisa ser
                  complicado. Receba as boas-vindas do Hotel Serrano, uma boa
                  opção para viajantes como você.
                  <p>
                    Os hóspedes têm acesso a várias comodidades, a exemplo de
                    recepção 24 horas, terraço aberto e área externa mobiliada,
                    durante a estadia no Hotel Serrano. Além disso, o Hotel
                    Serrano oferece piscina e bar, o que vai tornar sua viagem a
                    Martins ainda mais gratificante. Como uma conveniência a
                    mais, o estacionamento grátis está disponível para os
                    hóspedes.
                  </p>
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
                    Internet gratuita
                  </div>
                </div>
                <br></br>
                <div className="services">
                  <img src={IconNadar} alt="natacao" className="natacao" />
                  Piscina
                  <div className="services">
                    <img src={IconCafe} alt="cafe da manha" className="cafe" />
                    Café da manhã gratuito
                  </div>
                </div>
                <br></br>
                <div className="services">
                  <img
                    src={IconRestaurante}
                    alt="restaurante"
                    className="comida"
                  />
                  Sala de jogos
                  <div className="services">
                    <img
                      src={IconRestaurante}
                      alt="restaurante"
                      className="comida"
                    />
                    Caminhada
                  </div>
                </div>
                <br></br>
                <div className="services">
                  <img src={IconPessoa} alt="restaurante" className="comida" />
                  Canais de TV infantis
                  <div className="services">
                    <img
                      src={IconPessoa}
                      alt="restaurante"
                      className="comida"
                    />
                    Espaço infantil coberto
                  </div>
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
              <div></div>
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
                <button className="lapis" onClick={handleOpenModal}>
                  Denunciar
                </button>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={handleCloseModal}
                  style={customStyles}
                >
                  <h2>Denúncia:</h2>
                  <h4>
                    Digite o local de onde você quer enviar sua manifestação:
                  </h4>
                  <input placeholder="Escreva aqui"></input>
                  <h4>Escreva abaixo sua insatisfação:</h4>
                  <textarea
                    rows="7"
                    cols="50"
                    placeholder="Escreva aqui"
                  ></textarea>
                  <br></br>
                  <br></br>
                  <button onClick={handleCloseModal}>Enviar</button>
                </Modal>
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
                    <Link to={item?.page} style={{ textDecoration: "none" }}>
                      <button>Saiba mais</button>
                    </Link>
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

export default Martins;
