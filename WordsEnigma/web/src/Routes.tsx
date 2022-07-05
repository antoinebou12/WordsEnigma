// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'
import UsersLayout from 'src/layouts/UsersLayout'
import WordsLayout from 'src/layouts/WordsLayout'
import GamesLayout from 'src/layouts/GamesLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Private unauthenticated="home" roles="admin">
        <Set wrap={WordsLayout} unauthenticated="home">
          <Route path="/admin/words/new" page={WordNewWordPage} name="newWord" />
          <Route path="/admin/words/{id:Int}/edit" page={WordEditWordPage} name="editWord" />
          <Route path="/admin/words/{id:Int}" page={WordWordPage} name="word" />
          <Route path="/admin/words" page={WordWordsPage} name="words" />
        </Set>
        <Set wrap={GamesLayout} unauthenticated="home">
          <Route path="/admin/games/new" page={GameNewGamePage} name="newGame" />
          <Route path="/admin/games/{id:Int}/edit" page={GameEditGamePage} name="editGame" />
          <Route path="/admin/games/{id:Int}" page={GameGamePage} name="game" />
          <Route path="/admin/games" page={GameGamesPage} name="games" />
        </Set>
      </Private>

      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

      <Route path="/" page={HomePage} name="home" />
      <Route path="/motdujour" page={MotduJourPage} name="motdujour" />
      <Route path="/phil" page={MotDuJourPhilPage} name="motDuJourPhil" />
      <Route notfound page={NotFoundPage} />

    </Router>
  )
}

export default Routes
