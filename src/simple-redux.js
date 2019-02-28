/* simple redux: functions that help understand better the purpose of redux */

import React, { Component } from 'react';

// feature 1: createStore 
export const createStore = (reducer) => {
    let currentState;
    let subscribers = [];
    return {
        getState: () => currentState,
        dispatch: action => {
            currentState = reducer(currentState, action); //apply action to state using reducer
            console.log('currentSate:' + currentState, 'action:' + action.type);
            subscribers.forEach(cbFn => cbFn()); //call back every subscriber
        },
        subscribe : cbFn => {
            subscribers.push(cbFn);
            //return a function so the caller unsubscribe
            return () => {
                const cbFnIndex = subscribers.indexOf(cbFn);
                subscribers.splice(cbFnIndex,1);
            }
        }

    }
}

// feature 2: bindActionCreators binds the action creator with the dispatch.
export const bindActionCreators = (action, dispatch) => {
    return Object.keys(action).reduce((boundActions, key) => {
        boundActions[key] = (...params) => dispatch(action[key](...params));
        return boundActions;
    },{});
}

//feature 3: connect 
// container component is made the observor of any state change in the store to update the ui
export const { Provider, Consumer } = React.createContext(null);
export const connect = (mapStateToPropsFn, mapDispatchToPropsFn) => {
  return PresentationalComponent => {
    class ContainerComponent extends Component {
        componentWillMount() {
            this.dispatchProps = mapDispatchToPropsFn(this.props.store.dispatch);
            this.unsubscribeFn = this.props.store.subscribe(() => {
                this.forceUpdate();
            });
      }

      componentWillUnmount() {
        this.unsubscribeFn();
      }

      render() {
        return <PresentationalComponent {...this.dispatchProps} {...mapStateToPropsFn(this.props.store.getState())} />;
      }
    }
    return () => <Consumer>{value => <ContainerComponent store={value} />}</Consumer>;
  };
}


