import React, {Component} from 'react';
import ValidationSample from './ValidationSample';
import RefSample from './RefSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

//7장
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  // 7장
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      // 5장
      // <div>
      //   <ScrollBox ref={(ref) => this.scrollBox = ref}/>
      //   <button onClick={() => this.scrollBox.scrollToBottom()}>
      //     맨밑으로
      //   </button>
      // </div>

      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>
      </div>
    );
  }
}

// const App = props => {
//   return (
//     <div>
//       <ScrollBox ref={(ref) => this.scrollBox = ref}/>
//       <button onClick={() => this.scrollBox.sc}>
//         ggggg
//       </button>
//     </div>
//   );
// }

export default App;
