import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "./style.css"
import Bio from "./bio"

const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 15px;
`
const Logo = styled.div`
  * {
    border: 0;
    color: blue;
  }
`

const Main = styled.main`
  margin: 0 0 100px 0;
`

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-size: 10px;
  border: 0;
  text-transform: uppercase;

  .col {
    * {
      display: block;
    }
  }

  .col-disclaimer {
    * {
      border: 0;
    }
  }
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Logo>
          <h1 className="lead">
            <Link to={`/`}>{title}</Link>
          </h1>
        </Logo>
      )
    } else {
      header = (
        <Logo>
          <h3>
            <Link to={`/`}>{title}</Link>
          </h3>
        </Logo>
      )
    }
    return (
      <Wrapper>
        <header>{header}</header>

        <Main>{children}</Main>
        <Footer>
          <div className="col">
            Luis Ferreira
            <br />
            Creative technologist <br />
            Mustertraat 22
            <br />
            83756 Eindhoven
          </div>

          <div className="col">
            Linkedin
            <br />
            Github
            <br />
            Facebook
          </div>

          <div className="col col-disclaimer">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Disclaimer</Link>
          </div>
        </Footer>
      </Wrapper>
    )
  }
}

export default Layout
