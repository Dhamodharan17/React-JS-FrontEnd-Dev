import React, { Component } from 'react'
import { getBooksApi } from "../../service/ApiLocation.js";
export default class Books extends Component {

    componentDidMount(){
        getBooksApi().then(res=>{
            console.log(res.data)
           // this.setState({country:res.data})
        
        })
    }
    
  render() {
    return (
      <div>Books</div>
    )


  }
}
