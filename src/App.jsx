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
        <div style={{ display: 'flex', flex: 1}}>
          <Sidebar style={{ position: 'fixed', left: 0, height: '100%' }} />
          <div style={{ padding: '20px', width: '100%', backgroundColor: '#E8E8E8' }}>

            {[...Array(2)].map((_, rowIndex) => (
              <div key={rowIndex} style={{ display: 'flex', marginBottom: '20px' }}>
                {[...Array(4)].map((_, colIndex) => (
                  <CardStack
                    key={colIndex}
                    title={`商品群 ${rowIndex * 4 + colIndex + 1}`}
                    image1="./images/product/apple.jpg"
                    image2="./images/product/apple.jpg"
                    image3="./images/product/apple.jpg"
                    image4="./images/product/apple.jpg"
                  />
                ))}
              </div>
            ))}

          </div>
        </div>
        <Footer style={{ position: 'fixed', bottom: 0, width: '100%' }} />
      </div>
    </>
  );
}
