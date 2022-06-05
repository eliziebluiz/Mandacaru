import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import Carousel from "react-elastic-carousel";
import EntradaPortalegre from "../../assets/portalegre_nova.svg";
import LogoNova from "../../assets/logo_nova.svg";
import Portalegre_Bica from "../../assets/portalegre_bica.svg";
import Portalegre1 from "../../assets/portalegre_1.png";
import Portalegre2 from "../../assets/portalegre_2.png";
import Portalegre3 from "../../assets/portalegre_3.png";

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
                  A história da região onde Portalegre situa-se mescla a
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
                      </span>
                    </div>
                  </S.Item>
                  <S.Item>2</S.Item>
                  <S.Item>3</S.Item>
                </Carousel>
              </div>

              <h1 className="name">Hospedagem</h1>
              <main class="cards">
                <section class="card contact">
                  <div class="icon">
                    <img src={Portalegre1} alt="Contact us." />
                  </div>
                  <h3>Novotel</h3>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <img src={Portalegre2} alt="Shop here." />
                  </div>
                  <h3>Novotel</h3>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <img src={Portalegre3} alt="About us." />
                  </div>
                  <h3>Novotel</h3>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </section>
              </main>

              <h1 className="name">Gastronomia</h1>
              <main class="cards">
                <section class="card contact">
                  <div class="icon">
                    <img src={Portalegre1} alt="Contact us." />
                  </div>
                  <h3>Novotel</h3>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <img src={Portalegre2} alt="Shop here." />
                  </div>
                  <h3>Novotel</h3>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <img src={Portalegre3} alt="About us." />
                  </div>
                  <h3>Novotel</h3>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </section>
              </main>
            </div>
          </S.ContainerLanding>
        </S.ContainerAdverts>
      </S.ContainerPage>
      <S.Footer>
        <img src={LogoNova} alt="" /> Todos os direitos reservados ©
      </S.Footer>
    </S.Container>
  );
};

export default Portalegre;
