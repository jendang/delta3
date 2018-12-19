import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)



// let map= [
//     {obj: <App/>, id: 'root', path: '../src/App.js'},
//     {obj: <LoginSignup/>, id: 'login', path: '../src/components/LoginSignup'},
//     // {obj: <LoginPage/>, id: 'login', path: '../src/components/login/LoginPage'},
    
// ]

// map.map((e) => {
//     if( document.getElementById(e.id) ) {

//         ReactDOM.render(
//             <Provider store={store}>
//                 {e.obj}
//             </Provider>,
//             document.getElementById(e.id)
//         );

//     }
// })

// if (module.hot) {

//     map.map((e) => {
//         if( document.getElementById(e.id) ) {
//             module.hot.accept(e.path, function () {
//                 var NextApp = require(e.path).default;
//                 ReactDOM.render(<Provider store={store}><NextApp/></Provider>, document.getElementById(e.id))
//             })
//         }
//     })

// }

// if (process.env.NODE_ENV !== "production") {
//     if (module.hot) {
//         module.hot.accept("./reducers", () => {
//             var nextReducer = require('./reducers/index').default
//             store.replaceReducer(nextReducer)
//         })
//     }
// }



registerServiceWorker()
