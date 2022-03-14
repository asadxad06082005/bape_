import React from 'react';
import styled from "styled-components";
import img from "../../image/header_logo.png"
import {Link} from "react-router-dom"

const Shop = () => {

    return (
        <div>
            <Sigir>
                <ul className="first">
                    <li><img src={img} alt=""/></li>
                    <li className="justify-content-between d-flex mt-3"><p>Contact information</p> <Link to="/sign">Already
                        have an account?</Link></li>
                    <li><input className="email mt-2" type="email" placeholder="   Email"/></li>
                    <li className="d-flex justify-content-start mt-4"><p>Shipping address</p></li>
                    <li className="d-flex justify-content-between"><input className="name" type="text"
                                                                          placeholder="   First Name"/> <input
                        className="name" type="text" placeholder="   Last Name"/></li>
                    <li><input className="adress mt-3" type="text" placeholder="   Adress"/></li>
                    <li><input className="city mt-3" type="text" placeholder="   city"/></li>
                    <li><input className="number mt-3" type="number" placeholder="   Number"/></li>
                    <li><input className="mt-3 submit" type="submit"/></li>
                </ul>

            </Sigir>
        </div>
    );
};
const Sigir = styled.div`
  width: 100%;
  margin: 50px auto 0 auto;

  .first {
    margin: auto;
    min-width: 350px;
    text-align: center;
    max-width: 600px;

    li {
      list-style: none;

      a {
        color: deepskyblue;
        text-decoration: none;
        font-size: 14px;
        margin-left: 5px;
      }

      .email, .city, .adress, .number {
        width: 100%;
      }

      .name {
        width: 48%;
      }

      img {
        max-width: 100%;
        min-width: 250px;
      }

      .submit {
        background: deepskyblue;
        color: white;
        border: none;
        outline: none;
        border-radius: 5px;
        width: 200px;
        height: 40px;
      }

      ::placeholder {
        font-size: 13px;
        color: #555;
        outline: none;
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

        //input {
        //  padding: 4px;
        //  color: #333;
        //  width: 320px;
        //  margin: auto;
        //  border-radius: 4px;
        //  border: 1px solid black;
        //  outline: none;
        //  height: 20px;
        //}

        p {
          text-align: left;
          font-weight: 700;
          min-width: 120px;
          opacity: 0.7;
          font-size: 13px;
        }
      }
    }
`
export default Shop;