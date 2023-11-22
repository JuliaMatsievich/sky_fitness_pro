import { Curs } from '../../components/curs/curs'
import { Header } from '../../components/header/header'
import { CURS_PAGE } from '../../constants/pagesСonst'
import './cursPage.css'
import { useParams } from 'react-router-dom'


export const CursPage = () => {

  const params = useParams()
  const cursId = params.id

  return (
    <div className="curs__container-body">
      <Header namePage={CURS_PAGE} />
      <div className="wrapper">
        <Curs cursId={cursId} />
      </div>
    </div>
  )
}
