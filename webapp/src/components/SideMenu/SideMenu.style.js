import styled from 'styled-components'
import { Button, Typography, CardMedia, withStyles } from '@material-ui/core'
import { BLUE, WHITE, RED, MAIN_GRADIENT } from '../../constants/colors'

export const ButtonPrimary = withStyles(() => ({
  root: {
    backgroundColor: BLUE,
    color: WHITE,
    width: '90%',
    margin: '10px 5%',
    fontSize: '1rem',
    border: `1px solid ${BLUE}`,
  },
}))(Button)

export const ButtonSecondary = withStyles(() => ({
  root: {
    backgroundColor: RED,
    color: WHITE,
    width: '90%',
    margin: '10px 5%',
    fontSize: '1rem',
    border: `1px solid ${RED}`,
  },
}))(Button)

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px;
  display: grid;
  grid-template-rows: 170px 100px auto 60px 60px;
  border-left: 3px solid ${BLUE};
  background: ${MAIN_GRADIENT};
`

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
    color: WHITE,
  },
}))(Typography)
