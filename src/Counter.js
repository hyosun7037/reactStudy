import React, {Component} from 'react';


class Counter extends Component{
    state ={
        number:0,
        fixedNumber:0
    }
render(){
    const{number, fixedNumber} = this.state; // state 조회시 this.state
    return(
        <div>
            <h1>{number}</h1>
            <h2>바뀌지 않는 값 :{fixedNumber}</h2>
            <button onClick={()=>{
                //onClick -> 버튼이 클릭됬을 때 호출할 함수 지정
                this.setState({
                    number:number+1
                },
                ()=>{
                    console.log('방금 setState가 호출');
                    console.log(this.state);
                }
                );
            }}
            >
            +1
            </button>
        </div>
    );
}
}
export default Counter;