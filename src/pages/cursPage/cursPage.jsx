import { useEffect, useState } from 'react'
import { Curs } from '../../components/curs/curs'
import { Header } from '../../components/header/header'
import { CURS_PAGE } from '../../constants/pagesСonst'
import './cursPage.css'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


export const CursPage = () => {
  const push = useNavigate();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('userName')) {
      setVisible(true);
    } else {
      push('/auth');
    }
  }, [])

  const params = useParams()
  const cursId = params.id

  return (
    <div className="curs__container-body">
        {visible && (
          <div>
        <Header namePage={CURS_PAGE} />
        <div className="wrapper">
          <Curs cursId={cursId} />
        </div>
          </div>
        )}
    </div>
    )
}
