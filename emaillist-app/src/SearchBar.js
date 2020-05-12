import React from 'react';

export default class SearchBar extends React.Component {
    onInputChange(event) {
        this.props['onNotifyKeywordChange'](event.target.value);
        console.log(event.target.value);
    }

    render() {
        return (
            <div className='SearchBar'>
                찾기 : <input type='text' placeholder='찾기' value={this.props.keyword} onChange={this.onInputChange.bind(this)}/>
            </div>
        );
    }
}