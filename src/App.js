import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Actions, ActionConst, Modal, Router, Scene, Stack } from 'react-native-router-flux';

import store from './store.js';

/* SCREENS */
import ActiveSessionScreen from './screens/session-screen.js';
import LoginScreen from './screens/login-screen';
import MainScreen from './screens/main';
import PatientProfileScreen from './screens/patient-profile-screen.js';




export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Modal>
            <Stack key="root">
              
              <Scene key="mainScreen"
                component={MainScreen}
                initial
                // title="Main Screen"
                />

                {/* <Text> hi</Text> */}
              <Scene key="patientProfile"
                component={PatientProfileScreen}
                />

              {/* <Scene key="activeSession"
              // modal
              component={ActiveSessionScreen}
              /> */}
              

              {/*

              <Scene key="consultation"
                component={ConsultationScreen}
                />

              <Scene key="login"
                component={LoginScreen}
                // initial
                /> */}

            </Stack>

            <Scene key="login"
                component={LoginScreen}
                />
            <Scene key="activeSession"
                // modal
                component={ActiveSessionScreen}
                />
          </Modal>
        </Router>

      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
