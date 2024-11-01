import { Square } from './Square';
import { Footer } from './footer';
import { sum } from './sum';

 // Aさん

export default function App() {
  console.log(sum(1, 2));

  return (
    <>
      <div className="board-row">
        {/* 後でBさんが作ったコンポーネントをインポートして使う */}
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        < Footer/>
      </div>      
    </>
  );
}
