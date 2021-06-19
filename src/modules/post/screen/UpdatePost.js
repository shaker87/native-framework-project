import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Keyboard} from 'react-native';

// third party imports
import {Input} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import {Formik, Form, Field, ErrorMessage, FieldArray} from 'formik';
import * as Yup from 'yup';

// local imports
import BlueInput from '../../../components/input/BlueInput';
import {
  formSubmit,
  updatePost,
  setInputVal,
  resetForm,
} from '../store/action/postActions';
import TextError from '../../demoValidation/screen/TextError';

const AddPost = props => {
  const [viewFocused, setViewFocused] = useState(false);
  const {post} = useSelector(state => state.post);
  const dispatch = useDispatch();

  props.navigation.addListener('focus', () => {
    setViewFocused(true);
  });

  props.navigation.addListener('blur', () => {
    setViewFocused(false);
  });

  const {form: initialForm} = useSelector(state => state.post);

  //yup validataion schema
  const validationSchema = Yup.object({
    strProgramTypeName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    ysnActive: Yup.string().required('Required'),
  });

  //from validation action
  const onSubmit = (values, onSubmitProps) => {
    Keyboard.dismiss();

    dispatch(updatePost(values, post.intProgramTypeId));

    onSubmitProps.resetForm();
    dispatch(resetForm());
    props.navigation.navigate('post');
  };

  return (
    <Formik
      initialValues={initialForm}
      onSubmit={onSubmit}
      enableReinitialize
      validationSchema={validationSchema}>
      {props => {
        const {values, handleSubmit, isValid, handleBlur, handleChange} = props;

        // const {strProgramTypeName, ysnActive} = values;

        useEffect(() => {
          dispatch(setInputVal(values));
        }, [values]);

        return (
          <View style={styles.screen}>
            <View style={styles.header}>
              <Text style={styles.headerTxt}>Update Post</Text>
            </View>
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <View style={styles.inputNameContainer}>
                  <Text style={styles.inputName}>Program Name</Text>
                </View>
                <View style={styles.input}>
                  <BlueInput
                    name="strProgramTypeName"
                    value={values.strProgramTypeName}
                    onChangeText={handleChange('strProgramTypeName')}
                    onBlur={handleBlur('strProgramTypeName')}
                  />
                  <ErrorMessage
                    name="strProgramTypeName"
                    component={TextError}></ErrorMessage>
                </View>
              </View>
              <View style={styles.inputContainer}>
                <View style={styles.inputNameContainer}>
                  <Text style={styles.inputName}>Status</Text>
                </View>
                <View style={styles.input}>
                  <BlueInput
                    name="ysnActive"
                    value={values.ysnActive}
                    onChangeText={handleChange('ysnActive')}
                    onBlur={handleBlur('ysnActive')}
                  />
                  <ErrorMessage
                    name="ysnActive"
                    component={TextError}></ErrorMessage>
                </View>
              </View>
              <View>
                <Button
                  title="Submit"
                  disabled={!(values.strProgramTypeName && isValid)}
                  onPress={handleSubmit}
                />
              </View>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: wp('2%'),
  },
  header: {
    alignItems: 'center',
    marginBottom: wp('4%'),
  },
  headerTxt: {
    fontSize: 30,
    color: '#8e44ad',
    fontWeight: 'bold',
  },
  formContainer: {},
  inputContainer: {},
  inputNameContainer: {},
  inputName: {
    fontSize: RFPercentage(3),
  },
  input: {},
});

export default AddPost;
