import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import Carousel from "react-elastic-carousel";
import EntradaPatu from "../../assets/patu_entrada.svg";
import LogoNova from "../../assets/logo_nova.svg";
import IconEstrela from "../../assets/estrela.svg";
import PontoTurismo1 from "../../assets/patu_ponto1.svg";
import PontoTurismo2 from "../../assets/patu_ponto2.svg";
import PontoTurismo3 from "../../assets/patu_ponto3.svg";
import Hospedagem1 from "../../assets/patu_hospedagem1.svg";
import Hospedagem2 from "../../assets/patu_hospedagem2.svg";
import Gastronomia1 from "../../assets/patu_gastronomia1.svg";
import Gastronomia2 from "../../assets/patu_gastronomia2.svg";
import Gastronomia3 from "../../assets/patu_gastronomia3.svg";

const Patu = () => {
  return (
    <S.Container>
      <S.ContainerPage>
        <S.Header>
          <Link to="/">
            <img src={LogoNova} alt="" />
          </Link>
          <h1>Patu</h1>
        </S.Header>
        <img src={EntradaPatu} alt="" className="apodi" />
        <S.ContainerAdverts>
          <S.ContainerLanding>
            <div>
              <h1 className="name">Sobre a cidade</h1>
              <span className="description">
                Cidade que se formou no pé de uma serra, denominada Serra de
                Patu, está localizada na microrregião serrana, a uma distância
                de 310 km da capital do estado, Natal, com uma área de 303,5 km²
                e uma população de aproximadamente 12 mil habitantes.
                <br></br>
                <br></br>
                <span className="description">
                  Patu se destaca por seu grande potencial turístico em vários
                  segmentos: religioso, cultural, ecológico e também o turismo
                  de aventura. Unindo-se a tudo isso, podemos destacar o seu
                  povo vibrante e hospitaleiro, a sua típica culinária e o seu
                  rico artesanato que reforçam a base do potencial turístico.
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
                      <h3 className="titles">Voo Livre</h3>
                      <span className="description">
                        Patu tem uma das melhores condições de voo do mundo para
                        o paraglider e todos os anos pilotos de várias partes do
                        planeta vem à Patu na tentativa de quebrar novos
                        recordes. A temporada de voos acontece entre os meses de
                        outubro e dezembro.
                        <h5>Patu - RN, 59770-000</h5>
                      </span>
                    </div>
                  </S.Item>
                  <S.Item>
                    <div>
                      <img src={PontoTurismo2} alt="" />
                    </div>
                    <div>
                      <h3 className="titles">Santuário do Lima</h3>
                      <span className="description">
                        Na Parte religiosa temos o imponente Santuário de Nossa
                        Senhora dos Impossíveis, um dos mais importantes
                        complexos religiosos do nordeste do Brasil e que foi
                        eleito pelo voto popular como uma das sete maravilhas do
                        RN.
                        <h5>
                          Serra do Lima - Zona Rural - Patu - RN, 59770-000
                        </h5>
                      </span>
                    </div>
                  </S.Item>
                  <S.Item>
                    <div>
                      <img src={PontoTurismo3} alt="" />
                    </div>
                    <div>
                      <h3 className="titles">Serra de Patu</h3>
                      <span className="description">
                        Possui uma grande variedade de fauna e flora, desde o
                        pico do Pelado, passando pelo Cruzeiro de São Sebastião,
                        até o morro de Santo Agostinho, chegando até as piscinas
                        naturais na ponta da serra, onde é possível tomar um
                        delicioso banho e repor as energias gastas numa trilha
                        de mais de 2 horas.
                        <h5>Patu - RN, 59770-000</h5>
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
                      href="https://www.ferias.tur.br/empresa/34507/plazahotel/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Hospedagem1} alt="" className="hospedagem" />
                    </a>
                  </div>
                  <h4>
                    <p>
                      Plaza Hotel
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
                    Localizado na Rua Principal, 114, Patu - RN, 59770-000
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <a
                      href="https://www.tripadvisor.com.br/Hotel_Review-g3167141-d16759000-Reviews-Pousada_Cidade_do_Sol-Patu_State_of_Rio_Grande_do_Norte.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Hospedagem2} alt="Shop here." />
                    </a>
                  </div>
                  <h4>
                    <p>
                      Pousada Cidade do Sol
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
                    Localizado na Rua Celso Dutra de Almeida, 68 - Cidade do
                    Sol, Patu - RN, 59770-000
                  </span>
                </section>
              </main>

              <h1 className="name">Gastronomia</h1>
              <main class="cards">
                <section class="card contact">
                  <div class="icon">
                    <a
                      href="https://www.instagram.com/cafejesuino/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Gastronomia1} alt="Contact us." />
                    </a>
                  </div>
                  <h4>
                    <p>
                      Café Jesuíno
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
                    Localizado na Av. Lauro Maia, 350, Patu - RN, 59770-000
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <a
                      href="https://www.instagram.com/churrascariavaigordo/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Gastronomia2} alt="Shop here." />
                    </a>
                  </div>
                  <h4>
                    <p>
                      Churrascaria vai Gordo
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
                    Localizado na BR-226, Bairro - Estação, Patu - RN, 59770-000
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <a
                      href="https://www.tripadvisor.com.br/Restaurant_Review-g3167141-d15615311-Reviews-Bistro-Patu_State_of_Rio_Grande_do_Norte.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Gastronomia3} alt="About us." />
                    </a>
                  </div>
                  <h4>
                    <p>
                      Bistrô
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
                    Localizado na Rua Rafael Godeiro, 226, Patu - RN, 59770-000
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

export default Patu;
