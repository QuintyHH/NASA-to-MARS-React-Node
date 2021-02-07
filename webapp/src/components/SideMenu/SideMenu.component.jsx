import React, { useState } from 'react'
import { GridCalculator } from '../GridCalcuator'
import images from '../../constants/images'
import * as SM from './SideMenu.style'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import routes from '../../constants/routes'
import { postNewMovementFile } from '../../actions/mission'

const config = {
  buttonSecondary: {
    text: 'Launch Mission',
  },
  buttonPrimary: {
    text: 'Upload routes',
  },
  title: 'NASA',
  description: 'Mission to MARS',
  modal: {
    uploadButton: 'Upload selected',
    cancelButton: 'Cancel',
  },
}

const SideMenu = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const conditionalPrimaryButtonContent = () => {
    return file ? (
      `Upload ${file.name.substring(0, 8)}...`
    ) : (
      <>
        {config.buttonPrimary.text}
        <input type="file" hidden onChange={handleFileChange} />
      </>
    )
  }

  const handleNavClick = () => history.push(routes.CONSPIRACY)

  const handleUpload = () => {
    dispatch(postNewMovementFile(file))
  }

  return (
    <SM.Container>
      <SM.Badge
        onClick={handleNavClick}
        image={images.NasaInsignia}
        title={config.title}
      />
      <SM.Title>{config.description}</SM.Title>
      <GridCalculator />
      <SM.ButtonPrimary
        variant="contained"
        aria-label="upload"
        onClick={file ? () => handleUpload() : null}
        component="label"
      >
        {conditionalPrimaryButtonContent()}
      </SM.ButtonPrimary>
      <SM.ButtonSecondary
        variant="contained"
        aria-label="launch"
        onClick={file ? () => setFile(null) : () => console.log('Launching')}
      >
        {file ? 'clear selected' : config.buttonSecondary.text}
      </SM.ButtonSecondary>
    </SM.Container>
  )
}

export { SideMenu }
