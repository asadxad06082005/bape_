import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const ContatctsCom = () => {
    return (
        <Contacts>


            <div className="justify-content-between">

                <ul>
                    <li><Link to="/profile">PROFILE</Link></li>
                    <li><Link to="/newslatter">JOIN US</Link></li>
                    <li><Link to="/Faq">FAQ</Link></li>
                    <li><Link to="/sitemap">SITE MAP</Link></li>
                    <li><Link to="/policy">POLICY</Link></li>
                    <li><Link to="/accessibility">ACCESSIBILITY STATEMENT</Link></li>
                </ul>


            </div>
        </Contacts>
    );
};
const Contacts = styled.div`
  margin-top: 100px;
  max-width: 100%;
  min-width: 250px;
  div {
    max-width: 80%;
    min-width: 250px;
    display: flex;
    justify-content: center;
    margin: auto;
    ul {
      min-width: 250px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      li {
        margin: 0 10px 0 10px;
        list-style: none;
        font-size: 15px;
        text-align: left;


        a {
          text-decoration: none;
          color: black;
        }

        a:hover {
          border-bottom: 1px solid black;
        }
      }
    }

  }
`
export default ContatctsCom;