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
          <p className="text-center">Estudante de programação auto-didata. Procuro uma oportunidade de utilizar meu conhecimento adquirido em um ambiente profissional, e consequentemente, desenvolver novas habilidades e competências em prol do desenvolvimento profissional e melhor qualidade de código.</p>
        </Col>
      </Row>
      <Row>
        <Col><h2 className="text-center">Competências</h2></Col>
      </Row>
      <Row className="justify-content-around">
        <Col md="3" >
          <ul >
            <caption>Tecnologias</caption>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>Sequelize</li>
            <li>Git / Git Flow</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Vue.js</li>
            <li>React.js</li>
          </ul>
        </Col>
        <Col className="justify-content-center" md="3">
          <ul className="">
            <caption>Conhecimentos</caption>
            <li>Inglês [<i>Proeficiente</i>]</li>
            <li>Japonês [<i>Intermediário</i>]</li>
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
