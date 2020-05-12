import React from 'react';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

export default class EmaillistApp extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            keyword: ''
        }
        console.log('EmailistApp:constructor()');
    }

    componentWillMount() {
        console.log('EmailistApp:componentWillMount()');
    }

    onNotifyKeywordChange(keyword) {
        this.setState({
            keyword: keyword
        })
    }
    render() {
        console.log('EmailistApp:render()');
        return (
            <div className='EmaillistApp'>
                <SearchBar keyword={this.state.keyword} onNotifyKeywordChange={this.onNotifyKeywordChange.bind(this)}/>
                <Emaillist keyword={this.state.keyword} emails={this.state.emails}/>
            </div>
        );
    }

    componentDidMount() {
        console.log('EmailistApp:componentDidMount()');
        fetch('http://localhost:8888/emaillist')
            .then((response) => response.json()) 
            .then((json) => this.setState({
                emails:json.data
            }))
            .catch(err => console.error(err));
    }

    componentWillUnmount() {
        console.log('EmailistApp:componentWillUnmount()');
    }
}