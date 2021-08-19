import React, { useContext } from "react";

const AppContext = React.createContext({});

function ContextApp1() {
  const contextValue : any = useContext(AppContext);
  return (
    <div>
      {contextValue.contextValue}
    </div>
  )
}

function ContextApp2() {
  const contextValue : any = useContext(AppContext);
  return (
    <div>
      {contextValue.contextValue}
    </div>
  )
}

export default function ContextPage() {
  return (
    <AppContext.Provider value={{contextValue: 1}}>
      <ContextApp1/>
      <ContextApp2/>
    </AppContext.Provider>
  )
}
