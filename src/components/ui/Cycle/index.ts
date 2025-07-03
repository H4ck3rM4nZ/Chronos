import styled from 'styled-components'
import type { CycleType } from './cycleType'

export const Cycle = styled.div<CycleType>`
  padding: 10px;
  background-color: ${({ color }) => color};
  border-radius: 100%;
`
