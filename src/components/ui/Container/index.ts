import styled from 'styled-components'
import type { ContainerType } from './containerType'

const styledProps: string[] = ['direction']

export const Container = styled.div.withConfig({
  shouldForwardProp: (props) => !styledProps.includes(props),
})<ContainerType>`
  display: flex;
  flex-direction: ${({ direction = 'column' }) => direction};
  gap: 10px;
  color: ${({ theme }) => theme.colorText};
  justify-content: center;
  align-items: center;
`
