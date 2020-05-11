import React, { Fragment, Component } from 'react';    // {} : 개별로 받아오는 방식

class App extends Component {   // form 제어 예제
    constructor() {
        super(...arguments);
        // this.state = {
        //     loginInfo : {
        //         email: '',
        //         password: ''
        //     }
        // }
    }

    onLoginSubmit(event) {
        event.preventDefault();
        console.log(event.target.email.value + ":" + event.target.password.value)
    }

    render() {
        return (
            <form onSubmit={this.onLoginSubmit}>
                <div>
                    e-mail: <input name='email' type='text'/>
                </div>
                <br/>
                <div>
                    password: <input name='password' type='password' />
                </div>
                <button type='submit'>로그인</button>
            </form>
        );
    }
}

export {App};