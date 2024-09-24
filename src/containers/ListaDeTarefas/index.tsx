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
    prioridade: 'urgente',
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
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
            descricao={t.descricao}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
