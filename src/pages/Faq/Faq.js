import React from 'react';
import styled from 'styled-components'

const Faq = () => {
    return (
        <Faqq>
            <ul>
                <li className="list-unstyled">
                    <h3>FAQ</h3>
                    <p>I changed my mind. Can I get a refund or make an exchange for a new size/color?</p>
                    <p>We do not accept returns for refunds, credits, or exchanges. All sales are final. Please make
                        sure that you have carefully reviewed all information in your order prior to finalizing your
                        purchase, including your billing and shipping address, e-mail and telephone number. </p>
                    <p>How do I know that the size I ordered is the right size for me?</p>
                    <p>How do I know that the size I ordered is the right size for me?</p>
                    <p>Please refer to our size chart. There are no exchanges allowed so please make sure that you refer
                        to the size chart for each item prior to selecting it for purchase.
                    </p>
                    <p>Can I track my order?</p>
                    <p>All customers receive a shipping confirmation e-mail when their order ships, which includes the
                        FedEx tracking number. To track your package, go to the link below, enter your tracking number,
                        and press the “track” button to get shipment details.</p>
                    <p>Track your package at FedEx.com/Tracking
                    </p>
                    <p>When will I receive my order?</p>
                    <p>Please allow 3 - 5 business days for order processing and verification, and an additional 7-10
                        business days for ground shipping or 2 business days for 2-Day Air delivery. We do not ship out
                        on Saturdays or Sundays.
                        If your order has not arrived within the aforementioned guidelines, please contact us and we
                        will do our best to track your order for you.</p>
                    <p>What shipping carrier do you use? </p>
                    <p>We ship all orders via Federal Express (Direct Signature Required). We do not use any other
                        shipping carrier.</p>
                    <p>Can I contact you directly with any questions?</p>
                    <p>Please email web@bapeus.com with any questions regarding your order. We will do our best to reply
                        to your question(s) within 48 hours.</p>
                    <p> Do you accept check payments? Can I use PayPal?
                    </p>                    <p>We do not accept payments by check, and PayPal is not presently supported
                    on us.bape.com. We
                    accept Visa, Mastercard and American Express. </p>
                    <p>Why does my billing and shipping address have to match?</p>
                    <p>We require that your billing and shipping address match as an additional step to prevent credit
                        card fraud.</p>
                    <p>I do not live in the United States. Can I place an order? </p>
                    <p>We currently only accept orders from residents in the United States and Canada. Please view our
                        terms for specific details.</p>
                    <p>Can I order other items that are not offered on the web store?
                    </p>
                    <p>We are only offering a select group of items through the web shop at this time. Our inventory
                        changes daily, so please check back for store updates and news announcements on product
                        releases.</p>
                    <p>Do you sell wholesale?
                        We are currently only accepting inquiries regarding wholesales.</p>
                </li>
            </ul>
        </Faqq>
    );
};
const Faqq = styled.div`
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

      h3 {
        font-weight: 350;
     
      }

      p {
        opacity: 0.7;
        margin: 30px 0 30px 0;
        font-size: 17px;
        min-width: 455px;
      }

      p:last-child {
        margin-bottom: 60px;
      }
    }
  }
`
export default Faq;