import React from 'react';
import styled from 'styled-components'
import Car from "../../image/2127_22_ss_mr1.jpg"
import Car1 from "../../image/top_22_ss_mr2.jpg"
import Car2 from "../../image/top_22_ss_mr3.jpg"
import Car3 from "../../image/top_22_ss_mr5.jpg"
import Car4 from "../../image/top_22_ss_mr6.jpg"
import Car5 from "../../image/top_22_ss_mr7.jpg"
import Car6 from "../../image/top_22_ss_mr8.jpg"
import {Carousel} from "react-bootstrap";
import Car7 from "../../image/22_ss_eyewear_1.jpg";

const Bathing = () => {
    return (

            <Bathingg>
                <Carousel className="Carusel">
                    <Carousel.Item className="Car">
                        <img
                            className="d-block w-100"
                            src={Car}
                            alt="1-slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Car1}
                            alt="2-slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Car2}
                            alt="3-slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="Car">
                        <img
                            className="d-block w-100"
                            src={Car3}
                            alt="4-slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Car4}
                            alt="5-slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Car5}
                            alt="6-slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="Car">
                        <img
                            className="d-block w-100"
                            src={Car6}
                            alt="7-slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Car7}
                            alt="8-slide"
                        />


                    </Carousel.Item>
                </Carousel>
            </Bathingg>
    );
};
const Bathingg = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 627px;
  display: flex;
  justify-content: center;
  .Carusel {
    cursor: grab;
    height: 667px;
    float: left;
    list-style: none;
    position: relative;
    min-width: 450px;
    width: 70%;
    .Car {
      height: 667px;
      float: left;
      list-style: none;
      min-width: 450px;
      img{
        min-width: 450px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`
export default Bathing;