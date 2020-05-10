import React, {Component} from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    }

    myRef = null;

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    // 컴포넌트가 마운트될 때와 업데이트될 때 호출, props로 받은 값을 state에 동기화
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color) {
            return {
                color: nextProps.color
            };
        }
        return null;
    }

    // 첫 렌더링 끝난 후 실행
    componentDidMount() {
        console.log('componentDidMount');
    }

    // state변경 시 리렌더링 여부
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4;
    }

    // 컴포넌트가 웹브라우저 상에서 사라지기 전
    componentWillMount() {
        console.log('componentWillMount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    // 브라우저에 결과물을 실제로 반영하기 전에 호출, 주로 업데이트 직전의 값을 참고할때 활용
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
    }

    // 리렌더링 완료한 후 실행
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트되기 직전 색상: ', snapshot);
        }
    }

    render() {
        console.log('render');
        const style = {
            color: this.props.color
        };

        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }
}

export default LifeCycleSample;