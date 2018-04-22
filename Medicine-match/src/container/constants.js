import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TextField } from 'material-ui';
import appReducer from '../Redux/App/App-reducer';
import { addUserRequest } from '../Redux/App/App-actions';

class App extends React.Component {
    // constructor (props){
    //     super(props);
    //     this.state = {
    //         userData: {
    //             firstName: '',
    //             lastName: '',
    //             Age: null
    //         }
    //     }
    // }
    // handleChange = (event) => {
    //     const target = event.target;
    //     console.log('this is first', userData);
    //     const userData = { ...this.state.userData };
    //     console.log('this is second', userData);
    //     userData[target.name] = target.value;
    //     console.log('this is third', userData[target.name]);
    //     this.setState({ userData });
    // };
    // handleClick = () => {
    //     axios.post('http://localhost:3000/user', this.state.userData)
    //         .then((response) => {
    //             console.log('data', response);
    //         })
    //         .catch(function(error){
    //             console.log('error in api',error);
    //         })
    // };

    handleClick = () => {
        this.props.dispatch(addUserRequest());
    };
    render() {
        console.log('this is props', this.props.userData);
        const userData = this.props.userData.length > 0  ? this.props.userData : [];
        console.log('this is userData', userData);
        return (
            <div>
                <button className="btn btn-primary" onClick={this.handleClick}>Click Me</button>
                <div>
                    {userData.map((data) => {
                        return(
                            <div key={data.id}>
                                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
                                    <div>{data.firstName}</div>
                                    <div>{data.lastName}</div>
                                    <div>{data.Age}</div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
                <div>
                    <TextField
                        hintText="Enter First Name"
                        name="firstName"
                        onChange={this.handleChange}
                    />
                    <TextField
                        hintText="Enter Last Name"
                        name="lastName"
                        onChange={this.handleChange}
                    />
                    <TextField
                        hintText="Age"
                        name="Age"
                        type="number"
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}
App.propTypes = {
    dispatch: PropTypes.func,
    userData: PropTypes.array,
};

App.defaultProps = {
    dispatch: () => {},
    userData: [],
};
const mapStateToProps = state => ({
    userData: state.appReducer,
});
export default connect(mapStateToProps)(App);





import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TextField } from 'material-ui';
import appReducer from '../Redux/App/App-reducer';
import { addUserRequest } from '../Redux/App/App-actions';

class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            userData: {
                firstName: '',
                lastName: '',
                email: '',
                Age: null,
                companyId: null
            }
        }
    }
    handleChange = (event) => {
        const target = event.target;
        const userData = { ...this.state.userData };
        userData[target.name] = target.value;
        this.setState({ userData });
    };
    handleClick = () => {
        this.props.dispatch(addUserRequest(this.state.userData));
    };
    render() {
        console.log('this is props', this.props.userData);
        return (
            <div>
                <div>
                    <TextField
                        hintText="Enter First Name"
                        name="firstName"
                        onChange={this.handleChange}
                    />
                    <TextField
                        hintText="Enter Last Name"
                        name="lastName"
                        onChange={this.handleChange}
                    />
                    <TextField
                        hintText="Enter Email-id"
                        name="email"
                        type="email"
                        onChange={this.handleChange}
                    />
                    <TextField
                        hintText="Age"
                        name="Age"
                        type="number"
                        onChange={this.handleChange}
                    />
                    <TextField
                        hintText="Enter Company ID"
                        name="companyId"
                        type="number"
                        onChange={this.handleChange}
                    />
                </div>
                <button className="btn btn-primary" onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}
App.propTypes = {
    dispatch: PropTypes.func,
    userData: PropTypes.object,
};

App.defaultProps = {
    dispatch: () => {},
    userData: {},
};
const mapStateToProps = state => ({
    userData: state.appReducer,
});
export default connect(mapStateToProps)(App);
