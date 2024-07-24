import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
    padding : 10px;
`

function Detail(props) {
    let {id} = useParams()
    let items = props.shoes.find((x)=>{
        return x.id == id
    })
    let [alert, setAlert] = useState(true)

    // 렌더링 완료 후 실행, [] 안에 state 존재하면 mount/update 시점과 state변경시에만 실행, 
    // 빈 [] 를 사용하면 update 시점에는 실행되지 않음
    useEffect(()=>{
        let timer = setTimeout(()=>{ setAlert(false) }, 2000)
        return ()=>{
            // useEffect 실행 전에 실행됨. 기존 타이머를 제거하는 로직을 주로 여기에 작성
            clearTimeout(timer)
        }
    }, [])

    return (
        <div className="container">
            {
                alert == true
                ? <div className="alert alert-warning">
                    2초 이내 구매시 할인ㅎ
                    <YellowBtn bg="skyblue">버튼</YellowBtn>
                    <YellowBtn bg="gray">버튼</YellowBtn>
                    <YellowBtn bg="blue">버튼</YellowBtn>
                </div>
                : null
            }
            
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{items.title}</h4>
                    <p>{items.content}</p>
                    <p>{items.price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;