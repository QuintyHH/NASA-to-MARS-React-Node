import React from 'react'
import images from '../../../constants/images'
import * as ES from './Easter.style'
import { useHistory } from 'react-router-dom'
import routes from '../../../constants/routes'

const config = {
  backNav: 'Back to the conspiracy',
  p1: 'The cake is a lie',
  p2: 'The earth is flat',
  p3: 'Flat earthers rule, Globers drool',
  imageTitle: 'Think!',
}

const Easter = () => {
  const history = useHistory()
  const handleBacknavClick = () => history.push(routes.HOME)

  return (
    <ES.PageWrapper>
      <ES.BackNavButton onClick={handleBacknavClick}>
        {config.backNav}
      </ES.BackNavButton>
      <ES.Title>{config.p1}</ES.Title>
      <ES.Title>{config.p2}</ES.Title>
      <ES.Title>{config.p3}</ES.Title>
      <ES.Badge image={images.Think} title={config.imageTitle} />
    </ES.PageWrapper>
  )
}

export { Easter }
