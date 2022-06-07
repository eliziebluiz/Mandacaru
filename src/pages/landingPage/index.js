import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";

import * as S from "./styles";
import Logo from "../../assets/logo-name.svg";
import LogoIcon from "../../assets/logo-icon.svg";
import Search from "../../assets/search.svg";
import LoadingImg from "../../assets/loading.gif";
import ImgPortoAlegre from "../../assets/portalegre.png";
import ImgMartins from "../../assets/martins.png";
import ImgApodi from "../../assets/apodi.png";
import ImgPatu from "../../assets/patu.png";
import ImgEncanto from "../../assets/encanto.svg";
import Portalegre_Bica from "../../assets/portalegre_bica.svg";
import Pedra_do_inferno from "../../assets/pedra-do-inferno.png";
import Martins_mirante from "../../assets/martins-mirante.png";

import cuscuz_potiguar from "../../assets/cuscuz-potiguar.png";
import buchada from "../../assets/buchada.png";
import baiao from "../../assets/baiao.png";

const ITEMSPONTOS = [
  {
    id: 1,
    title: "Portalegre",
    description:
      "Portalegre é um dos nossos paraísos serranos. A cidade é conhecida pelas belas paisagens, pousadas charmosas, ótima gastronomia, além da receptividade e hospitalidade do seu povo. Localiza-se na região do Alto Oeste potiguar, a 370 km de Natal.",
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
  {
    id: 5,
    title: "Encanto",
    description:
      "Encanto é um município brasileiro no interior do estado do Rio Grande do Norte. Ele se localiza a oeste da capital do estado e ocupa uma área de aproximadamente 126 km².",
    photo: ImgEncanto,
    page: "/encanto",
  },
];

const LandingPage = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(ITEMSPONTOS);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const removeAccents = (str) => {
    return str
      ?.toLocaleLowerCase()
      ?.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  useEffect(() => {
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
    <S.Container100vw>
      <S.Container>
        <S.ContainerPage>
          <S.Header>
            <S.ContainerLogo>
              <img src={Logo} alt="" />
            </S.ContainerLogo>
            <S.ContainerBoxSearch>
              <S.ContainerItems>
                <h3>Bem Vindo ao Alto Oeste</h3>
                <p>
                  Aqui você encontra tudo e mais um pouco sobre essa linda
                  região...
                </p>
                <S.ContainerSearch>
                  <input
                    type="text"
                    placeholder="Busque aqui o seu próximo destino..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <img src={Search} alt="" />
                </S.ContainerSearch>
              </S.ContainerItems>
            </S.ContainerBoxSearch>
          </S.Header>
          <S.TitleCities>
            <p>Principais cidades do Alto Oeste</p>
          </S.TitleCities>
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
          <S.TitleCities>
            <p>Alguns pontos turísticos</p>
          </S.TitleCities>
          <div className="carousel-wrapper">
            <Carousel itemsToShow={1} pagination={false}>
              <S.Item>
                <div>
                  <img
                    className="img-ponto-turistico"
                    src={Portalegre_Bica}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="titles">A Bica</h3>
                  <span className="description">
                    É uma área de conservação ambiental, com trechos de mata
                    intocada, e possui seis nascentes de água mineral pura e
                    cristalina.
                    <h5>R. Dom Jaime Camara, 18, Portalegre - RN, Brasil</h5>
                  </span>
                </div>
              </S.Item>
              <S.Item>
                <div>
                  <img
                    className="img-ponto-turistico"
                    src={Pedra_do_inferno}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="titles">Mirante Três Torres</h3>
                  <span className="description">
                    Formado por duas grandes rochas que proporcionam vistas
                    espetaculares da região. Para chegar até o local, o turista
                    faz um trekking de cerca de 3 km, apreciando a natureza
                    intocada da região.
                    <h5>Mirante Três Torres - Camping - Portalegre - RN</h5>
                  </span>
                </div>
              </S.Item>
              <S.Item>
                <div>
                  <img
                    className="img-ponto-turistico"
                    src={Martins_mirante}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="titles">
                    Mirante e Santuário São João Batista
                  </h3>
                  <span className="description">
                    O espaço é formado por duas capelas, mirante, banheiros e
                    lanchonetes. Tem boa distribuição de lixeiras, iluminação,
                    acesso para cadeirantes e internet.
                    <h5>Mirante e Santuário São João Batista - Encanto - RN</h5>
                  </span>
                </div>
              </S.Item>
            </Carousel>
          </div>
          <S.TitleCities>
            <p>Alguns pratos típicos</p>
          </S.TitleCities>
          <div className="container-center">
            <main class="cards">
              <section class="card contact">
                <div class="icon">
                  <img src={cuscuz_potiguar} alt="Contact us." />
                </div>
                <h3>Cuscuz Potiguar</h3>
              </section>
              <section class="card contact">
                <div class="icon">
                  <img src={buchada} alt="Shop here." />
                </div>
                <h3>Buchada</h3>
              </section>
              <section class="card contact">
                <div class="icon">
                  <img src={baiao} alt="About us." />
                </div>
                <h3>Baião</h3>
              </section>
            </main>
          </div>
        </S.ContainerPage>
        <S.Form
          action="https://formsubmit.co/mandacaruufersa@gmail.com"
          method="POST"
        >
          <h3>Contato</h3>
          <p>
            Envie-nos dúvidas, sugestões ou demais comentários. Responderemos em
            breve por email.
          </p>

          <S.Field>
            <strong>Nome Completo</strong>
            <input
              type="text"
              name="name"
              value={form?.name}
              onChange={handleChange}
              required
            />
          </S.Field>

          <div className="container-info">
            <S.Field>
              <strong>Email</strong>
              <input
                type="email"
                name="email"
                value={form?.email}
                onChange={handleChange}
                required
              />
            </S.Field>
            <S.Field>
              <strong>Telefone</strong>
              <input
                type="number"
                name="phone"
                value={form?.phone}
                onChange={handleChange}
                required
              />
            </S.Field>
          </div>

          <S.Field height="10rem">
            <strong>Mensagem</strong>
            <textarea
              type="text"
              name="message"
              value={form?.message}
              onChange={handleChange}
              required
            />
          </S.Field>
          <input
            type="hidden"
            name="_next"
            value="https://mandacaru.vercel.app/"
          />
          <input type="hidden" name="_captcha" value="false" />
          <S.ContainerButton>
            <button type="submit">Enviar</button>
          </S.ContainerButton>
        </S.Form>
        <S.Footer>
          <div className="container-footer">
            <div>
              <img src={LogoIcon} alt="" />
            </div>
            <div>
              <strong>Guia Mandacaru</strong>
              <p>Br 226 s/n,</p>
              <p>Bairro São Geraldo, Pau dos ferros,</p>
              <p>Rio Grande do Norte, Brasil</p>
              <p>
                <strong>Tel:</strong> +55 84 99999-9999
              </p>
              <p>
                <strong>Email:</strong> mandacaru@ufersa.com
              </p>
            </div>
            <div>
              <strong>Cidades</strong>
              <p>Portalegre</p>
              <p>Martins</p>
              <p>Apodi</p>
              <p>Patu</p>
              <p>Encanto</p>
            </div>
          </div>

          <p>
            Copyright© 2022. Guia Mandacaru | Universidade Federal Rural do
            Semi-Árido
          </p>
        </S.Footer>
      </S.Container>
    </S.Container100vw>
  );
};

export default LandingPage;
