import { Curs } from '../../components/curs/curs'
import { Header } from '../../components/header/header'
import { CURS_PAGE } from '../../constants/pagesСonst'
import './cursPage.css'

export const CursPage = () => {
  return (
      <div className="curs__container-body">
        <div className="wrapper">
          <Header namePage={CURS_PAGE} />
          <Curs />
        </div>
      </div>
  )
}
