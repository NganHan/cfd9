import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext({})

export default function Tab({ children }) {
    const [idActive, setIdActive] = useState('')
    const [tabs, setTabs] = useState([])
    const registerTab = (id) => { // ham kiem tra idActive co GT hay k, neu k thi set idActive thanh id cua mk
        tabs.push(id) // khi tac dong truwc tiep se k render lai
        if(tabs.length === 1){
            setIdActive(id)
        }
    }
    return (
        <Context.Provider value={{setIdActive, idActive, registerTab}}>
            {children}
        </Context.Provider>
    )
}

Tab.Content = ({ id, children }) => {

    const {idActive} = useContext(Context)
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {
        setIsShow(idActive === id)
    }, [idActive === id])
    if(idActive === id){
        return (
            <div className={`tab-pane fade ${isShow ? 'show':''} active`}>
                {children}         
            </div>
        )
    }
    return null

}
Tab.Title = ({ id, children }) => { 
    const {idActive, setIdActive, registerTab} = useContext(Context)
    useEffect(() => {
        registerTab(id)
    }, [])
    const onClick = (ev) => {
        ev.preventDefault()
        setIdActive(id)
    } 
    return (
        <a onClick={onClick} className={`nav-link ${idActive === id ? 'active':''}`} data-toggle="tab" href="#descriptionTab">
            {children}
        </a>
    )
}