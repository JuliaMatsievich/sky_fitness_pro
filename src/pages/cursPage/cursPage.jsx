import { useEffect, useState } from 'react'
import { Curs } from '../../components/curs/curs'
import { Header } from '../../components/header/header'
import { CURS_PAGE } from '../../constants/pagesСonst'
import './cursPage.css'
import { useNavigate } from 'react-router-dom'

export const CursPage = () => {
  return (
      <div className="curs__container-body">
          <div>
          <Header namePage={CURS_PAGE} />
          <div className="wrapper">
            <Curs />
          </div>
          </div>
      </div>
    )
}
