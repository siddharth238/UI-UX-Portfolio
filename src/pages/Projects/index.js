import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import Project from '../../components/project/Project'
export const Projects = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="projectimg__container">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="imagepro">
               <Project description={data.description} link={data.img} heading={data.title} link1={data.link} link2={data.link1} page={data.page}/>
                
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
