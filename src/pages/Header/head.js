import React from 'react';
import styled from 'styled-components'
import img1 from "../../image/1.png"
import img2 from "../../image/2png.png"
import img3 from "../../image/10.png"
import img4 from "../../image/4.png"
import img5 from "../../image/5.png"
import img6 from "../../image/6.png"
import img7 from "../../image/7.png"
import img8 from "../../image/i8png.png"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Grid>
            <div>
                <h4>Welcome to bape® world!</h4>
                <ul>
                    <Link to="/news">
                        <li><img src={img1} alt=""/>
                        </li>
                    </Link>
                    <Link to="/products">
                        <li><img src={img2} alt=""/>
                        </li>
                    </Link>
                    <Link to="/profile">
                        <li><img src={img4} alt=""/>
                        </li>
                    </Link>
                    <Link to="/bathing">
                        <li><img src={img3} alt=""/>
                        </li>
                    </Link>
                    <Link to="/caraousel">
                        <li><img src={img8} alt=""/>
                        </li>
                    </Link>
                    <Link to="/">
                        <li><img src={img7} alt=""/>
                        </li>
                    </Link>
                    <Link to="/">
                        <li><img src={img5} alt=""/>
                        </li>
                    </Link>

                    <Link to="/">
                        <li><img src={img6} alt=""/>
                        </li>
                    </Link>


                </ul>

            </div>
        </Grid>
    );
};
const Grid = styled.div`
  max-width: 1200px;
  margin: auto;
  width: 300px;
  div {
    max-width: 420px;
    height: 360px;
    margin: auto;
    text-align: center;
    width: 300px;
    ul {
      justify-content: center;
      display: grid;
      height: 360px;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 5px;
      padding-left: 10px;

      a {


        li {
          list-style: none;

          img {
            height: 90px;
          }
        }
      }
    }


  }
`
export default Header;