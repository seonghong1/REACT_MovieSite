import React from 'react'
import { Button, Navbar, Nav, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { BiPlusMedical } from 'react-icons/bi';
import { RiMovie2Fill } from 'react-icons/ri';
import { IoMdDesktop } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';





const Navigation = () => {
    return (
        <Navbar className='navbar' expand="lg" >
            <Container fluid>
                <Navbar.Brand className='logo'>
                    <Link to="/">
                        <img src={'/img/logo.png'} alt="" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" ><FiMenu className='m_menu_open'/></Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll" className='m_menu'>
                    <Nav
                        className="me-auto my-2 my-lg-0 nav_link_wrap"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Link className="nav_link" to="/"><AiFillHome className='nav_link_icon' />HOME</Link>
                        <Link className="nav_link" to="/movies"><BiPlusMedical className='nav_link_icon' />WATCHLIST</Link>
                        <Link className="nav_link" to="#"><AiFillStar className='nav_link_icon' />ORIGINALS</Link>
                        <Link className="nav_link" to="#"><RiMovie2Fill className='nav_link_icon' />MOVIES</Link>
                        <Link className="nav_link" to="#"><IoMdDesktop className='nav_link_icon' />SERIES</Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation