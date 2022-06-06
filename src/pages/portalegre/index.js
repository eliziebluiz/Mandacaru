import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import Carousel from "react-elastic-carousel";
import EntradaPortalegre from "../../assets/portalegre_nova.svg";
import LogoNova from "../../assets/logo_nova.svg";
import IconEstrela from "../../assets/estrela.svg";
import Portalegre_Bica from "../../assets/portalegre_bica.svg";
import PontoTurismo2 from "../../assets/portalegre_pinga.svg";
import PontoTurismo3 from "../../assets/portalegre_torres.svg";
import Hospedagem1 from "../../assets/portalegre_hospedagem_1.svg";
import Hospedagem2 from "../../assets/portalegre_hospedagem_2.svg";
import Hospedagem3 from "../../assets/portalegre_hospedagem_3.svg";
import Gastronomia1 from "../../assets/portalegre_gastronomia_1.svg";
import Gastronomia2 from "../../assets/portalegre_gastronomia_2.svg";
import Gastronomia3 from "../../assets/portalegre_gastronomia_3.svg";

const Portalegre = () => {
  return (
    <S.Container>
      <S.ContainerPage>
        <S.Header>
          <Link to="/">
            <img src={LogoNova} alt="" />
          </Link>
          <h1>Portalegre</h1>
        </S.Header>
        <img src={EntradaPortalegre} alt="" />
        <S.ContainerAdverts>
          <S.ContainerLanding>
            <div>
              <h1 className="name">Sobre a cidade</h1>
              <h5 className="description">
                Portalegre é um município brasileiro no Alto Oeste do estado do
                Rio Grande do Norte, localizado no Polo Serrano. Área
                territorial de 110 km².
                <h5 className="description">
                  A história da região onde Portalegre situa-se, mescla a
                  influência entre os nativos das terras, os índios Paiacu,
                  Tarairiu, portugueses e a expansão da carne do charque.
                </h5>
                <h5 className="description">
                  No final do Século XVII foi registrado o surgimento de
                  Portalegre através do avanço de currais de gado, durante o
                  ciclo econômico da carne do charque, que se estendiam até a
                  várzea do rio Açu/Apodi. O Capitão-mor Manoel Nogueira
                  Ferreira ergueu a primeira fazenda do município pela
                  necessidade de procurar paz e tranquilidade, subindo então
                  para a serra. A terra foi demarcada com uma tora de madeira
                  (dormentes). Daí o primeiro nome da vila foi considerado Serra
                  dos Dormentes.
                </h5>
              </h5>
              <h1 className="name">Pontos turísticos da cidade</h1>
              <div className="carousel-wrapper">
                <Carousel itemsToShow={1} pagination={false}>
                  <S.Item>
                    <div>
                      <img src={Portalegre_Bica} alt="" />
                    </div>
                    <div>
                      <h3 className="titles">A Bica</h3>
                      <span className="description">
                        É uma área de conservação ambiental, com trechos de mata
                        intocada, e possui seis nascentes de água mineral pura e
                        cristalina.
                        <h5>
                          R. Dom Jaime Camara, 18, Portalegre - RN, Brasil
                        </h5>
                      </span>
                    </div>
                  </S.Item>
                  <S.Item>
                    <div>
                      <img src={PontoTurismo2} alt="" />
                    </div>
                    <div>
                      <h3 className="titles">Cachoeira do Pinga</h3>
                      <span className="description">
                        Com água pura e cristalina, considerada a única
                        cachoeira perene do estado do Rio Grande do Norte,
                        durante o ano todo escorre água continuamente entre as
                        pedras, e tem 96 metros de altura.
                        <h5>
                          Trilha Ecológica da Cachoeira do Pinga - Portalegre -
                          RN
                        </h5>
                      </span>
                    </div>
                  </S.Item>
                  <S.Item>
                    <div>
                      <img src={PontoTurismo3} alt="" />
                    </div>
                    <div>
                      <h3 className="titles">Mirante Três Torres</h3>
                      <span className="description">
                        Formado por duas grandes rochas que proporcionam vistas
                        espetaculares da região. Para chegar até o local, o
                        turista faz um trekking de cerca de 3 km, apreciando a
                        natureza intocada da região.
                        <h5>Mirante Três Torres - Camping - Portalegre - RN</h5>
                      </span>
                    </div>
                  </S.Item>
                </Carousel>
              </div>

              <h1 className="name">Hospedagem</h1>
              <main class="cards">
                <section class="card contact">
                  <div class="icon">
                    <img src={Hospedagem1} alt="" className="hospedagem" />
                  </div>
                  <h4>
                    <p>
                      Recanto Alto da Serra
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
                    Localizado na Rua dos Mirantes, 52, Centro, Portalegre - RN,
                    CEP 59810-000, Brasil
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <img src={Hospedagem2} alt="Shop here." />
                  </div>
                  <h4>
                    <p>
                      Hotel Portal da Serra
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
                    Localizado na Rua Antonio Brito de Freitas, s/n, Portalegre
                    - RN, 59810-000 - (84) 99945-6581
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <img src={Hospedagem3} alt="About us." />
                  </div>
                  <h4>
                    <p>
                      Pousada Boa Vista
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
                    Localizado no Terminal Turístico - Mirante Boa Vista,
                    Portalegre, Rio Grande do Norte 59810-000 Brasil
                  </span>
                </section>
              </main>

              <h1 className="name">Gastronomia</h1>
              <main class="cards">
                <section class="card contact">
                  <div class="icon">
                    <img src={Gastronomia1} alt="Contact us." />
                  </div>
                  <h4>
                    <p>
                      Restaurante Donana
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
                    Localizado na Av. Hipólito Fialho, 284 - Centro, Portalegre
                    - RN, 59810-000
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <img src={Gastronomia2} alt="Shop here." />
                  </div>
                  <h4>
                    <p>
                      Restaurante Alto da Serra
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
                    Localizado na Rua dos mirantes - RN-177, Portalegre - RN,
                    59810-000
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <img src={Gastronomia3} alt="About us." />
                  </div>
                  <h4>
                    <p>
                      Resenharia Restaurante
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
                    Localizado na Rua dos mirantes - RN-177, Portalegre - RN,
                    59810-000
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

export default Portalegre;
