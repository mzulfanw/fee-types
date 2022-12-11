/* eslint-disable no-undef */
import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Index from '@/pages/fee-types/Index'
import Create from '@/pages/fee-types/Create'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/fee-types' />
  },
  {
    path: '/fee-types',
    element: <Index />
  },
  {
    path: '/fee-types/create',
    element: <Create />
  }
])