import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Olá seja muito bem vindo ao meu perfil! Sou um entusiasta de tecnologia
      com uma paixão pelo desenvolvimento de sistemas, uma mente sempre aberta
      para aprender, adaptar e trabalho em equipe para aumento da sinergia com
      foco nos resultados. Atualmente, estou cursando Desenvolvimento Full Stack
      Java na EBAC - Escola Britânica de Artes Criativas e Tecnologia, enquanto
      também tenho uma formação acadêmica como Bacharel em Engenharia de
      Produção pela Faculdade Anhanguera. Além disso, minha jornada inclui uma
      Formação Técnica em Programador de Software Full Stack e App pelo Senac.
      Sou atualmente líder de produção de smartphones envolvendo gestão de
      pessoas e processos tecnológicos avançados. Estou sempre comprometido com
      o aprendizado contínuo e a busca incessante por novos desafios.
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=cassgkn&show_icons=true&theme=dracula&include_all_commits=true&count_private=true%22%20/%3E" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=cassgkn&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre
