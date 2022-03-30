import React, { Component } from "react";
import { connect } from "react-redux";
import * as Action from '../../redux/actions/Icecream-actions'
import './Icecream.css'
 class IceCreamContainer extends Component {

  render() {
      const size = this.props.counter_value;
      const emojiarra = Array(size).fill(1);
    return <div className="container">
      
      {emojiarra.map((e)=><span style={{fontSize: 30}}>&#127846;</span>)}<br/>
        <button onClick={this.props.addIcream}>Add </button>
        <button onClick={this.props.removeIcecream}>Remove </button>
    </div>;
  }

}

const mapStateToProps = (state) => {
    return {
        counter_value: state.icecreamreducer.counter
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        addIcream: () => dispatch(Action.addIceCreamActionCreator()),
        removeIcecream: () => dispatch(Action.removeIceCreamActionCreator()),

    };
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);