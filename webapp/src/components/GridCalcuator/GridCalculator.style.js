import styled from 'styled-components'
import { Button, TextField, withStyles } from '@material-ui/core'
import { BLUE, WHITE, GRAY, RED } from '../../constants/colors'

export const PageWrapper = styled.div`
  width: 100%;
  margin: 10px 0;
  padding: 20px;
`

export const UpdateGridButton = withStyles(() => ({
  root: {
    backgroundColor: BLUE,
    color: WHITE,
    width: '90%',
    margin: '10px 5%',
    fontSize: '1rem',
    border: `1px solid ${BLUE}`,
  },
}))(Button)

export const GridDisplay = withStyles(() => ({
  root: {
    width: '100%',
    display: 'block',
    margin: '10px 0',
    fontSize: '1rem',
    '& .Mui-disabled': {
      color: GRAY,
    },
    '& .MuiInputBase-input': {
      color: GRAY,
    },
  },
}))(TextField)

export const GridInput = withStyles(() => ({
  root: {
    width: '40%',
    margin: '10px 10px',
    fontSize: '1rem',
    '& label': {
      color: GRAY,
    },
    '& label.Mui-focused': {
      color: WHITE,
    },
    '& input:valid + fieldset': {
      borderColor: GRAY,
      borderWidth: 1,
    },
    '& input:invalid + fieldset': {
      borderColor: RED,
      borderWidth: 1,
    },
    '& input:valid:focus + fieldset': {
      borderColor: WHITE,
    },
    '& .MuiOutlinedInput-input': {
      color: WHITE,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: RED,
      },
      '&:hover fieldset': {
        borderColor: WHITE,
      },
    },
  },
}))(TextField)
