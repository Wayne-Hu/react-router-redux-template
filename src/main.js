import React from 'react'
import ReactDom from 'react-dom'

import {createDevTools} from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import sagas from './sagas'
import * as reducers from './reducers'
import {App, Home, Foo, Bar} from './components'

const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
});

// const DevTools = createDevTools(
//     <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
//         <LogMonitor theme="tomorrow" preserveScrollTop={false}/>
//     </DockMonitor>
// );

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    // DevTools.instrument()
    window.devToolsExtension && window.devToolsExtension(),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="foo" component={Foo}/>
                    <Route path="bar" component={Bar}/>
                </Route>
            </Router>
            {/*<DevTools />*/}
        </div>
    </Provider>,
    document.getElementById('app')
);