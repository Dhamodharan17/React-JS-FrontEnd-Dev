import React, { Component } from 'react';
import * as action from "../store/actions"
import { connect } from "react-redux";
import '../Style.css'
export class ListTransaction extends Component {

  render() {

    return <div className='container'>
        {console.log("app started")}
        { console.log(this.props.transaction)}
      
        {console.log("output")}
        { console.log(this.props.transaction)}


        <table>
            <thead>
                <tr className='table-header'>
                <td>Name</td>
                <td>Transaction Reference</td>
                <td>Amount</td>
                <td>City</td>
                </tr>
            </thead>
            <tbody>
                {this.props.transaction.map((member, i) => {
                    return (
                        <tr key={i}>
                            <td>{member.bene}</td>
                            <td>{member.trans_ref}</td>
                            <td> {member.amount}</td>
                            <td>{member.city}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>



            <button onClick={this.props.getVaccineList}>Get</button>
            <button onClick={this.props.getExistTransList}>Failed</button>
        

    </div>;

  }
}

const mapStateToProps = (state) => {
    return {
        transaction: state.ListTReducer.transaction
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getVaccineList: () => dispatch(action.getTransList()),
        getExistTransList: () => dispatch(action.getExistTransList())
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(ListTransaction);
