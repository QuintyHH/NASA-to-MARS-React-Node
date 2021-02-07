import React from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { updateGrid } from '../../actions/mission'
import * as Yup from 'yup'
import * as GC from './GridCalculator.style'

const config = {
  grid: {
    type: 'grid',
    label: 'Current grid size'.toUpperCase(),
    error: 'Please insert a valid number',
  },
  height: {
    type: 'height',
    label: 'Height',
  },
  width: {
    type: 'width',
    label: 'Width',
  },
  updateButton: {
    text: 'Update grid',
  },
}

const GridCalculator = () => {
  const dispatch = useDispatch()
  const [currentWidth, currentHeight] = useSelector(({ missionReducer }) => [
    missionReducer.grid.width,
    missionReducer.grid.height,
  ])
  
  const formik = useFormik({
    initialValues: { width: currentWidth, height: currentHeight },
    validationSchema: Yup.object({
      width: Yup.string()
        .required('Must be at least 1 digit')
        .matches(/[0-9]+$/, 'Must be only digits')
        .max(3, 'Mars too big!'),
      height: Yup.string()
        .required('Must be at least 1 digit')
        .matches(/[0-9]+$/, 'Must be only digits')
        .max(3, 'Mars too big!'),
    }),
    onSubmit: (values) => {
      dispatch(updateGrid(values))
    },
  })

  const { values, errors, handleSubmit, handleChange } = formik

  return (
    <GC.PageWrapper>
      <GC.GridDisplay
        name={config.grid.type}
        disabled={true}
        label={
          errors.width
            ? errors.width
            : errors.height
            ? errors.height
            : config.grid.label
        }
        error={Boolean(errors.width || errors.height)}
        fullWidth
        value={`${currentWidth} x ${currentHeight}`}
      />
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <GC.GridInput
          name={config.width.type}
          error={Boolean(errors.width)}
          label={config.width.label}
          value={values.width}
          onChange={handleChange}
          variant="outlined"
        />
        <GC.GridInput
          name={config.height.type}
          error={Boolean(errors.height)}
          label={config.height.label}
          value={values.height}
          onChange={handleChange}
          variant="outlined"
        />
      </form>
      <GC.UpdateGridButton
        variant="contained"
        disabled={Boolean(errors.width || errors.height)}
        onClick={handleSubmit}
      >
        {config.updateButton.text}
      </GC.UpdateGridButton>
    </GC.PageWrapper>
  )
}

export { GridCalculator }
