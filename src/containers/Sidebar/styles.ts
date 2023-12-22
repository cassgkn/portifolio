import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'
import Titulo from '../../components/Titulo'

export const Descricao = styled(P)`
  margin-top: 14px;
  margin-bottom: 14px;
  font-weight: 900;
`
export const BotaoTema = styled.button`
  border: none;
  border-radius: 12px;
  padding: 10px 18px;
  color: #fff;
  font-size: 10px;
  font-weigth: bold;
  background-color: #282a35;
  cursor: pointer;
`
export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
