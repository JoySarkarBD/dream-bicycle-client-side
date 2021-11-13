import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import AdminRoute from "../Login/AdminRoute/AdminRoute"
import PrivateRoute from "../Login/PrivateRoute/PrivateRoute"
import AddAProduct from "../AddAProduct/AddAProduct"
import ManageAllOrders from "../ManageAllOreders/ManageAllOrders"
import MyOrders from "../MyOrders/MyOrders"
import UserReview from "../UserReview/UserReview"
import AddAnAdmin from "../AddAnAdmin/AddAnAdmin"
import ManageProducts from "../ManageProducts/ManageProducts"
import Pay from "../Pay/Pay"
import DashBoardHome from './DashBoardHome/DashBoardHome';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const { user, logout, admin } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Dream-Cycle</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto d-flex justify-content-center align-items-center">
                            <Nav.Link as={NavLink} to={`${url}`}>Dashboard</Nav.Link>
                            {!admin && <Nav.Link as={NavLink} to={`${url}/myOrders`}>My Orders</Nav.Link>}
                            {!admin && <Nav.Link as={NavLink} to={`${url}/userReview`}>Review</Nav.Link>}
                            {!admin && <Nav.Link as={NavLink} to={`${url}/pay`}>Pay</Nav.Link>}
                            {admin &&
                                <>
                                    <Nav.Link as={NavLink} to={`${url}/manageAllOrders`}>Manage All Orders</Nav.Link>
                                    <Nav.Link as={NavLink} to={`${url}/manageProducts`}>Manage Products</Nav.Link>
                                    <Nav.Link as={NavLink} to={`${url}/addAnAdmin`}>Add An Admin</Nav.Link>
                                    <Nav.Link as={NavLink} to={`${url}/addAProduct`}>Add A Product</Nav.Link>
                                </>}

                            <Navbar.Text>
                                User: <a href="/" aria-disabled>{user?.displayName}</a>
                            </Navbar.Text>
                            <Nav.Link as={NavLink} to="/" onClick={logout}><Button variant="secondary" className="btn btn-secondary">Logout</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>

                <Route exact path={path}>
                    <DashBoardHome></DashBoardHome>
                </Route>

                <AdminRoute exact path={`${path}/addAProduct`}>
                    <AddAProduct></AddAProduct>
                </AdminRoute>

                <AdminRoute exact path={`${path}/manageAllOrders`}>
                    <ManageAllOrders></ManageAllOrders>
                </AdminRoute>

                <PrivateRoute exact path={`${path}/myOrders`}>
                    <MyOrders></MyOrders>
                </PrivateRoute>

                <PrivateRoute exact path={`${path}/userReview`}>
                    <UserReview></UserReview>
                </PrivateRoute>

                <AdminRoute exact path={`${path}/addAnAdmin`}>
                    <AddAnAdmin></AddAnAdmin>
                </AdminRoute>

                <AdminRoute exact path={`${path}/manageProducts`}>
                    <ManageProducts></ManageProducts>
                </AdminRoute>

                <PrivateRoute exact path={`${path}/pay`}>
                    <Pay></Pay>
                </PrivateRoute>
            </Switch>
        </div >
    );
};

export default DashBoard;