import {
    HashRouter as AHSRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import App from '../App'
import React from 'react'
import Index from '../Views/Index/index'
import Huanxinji from '../Views/Huanxinji/huanxinji'
import Wode from '../Views/Wode/wode'
import Fuwuzhan from '../Views/Fuwuzhan/fuwuzhan'
import { Provider } from 'react-redux'
import Store from '../Redux/store'
const router = (
    <Provider store={Store}>
        <AHSRouter>
            <App>
                <Switch>
                    <Route path="/index" component={Index}></Route>
                    <Route path="/huanxinji" component={Huanxinji}></Route>
                    <Route path="/fuwuzhan" component={Fuwuzhan}></Route>
                    <Route path="/wode" component={Wode}></Route>
                    <Redirect from="/" to="/index" exact />
                    {/* <Redirect to="/error"/> */}
                </Switch>
            </App>
        </AHSRouter>
    </Provider>
)
export default router