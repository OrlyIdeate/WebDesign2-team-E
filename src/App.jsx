import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import React, { useState } from 'react';
import { CardStack } from './card/cardStack';


export default function App() {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header style={{ position: 'fixed', top: 0, width: '100%' }} />
        <div style={{ display: 'flex', flex: 1, marginTop: '60px' }}>
          <Sidebar style={{ position: 'fixed', left: 0, height: '100%' }} />
          <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>

            <CardStack
              title="商品群"
              image1="./images/product/apple.jpg"
              image2="./images/product/apple.jpg"
              image3="./images/product/apple.jpg"
              image4="./images/product/apple.jpg"
            />

          </div>
        </div>
        <Footer style={{ position: 'fixed', bottom: 0, width: '100%' }} />
      </div>
    </>
  );
}
