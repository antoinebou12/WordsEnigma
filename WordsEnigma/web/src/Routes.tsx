// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import LanguagesLayout from 'src/layouts/LanguagesLayout'
import WordsBanksLayout from 'src/layouts/WordsBanksLayout'
import WordsLayout from 'src/layouts/WordsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={LanguagesLayout}>
        <Route path="/languages/new" page={LanguageNewLanguagePage} name="newLanguage" />
        <Route path="/languages/{id:Int}/edit" page={LanguageEditLanguagePage} name="editLanguage" />
        <Route path="/languages/{id:Int}" page={LanguageLanguagePage} name="language" />
        <Route path="/languages" page={LanguageLanguagesPage} name="languages" />
      </Set>
      <Set wrap={WordsBanksLayout}>
        <Route path="/words-banks/new" page={WordsBankNewWordsBankPage} name="newWordsBank" />
        <Route path="/words-banks/{id:Int}/edit" page={WordsBankEditWordsBankPage} name="editWordsBank" />
        <Route path="/words-banks/{id:Int}" page={WordsBankWordsBankPage} name="wordsBank" />
        <Route path="/words-banks" page={WordsBankWordsBanksPage} name="wordsBanks" />
      </Set>
      <Set wrap={WordsLayout}>
        <Route path="/words/new" page={WordNewWordPage} name="newWord" />
        <Route path="/words/{id:Int}/edit" page={WordEditWordPage} name="editWord" />
        <Route path="/words/{id:Int}" page={WordWordPage} name="word" />
        <Route path="/words" page={WordWordsPage} name="words" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path="/" page={HomePage} name="home" />
      <Route path="/motdujour" page={MotduJourPage} name="motdujour" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
