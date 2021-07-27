// This file holds the FAQ, in a react-bootstrap Accordion component. It is to be imported into Landing.jsx
// Gordon Chia, 26 July 2021

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Accordion } from 'react-bootstrap';

const LandingFAQ = () => {
  return (
    <>
      <h1 classNmae="fs-1 fw-bold text-success">
        FAQ
        <FontAwesomeIcon icon={['fas', 'question']} />
      </h1>
      <Accordion classsName="accordion-flush">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do I order food?</Accordion.Header>
          <Accordion.Body>
            <p>This is the standard order process:</p>
            <b>Find a restaurant,</b> either by scrolling down the website or by
            searching in the search bar.
            <br />
            <b>Choose your dishes.</b> Browse through the menu and select your
            dishes and the options associated with it. Your selected dishes will
            appear in your cart on the right.
            <br />
            <b>Checkout and Pay.</b> Once you are happy with your order, select
            the “ORDER NOW” button on the right of the page. Simply follow the
            checkout instructions from there.
            <br />
            <b>Delivery.</b> We will send you a confirmation email and SMS once
            the order has been placed. Kick back and relax, waiting for your
            genuine piece of Korean cuisine to be delivered to you!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Can I change my order after placing it?
          </Accordion.Header>
          <Accordion.Body>
            Sorry, you are unable to change your order after placing it. This is
            due to the possibility that the restaurant may have started
            preparing your order, and cancellation will likely lead to food
            wastage.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Can I make multiple JIAKSEOM orders?
          </Accordion.Header>
          <Accordion.Body>
            At this time, as we are in beta mode, we are unable to accept
            multiple orders. Stay tuned for more updates!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Can I cancel my order after placing it?
          </Accordion.Header>
          <Accordion.Body>
            Sorry, you are unable to cancel your order as the restaurant may
            have started preparing your order, and cancellation will likely lead
            to food wastage. Do reach out to our support channels for assistance
            should you still wish to do so.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Why was my order cancelled?</Accordion.Header>
          <Accordion.Body>
            Your order may have been cancelled due to the restaurant running out
            of stock, or that the item you have ordered is no longer available.
            Additionally, the order may be cancelled if there is no delivery
            partner available.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>How much is the delivery fee?</Accordion.Header>
          <Accordion.Body>
            For now, as we are operating in beta mode, we cap all delivery fees
            islandwide to the low price of SGD$3.00.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default LandingFAQ;
