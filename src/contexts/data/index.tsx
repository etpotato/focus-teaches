"use client"

import { FC, ReactNode, createContext, useContext } from 'react'
import data from '../../data.json'

type Data = typeof data;

export const DataContext = createContext<Data | null>(null)

export function useDataContext() {
  return useContext(DataContext)
}


type Props = {
  value: Data,
  children: ReactNode
}

export const DataContextProvider: FC<Props> = ({ value, children }) => {
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
