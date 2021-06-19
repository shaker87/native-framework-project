//core import
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';

//third party import
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import {Formik, Form, Field, ErrorMessage, FieldArray} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';
//local import
import Checkbox from '../../../components/Checkbox';
import TextError from './TextError';
import {addInputData, submitData} from '../action/validationAction';

const ValidationScreen = props => {
  const dropdownOptions = [
    {label: 'Select an option', value: ''},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
  ];
  const dispatch = useDispatch();

  //from validation action
  const {inputData} = useSelector(state => state.validation);

  //yup validataion schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6).max(8).required(),
    firstValue: Yup.number().integer().required('Required'),
    secondValue: Yup.number().integer().required('Required'),
    selectOption: Yup.string().required('Required'),
    termsCondition: Yup.boolean().oneOf(
      [true],
      'You must accept the terms and conditions',
    ),
  });

  //from validation action
  const onSubmit = (values, onSubmitProps) => {
    console.log(`values`, values);
    dispatch(submitData(values));
    onSubmitProps.resetForm();
    //props.navigation.navigate('post');
  };
  const [isSelected, setSelection] = useState(false);

  return (
    <Formik
      initialValues={inputData}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {props => {
        const {
          values,
          handleSubmit,
          touched,
          isValid,
          errors,
          handleBlur,
          handleChange,
          enableReinitialize,
          setFieldValue,
        } = props;

        const fValue =
          values.firstValue > 0 ? parseInt(values.firstValue) : null;
        const sValue =
          values.secondValue > 0 ? parseInt(values.secondValue) : null;
        let sum = fValue + sValue;

        useEffect(() => {
          values.sum = sum;
          dispatch(addInputData(values));
        }, [values]);

        return (
          <ScrollView>
            <View
              style={{
                paddingHorizontal: wp('4%'),
                paddingVertical: wh('4%'),
                backgroundColor: '#ecf0f1',
              }}>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20, color: 'purple'}}>Sign up</Text>
              </View>
              <View style={{marginBottom: 15}}>
                <Text>Name</Text>
                <TextInput
                  name="name"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  style={{borderWidth: 1, padding: 5}}
                  placeholder="Enter name"
                />

                <ErrorMessage name="name" component={TextError}></ErrorMessage>
              </View>
              <View style={{marginBottom: 15}}>
                <Text>Email</Text>
                <TextInput
                  name="email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  style={{borderWidth: 1, padding: 5}}
                  placeholder="Enter email"
                />
                <ErrorMessage name="email" component={TextError}></ErrorMessage>
              </View>
              <View style={{marginBottom: 15}}>
                <Text>Password</Text>
                <TextInput
                  name="password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  style={{borderWidth: 1, padding: 5}}
                  placeholder="Enter password"
                />
                <ErrorMessage
                  name="password"
                  component={TextError}></ErrorMessage>
              </View>

              <View style={{marginBottom: 15}}>
                <Text>Enter First Value</Text>
                <TextInput
                  name="firstValue"
                  value={values.firstValue}
                  onChangeText={handleChange('firstValue')}
                  onBlur={handleBlur('firstValue')}
                  style={{borderWidth: 1, padding: 5}}
                  placeholder="Enter first value"
                />
                <ErrorMessage
                  name="firstValue"
                  component={TextError}></ErrorMessage>
              </View>
              <View style={{marginBottom: 25}}>
                <Text>Enter Second Value</Text>
                <TextInput
                  name="secondValue"
                  value={values.secondValue}
                  onChangeText={handleChange('secondValue')}
                  onBlur={handleBlur('secondValue')}
                  style={{borderWidth: 1, padding: 5}}
                  placeholder="Enter second value"
                />
                <ErrorMessage
                  name="secondValue"
                  component={TextError}></ErrorMessage>
              </View>
              <View>
                <Text>Select Option</Text>
                <Picker
                  name="selectOption"
                  mode="dropdown"
                  selectedValue={values.selectOption}
                  onValueChange={handleChange('selectOption')}>
                  {dropdownOptions.map((item, index) => {
                    return (
                      <Picker.Item
                        key={index}
                        label={item.label}
                        value={item.value}
                      />
                    );
                  })}
                </Picker>
                <ErrorMessage
                  name="selectOption"
                  component={TextError}></ErrorMessage>
              </View>

              <View>
                <Text>Terms and Condition</Text>
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    value={values.termsCondition}
                    onValueChange={nextValue =>
                      setFieldValue('termsCondition', nextValue)
                    }></Checkbox>
                  <Text style={styles.label}>Yes</Text>
                </View>
                <ErrorMessage
                  name="termsCondition"
                  component={TextError}></ErrorMessage>
              </View>
              <Button
                style={{marginTop: '10', backgroundColor: 'red'}}
                onPress={handleSubmit}
                //disabled={!(values.name && isValid)}
                title="submit"></Button>

              <View>
                <Text>{sum ? sum : 0}</Text>
              </View>
            </View>
          </ScrollView>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default ValidationScreen;
