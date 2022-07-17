import { combineProvider } from './util'
import { NavBarContextProvider } from './NavBarContext'
import { AppContextProvider } from './AppContext'

const providers = [
  NavBarContextProvider,
  AppContextProvider
]

export const ContextProvider = combineProvider(...providers)