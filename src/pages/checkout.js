import React from 'react';
import Head from 'next/head';
import OrderItem from '@components/OrderItem';
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  return (
    <>
      <Head>
        <title>React Shop: Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className="Checkout-container">
          <h1 className="title">My order</h1>
          <div className="Checkout-content">
            <div className="order">
              <p>
                <span>03.25.22</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
            </div>
          </div>
          <OrderItem />
        </div>
      </div>
    </>
  );
};

export default Checkout;
