import styled from 'styled-components'
import { Button, Typography, CardMedia, withStyles } from '@material-ui/core'
import { WHITE, RED, GRAY } from '../../../constants/colors'

export const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
`
export const BackNavButton = withStyles(() => ({
  root: {
    backgroundColor: RED,
    color: WHITE,
    width: '90%',
    margin: '10px 5%',
    fontSize: '1rem',
    border: `1px solid ${RED}`,
  },
}))(Button)

export const Badge = withStyles(() => ({
  root: {
    color: WHITE,
    width: '200px',
    height: '150px',
    margin: '10px auto',
  },
}))(CardMedia)

export const Title = withStyles(() => ({
  root: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: '900',
    color: GRAY,
  },
}))(Typography)
