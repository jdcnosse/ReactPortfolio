import { useState } from 'react';
import { Navbar, NavbarToggler, Nav, NavItem, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='dark' expand='md'>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='mx-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg' /> About Us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa fa-address-card fa-lg' /> Contact Us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/request'>
                            <i className='fa fa-comment fa-lg' /> Request an Issue
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Navigation;