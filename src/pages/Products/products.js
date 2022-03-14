import React, {useContext} from 'react';
import ProductsPhoto from "../../components/ProductsPhoto/ProductsPhoto";
import {Context} from "../../Context";
import styled from "styled-components";
const Products = () => {
    const {array, data, setArray} = useContext(Context)
    const handlerFilterCategory = (e) => {
        const category = e.target.value
        const newArray = data.filter(el => {
            return el.type.toLowerCase().includes(category.toLowerCase())
        })
        setArray(newArray)
    }
    return (
        <Wrapper>
            <div onChange={handlerFilterCategory} className="category">
                <select className="select" onChange={handlerFilterCategory} name="select" id="select">
                    <option className="option" value="">NEW PRODUCTS</option>
                    <option className="option" value="T-SHIRTS">T-SHIRTS</option>
                    <option className="option" value="Footwear">FOOTWEAR</option>
                    <option className="option" value="Accessories"> ACCESSERIES</option>
                    <option className="option" value="CUT AND SEWN">CUT AND SEWN</option>
                    <option className="option" value="Pants">PANTS</option>

                </select>


                <div className="category-box">
                    {
                        array.slice(1,19).map(el => {
                            return <ProductsPhoto el={el}/>
                        })
                    }
                </div>
            </div>

        </Wrapper>
    );
};

const Wrapper = styled.div`
  max-width: 85%;
  margin: auto;

  .category {
    display: grid;
    grid-template-columns: 1fr 3fr;

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;

    }
  }

  .select {
    @media (max-width: 1168px) {
      width: 100%;
      

    }
    .option {
      background: white;
      color: #555;
      text-decoration: none;
      
    }
    
outline: none;
    border: none;
    width: 300px;
    height: 30px;
    cursor: pointer;
    background-color: #343434;
    color: #fff;
    text-align: left;
    font-weight: 400;
    margin-bottom: 5px

  }

  .category-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 10px;
    min-width: 150px;
    @media (max-width: 767px) {
      grid-template-columns: 2fr 2fr ;
    }
    @media (min-width: 1480px) {
      grid-template-columns: 2fr 2fr 2fr ;
    }

    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
  }
`

export default Products;