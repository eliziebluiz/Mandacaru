import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import Carousel from "react-elastic-carousel";
import EntradaMartins from "../../assets/entrada_martins.svg";
import LogoNova from "../../assets/logo_nova.svg";
import IconEstrela from "../../assets/estrela.svg";
import PontoTurismo1 from "../../assets/martins_ponto1.svg";
import PontoTurismo2 from "../../assets/martins_ponto2.svg";
import PontoTurismo3 from "../../assets/martins_ponto3.svg";
import Hospedagem1 from "../../assets/martins_hospedagem1.svg";
import Hospedagem2 from "../../assets/martins_hospedagem2.svg";
import Hospedagem3 from "../../assets/martins_hospedagem3.svg";
import Gastronomia1 from "../../assets/martins_gastronomia1.svg";
import Gastronomia2 from "../../assets/martins_gastronomia2.svg";
import Gastronomia3 from "../../assets/martins_gastronomia3.svg";

const Martins = () => {
  return (
    <S.Container>
      <S.ContainerPage>
        <S.Header>
          <Link to="/">
            <img src={LogoNova} alt="" />
          </Link>
          <h1>Martins</h1>
        </S.Header>
        <img src={EntradaMartins} alt="" />
        <S.ContainerAdverts>
          <S.ContainerLanding>
            <div>
              <h1 className="name">Sobre a cidade</h1>
              <span className="description">
                Martins é um município brasileiro localizado no interior do
                estado do Rio Grande do Norte, a uma distância de 370
                quilômetros da capital estadual, Natal. Com uma área territorial
                de 169 quilômetros quadrados (km²), sua população no censo de
                2010 era de 8 218 habitantes, de acordo com o Instituto
                Brasileiro de Geografia e Estatística (IBGE).
                <br></br>
                <br></br>
                <span className="description">
                  Um dos principais destinos turísticos do interior potiguar,
                  Martins se destaca no turismo de aventura, abrigando a segunda
                  maior caverna de mármore do país, a Casa de Pedra, com 100
                  metros de comprimento. No ramo cultural destaca-se, além do
                  festival gastronômico, a festa da padroeira Nossa Senhora da
                  Conceição, realizada a partir do final de dezembro,
                  estendendo-se até o início de janeiro.
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
                      <h3 className="titles">Casa de pedra</h3>
                      <span className="description">
                        A caverna tem 100 metros de comprimento e formações de
                        estalactites e estalagmites, onde também podem ser
                        encontrados fósseis pré-históricos.
                        <h5>
                          Zona Rural - Fazenda Trincheira, Martins - RN, Brasil
                        </h5>
                      </span>
                    </div>
                  </S.Item>
                  <S.Item>
                    <div>
                      <img src={PontoTurismo2} alt="" />
                    </div>
                    <div>
                      <h3 className="titles">Museu Cultural Demétrio Lemos</h3>
                      <span className="description">
                        Possui rico acervo cultural formado por estátuas em Art
                        Nouveau, móveis artisticamente decorados, biblioteca com
                        mais de mil volumes, com exposição de objetos de Arte
                        Sacra.
                        <h5>Rua Dr. Bianor Fernandes, Martins - RN</h5>
                      </span>
                    </div>
                  </S.Item>
                  <S.Item>
                    <div>
                      <img src={PontoTurismo3} alt="" />
                    </div>
                    <div>
                      <h3 className="titles">Memorial Manoel Lino Paiva</h3>
                      <span className="description">
                        O Memorial é um resgate histórico e biográfico de um
                        soldado que lutou na Segunda Guerra Mundial cuja
                        iniciativa deve-se à família do homenageado que tombou
                        na Batalha de Montese, Itália, a 14 de abril de 1945,
                        atingido pela artilharia inimiga e foi sepultado no
                        cemitério brasileiro de Pistóia.
                        <h5>Povoado Serra Nova, Martins - RN</h5>
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
                      href="https://www.instagram.com/hotelchalelagoadosingas/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Hospedagem1} alt="" className="hospedagem" />
                    </a>
                  </div>
                  <h4>
                    <p>
                      Chalé Lagoa Dos Ingás
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
                    Localizado na Rua Trinta e Um de Marco, 176 - Camboa,
                    Martins - RN, 59800-000
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <a
                      href="https://www.instagram.com/hotelpdserra/?hl=pt"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Hospedagem2} alt="Shop here." />
                    </a>
                  </div>
                  <h4>
                    <p>
                      Hotel Refúgio da Serra
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
                    Localizado no Sitio Frade, 1000, Martins - RN, 59800-000
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <a
                      href="https://www.instagram.com/ranchodaserra/?hl=pt"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Hospedagem3} alt="About us." />
                    </a>
                  </div>
                  <h4>
                    <p>
                      Pousada Rancho Da Serra
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
                    Localizado no Sitio canto 9850 Zona Rural, Martins - RN,
                    59800-000
                  </span>
                </section>
              </main>

              <h1 className="name">Gastronomia</h1>
              <main class="cards">
                <section class="card contact">
                  <div class="icon">
                    <a
                      href="https://www.instagram.com/mirantedocanto_/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Gastronomia1} alt="Contact us." />
                    </a>
                  </div>
                  <h4>
                    <p>
                      Mirante do Canto
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
                    Localizado no Sitio Canto 9852 Zona Rural, Martins, Rio
                    Grande do Norte 59800-000 Brasil
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <a
                      href="https://www.instagram.com/aogostodochef_/?hl=pt"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Gastronomia2} alt="Shop here." />
                    </a>
                  </div>
                  <h4>
                    <p>
                      Ao Gosto do Chef
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
                    Localizado na Rua Coronel Demétrio Lemos, 37 - Centro,
                    Martins - RN, 59800-000
                  </span>
                </section>
                <section class="card contact">
                  <div class="icon">
                    <a
                      href="https://www.tripadvisor.com.br/Restaurant_Review-g2577838-d10667029-Reviews-Restaurante_E_Petiscaria_Sabor_Da_Serra-Martins_State_of_Rio_Grande_do_Norte.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Gastronomia3} alt="About us." />
                    </a>
                  </div>
                  <h4>
                    <p>
                      Restaurante Sabor Da Serra
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
                    Localizado na Rua Desembargador Silvério, Martins, Rio
                    Grande do Norte 59800-000, Brasil
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

export default Martins;
