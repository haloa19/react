import React, {Component} from 'react';

class Counter extends Component {
    // 초기값 지정 방법1
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0,
    //         fixNumber: 0
    //     };
    // }

    // 초기값 지정 방법2 (constructor 생성 없이 사용)
    state = {
        number: 0,
        fixNumber: 0
    };


    render() {
        const {number, fixNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1> 
                <h2>고정 값: {fixNumber} </h2>
                <button onClick={() => {
                    // this.setState(prevState => {
                    //     return {
                    //         number: prevState.number + 1
                    //     };
                    // });
                    // this.setState(prevState => ({
                    //     number: prevState.number + 1
                    // }));
                    this.setState(
                        {
                            number: number + 1
                        },
                        () => {
                            console.log('방금 setState가 호출됨');
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