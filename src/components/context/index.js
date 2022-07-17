import { AppContextProvider } from './AppContext'
import { NavBarContextProvider } from './NavBarContext'
import { combineProvider } from './util'

const providers = [
  AppContextProvider,
  NavBarContextProvider
]

export const ContextProvider = combineProvider(...providers)