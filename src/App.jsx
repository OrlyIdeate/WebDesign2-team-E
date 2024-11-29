import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import React, { useState, useEffect } from 'react';
import { CardStack } from './card/cardStack';
import items from './item.json';


export default function App() {

  const [data, setData] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setData(items);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header toggleSidebar={toggleSidebar} style={{ position: 'fixed', top: 0, width: '100%' }} />
        <div style={{ display: 'flex', flex: 1 }}>
          {isSidebarOpen && <Sidebar style={{ position: 'fixed', left: 0, height: '100%' }} />}
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
                      name1={item?.info[0]?.name}
                      name2={item?.info[1]?.name}
                      name3={item?.info[2]?.name}
                      name4={item?.info[3]?.name}
                      price1={item?.info[0]?.price}
                      price2={item?.info[1]?.price}
                      price3={item?.info[2]?.price}
                      price4={item?.info[3]?.price}
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
