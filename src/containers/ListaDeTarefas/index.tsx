import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver módulo 31 da EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar Academia',
    descricao: 'Até 29/09',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Ir para faculdade',
    descricao: 'Prova de Sistema Distribuido',
    prioridade: 'importante',
    status: 'concluído'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
