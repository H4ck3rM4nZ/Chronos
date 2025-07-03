import styled from 'styled-components'
import type { buttonType } from './buttonType'

export const Button = styled.button<buttonType>`
  background-color: ${({ theme }) => theme.colorSuccess};
  padding: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width = 'auto' }) => width};
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.7);
  }
`
