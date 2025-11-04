import React from 'react'
import { NotFoundBlock } from '../../components/not-found-block'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'

const NotFoundPage: React.FC = () => {
  return (
    <>
      <div className="content__wrapper">
        <Header />

        <main>
          <NotFoundBlock />;
        </main>
      </div>

      <Footer />
    </>
  )
}

export default NotFoundPage
