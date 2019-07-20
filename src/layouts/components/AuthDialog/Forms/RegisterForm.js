import React, {Component} from 'react';
import {Button, InputAdornment, withStyles} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PasswordIcon from '@material-ui/icons/VpnKey';
import NameIcon from '@material-ui/icons/Person';
import {TextFieldFormsy} from '../../../../components/Formsy';
import Formsy from 'formsy-react';
import styles from './styles';
import { connect } from 'react-redux';
import { registerEmailChanged, registerPasswordChanged, registerNameChanged, requestRegister } from '../../../../store/actions/auth';

class RegisterForm extends Component {

    form = React.createRef();

    emailChanged = e => this.props.emailChanged(e.target.value);

    passwordChanged = e => this.props.passwordChanged(e.target.value);

    nameChanged = e => this.props.nameChanged(e.target.value);

    render() {

        const {
            email,
            password,
            name,
            error,
            isLoading,
            register,
        } = this.props;        

        return (
            <div className="w-full flex flex-row justify-center">
                <Formsy
                    onValidSubmit={this.onSubmit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    ref={(form) => this.form = form}
                    className="bg-white shadow-md rounded px-8 pt-6 mt-6 pb-8 mb-4"
                    id="registerForm"
                >
                    {error && <div className="text-danger text-center">{error.message || error.code}</div>}
                    <TextFieldFormsy
                        className="w-full mb-4"
                        type="text"
                        name="name"
                        label="Name"
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><NameIcon className="text-20" color="action"/></InputAdornment>
                        }}
                        variant="outlined"
                        onChange={this.nameChanged}
                        value={name}
                        helperText=''
                        required
                    />

                    <TextFieldFormsy
                        className="w-full mb-4"
                        type="text"
                        name="email"
                        label="Email"
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><EmailIcon className="text-20" color="action"/></InputAdornment>
                        }}
                        onChange={this.emailChanged}
                        value={email}
                        variant="outlined"
                        helperText=''
                        required
                    />

                    <TextFieldFormsy
                        className="w-full mb-4"
                        type="password"
                        name="password"
                        label="Password"
                        value={password}
                        onChange={this.passwordChanged}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><PasswordIcon className="text-20"
                                                                                       color="action"/></InputAdornment>
                        }}
                        variant="outlined"
                        helperText=''
                        required
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="w-full mx-auto normal-case"
                        aria-label="LOG IN"
                        onClick={register}
                        disabled={isLoading}
                        value="legacy"
                        id="btnFormRegister"
                    >
                        Register
                    </Button>

                </Formsy>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    email: state.auth.register.email,
    password: state.auth.register.password,
    name: state.auth.register.name,
    error: state.auth.register.error,
    isLoading: state.auth.register.isLoading,
})

const mapDispatchToProps = dispatch => ({
    emailChanged: email => dispatch(registerEmailChanged(email)),
    passwordChanged: password => dispatch(registerPasswordChanged(password)),
    nameChanged: name => dispatch(registerNameChanged(name)),
    register: () => dispatch(requestRegister()),
})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RegisterForm));
