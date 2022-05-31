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

const LandingPage = () => {
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
          {loading ? (
            <S.ContainerLoading>
              <img src={LoadingImg} alt="" />
            </S.ContainerLoading>
          ) : !!data.length ? (
            React.Children.toArray(
              data.map((item) => (
                <S.Adverts reverse={!(item?.id % 2 === 0)}>
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

export default LandingPage;
