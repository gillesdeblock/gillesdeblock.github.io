import React from 'react';
import {connect} from "react-redux";
import { Content } from '../containers/Content.jsx';
import { Footer } from '../components/Footer.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Content portfolio={this.props.portfolio} />
                <Footer />
            </div>
        );
    }
}

// Redux: Binding the state to the components properties
const mapStateToProps = (state) => {
  return {
    portfolio: state.portfolio
  };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setName: (name) => {
//             dispatch(setName(name));
//         }
//     };
// };

export default connect(mapStateToProps)(App);