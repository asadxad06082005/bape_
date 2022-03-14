import React, {useContext} from 'react';
import CardPhoto from "../../components/CardPhoto/CardPhoto";
import {Context} from "../../Context";
import styled from "styled-components";

const Card = () => {
    const {cardArray} = useContext(Context)
    console.log(cardArray)

    return (
        <Wrapper>
            <div className="Nice">
                {
                    cardArray.map(el => {
                        return <CardPhoto el={el}/>
                    })
                }
            </div>
        </Wrapper>
    );
};


const Wrapper = styled.div`
  max-width: 75%;
  margin: auto;

  .Nice {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 15px;
    margin-top: 10px;

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
  }
`

export default Card;