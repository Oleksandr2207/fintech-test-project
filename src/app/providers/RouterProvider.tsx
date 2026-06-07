import { BrowserRouter, Route, Routes } from 'react-router-dom'
import type { ReactNode } from 'react'
import { HomePage } from '@/pages/HomePage'

interface RouterProviderProps {
  children?: ReactNode
}

export function RouterProvider({ children }: RouterProviderProps) {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
