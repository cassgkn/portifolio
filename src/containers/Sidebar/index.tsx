import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

const SiderBar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Anderson Casimiro</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        cassgkn
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Dev. Full Stack Java
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default SiderBar
