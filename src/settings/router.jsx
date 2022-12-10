/* eslint-disable no-undef */
import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Index from '@/pages/fee-types/Index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/fee-types' />
  },
  {
    path: '/fee-types',
    element: <Index />
  }
])