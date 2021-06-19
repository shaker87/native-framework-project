import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

// third party imports
import {Card} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

// local imports

// redux

const PostScreen = props => {
  const {post} = useSelector(state => state.post);
  const dispatch = useDispatch();

  const navigateHandler = () => {
    // props.navigation.navigate('addPost', {action: 'updatePost'});
    props.navigation.navigate('updatePost');
  };

  return (
    <View style={{padding: 20}}>
      <Card>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {post && (
            <View>
              <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 20}}>{post.strProgramTypeName}</Text>
              </View>
              <Text>{post.dteCreatedAt}</Text>
            </View>
          )}
          <View>
            <TouchableWithoutFeedback onPress={navigateHandler}>
              <AntDesign name="edit" size={32} color="#ccc" />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({});
