import React from 'react'
import { SideMenu } from '../../SideMenu'
import { MarsMap } from '../../MarsMap'
import * as HS from './Home.style'

const Home = () => {
  return (
    <HS.Container>
      <MarsMap />
      <SideMenu />
    </HS.Container>
  )
}

export { Home }
