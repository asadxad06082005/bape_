import React, {useContext, useState} from 'react';
import {useParams, Link} from "react-router-dom"
import styled from "styled-components";
import myData from "./data";
import {Context} from "./Context";


const FileInfo = ({el}) => {

    const {AddCard} = useContext(Context)

    const params = useParams()
    const currentFoto = myData.find((el) => {
        return (el.id == params.id)
    })


    return (
        <Shit>
            <div>
                <ul className="frist">

                    <li>
                        <img src={currentFoto.img} alt=""/>

                    </li>
                </ul>
                <ul className="second">
                    <li>
                        <p>{currentFoto.type}</p>
                    </li>
                    <li>
                        <h1>
                            {currentFoto.title}
                        </h1>
                    </li>
                    <li>
                        <p>{currentFoto.cost}.00$</p>
                    </li>

                    <li>
                        <p>CHOOSE COLOR</p>
                        <input className="white " type="color"/>
                    </li>
                    <li>
                        <Link to="/shop">
                            <button>Order</button>

                        </Link>
                    </li>
                </ul>
            </div>
        </Shit>
    );
};


const Shit = styled.div`
  top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    .faShoppingCart {
      color: black;
    }

    max-width: 1200px;
    min-width: 300px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-row-gap: 20px;
    }

    .frist {
      min-width: 300px;
      cursor: grabbing;
      padding: 0;


      li {
        list-style: none;

        img {
          width: 520px;
          max-width: 100%;
          @media (max-width: 1000px) {
            margin: auto ;
          }
        }
      }
    }


    .second {
      max-width: 550px;
      min-width: 350px;
      text-align: left;
      padding: 0;

      li {
        list-style: none;

        input {
          border: none;
          border-radius: 10px;
          margin-bottom: 20px
        }

        p {
          color: #555;
        }

        button {
          width: 267px;
          height: 55px;
          border: none;
          outline: none;
          background: deepskyblue;
          color: white;
          font-weight: 350;
          border-radius: 20px;
          @media (max-width: 414px) {
            width: 300px;
          }
        }

        button:hover {
          color: deepskyblue;
          background: white;
          border: 1px solid deepskyblue;
          transition: 0.5s;
        }
      }

    }

  }


`
export default FileInfo;