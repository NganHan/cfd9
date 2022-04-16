import React from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import TranslateProvider from './components/TranslateProvider'

export function AppProvier({children, store, local, translate}) {
  return (
    <BrowserRouter>
      <TranslateProvider local={local} translate={translate}>
        <Provider store={store}>
            {children}
        </Provider>
      </TranslateProvider>
    </BrowserRouter>
  )
}
