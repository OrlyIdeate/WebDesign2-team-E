import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import React, { useState, useEffect } from 'react';
import { CardStack } from './card/cardStack';
import items from './item.json';


export default function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(items);
  }, []);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header style={{ position: 'fixed', top: 0, width: '100%' }} />
        <div style={{ display: 'flex', flex: 1 }}>
          <Sidebar style={{ position: 'fixed', left: 0, height: '100%' }} />
          <div style={{ padding: '20px', width: '100%', backgroundColor: '#E8E8E8' }}>

            {[...Array(2)].map((_, rowIndex) => (
              <div key={rowIndex} style={{ display: 'flex', marginBottom: '20px' }}>
                {[...Array(4)].map((_, colIndex) => {
                  const item = data[rowIndex * 4 + colIndex];
                  return (
                    <CardStack
                      key={colIndex}
                      title={item?.genre}
                      image1={item?.info[0]?.image}
                      image2={item?.info[1]?.image}
                      image3={item?.info[2]?.image}
                      image4={item?.info[3]?.image}
                    />
                  );
                })}
              </div>
            ))}

          </div>
        </div>
        <Footer style={{ position: 'fixed', bottom: 0, width: '100%' }} />
      </div>
    </>
  );
}
