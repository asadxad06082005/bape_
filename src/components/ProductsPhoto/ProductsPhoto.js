import React from 'react';
import styled from "styled-components";

import {Link} from "react-router-dom";


const ProductsPhoto = ({el}) => {

    return (

        <Container>
            <div className="content-box">
                <Link to={`/${el.id}`}>
                    <img src={el.img} alt=""/>
                </Link>
                <ul>
                    <li>
                        <p>{el.name}</p>
                        <p>{el.title}</p>

                    </li>

                    <li>
                        <p>{el.cost}$</p>
                    </li>
                </ul>

            </div>

        </Container>
    );
};

const Container = styled.div`
  margin: auto;
  max-width: 100%;
  display: grid;
  grid-template-columns: 3fr;
  .content-box {
    
    width: 265px;
    height: 300px;
    text-align: center;
    @media (max-width: 767px) {
      width: 150px;
    }
    img {
      border-radius: 10px;
      width: 150px;
      min-height: 100px;
      height: 150px;
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

export default ProductsPhoto;