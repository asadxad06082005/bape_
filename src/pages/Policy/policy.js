import React from 'react';
import styled from 'styled-components'

const Policy = () => {
    return (
        <Poli>
           <ul>
               <li><h2>Return Policy</h2></li>
               <li><p>All sales are final. No refunds or exchanges.</p></li>
               <li><h2>Using this Site</h2></li>
               <li><p>Please use a standards-compliant web browser.</p></li>
               <li><h2>Terms of Use</h2></li>
               <li><p>By using our website, you agree to the Terms of Use. We may change or update these terms so please check this page regularly. We do not represent or warrant that the information on our web site is accurate, complete, or current. This includes pricing and availability information. We reserve the right to correct any errors or omissions, and to change or update information at any time without prior notice.</p></li>
               <li><h2>Copyright & Trademarks</h2></li>
               <li><p>All content of our website including text, graphics, logos, button icons, images, and software, is property of Nowhere Co., Ltd. and is protected by United States and international copyright laws. All trademarks included on this site are the property of Nowhere Co., Ltd. unless otherwise noted. You may electronically copy and print hard copies of pages from this web site solely for personal, non-commercial purposes related to placing an order or shopping with us.bape.com. Any other use of our web site, including reproduction and internet links, is strictly prohibited without our prior written permission.</p></li>
               <li><h2>Secure Processing</h2></li>
               <li><p>us.bape.com uses secure processing called SSL Encryption Technology, which is the industry standard. SSL (Secure Sockets Layer) is a protocol developed for the transmission of private information over the internet. SSL uses a private key to encrypt your data, including your credit card information, so that it cannot be read while being transferred over the internet.</p></li>
               <li><h2>Privacy</h2></li>
               <li><p>us.bape.com respects our customer's account information as private and confidential information and will not share it with any outside organizations or individuals unless we have a good faith belief that disclosure of such information is necessary to satisfy any applicable law, regulation, legal process or enforceable governmental request. Your information is secured and encrypted with the Secure Socket Layer Software.</p></li>
               <li><h2>Shipping</h2></li>
               <li><p>Full credit card billing address must match the full address of the shipping. We cannot accept orders addressed to P.O. boxes, APO/FPO/DPO addresses.</p></li>
               <li><p>At this time, we are only accepting orders from residential addresses from the U.S.A. and Canada.</p></li>
               <li><p>We require an Direct Signature when receiving packages.</p></li>
               <li><p>We do not offer Saturday delivery. Please note that we only ship out Monday through Friday, with the exception of US holidays.</p></li>
               <li><p>Please allow 3-5 business days for order processing and verification, and (an additional 7-10 business days for Ground or 2 business days for 2-Day Air) for delivery. We are not responsible for any lost, stole, or damaged shipments. All shipments are insured and the buyer assumes all responsibilities of claims made with the shipping carrier.</p></li>
               <li><p>Shipping is calculated based on the weight and distance from our facility.</p></li>
               <li><h2>Shipping to the U.S.A.</h2></li>
               <li><p>Shipped via either FedEx Ground or 2nd-Day Air.</p></li>
               <li><h2>Shipped via either FedEx Ground or 2nd-Day Air.</h2></li>
               <li><p>Shipped via either FedEx International Priority or FedEx International Economy.</p></li>
               <li><p>All Canadian customers will be responsible for paying any import duties and any additional fees or taxes once a shipment reaches Canada. Additional customs clearance charges must be paid by the customer.</p></li>
               <li><p>Please check periodically for any updates regarding our shipping policies. </p></li>
               <li><h2>Purchase For Personal Use Only</h2></li>
               <li><p>You may purchase products only for personal use and not for resale. By placing your order, you certify that you are purchasing products for personal use only and not for resale. We reserve the right to refuse orders for any reason without explanation.</p></li>
               <li><h2>Sales Tax</h2></li>
               <li><p>Sales Tax is charged to those orders shipped within the states of California, Florida and New York. </p></li>
               <li><p>For deliveries in New York state:</p></li>
               <li><p>All apparel products excluding accessories under $110 are tax exempt.</p></li>
               <li><p>Bags and accessories are not considered apparel and are always taxable.
                   The applicable tax rate for bags and accessories is 8.875%.</p></li>
               <li><p>*Shoes are categorized as apparel.</p></li>
               <li><p>Sales tax is not charged to orders shipped to any other states (other than those listed above).</p></li>
               <li><h2>Contact Information</h2></li>
               <li><p>BAPE USA
                   163 MERCER STREET NEW YORK NY 10012
                   Tel: (646) 918-6857 CUSTOMER SERVICE
                   E-mail : web@bapeus.com</p></li>
           </ul>
        </Poli>
    );
};
const Poli = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;

  ul {
    min-width: 455px;
    max-width: 750px;
    padding-left: 10px;

    li {
      list-style: none;
      text-align: left;
      h2 {
        font-weight: 400;

      }

      p {
        opacity: 0.7;
        margin: 15px 0 15px 0;
        font-size: 18px;
        min-width: 455px;
      }

      p:last-child {
        margin-bottom: 60px;
      }
    }
  }
`
export default Policy;