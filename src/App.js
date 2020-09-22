import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Actions, ActionConst, Lightbox, Modal, Router, Scene, Stack } from 'react-native-router-flux';

import store from './store.js';

/* SCREENS */
import ActiveSessionScreen from './screens/session-screen.js';
import ConsultationRecordScreen from './screens/consultation-record-screen';
import LoginScreen from './screens/login-screen';
import MainScreen from './screens/main';
import PatientOptions from './screens/patient-options';
import PatientProfileScreen from './screens/patient-profile-screen';

// import PatientProfileScreen from './screens/patient-profile-screen.js';




export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router showNavigationBar={false}>
          <Modal>
            <Lightbox>
              <Stack key="root">
                
                <Scene key="login"
                    component={LoginScreen}
                    hideNavBar={true}
                    // initial
                    />

                <Scene key="mainScreen"
                  hideNavBar={1} 
                  component={MainScreen}
                  initial 
                  // title="Main Screen"
                  />

                {/* <Modal>
                  <Scene key="activeSession"
                    // modal
                    hideNavBar={1} 
                    component={ActiveSessionScreen}
                    />
                </Modal> */}
              </Stack>

              <Scene key="patientOptions"
                  hideNavBar={1}
                  component={PatientOptions}
                  />

            </Lightbox>
            <Scene key="activeSession"
                // modal
                hideNavBar={1} 
                component={ActiveSessionScreen}
                />

            <Scene key="patientProfile"
              hideNavBar
              component={PatientProfileScreen}
              />

            <Scene key="consultationRecord"
              hideNavBar  
              component={ConsultationRecordScreen}
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
