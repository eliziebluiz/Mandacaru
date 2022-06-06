import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import Carousel from "react-elastic-carousel";
import EntradaEncanto from "../../assets/encanto_entrada.svg";
import LogoNova from "../../assets/logo_nova.svg";
import IconEstrela from "../../assets/estrela.svg";
import PontoTurismo1 from "../../assets/encanto_ponto1.svg";
import Gastronomia1 from "../../assets/encanto_gastronomia1.svg";
import Gastronomia2 from "../../assets/encanto_gastronomia2.svg";
import Gastronomia3 from "../../assets/encanto_gastronomia3.svg";

const Encanto = () => {
  return (
    <S.Container>
      <S.ContainerPage>
        <S.Header>
          <Link to="/">
            <img src={LogoNova} alt="" />
          </Link>
          <h1>Encanto</h1>
        </S.Header>
        <img src={EntradaEncanto} alt="" className="apodi" />
        <S.ContainerAdverts>
          <S.ContainerLanding>
            <div>
              <h1 className="name">Sobre a cidade</h1>
              <h5 className="description">
                Encanto é um município brasileiro no interior do estado do Rio
                Grande do Norte. Ele se localiza a oeste da capital do estado e
                ocupa uma área de aproximadamente 126 km².
                <h5 className="description">
                  Antes de ser elevado à categoria de município, era um distrito
                  pertencente ao município de Pau dos Ferros, com o nome de
                  Joaquim Correia. Atualmente, Encanto é formado apenas pelo
                  distrito sede e abriga uma das maiores obras de engenharia
                  civil do Rio Grande do Norte, o Mirante e Santuário de São
                  João Batista, no topo do serrote homônimo.
                </h5>
              </h5>
              <h1 className="name">Pontos turísticos da cidade</h1>
              <div className="carousel-wrapper">
                <Carousel itemsToShow={1} pagination={false}>
                  <S.Item>
                    <div>
                      <img src={PontoTurismo1} alt="" />
                    </div>
                    <div>
                      <h3 className="titles">
                        Mirante e Santuário São João Batista
                      </h3>
                      <span className="description">
                        Inaugurado em 20 de junho de 2015, é uma das maiores
                        obras de engenharia civil do Rio Grande do Norte.
                        <h5>
                          Localizado no serrote homônimo e formado pela capela
                          de São João Batista e espaços culturais e de lazer.
                        </h5>
                      </span>
                    </div>
                  </S.Item>
                </Carousel>
              </div>

              <h1 className="name">Gastronomia</h1>
              <main class="cards">
                <section class="card contact">
                  <div class="icon">
                    <img src={Gastronomia1} alt="Contact us." />
                  </div>
                  <h4>
                    <p>
                      Diogo Bar e Ribeirinhos
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
                  <span>Localizado no centro da cidade, Encanto, RN</span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <img src={Gastronomia2} alt="Shop here." />
                  </div>
                  <h4>
                    <p>
                      Sabor do Sertão
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
                    Localizado na R. Manoel Granjeiro, Encanto - RN, 59905-000
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <img src={Gastronomia3} alt="About us." />
                  </div>
                  <h4>
                    <p>
                      Restaurante Ki Delícia
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
                    Localizado na BR-226, 220, Encanto - RN, 59905-000
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

export default Encanto;
