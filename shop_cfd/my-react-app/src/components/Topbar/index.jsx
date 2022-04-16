import React, { createContext, useContext, useRef, useState } from 'react'
import { useTranslate } from '../../core/components/TranslateProvider'

export default function Topbar() {
    const {selectLanguge, local} = useTranslate()
    return (
        <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
            <div className="container">
                {/* Promo */}
                <div className="mr-xl-8">
                    <i className="fe fe-truck mr-2" /> <span className="heading-xxxs">Free shipping worldwide</span>
                </div>
                {/* Toggler */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topbarCollapse" aria-controls="topbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                {/* Collapse */}
                <div className="collapse navbar-collapse" id="topbarCollapse">
                    {/* Nav main*/}
                    <ul className="nav nav-divided navbar-nav mr-auto">
                        <TopBarMenu>
                            <TopBarMenu.Item><img className="mb-1 mr-1" src="/img/flags/usa.svg" alt="..." />United States</TopBarMenu.Item>
                            <TopBarMenu.Item><img className="mb-1 mr-2" src="/img/flags/canada.svg" alt="Canada" />Canada</TopBarMenu.Item>
                            <TopBarMenu.Item><img className="mb-1 mr-2" src="/img/flags/germany.svg" alt="Germany" />Germany</TopBarMenu.Item>
                        </TopBarMenu>
                        <TopBarMenu>
                            <TopBarMenu.Item>USD</TopBarMenu.Item>
                            <TopBarMenu.Item>EUR</TopBarMenu.Item>
                        </TopBarMenu>
                        <TopBarMenu initialSelect={['en', 'vi', 'fr'].indexOf(local)}>
                            <TopBarMenu.Item onClick={() => selectLanguge('en')}>English</TopBarMenu.Item>
                            <TopBarMenu.Item onClick={() => selectLanguge('vi')}>Viet Nam</TopBarMenu.Item>
                            <TopBarMenu.Item onClick={() => selectLanguge('fr')}>French</TopBarMenu.Item>
                        </TopBarMenu>
                    </ul>
                    {/* Nav */}
                    <ul className="nav navbar-nav mr-8">
                        <li className="nav-item">
                            <a className="nav-link" href="./shipping-and-returns.html">Shipping</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./faq.html">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./contact-us.html">Contact</a>
                        </li>
                    </ul>
                    {/* Nav */}
                    <ul className="nav navbar-nav flex-row">
                        <li className="nav-item">
                            <a className="nav-link text-gray-350" href="#!">
                                <i className="fab fa-facebook-f" />
                            </a>
                        </li>
                        <li className="nav-item ml-xl-n4">
                            <a className="nav-link text-gray-350" href="#!">
                                <i className="fab fa-twitter" />
                            </a>
                        </li>
                        <li className="nav-item ml-xl-n4">
                            <a className="nav-link text-gray-350" href="#!">
                                <i className="fab fa-instagram" />
                            </a>
                        </li>
                        <li className="nav-item ml-xl-n4">
                            <a className="nav-link text-gray-350" href="#!">
                                <i className="fab fa-medium" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const Context = createContext({})

const TopBarMenu = ({initialSelect = 0, children}) => {
    const [active, setActive] = useState(initialSelect)
    const ref = useRef()
    const hoverIn = () => {
        ref.current.classList.add('show')
        ref.current.querySelector('.dropdown-menu').classList.add('show')
    }
    const hoverOut = () => {
        ref.current.classList.remove('show')
        ref.current.querySelector('.dropdown-menu').classList.remove('show')
    }
    return (
        <Context.Provider value={{setActive}}>
            <li className="nav-item dropdown hovered" ref={ref} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                {/* Toggle */}
                {
                    // ban chat la return ve <a className="dropdown-item" href="#" onClick={_onClick}>{children}</a>
                    React.cloneElement(React.Children.toArray(children)?.[active], {
                        className: 'nav-link dropdown-toggle'
                    })
                }
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                    {
                        React.Children.map(children, (child, i) => React.cloneElement(child, {index: i}))
                    }
                </div>
            </li>
        </Context.Provider>
    )
}

TopBarMenu.Item = ({index, children, onClick, ...props}) => {
    const {setActive} = useContext(Context)
    const _onClick = (ev) => {
        if(typeof index !== 'undefined'){
            ev.preventDefault()
            setActive(index)
            onClick?.()
        }
    }
    return <a className="dropdown-item" href="#" {...props} onClick= {_onClick}>{children}</a>
}