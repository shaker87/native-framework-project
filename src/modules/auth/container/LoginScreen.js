/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect, useRef} from 'react';
 import {StyleSheet, Image, View, Text,} from 'react-native';
 import {Container, Content, Spinner} from 'native-base';
 
 import {default as s} from '../../../styles/GlobalStyles';
 import {RFPercentage} from 'react-native-responsive-fontsize';
 import BlueInput from '../../../components/input/BlueInput';
 import {useDispatch, useSelector} from 'react-redux';
 import {
   inputAddHandling,
   loginAction,
   superUserLogin,
 } from '../actions/AuthAction';
 import AsyncStorage from '@react-native-community/async-storage';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import {
   TouchableOpacity,
   TouchableWithoutFeedback,
 } from 'react-native-gesture-handler';
 import BlueSpinerButton from '../../../components/spinner/BlueSpinerButton';
 
 const LoginScreen = props => {
   const [value, setValue] = React.useState('');
   const [langValue, setlangValue] = React.useState(false);
   const [secureTextEntry, setSecureTextEntry] = React.useState(true);
   const [securedText, setSecuredText] = React.useState(true);
 
   const dispatch = useDispatch();
   const loginState = useSelector(state => state.login);
 
   // const lang = useSelector(state => state.lang.lang);
 
   // const authState = useSelector((state) => state.auth);
   // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
 
   const inputData = useSelector(state => state.login.inputData);
   const handleInputChange = (inputName, inputValue) => {
     dispatch(inputAddHandling(inputName, inputValue));
   };
 
   // useFocusEffect(
   //   React.useCallback(() => {
   //     const unsubscribe = dispatch(loginAction(inputData));
   //     // Do something when the screen is focused
   //     return () => {
   //       alert('Screen was unfocused');
   //       // Do something when the screen is unfocused
   //       // Useful for cleanup functions
   //       return unsubscribe;
   //     };
   //   }, []),
   // );
 
   const handleSubmit = async () => {
     dispatch(superUserLogin(inputData));
   };
 
   useEffect(() => {
     if (loginState.status && loginState.isLogin) {
       setAuthData();
       props.navigation.navigate('home');
      
     }
   }, [loginState, langValue]);
 
   const setAuthData = async () => {
     AsyncStorage.setItem('is_log_in',JSON.stringify(true));
   };
 
   // const toggleSecureEntry = () => {
   //   setSecureTextEntry(!secureTextEntry);
   // };
   const renderIcon = props => (
     <TouchableWithoutFeedback onPress={toggleSecureEntry}>
       <Icon
         name={secureTextEntry ? 'eye-slash' : 'eye'}
         size={22}
         color="#878787"
       />
     </TouchableWithoutFeedback>
   );
   const passwordSecured = () => {
     setSecuredText(!securedText);
   };
 
   return (
     <Container style={{backgroundColor: '#EEF9FF'}}>
       {/* <Header></Header> */}
 
       <View style={{paddingBottom: 20}}>
         <Text
           style={[
             s.textBoldLg,
             {
               marginTop: 50,
               textAlign: 'center',
               textTransform: 'uppercase',
               color: '#1877F2',
               fontSize: RFPercentage(4.5),
               marginBottom: 30,
             },
           ]}>
           Crazy-Pos
         </Text>
         <Text
           style={[
             s.textDark,
             s.textBoldX2,
             s.textCenter,
 
             {fontSize: RFPercentage(4)},
           ]}>
           Sign In
         </Text>
       </View>
       <Content style={[s.ml15, s.mr15]}>
         {/* <View>
            <Text style={{paddingBottom: 5, color: '#8E8E93'}}>
              Email Address
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#C7C7CC',
                borderRadius: 6,
                marginBottom: 10,
              }}>
              <Item>
                <Input style={{borderBottomWidth: 0}} />
                <Icon name="checkmark" style={{color: '#4CD964'}} />
              </Item>
            </View>
          </View> */}
         <View style={[s.bgbox,s.mb20]}>
           <View>
             {loginState.status && loginState.message.length > 0 && (
               <Text style={[styles.loginMessage]}>{loginState.message}</Text>
             )}
 
             {!loginState.status && loginState.message.length > 0 && (
               <Text style={[styles.loginErrorMessage]}>
                 {loginState.message}
               </Text>
             )}
           </View>
           <BlueInput
             borderstyle={styles.borderStyleInput}
             label="Email Address"
             name="username"
             onChangeText={value => handleInputChange('username', value)}
             value={inputData.username}
             returnKeyType={'next'}
             onSubmitEditing={() => refPasswordInput.current.focus()}
           />
           <BlueInput
             borderstyle={styles.borderStyleInput}
             icon="eye"
             label="Password"
             value={inputData.password}
             name="password"
             accessoryRight={renderIcon}
             secureTextEntry={securedText}
             onEyeChange={passwordSecured}
             returnKeyType={'go'}
             onChangeText={value => handleInputChange('password', value)}
           />
           <TouchableWithoutFeedback onPress={() => props.navigation.navigate('forgotPassword')} >
             <View
               style={{
                 justifyContent: 'flex-end',
                 alignItems: 'flex-end',
                 alignContent: 'flex-end',
               }}>
               <Text
                 style={[
                 
                   s.mb20,
                   {color: '#8E8E93'},
                 ]}>
                 Forgot Password
               </Text>
             </View>
           </TouchableWithoutFeedback>
      
          
 
           <TouchableOpacity onPress={() => handleSubmit()}>
             {!loginState.isLoading && (
               <View 
                 style={[s.button,
                   s.mt20,
                   {borderRadius: 6, backgroundColor: '#0A84FF', opacity: 1000},
                 ]}>
                 <Text style={[s.textLg,s.textWhite,s.textCenter, {textTransform: 'capitalize'}]}>
                   Log In
                 </Text>
               </View>
             )}
             {loginState.isLoading && loginState.message.length === 0 && (
               
               <View>
               {/* <View
                 style={[s.flexBasis40]}>
                 <Text style={[s.textLg,s.textWhite, {textTransform: 'capitalize',textAlign:"right"}]}>
                   Log In  
          
                 </Text>
                
               </View> */}
               {/* <View style={[s.ml5]}>
               <Spinner color='white'/>
               </View> */}
               <BlueSpinerButton title="Login"/>
               </View>
             )}
           </TouchableOpacity>
         </View>
        
         {/* <View
           style={[
             s.mt10,
             s.rowDirection,
             {justifyContent: 'center'},
           ]}>
           <Image source={faceidImg} />
           <Text style={{color: '#000000',marginLeft:10}}>Use Face ID</Text>
         </View> */}
         {/* <View style={[s.rowDirection]}>
           <View style={[s.flexBasis40]}>
             <Text style={[s.borderBottom, s.ml20]}></Text>
           </View>
           <View style={[s.flexBasis20]}>
             <Text style={[s.textCenter, s.mt10, {color: '#8E8E93'}]}>OR</Text>
           </View>
 
           <View style={[s.flexBasis40]}>
             <Text style={[s.borderBottom, {marginRight: 20}]}></Text>
           </View>
         </View> */}
         {/* <TouchableOpacity
           onPress={() => props.navigation.navigate('signup')}>
           <View
             
             style={[
             s.button,s.mt20,
               {borderRadius: 6, backgroundColor: '#0A84FF13'},
             ]}>
             <Text
               style={[
                 s.textLg,s.textCenter,
                 {textTransform: 'capitalize', color: '#007AFF'},
               ]}>
               Create New Account
             </Text>
           </View>
         </TouchableOpacity> */}
       </Content>
     </Container>
   );
 };
 const styles = StyleSheet.create({
   borderStyleInput: {
     borderWidth: 1,
     borderColor: '#C7C7CC',
     borderRadius: 6,
     marginBottom: 10,
   },
 
   loginMessage: {
     marginTop: 5,
     marginBottom: 10,
     textAlign: 'center',
     padding: 10,
     borderRadius: 10,
     borderWidth: 1,
     borderColor: '#6ED899',
     fontSize: RFPercentage(2.6),
     color: '#44CA7B',
   },
   loginErrorMessage: {
     marginTop: 5,
     marginBottom: 10,
     textAlign: 'center',
     padding: 10,
     borderRadius: 10,
     borderWidth: 1,
     borderColor: '#F47E43',
     fontSize: RFPercentage(2.6),
     color: 'red',
   },
 });
 
 export default LoginScreen;
 