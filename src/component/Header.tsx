import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export const Header = (): JSX.Element => {
  console.log(process.env.REACT_APP_API_BASE_URL);

  return (
    <header>
      <Link
        to="/"
        className="logo-text"
      >
        掲示板
      </Link>
      <Link to="/thread/new" className="link">
        スレッドをたてる
      </Link>
    </header>
  )
}

export default Header
