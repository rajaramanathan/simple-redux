import React, { Component } from 'react';

import {createStore, bindActionCreators, connect, Provider} from './simple-redux';

//Calculator app, actions and reducer
import {createAddAction, createSubtractAction, 
    createDivisonAction, createMultiplicationAction} from './calcActions';
import {calcReducer} from './calcReducer';
import {Calculator} from './Calculator';

//store
const calcStore = createStore(calcReducer);

const CalculatorContainer = connect(
    state => ({ result: state, featureName: 'ConnectDemo' }),
    dispatch => bindActionCreators({
      add: createAddAction, subtract: createSubtractAction,
      multiply: createMultiplicationAction, divide: createDivisonAction,
    }, dispatch),
  )(Calculator);

export class ConnectDemo extends Component {
    render() {
        return <Provider value={calcStore}>
            <CalculatorContainer />
        </Provider>;
    }
}
  