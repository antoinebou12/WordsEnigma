import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MotDuJourPhilPage = () => {
  return (
    <>
      <MetaTags title="MotDuJourPhil" description="MotDuJourPhil page" />

      <h1>MotDuJourPhilPage</h1>
      <p>
        Find me in <code>./web/src/pages/MotDuJourPhilPage/MotDuJourPhilPage.tsx</code>
      </p>
      <p>
        My default route is named <code>motDuJourPhil</code>, link to me with `
        <Link to={routes.motDuJourPhil()}>MotDuJourPhil</Link>`
      </p>
    </>
  )
}

export default MotDuJourPhilPage
