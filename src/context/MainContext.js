import {createContext, useContext, useState} from "react";
import jsonData from '../data.json'
const MainContext = createContext()
const MainProvider = ({children}) => {
  const [planetName, setPlanetName] = useState('Moon')
  const [isActive,setIsActive] = useState(false)
  const data = jsonData
  const values = {planetName, setPlanetName, data, isActive, setIsActive}
  return (
      <MainContext.Provider value={values}>{children}</MainContext.Provider>
  );
};
const useMain = () => useContext(MainContext)
export {MainProvider, useMain};

