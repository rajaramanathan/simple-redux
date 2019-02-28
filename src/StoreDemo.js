/*
  Demonstrates the functionality of simple redux store
*/

import React, { Component } from 'react';
import {createStore, bindActionCreators} from './simple-redux';

//Calculator app, actions and reducer
import {createAddAction, createSubtractAction, 
  createDivisonAction, createMultiplicationAction} from './calcActions';
import {calcReducer} from './calcReducer';
import {Calculator} from './Calculator';

//create store
const calcStore = createStore(calcReducer);

//bind action to store dispatch
// const add = value => calcStore.dispatch(createAddAction(value));
const mapDispatchToProps = bindActionCreators( {
  add: createAddAction,
  subtract: createSubtractAction,
  multiply: createMultiplicationAction,
  divide: createDivisonAction
}, calcStore.dispatch);

//ReduxStoreDemo is the container component that manages state and state changes.
//Manually binds the action to store dispatch and refreshes UI on any state change.
export class StoreDemo extends Component {

  componentWillMount() {
     //subscribe to state changes in store to refresh the UI
    this.unsubscribeFn = calcStore.subscribe(() => {
        this.forceUpdate(); 
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFn();
  }

  render() {
    return <>
      <Calculator result={calcStore.getState()} featureName='StoreDemo' {...mapDispatchToProps}/>
    </>
  }
}

