import React from 'react';
import {Carousel} from "react-bootstrap";
import styled from 'styled-components'
import New from "../../image/news_img_2.jpg"
import New2 from "../../image/download_74d2df50-e438-4ae2-b53a-dfbc459510ef_600x600.jpg"



const News = () => {
    return (
        <Newss>
            <Carousel className="News">
                <Carousel.Item className="New">
                    <img
                        className="d-block w-100"
                        src={New}
                        alt="1-slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item className="New">
                    <img
                        className="d-block w-100"
                        src={New2}
                        alt="1-slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Newss>
    );
};
const Newss = styled.div`
  width: 100%;
  overflow: hidden;
  height: 690px;
  justify-content: center;
  display: flex;
  .News {
    height: 690px;
    float: left;
    list-style: none;
    position: relative;
    width: 60%;
    min-width: 450px;
    justify-content: center;
    display: flex;
    cursor: grab;

    .new {
      height: 690px;
      float: left;
      list-style: none;
      position: relative;
      min-width: 450px;

      img {
        min-width: 450px;
        display: block;
        margin-left: auto;
        margin-right: auto;

      }
    }
   
  }
  .grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    
    ul{
      display: flex;
      justify-content: space-between;
      padding: 0;

      li{
        list-style: none;
        padding: 15px;
        img{
          width: 200px;
          height: 122px;
        }
      }
    }
  }
`
export default News;