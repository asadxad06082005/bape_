import React from 'react';
import styled from "styled-components";
import logo from "../../image/login-logo (1).png"

const Signup = () => {
    return (
        <Sigir>
            <ul className="first">
                <li>
                    <img className="img" src={logo} alt=""/>
                </li>
                <li>
                    <h3>SIGN UP</h3>
                </li>
            </ul>
            <ul className="second">
                <li className='d-flex'>

                    <p> First Name</p>
                    <p> Last Name</p>
                </li>
                <li className='d-flex'>

                    <input className="in" type="email"/>

                    <input className="in" type="text"/>
                </li>
                <li>
                    <p>
                        Email Adrres
                    </p>
                    <input type="email"/>
                </li>
                <li>
                    <p>
                        Password
                    </p>
                    <input type="text"/>
                </li>
                <li>
                    <input type="submit" value="Register" className="btn"/>
                </li>
            </ul>
        </Sigir>
    );
};
const Sigir = styled.div`
  width: 100%;
  margin: 50px auto 0 auto;

  .first {
    margin: auto;
    min-width: 455px;
    text-align: center;
    padding: 0;

    li {
      list-style: none;

      .img {
        width: 56px;
        height: 86px;
      }

      h3 {
        margin-top: 10px;
        font-weight: 400;
      }
    }
  }

  .second {
    

    min-width: 320px;
    max-width: 350px;
    margin: 0 auto 0 auto;
    text-align: center;
    height: 411px;

    li {
      list-style: none;

      .in {
        width: 156px;
        height: 22px;
      }

      small {
        text-align: left;
        font-weight: 700;
        min-width: 120px;
        opacity: 0.7;
        font-size: 13px;
      }

      .btn {
        width: 320px;
        height: 42px;
        background: deepskyblue;
        border: none;
        color: white;
        font-weight: 350;
        font-size: 20px;
        margin-top: 15px;
      }

      input {
        padding: 4px;
        color: #333;
        width: 320px;
        margin: auto;
        border-radius: 4px;
        border: 1px solid black;
        outline: none;
        height: 20px;
      }

      p {
        width: 160px;
        text-align: left;
        font-weight: 700;
        min-width: 120px;
        opacity: 0.7;
        font-size: 13px;
        
      }
    }
  }
`
export default Signup;