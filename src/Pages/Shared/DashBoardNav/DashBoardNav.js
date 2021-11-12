import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const DashBoardNav = () => {
    const { user, logout, admin } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
                <Container>
                    <Navbar.Brand as={Link} to="/dashBoard">Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto d-flex justify-content-center align-items-center">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            {!admin && < Nav.Link as={NavLink} to="/myOrders">My Orders</Nav.Link>}
                            {!admin && <Nav.Link as={NavLink} to="/userReview">Review</Nav.Link>}
                            {!admin && <Nav.Link as={NavLink} to="/pay">Pay</Nav.Link>}
                            {admin &&
                                <>
                                    <Nav.Link as={NavLink} to="/manageAllOrders">Manage All Orders</Nav.Link>
                                    <Nav.Link as={NavLink} to="/manageProducts">Manage Products</Nav.Link>
                                    <Nav.Link as={NavLink} to="/addAnAdmin">Add An Admin</Nav.Link>
                                    <Nav.Link as={NavLink} to="/addAProduct">Add A Product</Nav.Link>
                                </>}

                            <Navbar.Text>
                                User: <a href="/" aria-disabled>{user?.displayName}</a>
                            </Navbar.Text>
                            <Nav.Link as={NavLink} to="/" onClick={logout}><Button variant="secondary" className="btn btn-secondary">Logout</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default DashBoardNav;