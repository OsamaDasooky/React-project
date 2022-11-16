import { createContext, useContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState({});
};
