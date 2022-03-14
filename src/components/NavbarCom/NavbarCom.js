import React, {useContext} from 'react';
import styled from 'styled-components'
import {Context} from "../../Context";
import {Nav, Navbar, Container, FormControl, Form} from "react-bootstrap";
import img from "../../image/header_logo.png"
import myData from "../../data";

const NavbarCom = () => {
    const {cardArray, setArray} = useContext(Context)
    const searchByName = (e) => {
        const name = e.target.value
        const newarray = myData.filter(el => {
            return el.title.toLowerCase().includes(name.toLowerCase())
        })
        setArray(newarray)
    }
    return <NavbarStyle>
        <div className="container">
            <div className="nav d-flex justify-content-between">


                <img className="w-25" src={img} alt=""/>


                <div className="d-flex black  ">
                    <Nav.Link href="/sign">LOG IN </Nav.Link>
                    |
                    <Nav.Link href="/signup">   SIGN UP</Nav.Link>
                    {/*<Link to="/card">*/}
                    {/*    <FontAwesomeIcon size="1x" icon={faShoppingCart}/>*/}
                    {/*    {*/}
                    {/*        <sub>{cardArray.length}</sub>*/}
                    {/*    }*/}
                    {/*</Link>*/}
                </div>

            </div>
            <Navbar className="second" expand="lg">
                <Container className="third" fluid>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex ">
                            <FormControl onKeyUp={searchByName} id="search" type="search" placeholder="What Are You Looking for?" className="me-2 search " aria-label="Search"/>
                        </Form>
                        <Nav className="me-auto my-2 my-lg-0 fourth" style={{maxHeight: '100px'}} navbarScroll>
                            <Nav.Link className='as' href="/news">NEWS</Nav.Link>
                            <Nav.Link className='as' href="/look">LOOKBOOK</Nav.Link>
                            <Nav.Link className='as' href="/caraousel">EYEWEAR</Nav.Link>
                            <Nav.Link className='as' href="/bathing"> MR. BATHING APE®</Nav.Link>
                            <Nav.Link className='as' href="/products">WEB STORE</Nav.Link>
                            <Nav.Link className='as' href="/sign">REGISTRATE</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>


    </NavbarStyle>

};

const NavbarStyle = styled.div`
  width: 100%;
  min-height: 80px;
  top: 0;
  left: 0;
  background-color: white;

  .container {
    width: 100%;
    margin: auto;

    .second {
      width: 100%;
      margin: auto;
      min-width: 350px;

      .third {
        margin: auto;
        width: 100%;

        .search {
          width: 200px;
          background: white;
          border: 1px solid black;
          outline: none;
          color: black;
          height: 26px;

          ::placeholder {
            font-size: 13px;
            color: black;
            opacity: 0.8;
          }
        }

        .fourth {
          display: flex;
          justify-content: space-between;

          .as {
            font-size: 15px;
            text-decoration: none;
            color: black;
            font-weight: 350;
          }

          .as:hover {
            border-bottom: 1px solid black;
          }
        }
      }
    }

    .nav {
      display: flex;
      min-height: 80px;
      align-items: center;
      justify-content: space-between;
      color: black;

      .jpg {

        img {
          margin-left: 5px;
          width: 25px;
          height: 25px;
        }
      }

      h1 {
        font-size: 40px;
        position: relative;
      }

      .black {
        padding-top: 5px;
        justify-content: center;
        align-items: center;

        p {
          color: black;
          text-decoration: none;
          font-size: 13px;
        }

        a {
          color: black;
          text-decoration: none;
          font-size: 13px;
          margin-left: 5px;
        }
      }

      ul {
        display: flex;
        justify-content: space-between;

        li {
          list-style: none;
          padding: 5px;

          p {
            font-size: 15px;
          }

        }

        li:last-child {
          padding-right: 0;
        }

      }

    }

  }

`
export default NavbarCom;