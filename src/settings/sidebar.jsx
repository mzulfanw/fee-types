/* eslint-disable react/react-in-jsx-scope */
/**
 * Setup All navigation in here
 * 
 */
import { SlHome } from 'react-icons/sl'
import { GiSuitcase } from 'react-icons/gi'

export const sidebarItem = [
  {
    id: 1,
    text: 'Home',
    icon: <SlHome size={24} color='white' />
  },
  {
    id: 2,
    text: 'Master Data',
    icon: <GiSuitcase size={24} color='white' />
  }
]