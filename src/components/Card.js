import { Col } from 'react-bootstrap'

function Card(props) {
    return (
        <Col>
            <img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} width="80%"></img>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
        </Col>
    );
}

export default Card;