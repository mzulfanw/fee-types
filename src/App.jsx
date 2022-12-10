import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/settings/router'

function App() {
  return (
    <RouterProvider
      router={router}
    />
  )
}

export default App