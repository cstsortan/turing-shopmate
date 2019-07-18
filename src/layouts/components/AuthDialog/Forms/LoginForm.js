import React, { Component } from 'react';
import { Button, InputAdornment, withStyles } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PasswordIcon from '@material-ui/icons/VpnKey';
import { TextFieldFormsy } from '../../../../components/Formsy';
import Formsy from 'formsy-react';
import styles from './styles';
import './styles.css';
import { connect } from 'react-redux';
import { requestSignin, signinEmailChanged, signinPasswordChanged } from '../../../../store/actions/auth/signin.action';

class LoginForm extends Component {

    form = React.createRef();

    render() {

        const {
            email,
            password,
            isLoggingIn,
            error,
            isLoggedIn,
            login,
            emailChanged,
            passwordChanged
        } = this.props;

        return (
            <div className="w-full flex flex-row justify-center">
                <Formsy
                    ref={(form) => this.form = form}
                    className="bg-white shadow-md rounded px-8 pt-6 mt-6 pb-8 mb-4"
                    id="signInForm"
                >
                    <TextFieldFormsy
                        className="w-full mb-4"
                        type="text"
                        name="email"
                        label="Email"
                        value={email}
                        onChange={e => emailChanged(e.target.value)}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><EmailIcon className="text-20" color="action" /></InputAdornment>
                        }}
                        variant="outlined"
                        helperText=''
                        required
                    />

                    <TextFieldFormsy
                        className="w-full mb-4"
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => passwordChanged(e.target.value)}
                        label="Password"
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><PasswordIcon className="text-20"
                                color="action" /></InputAdornment>
                        }}
                        variant="outlined"
                        helperText=''
                        required
                    />

                    <div className="buttonsHolder">
                        <Button
                            disabled={isLoggingIn}
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="w-full logInBtn"
                            aria-label="LOG IN"
                            value="legacy"
                            onClick={() => login(email, password)}
                            id="btnFormSignIn"
                        >
                            Log In
                      </Button>

                        <div>- or -</div>

                        <div className="socialButtonsHolder">
                            <div>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    className="w-full btnFacebook"
                                    aria-label="LOG IN"
                                    value="legacy"
                                >
                                    Login with Facebook
                          </Button>
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    className="w-full btnGoogle"
                                    aria-label="LOG IN"
                                    value="legacy"
                                    id="btnGoogle"
                                >
                                    Login with Google
                          </Button>
                            </div>
                        </div>
                    </div>

                </Formsy>
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        email: auth.signin.email,
        password: auth.signin.password,
        isLoggingIn: auth.signin.isLoggingIn,
        error: auth.signin.error,
        isLoggedIn: auth.signin.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(requestSignin({ email, password })),
        emailChanged: email => dispatch(signinEmailChanged(email)),
        passwordChanged: password => dispatch(signinPasswordChanged(password)),
    }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
