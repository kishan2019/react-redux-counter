import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../store/action';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubFive}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}> Store Result </button>
                <ul>
                    {this.props.storedResult.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        ); 
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResult: state.res.result
    };
}; 

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionType.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionType.DECREMENT}),
        onAddFive: () => dispatch({type: actionType.ADD_FIVE, val: 5}),
        onSubFive: () => dispatch({type: actionType.SUB_FIVE, val: 5}),
        onStoreResult: (result) => dispatch({type: actionType.STORE_RESULT, result: result}),
        onDeleteResult : (id) => dispatch({type: actionType.DELETE_RESULT, ElementId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);