import React from 'react';
import styled from "styled-components";
const Profile = () => {
    return (
        <Profilee className="container">
            <ul>
                <li className="list-unstyled">
                    <h2>NOWHERE CO., LTD.</h2>
                    <p>Nowhere Co., Ltd was established in Harajuku, Tokyo on April 1, 1993 and started "A BATHING
                        APE®".
                        It continues to expand its business worldwide through 「BAPE STORE®」「BAPEXCLUSIVE™」「BAPE KIDS®」
                        「A BATHING APE PIRATE STORE®」.</p>

                </li>
                <li className="list-unstyled">
                    <h2>A BATHING APE®（BAPE®）</h2>
                    <p>Situated in the heart of Tokyo, one of the leading fashion hubs of the world, Nowhere Co., Ltd.
                        strives to introduce Japanese fashion culture to the world. Since the brand's establishment in
                        1993, it has remained as a symbol of street fashion for 28 years. Thus far, it has produced
                        iconic design items, original patterns and character such as "APE HEAD", "BAPE® CAMO", "BAPE
                        STA™", "SHARK HOODIE" and "BABY MILO®" etc. It has now expanded into Mens', Ladies and Kids line
                        and is carried throughout stores in Japan and also sold in US, UK, China and various Asian
                        countries. It is well known globally and highly supported by a wide range of fashionistas.
                    </p>
                    <p>
                        It has also created successful collaborations with established International brands and
                        reputable artists. The collaborations are recognized as being genre less and flexible, not
                        limited to fashion and apparel categories only.</p>
                    <p> The world has its eyes on A BATHING APE® and there is no stopping it……… </p>
                </li>
            </ul>
        </Profilee>
    );
};
const Profilee = styled.div`
  min-width: 350px;
  display: flex;
  justify-content: center;
  margin: auto;
ul{
  min-width: 355px;
  max-width: 800px;
 padding-left: 10px;
  li{
    list-style: none;
    h1{
      font-weight: 400;

    }
    p{
      opacity: 0.7;
      margin-top: 20px;
      font-size: 17px;
      min-width: 455px;
    }
    p:last-child{
      margin-bottom: 60px;
    }
  }
}
`
export default Profile;