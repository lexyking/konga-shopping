export const combineProvider = (...components) => {
  return (
    components.reduce((AccumlatedProviders, CurrentProvider) => {
      return (
        ({ children }) => <AccumlatedProviders>
          <CurrentProvider>
            {children}
          </CurrentProvider>
        </AccumlatedProviders>
      )
    }, ({ children }) => <>{children}</>)
  )
}