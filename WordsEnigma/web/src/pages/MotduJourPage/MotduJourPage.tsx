import { Link, routes } from '@redwoodjs/router';
import { MetaTags, } from '@redwoodjs/web';
import { Header } from './components/Header';
import { Rules } from './components/Rules';
import { Keyboard } from './components/Keyboard';
import './MotduJourPage.css'

const MotdujourPage = () => {
  return (
    <>
      <MetaTags title="Mot du Jour !" description="Mot du Jour !" />
      <Header />
      <Rules />
      <Keyboard />
    </>
  )
}

export default MotdujourPage;
