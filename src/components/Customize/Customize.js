import React, { Component } from 'react';
import './Customize.css';

class Customization extends Component {
    render() {
        return (
            <div id="loginModal" className="modal fade" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Login</h3>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label className="sr-only" htmlFor="loginEmail">Email address</label>
                                            <input type="email" className="form-control form-control-sm my-2" id="loginEmail"
                                                placeholder="Enter email" />
                                        </div>
                                        <div className="form-group col-12">
                                            <label className="sr-only" htmlFor="loginPassword">Password</label>
                                            <input type="password" className="form-control form-control-sm my-2" id="loginPassword"
                                                placeholder="Password" />
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" />
                                                <label className="form-check-label"> Remember me</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <button type="submit" className="btn btn-primary btn-sm ml-1 mt-4">Sign in</button>
                                        <button type="button" className="btn btn-secondary btn-sm ml-auto mt-4"
                                            data-dismiss="modal">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Customization;
