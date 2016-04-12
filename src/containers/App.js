/**
 * Created by lance on 16/3/2.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    let {children} = this.props;
    return (
      <div className="app_container">
        {children}
        <div className="footer">
          ver 1.0.0  2016@迪奥科技
        </div>
      </div>
    );
  }
}
export default connect()(App);
