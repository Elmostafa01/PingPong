import React, { createContext, useContext } from 'react';
import { Toaster } from 'react-hot-toast';

export const ToasterContext = createContext<JSX.Element | null>(null);

export const useToaster = () => useContext(ToasterContext);
