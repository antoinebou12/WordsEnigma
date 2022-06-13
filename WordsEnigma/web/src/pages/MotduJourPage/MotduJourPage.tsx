import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

import Header from './subcomponents/Header/Header';
import Rules from "./subcomponents/Rules/Rules"
import Keyboard from './subcomponents/Keyboard/Keyboard';

const MotduJourPage = () => {
  return (
    <>
      <MetaTags title="Mot du Jour !" description="Mot du Jour !" />
      <Header title='Mot du Jour !' />
      <Rules />
      <Keyboard />
    </>
  )
}

export default MotduJourPage;
