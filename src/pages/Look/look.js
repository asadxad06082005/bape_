import React, {useContext} from 'react';
import {Context} from "../../Context";
import styled from "styled-components";
import Lookcom from "../../components/LookBook/Lookcom";
const Look = () => {
    const {Secdata,Secarray,setSecArray} = useContext(Context)
    const handlerFilterCategory = (e) => {
        const category = e.target.value
        const newArray = Secdata.filter(el => {
            return el.type.toLowerCase().includes(category.toLowerCase())
        })
        setSecArray(newArray)
    }
    return (
        <Wrapper>
            <div className="category ">
                <div className="category-menu">
                    <ul>
                        <li>
                            <select className="form" onChange={handlerFilterCategory} name="select" id="select">
                                <option value="BAPEMEN'S">MEN'S</option>
                                <option value="BAPE LADIES'">LADIES'</option>
                                <option value="BAPE KIDS">KIDS'</option>

                            </select>

                        </li>

                    </ul>
                </div>


                <div className="category-box">
                    {
                        Secarray.map(el => {
                            return <Lookcom el={el}/>
                        })
                    }
                </div>
            </div>

        </Wrapper>
    );
};

const Wrapper = styled.div`
  max-width: 80%;
  margin: auto;

  .category {
    display: grid;
    grid-template-columns: 1fr 3fr;

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column-reverse ;
    }

    .category-menu {

      @media (max-width: 767px) {
        display: flex;
        justify-content: left;
        margin-top: 10px;
      }

      ul {
        min-width: 185px;
        max-width: 455px;
        padding: 0;

        li {

          list-style: none;
          margin-bottom: 15px;

          .form {
            width: 185px;
            height: 40px;
            background-color: #343434;
            color: #fff;
            text-align: left;
            font-weight: 700;
            outline: none;

            .option {
              background: white;
              color: black;
            }
          }

          h4 {
            font-weight: 400;
          }

          a, .a {
            color: #555;
            text-decoration: none;
          }

          a:hover {
            text-decoration: none;
            color: deepskyblue;
            cursor: pointer;
          }
        }
      }
    }
  }


  .category-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    margin-top: 10px;
    min-width: 150px;
    grid-gap: 10px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr 1fr ;
    }

    img {
      width: 150px;
      height: 225px;
      object-fit: cover;
    }
  }
`

export default Look;