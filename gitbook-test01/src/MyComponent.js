import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const MyComponent = ({name, favoriteNum, children}) => {
//     //const {name, children} = props; 위 코드로 대체
// return <div>나의 이름은 {name}입니다.<br/>
//             children 값은 {children}입니다.<br/>
//             제가 좋아하는 숫자는 {favoriteNum}</div>;
// };

class MyComponent extends Component {
    static defaultProps = {
        name: '리액트'        
    };

    static propTypes = {
        name: PropTypes.string,
        favoriteNum: PropTypes.number.isRequired
    }

    render() {
        const {name, favoriteNum, children} = this.props;
        return(
            <div>나의 이름은 {name}입니다.<br/>
            children 값은 {children}입니다.<br/>
            제가 좋아하는 숫자는 {favoriteNum}</div>
        );
    }
}

// MyComponent.defaultProps = {
//     name: '리액트',
//     favoriteNum: PropTypes.number.isRequired
// };

// MyComponent.propTypes =  {
//     name: PropTypes.string
// }
export default MyComponent;