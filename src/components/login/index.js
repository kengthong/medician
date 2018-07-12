import React from 'react';
import { View, Text } from 'react-native';
import { Body, Button , Card, CardItem, Container, Content, Form, Item, Label, Input, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles.js';

class LoginComponent extends React.Component{
    render() {

        const { fieldsFilled, loading } = this.state;

        return (
           <Container style={styles.loginWrapper}>
                <Content contentContainerStyle={styles.contentWrapper}>
                    <View style={styles.contentContainer}>
                        <View style={styles.logoStyle}>
                            <View style={styles.logoRow}>
                                <Text
                                    style={{fontSize: 26}}>
                                    Medician
                                </Text>
                            </View>
                            <View style={styles.logoRow}>
                                <Text
                                    style={{fontSize: 16, opacity: 0.85}}>
                                    Log in
                                </Text>
                            </View>
                            
                        </View>

                        <Card style={styles.cardContainer}>
                            <CardItem>
                                <Body>
                                    <Form bordered style={styles.formContainer}>
                                        <Item 
                                            floatingLabel 
                                            // onFocus={() => }
                                            style={styles.formItem}>
                                            <Label style={styles.inputLabel} >Username</Label>
                                            <Input  
                                                onChange={(e) => this.handleInputChange(e)}
                                                name="username"
                                                bordered  style={styles.input}/>
                                        </Item>
                                        
                                        <Item floatingLabel style={styles.formItem}>
                                            <Label style={styles.inputLabel} >Password</Label>
                                            <Input 
                                                secureTextEntry={true}
                                                onChange={(e) => this.handleInputChange(e)}
                                                name="password"
                                                style={styles.input} bordered />
                                        </Item>

                                        <Button 
                                            disabled={fieldsFilled}
                                            style={styles.loginButton}
                                            onPress={() => this.handleLogIn()}>
                                            <View>
                                                { loading?
                                                    <Spinner color='blue' />
                                                :
                                                    <Text style={{fontSize: 16}}>
                                                        Log in
                                                    </Text>
                                                }
                                                
                                            </View>
                                        </Button>
                                    </Form>
                                </Body>
                            </CardItem>
                        </Card>

                    </View>
                </Content>
           </Container>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            fieldsFilled: false,
            form: {},
            loading: false
        }
    }

    handleInputChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })

        if(this.state.form.username && this.state.form.password) {
            this.setState({
                fieldsFilled: true
            })
        } else {
            this.setState({
                fieldsFilled: false
            })
        }
    }

    handleLogIn = () => {
        this.setState({
            loading: true
        })

        setTimeout(() => {
            this.setState({
                loading: false
            })
            Actions.pop()
            // Actions.mainScreen();
        }, 1000)

        
    }
}

export default LoginComponent;