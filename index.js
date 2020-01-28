/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import login from './screens/login'
import Register from './screens/Register'
import {name as appName} from './app.json';
import LoginNumber from './screens/loginNumber';
import OTP from './screens/OTPsreen';

AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => login);
//AppRegistry.registerComponent(appName, () => Register);
//AppRegistry.registerComponent(appName, () => LoginNumber);
//AppRegistry.registerComponent(appName, () => OTP);
