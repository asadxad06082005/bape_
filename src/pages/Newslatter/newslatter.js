import React from 'react';
import styled from 'styled-components'
import img from "../../image/logo_newsletter.webp"
import {Form, FormControl} from "react-bootstrap";

const Newslatter = () => {
    return (
        <Container>
            <div>


                <ul>
                    <li><img src={img} alt=""/></li>
                    <li><p>Enter your email to join our mailing list</p></li>
                    <li><Form className="d-flex search">
                        <FormControl id="search" type="search" className="me-2 search" aria-label="Search"/>
                    </Form></li>
                    <li>
                        <button>SIGN UP</button>
                    </li>
                </ul>
            </div>
        </Container>
    );
};
const Container = styled.div`
  width: 100%;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    
    ul {
      text-align: center;
      padding-left: 10px;

      li {
        list-style: none;
        padding: 2px;

        img {
          width: 210px;
          height: 150px;
        }

        p {
          opacity: 0.7;
          margin: 10px 0 10px 0;
          font-size: 17px;
          min-width: 455px;
        }

        button {
          width: 122px;
          height: 22px;
          font-size: 15px;
          font-weight: 200;
          color: #fff;
          background-color: #1997fc;
          border-radius: 20px;
          outline: none;
          border: none;
        }

        .search {
          padding: 4px;
          color: #333;
          width: 250px;
          margin: auto;
        }
      }
    }
  }
`
export default Newslatter;