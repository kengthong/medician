import React from 'react';
import { Keyboard, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Spinner } from 'native-base';
import debounce from 'debounce';


import { _postRequestLogin } from '../../services';
import styles from './styles';

class LoginComponent extends React.Component { 
    render() {

        const { passwordVisibility, details , disableLogin, errorLogin, loading } = this.state;

        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.mainWrapper}>
                    <View style={styles.headerWrapper}>
                        <Text style={styles.headerText}> 
                            Medician 
                        </Text>
                    </View>

                    <View style={styles.lCWrapper}>
                        {this.renderLoginFailedMsg()}
                        <View style={styles.lCUserNameInputContainer}>
                            <TextInput 
                                placeholder="Username"
                                autoCorrect={false}
                                autoCapitalize='none'
                                onChangeText={(e) => this.handleUserNameChange(e)}
                                style={styles.lCUserNameInput}
                                />
                        </View>
                        <View style={styles.lCPasswordInputContainer}>
                            <TextInput 
                                placeholder="Password"
                                autoCorrect={false}
                                autoCapitalize='none'
                                // value={details.password}
                                style={styles.lCPasswordInput}
                                onChangeText={(e) => this.handlePasswordChange(e)}
                                secureTextEntry={passwordVisibility}
                                />
                            <TouchableOpacity 
                                style={{width: '20%', justifyContent: 'center', alignItems: 'center'}}
                                onPress={() => this.togglePasswordVisibility()}>
                                <Text>Show</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.fPWrapper}>
                            <TouchableOpacity>
                                <Text style={{color: '#2983f3', fontSize: 13, fontWeight: '400'}}>
                                    Forgot your password?
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.loginButtonContainer}>
                            {this.renderLoginButton(styles)}
                        </View>
                    </View>

                    <View style={styles.registerWrapper}>
                        

                        <Text style={{fontWeight: '300'}}>
                            Don't have an account?
                        </Text>

                        <TouchableOpacity>
                            <Text style={{
                                color: '#2983f3', 
                                fontWeight: '300',
                                paddingLeft: 2
                                }}>
                                Sign up now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    renderLoginButton = (styles) => {
        let { disableLogin, loading } = this.state;
        if(disableLogin) {
            return (
                <TouchableOpacity
                    style={styles.disabledLoginButton}
                    disabled={true}
                    onPress={() => this.handleLogin()}>
                    <Text style={styles.loginText}> Login </Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => this.handleLogin()}>
                    {loading?
                        <Spinner color='blue' />
                        :
                        <Text style={styles.loginText}> Login </Text>
                    }
                </TouchableOpacity>
            )
        }
    }

    renderLoginFailedMsg = () => {
        if(this.state.errorLogin) {
            return (
                <View style={{width: '90%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 4}} >
                    <Text style={{color: 'red', fontSize: 12}} > Invalid Username or Password </Text>
                </View>
            )
        }
    }

    constructor(props){
        super(props);
        this.state = {
            passwordVisibility: true,
            details: {
                userName: '',
                password: ''
            },
            disableLogin: true,
            errorLogin: false,
            loading: false
        }

        this.handleUserNameChange = debounce(this.handleUserNameChange , 600);
        this.handlePasswordChange = debounce(this.handlePasswordChange , 600);
        
    }

    

    handleUserNameChange = ( text ) => {
        console.log("text  = ", text)
        this.setState({
            details: {
                ...this.state.details,
                userName: text
            }
        }, () => this.handleLoginState())
    }

    handleLogin = () => {
        let { details } = this.state;
        
        this.setState({
            loading: true
        })
        
        _postRequestLogin({ userName: details.userName, password: details.password})
        .then( res => {

            console.log("res.data = " , res.data)
            if(res.data.data == 0) {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        errorLogin: true
                    })
                }, 1000)
            } else {
                this.setState({loading: false})
                Keyboard.dismiss()
                Actions.replace('mainScreen', {})
            }
        })
        // Actions.mainScreen()

    }

    handleLoginState = () => {
        const { details, disableLogin } = this.state;
        if(details.password && details.userName && disableLogin) {
            this.setState({
                disableLogin: false
            })
        } else if ( (!details.password || !details.userName) && !disableLogin) {
            this.setState({
                disableLogin: true
            })
        }
    }

    handlePasswordChange = (text) => {
        this.setState({
            details: {
                ...this.state.details,
                password: text
            }
        }, () => this.handleLoginState())
        
    }

    togglePasswordVisibility = () => {
        this.setState({
            passwordVisibility: !this.state.passwordVisibility
        })
    }
}

export default LoginComponent;