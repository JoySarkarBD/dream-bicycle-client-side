import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import AdminRoute from "../Login/AdminRoute/AdminRoute"
import AddAProduct from "../AddAProduct/AddAProduct"
import ManageAllOrders from "../ManageAllOreders/ManageAllOrders"
import MyOrders from "../MyOrders/MyOrders"
import UserReview from "../UserReview/UserReview"
import AddAnAdmin from "../AddAnAdmin/AddAnAdmin"
import ManageProducts from "../ManageProducts/ManageProducts"
import Pay from "../Pay/Pay"
import Navigation from "../../Pages/Shared/Navigation/Navigation"

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const { logout, admin } = useAuth();
    return (
        <div>
            <Navigation></Navigation>
            <div className="container mt-5">
                <div className="row gx-5">
                    <div className="col-md-3 mt-5 border-end border-secondary text-start">
                        <h1 className="mb-5">Dashboard</h1>
                        {!admin && <>
                            <Nav.Link as={NavLink} to={`${url}/myOrders`}><a className="text-dark fs-5 text-decoration-none" href="/">My Orders</a></Nav.Link>
                            <Nav.Link as={NavLink} to={`${url}/userReview`}><a className="text-dark fs-5 text-decoration-none" href="/">Review</a></Nav.Link>
                            <Nav.Link as={NavLink} to={`${url}/pay`}><a className="text-dark fs-5 text-decoration-none" href="/">Pay</a></Nav.Link>
                            <Nav.Link as={NavLink} to="/" onClick={logout}><Button variant="secondary" className="btn btn-secondary">Logout</Button></Nav.Link>
                        </>}

                        {admin &&
                            <>
                                <Nav.Link as={NavLink} to={`${url}/manageAllOrders`}><a className="text-dark fs-5 text-decoration-none" href="/">Manage All Orders</a></Nav.Link>
                                <Nav.Link as={NavLink} to={`${url}/manageProducts`}><a className="text-dark fs-5 text-decoration-none" href="/">Manage Products</a></Nav.Link>
                                <Nav.Link as={NavLink} to={`${url}/addAnAdmin`}><a className="text-dark fs-5 text-decoration-none" href="/">Add An Admin</a></Nav.Link>
                                <Nav.Link as={NavLink} to={`${url}/addAProduct`}><a className="text-dark fs-5 text-decoration-none" href="/">Add A Product</a></Nav.Link>
                                <Nav.Link as={NavLink} to="/" onClick={logout}><Button variant="secondary" className="btn btn-secondary">Logout</Button></Nav.Link>
                            </>}
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            {!admin &&
                                <Route exact path={path}>
                                    <MyOrders></MyOrders>
                                </Route>
                            }
                            {!admin &&
                                <>
                                    <Route exact path={`${path}/myOrders`}>
                                        <MyOrders></MyOrders>
                                    </Route>

                                    <Route exact path={`${path}/userReview`}>
                                        <UserReview></UserReview>
                                    </Route>

                                    <Route exact path={`${path}/pay`}>
                                        <Pay></Pay>
                                    </Route>
                                </>}

                            {admin &&
                                <AdminRoute exact path={`${path}`}>
                                    <ManageAllOrders></ManageAllOrders>
                                </AdminRoute>
                            }
                            {admin &&
                                <>
                                    <AdminRoute exact path={`${path}/addAProduct`}>
                                        <AddAProduct></AddAProduct>
                                    </AdminRoute>

                                    <AdminRoute exact path={`${path}/manageAllOrders`}>
                                        <ManageAllOrders></ManageAllOrders>
                                    </AdminRoute>

                                    <AdminRoute exact path={`${path}/addAnAdmin`}>
                                        <AddAnAdmin></AddAnAdmin>
                                    </AdminRoute>

                                    <AdminRoute exact path={`${path}/manageProducts`}>
                                        <ManageProducts></ManageProducts>
                                    </AdminRoute>
                                </>}
                        </Switch>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DashBoard;