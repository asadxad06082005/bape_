import React from 'react';
import styled from "styled-components";

const Accessibility = () => {
    return (
        <Acces>
            <ul>
                <li><h2>Accessibility Statement:</h2></li>
                <li><h3>Website Accessibility Statement</h3></li>
                <li><p>BAPE is committed to providing a website that is accessible to the widest possible audience in
                    accordance with ADA standards and WCAG guidelines. We are actively working to increase accessibility
                    and usability of our website to everyone. BAPE is committed to providing a positive experience to
                    all of our customers and employees, and we strive to promote accessibility and inclusion. Whether
                    you are using assistive technologies like a screen reader, a magnifier, voice recognition software,
                    or captions for videos, our goal is to make your visit to BAPE’s website a successful and enjoyable
                    experience.</p></li>
                <li><h2>Accessibility Assistance</h2></li>
                <li><p>If you are using a screen reader or other auxiliary aid or are having difficulty using or
                    accessing any element of this website, please feel free to call us at (646) 918-6857or email us at
                    web@bapeus.com. We will work with you to provide the information or service you seek through a
                    communication method that is accessible for you consistent with applicable law (for example, through
                    telephone support and email). All products available for purchase on this website can be purchased
                    telephonically and by email. If you have a question about a product, or if you would like to place
                    an order telephonically, please call(646) 918-6857; or email web@bapeus.com (this service is
                    available from Monday to Friday 10am to 5 pm). Please note: If you place an order via the website or
                    our phone line, and are doing so after business hours or on the weekend, your order will be
                    processed the following day. </p></li>
                <li><h2>Actions</h2></li>
                <li><p>BAPE is currently taking a variety of steps and devoting resources to further enhance the
                    accessibility of our website. We have engaged an experienced accessibility consultant to conduct
                    website accessibility audits and provide recommendations to increase accessibility so that our
                    website meets or exceeds applicable standards. Our website also offers a customizable assistive
                    utility tool that allows site visitors to customize their user experience. We are training our
                    employees and agents who develop our website on accessibility compliance; regularly checking the
                    accessibility of our website; and we regularly test the user accessibility of our website by blind
                    or vision-impaired persons to ensure that website is accessible. We are proud of the efforts that
                    are in-progress to ensure that our website is accessible to everyone. We view accessibility as an
                    ongoing effort and are continually seeking solutions that will bring all areas of our website to
                    overall web accessibility.</p></li>
            </ul>
        </Acces>
    );
};
const Acces = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;

  ul {
    min-width: 455px;
    max-width: 750px;
    padding-left: 10px;

    li {
      text-align: left;
      list-style: none;

      h2 {
        font-weight: 400;
        margin-bottom: 40px;
      }

      h3 {
        font-weight: 400;
        font-style: italic;
      }

      p {
        opacity: 0.6;
        margin: 30px 0 30px 0;
        font-size: 17px;
        min-width: 455px;
        font-weight: 400;
      }

      p:last-child {
        margin-bottom: 60px;
      }
    }
  }
`
export default Accessibility;