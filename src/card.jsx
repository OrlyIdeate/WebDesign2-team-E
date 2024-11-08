// 上野 迅

export function Card(props) {
    return (
        <div style={{ width: '300px', height: '400px' }}>
            <img style={{ width: '50%', height: 'auto' }} src={props.imageSrc} alt="Product Image" />
            <div>
                <h2>商品名</h2>
                <p>商品説明</p>
                <p>¥1,000</p>
                <button>カートに追加</button>
            </div>
        </div>
    );
}