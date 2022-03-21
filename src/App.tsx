import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootswatch/dist/slate/bootstrap.min.css'
function App() {
  return (
    <Container fluid className="">
      <Row className="">
        <Col><h1 className="text-center">João Vitor Rocha Malvão</h1></Col>
      </Row>
      <Row >
        <Col>
          <p className="mb-1 text-center">Developer web / Front-end</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center">Cel.: <strong>(13) 9 8122-5005</strong> | <strong>Guarujá - SP</strong></p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center"><a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-rocha-malv%C3%A3o-65a924189/">Linkedin</a> | <a href="https://github.com/jvrmalv">Github</a></p>
        </Col>
      </Row>
      <hr></hr>
      <Row className="justify-content-center">
        <Col md="12">
          <h2 className="text-center">Sobre</h2>
          <p className="text-center">Desenvolvedor Fullstack, prezo pelo qualidade de código e tenho paixão pelo paradigma funcional. Procuro vagas que estimulem meu desenvolvimento como profissional, e prezo por aprender coisas novas e enfrentar novos desafios. Nenhuma tecnologia é um problema e estou disposto a aprender o que for necessário para entregar um produto de qualidade.</p>
        </Col>
      </Row>
      <Row>
        <Col><h2 className="text-center">Competências</h2></Col>
      </Row>
        <Row>
          <Col md="3" >
            <ul >
              <caption>Tecnologias Front</caption>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Git / Git Flow</li>
              <li>JavaScript</li>
              <li>Typescript</li>
              <li>Express.js</li>
              <li>Vue.js</li>
              <li>React.js</li>
              <li>Apollo Client</li>
              <li>Next.js</li>
              <li>Styled Components</li>
            </ul>
          </Col>
          <Col md="3">
            <ul>
              <caption>Tecnologias Back</caption>
              <li>Elixir</li>
              <li>Phoenix</li>
              <li>Ecto</li>
              <li>Node.js</li>
              <li>Sequelize</li>
              <li>TypeORM</li>
              <li>PostgreSQL</li>
            </ul>
          </Col>
        <Col md="3">
          <ul className="">
            <caption>Conhecimentos</caption>
            <li>Inglês [<i>Proeficiente</i>]</li>
            <li>Japonês [<i>Intermediário</i>]</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
        <h2 className='text-center'>Experiência</h2>
        </Col>
      </Row>
      <Row>
        <Col>
        <ul>
          <li>
            <h3>AoCubo Serviços Imobiliários</h3>
            <h4>Set/2021 - Mar/2022 (7 meses)</h4>
            <ul>
              <li>
                Participei no desenvolvimento e manunteção de um back-end Elixir utilizando as tecnologias primárias Phoenix, Ecto e Absinthe
              </li>
              <li>Participei no desenvolvimento e manuntenção de um front-end Next.js que utilizava primariamente as tecnologias Appolo Client, Styled Components, e Redux</li>
              <li>Realizei a implementação de testes unitários utilizando a ferramenta ExUnit para que pudesse ser feito um refactor no BackEnd Elixir</li>
            </ul>
          </li>
        </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center">Projetos</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="6">
          <h3 className="text-center"><a href="https://github.com/moneyman-S">MoneyMan</a></h3>
          <p className="text-center">Aplicativo de planejamento financeiro utilizando das Teconologias React, Typescript e Bootstrap no front-end e Elixir e Phoenix no back-end</p>
        </Col>
        <Col md="6">
          <h3 className="text-center"><a href="https://github.com/jvrmalv/animelist-vue">Animelist Vue</a></h3>
          <p className="text-center">Projeto pessoal. App similar ao serviço do MyAnimeList que permite que o usuário tenha uma lista com os animes que assiste ou já assistiu. Ainda não tem boa parte das features essenciais.</p>
        </Col>
      </Row>
      <hr></hr>
      <div className="d-flex justify-content-center h-100 align-items-center"><img alt="arch" className="height-auto" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Archlinux-icon-crystal-64.svg" /></div>
    </Container>
  );
}

export default App;
