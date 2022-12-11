import React, { useEffect, useState } from 'react'
import Layout from '@/components/templates/Layout'
import FeeTypes from '@/components/pages/fee-types/FeeTypes'
import { dummy } from '@/settings/dummy'

function Index() {
  const [data, setData] = useState([])

  useEffect(() => {
    window.localStorage.setItem('data', JSON.stringify(dummy))
    setData(window.localStorage.getItem('data'))
  }, [])

  return (
    <Layout>
      <FeeTypes
        data={data}
      />
    </Layout>
  )
}

export default Index