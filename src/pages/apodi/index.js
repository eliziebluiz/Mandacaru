import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import Carousel from "react-elastic-carousel";
import EntradaApodi from "../../assets/apodi_entrada.svg";
import LogoNova from "../../assets/logo_nova.svg";
import IconEstrela from "../../assets/estrela.svg";
import PontoTurismo1 from "../../assets/apodi_ponto1.svg";
import PontoTurismo2 from "../../assets/apodi_ponto2.svg";
import PontoTurismo3 from "../../assets/apodi_ponto3.svg";
import Hospedagem1 from "../../assets/apodi_hospedagem1.svg";
import Hospedagem2 from "../../assets/apodi_hospedagem2.svg";
import Hospedagem3 from "../../assets/apodi_hospedagem3.svg";
import Gastronomia1 from "../../assets/apodi_gastronomia1.svg";
import Gastronomia2 from "../../assets/apodi_gastronomia2.svg";
import Gastronomia3 from "../../assets/apodi_gastronomia3.svg";

const Apodi = () => {
  return (
    <S.Container>
      <S.ContainerPage>
        <S.Header>
          <Link to="/">
            <img src={LogoNova} alt="" />
          </Link>
          <h1>Apodi</h1>
        </S.Header>
        <img src={EntradaApodi} alt="" className="apodi" />
        <S.ContainerAdverts>
          <S.ContainerLanding>
            <div>
              <h1 className="name">Sobre a cidade</h1>
              <span className="description">
                Apodi é um município brasileiro do estado do Rio Grande do
                Norte. De acordo com a estimativa realizada pelo IBGE (Instituto
                Brasileiro de Geografia e Estatística) em 2017, sua população é
                de 36.323 habitantes. Área territorial de 1 602,477 km². Apodi
                foi emancipado de Portalegre através da Resolução do Conselho
                Geral da Província do Rio Grande em 11 de abril de 1833.
                <br></br>
                <br></br>
                <span className="description">
                  Apodi possui todo o seu território inserido na bacia
                  hidrográfica do Rio Apodi-Mossoró, sendo cortado por esse rio
                  e um de seus afluentes, o Rio Umari. O principal reservatório
                  do município é a Barragem Santa Cruz, oficialmente Barragem
                  Governador Aluízio Alves, com capacidade para 599 712 000 de
                  metros cúbicos de água (m³) e o segundo maior do Rio Grande do
                  Norte, depois da Barragem Armando Ribeiro Gonçalves, em Assu.
                </span>
              </span>
              <h1 className="name">Pontos turísticos da cidade</h1>
              <div className="carousel-wrapper">
                <Carousel itemsToShow={1} pagination={false}>
                  <S.Item>
                    <div>
                      <img src={PontoTurismo1} alt="" />
                    </div>
                    <div>
                      <h3 className="titles">
                        Sítio Arqueológico do Lajedo de Soledade
                      </h3>
                      <span className="description">
                        O sítio arqueológico por milhões de anos já foi mar e,
                        por isso, é possível encontrar animais marinhos
                        fossilizados na região do Lajedo, como ostras,
                        caramujos, estrelas e ouriços-do-mar, de 90 milhões de
                        anos.
                        <h5>
                          Sitio Soledade Centro do Vilarejo, Apodi, Rio Grande
                          do Norte
                        </h5>
                      </span>
                    </div>
                  </S.Item>
                  <S.Item>
                    <div>
                      <img src={PontoTurismo3} alt="" />
                    </div>
                    <div>
                      <h3 className="titles">Museu do Índio Luiza Cantofa</h3>
                      <span className="description">
                        O Museu do Índio Luiza Cantofa surgiu da necessidade de
                        um acervo que preserva a memória dos Índios Tapuias
                        Paiacus, os primeiros habitantes da cidade de Apodi, O
                        Museu contém um riquíssimo acervo de peças líticas.
                        <h5>R. Antônio Lopes Filho, 105, Apodi - RN</h5>
                      </span>
                    </div>
                  </S.Item>
                  <S.Item>
                    <div>
                      <img src={PontoTurismo2} alt="" />
                    </div>
                    <div>
                      <h3 className="titles">Museu de Soledade</h3>
                      <span className="description">
                        O acervo do museu é composto por painéis fotográficos,
                        maquetes e utensílios de pedras usados pelos índios que
                        habitavam a região.
                        <h5>R. Principal, Apodi - RN</h5>
                      </span>
                    </div>
                  </S.Item>
                </Carousel>
              </div>

              <h1 className="name">Hospedagem</h1>
              <main class="cards">
                <section class="card contact">
                  <div class="icon">
                    <a
                      href="https://www.instagram.com/hotellajedoapodi/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Hospedagem1} alt="" className="hospedagem" />
                    </a>
                  </div>
                  <h4>
                    <p>
                      Hotel Lajedo
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                    </p>
                  </h4>
                  <span>
                    Localizado na Rua Joaquim Teixeira de Moura, 1161, Apodi -
                    RN, 59700-000•(84) 3333-3250
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <a
                      href="https://www.instagram.com/hotelchapadao/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Hospedagem2} alt="Shop here." />
                    </a>
                  </div>
                  <h4>
                    <p>
                      Hotel Chapadão
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                    </p>
                  </h4>
                  <span>
                    Localizado na Rua Joaquim Teixeira de Moura - Boa viagem,
                    Apodi - RN, 59700-000•(84) 3333-3631
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <a
                      href="https://www.tripadvisor.com.br/LocationPhotoDirectLink-g2347342-d2661296-i41150003-Passeio_Hotel-Apodi_State_of_Rio_Grande_do_Norte.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Hospedagem3} alt="About us." />
                    </a>
                  </div>
                  <h4>
                    <p>
                      Hotel Passeio
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                    </p>
                  </h4>
                  <span>
                    Localizado na Rua João Epitácio Nogueira, 945 - Boa Viagem,
                    Apodi - RN, 59700-000•(84) 3333-2031
                  </span>
                </section>
              </main>

              <h1 className="name">Gastronomia</h1>
              <main class="cards">
                <section class="card contact">
                  <div class="icon">
                    <a
                      href="https://www.instagram.com/palheirosrestaurante/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Gastronomia1} alt="Contact us." />
                    </a>
                  </div>
                  <h4>
                    <p>
                      Palheiro's Restaurante
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                    </p>
                  </h4>
                  <span>
                    Localizado na Rua Joaquim Teixeira de Moura 487 Av Centro,
                    Apodi, Rio Grande do Norte 59700-000 Brasil
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <a
                      href="https://restaurantguru.com.br/Churrascaria-Sabor-Do-Nordeste-Apodi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Gastronomia2} alt="Shop here." />
                    </a>
                  </div>
                  <h4>
                    <p>
                      Sabor do Nordeste
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                    </p>
                  </h4>
                  <span>
                    Localizado na Rua Tiradentes, 419, Apodi - RN, 59700-000
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <a
                      href="https://www.instagram.com/_pizzariafavorita/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Gastronomia3} alt="About us." />
                    </a>
                  </div>
                  <h4>
                    <p>
                      Pizzaria Favorita
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                      <img
                        src={IconEstrela}
                        alt="Contact us."
                        className="estrela"
                      />
                    </p>
                  </h4>
                  <span>
                    Localizado na Rua marechal Floriano Peixoto 02, 59700-000
                    Apodi, RN
                  </span>
                </section>
              </main>
            </div>
          </S.ContainerLanding>
        </S.ContainerAdverts>
      </S.ContainerPage>
      <S.Footer>
        <div className="container-footer">
          <div>
            <img src={LogoNova} alt="" />
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
          Copyright© 2022. Guia turístico Mandacaru | Universidade Federal Rural
          do Semi-Árido
        </p>
      </S.Footer>
    </S.Container>
  );
};

export default Apodi;
