import React from 'react';
import {View, Text} from 'react-native';

// third party import
import {RFPercentage} from 'react-native-responsive-fontsize';

// local import

function Post(props) {
  const {dteCreatedAt, strProgramTypeName, intProgramTypeId, style} = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'center',
        padding: 5,
        width: '100%',
      }}>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#aaa',
          borderRadius: 50,
          marginRight: 20,
        }}></View>
      <View>
        <Text style={{fontSize: RFPercentage(3)}}>
          {strProgramTypeName.slice(0, 29)}
          {strProgramTypeName.length > 29 ? '...' : ''}
        </Text>
        <View>{dteCreatedAt && <Text>Created At {dteCreatedAt}</Text>}</View>
      </View>
    </View>
  );
}

export default Post;
