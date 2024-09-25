import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

// Define the type for the state of the application

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      1,
      'Estudar Python',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      ''
    ),
    new Tarefa(
      2,
      'Pagar Academia',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Pagar até dia 29/09'
    ),
    new Tarefa(
      3,
      'Estudar a biblioteca do React',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      ''
    ),
    new Tarefa(
      4,
      'Estudar para prova de Cloud Computing',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Estudar conceitos de SaaS, PaaS e IaaS - Estudar sobre virtualização - Estudar sobre a origem da Cloud e sua funcionalidade'
    ),
    new Tarefa(
      5,
      'Ir para faculdade',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      'Para fazer prova'
    ),
    new Tarefa(
      6,
      'Estudar conceitos do Redux',
      enums.Prioridade.IMPORTANTE,
      enums.Status.EM_ANDAMENTO,
      ''
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
