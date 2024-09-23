import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={4} />
        <FiltroCard legenda="concluídas" contador={0} />
        <FiltroCard legenda="urgentes" contador={1} />
        <FiltroCard legenda="importantes" contador={2} />
        <FiltroCard legenda="normal" contador={5} />
        <FiltroCard legenda="todas" contador={12} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
