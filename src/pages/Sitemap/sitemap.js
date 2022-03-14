import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Sitemap = () => {
    return (
        <div>
            <Acces>
                <ul>
                    <li>
                        <Link to="/head">
                                <p>HEAD</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/news">
                            <p>NEWS</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/look">
                            <p>LOOKBOOK</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/caraousel">
                            <p>EYEWEAR</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bathing">
                            <p>MR.BATHING APE</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            <p>WEB STORE</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/card">
                            <p>CARD</p>
                        </Link>
                    </li>

                </ul>
                <ul>
                    <li>
                        <Link to="/profile">
                            <p>PROFILE</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/newslatter">
                            <p>JOIN US</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Faq">
                            <p>FAQ</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/policy">
                            <p>POLICY</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Accessibility">
                            <p>ACCESSIBILITY</p>
                        </Link>
                    </li>
                </ul>
            </Acces>
        </div>
    );
};
const Acces = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;

  ul {
    min-width: 200px;
    max-width: 750px;
    padding-left: 10px;
    align-items: center;
    justify-content: center;
    
    li {
      text-align: left;
      list-style: none;
      
      a {
        opacity: 0.6;
        margin: 30px 0 30px 0;
        font-size: 14px;
        min-width: 455px;
        font-weight: 400;
        text-decoration: none;
        color: #555;
        text-align: left;
      }

      
    }
  }
`

export default Sitemap;