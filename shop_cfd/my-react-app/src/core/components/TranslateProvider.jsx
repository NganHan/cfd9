import React, { createContext, useContext, useEffect, useState } from 'react'

// translate = {
//     en: {},
//     vi: {"home":"trang chu"}
// }
const Context = createContext({
    selectLanguge: (lang='en') => {},
    local: 'en',
    _t: (k = '') => k

})

const LANG_STORAGE_KEY = 'lang'

export default function TranslateProvider({ local = 'en', translate = {}, children }) {
    const [_local, setLocal] = useState(localStorage.getItem(LANG_STORAGE_KEY) || local)

    useEffect(() => {
        localStorage.setItem(LANG_STORAGE_KEY, _local)
    }, [_local])

    const selectLanguge = (local) => { //khac local o tren
        console.log(local);
        setLocal(local)
    }
    const _t = (k) => translate?.[_local]?.[k] || k
    return (
        <Context.Provider value={{selectLanguge, local: _local, _t}}>{children}</Context.Provider>
    )
}
export const useTranslate = () => useContext(Context)
