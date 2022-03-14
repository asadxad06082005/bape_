import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";


const LookBookCom = ({el}) => {

    return (

        <Container>
            <div className="content-box">
                    <img src={el.img} alt=""/>
            </div>

        </Container>
    );
};

const Container = styled.div`
  margin: auto;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  .content-box {
    text-align: center;
    @media (max-width: 767px) {
      width: 150px;
    }
    img {
      min-height: 100px;
      width: 150px;
      height: 225px;
      cursor: pointer;
    }

    ul {

      padding: 0;
    }

    li {
      list-style: none;
      text-align: center;

      p {
        color: #555;
      }
    }
  }



`

export default LookBookCom;