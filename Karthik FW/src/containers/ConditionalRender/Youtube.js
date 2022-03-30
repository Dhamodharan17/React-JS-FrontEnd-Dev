import React, { Component } from 'react'
import './Youtube.css'
export default class Youtube extends Component {

    state={
        subs : false
    }

    handleSub = ()=>{
        this.setState({subs:!this.state.subs})
    }
  render() {
    return (
      <div>

    {/*logical operator*/}   {this.state.subs&& <div className='video'></div>}
     
        <button className='btn' onClick={this.handleSub}>{this.state.subs?'Unsubscribe':'Subscribe'}</button>   {/*ternary operator*/}

      </div>
    )
  }
}
