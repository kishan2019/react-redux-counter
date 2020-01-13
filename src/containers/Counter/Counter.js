import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <button onClick={this.props.onStoreResult}> Store Result </button>
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
        ctr: state.counter,
        storedResult: state.result
    };
}; 

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddFive: () => dispatch({type: 'ADD_FIVE', val: 10}),
        onSubFive: () => dispatch({type: 'SUB_FIVE', val: 10}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult : (id) => dispatch({type: 'DELETE_RESULT', ElementId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);