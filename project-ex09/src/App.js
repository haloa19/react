import React, { Fragment, Component } from 'react';    // {} : 개별로 받아오는 방식

class App extends Component {   // form 제어 예제
    constructor() {
        super(...arguments);
        this.state = {
            keyword: '',
            contents: '',
            birthYear: 1995
        }
    }
    onInputChanged(event) {
        // this.setState({
        //     keyword: event.target.value
        // });
        // 세부 기능 제어 가능
        this.setState({ // this는 virtual dom을 의미
            keyword: event.target.value.substr(0, 5)
        });
    }

    onTextareaChanged(event) {
        this.setState({
            contents: event.target.value
        });
    }

    onSelectChanged(event) {
        this.setState({
            birthYear: event.target.value
        });
    }

    render() {
        return (
            <Fragment>
                <div>
                    검색: <input type='text' value={this.state.keyword} onChange={this.onInputChanged.bind(this)}/>
                </div>
                <br/>
                <div>
                    내용: <textarea value={this.state.contents} onChange={this.onTextareaChanged.bind(this)}/>
                </div>
                <div>
                    생년:
                    <select value={this.state.birthYear} onChange={this.onSelectChanged.bind(this)}>
                        <option value='1994'>1994년</option>
                        <option value='1995'>1995년</option>
                        <option value='1996'>1996년</option>
                    </select>
                </div>
            </Fragment>
        );
    }
}

export {App};