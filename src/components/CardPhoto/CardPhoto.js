import React, {useContext} from 'react';

import styled from "styled-components";
import {Context} from "../../Context";


const CardPhoto = ({el}) => {
    const {cardArray} = useContext(Context)
    console.log(cardArray)
        return(
            <div>
                {cardArray.map(el => {
                    return(
                      <div>
                          <img src={el.img} alt=""/>
                      </div>
                    )
                })}
            </div>
        )
    };

const Wrapper = styled.div`
  position: relative;

  .faTrash:hover {
    transform:scale(130%);
  }

  .faTrash {
    position: absolute;
    top: 10px;
    left: 10px;
    color: darkcyan;

  }

  .color{
    border-radius: 10px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    h4,p{
      color: white;

    }
    button {
      width: 60px;
      border: 1px darkcyan solid;
      outline: none;
      color: white;
      background: cadetblue;
      border-radius: 3px;
    }

    button:hover {
      color: cadetblue;
      background: white;
      transition: 0.3s;
    }
    
  }

`

export default CardPhoto;