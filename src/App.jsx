import { Square } from './Square';
import { Footer } from './footer';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { sum } from './sum';

 // Aさん

export default function App() {
  console.log(sum(1, 2));

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header style={{ position: 'fixed', top: 0, width: '100%' }} />
        <div style={{ display: 'flex', flex: 1, marginTop: '60px' }}>
          <Sidebar style={{ position: 'fixed', left: 0, height: '100%' }} />
          <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>
            <Square />
          </div>
        </div>
        <Footer style={{ position: 'fixed', bottom: 0, width: '100%' }} />
      </div>
    </>
  );
}
