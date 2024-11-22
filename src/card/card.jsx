// 上野 迅

export function Card(props) {
    return (
        <div style={{ width: '150px', height: '150px', margin: '5px', marginTop: '10px', }}>
            <img style={{ width: '100%', height: '60%', objectFit: 'contain' }} src={props.imageSrc} alt="Product Image" />
            <div style={{textAlign: 'center'}}>
                <p style={{margin:'0'}}>{props.name}</p>
                <p style={{margin:'0'}}>¥{props.price}</p>
            </div>
        </div>
    );
}