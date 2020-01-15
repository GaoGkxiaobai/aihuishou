import React, { Component } from 'react'
import style from './bottom.module.scss'
import {NavLink} from 'react-router-dom'
// Link a  ; NavLink - activeClass
// console.log(style)
export default class Bottom extends Component {
    render() {
        return (
            <nav className={style.nav}>
                <ul className={style.ul}>
                    <li className={style.li}><NavLink to="/index" className={style.index} activeClassName={style.activeindex}></NavLink></li>
                    <li className={style.li}><NavLink to="/huanxinji" className={style.huanxinji} activeClassName={style.activehuanxinji}></NavLink></li>
                    <li className={style.li}><NavLink to="/fuwuzhan" className={style.fuwuzhan} activeClassName={style.activefuwuzhan}></NavLink></li>
                    <li className={style.li}><NavLink to="/wode" className={style.wode} activeClassName={style.activewode}></NavLink></li>
                </ul>
            </nav>
        )
    }
}
