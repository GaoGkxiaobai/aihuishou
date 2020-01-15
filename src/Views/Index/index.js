import React, { Component } from 'react'
import style from './index.module.scss'
import { NavLink } from 'react-router-dom'
import { Icon,Input  } from 'antd';
export default class index extends Component {
    
    render() {
        return (
            <div>
                <header className={style.indexheader}>
                    <NavLink to="/citys" className={style.citys}>城市<Icon type="down" /></NavLink>
                    <Input
                        className={style.search}
                        placeholder="搜索您要卖的品牌，机器型号"
                        prefix={
                            <Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />
                        }
                    />
                    <NavLink to="/gouwuche" className={style.gouwuche}><Icon type="shopping-cart" /></NavLink>
                </header>
            </div>
        )
    }
}
