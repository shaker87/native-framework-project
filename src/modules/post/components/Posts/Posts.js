import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight,
  FlatList,
  TouchableOpacity,
} from 'react-native';

// third party imports
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SwipeListView} from 'react-native-swipe-list-view';

// local imports
import Post from './Post/Post';
import {
  getSinglePost,
  refreshPosts,
  deletePost,
} from '../../store/action/postActions';

const Posts = props => {
  const {posts, refresh} = useSelector(state => state.post);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const addPostNavigateHandler = () => {
    navigation.navigate('addPost', {action: 'createPost'});
  };

  const postHandler = post => {
    dispatch(getSinglePost(post));
    navigation.navigate('selectedPost');
  };

  const _refreshProducts = () => {
    dispatch(refreshPosts());
  };

  const deleteHandler = intProgramTypeId => {
    dispatch(deletePost(intProgramTypeId));
  };

  const _renderItem = ({item}) => (
    <TouchableHighlight
      key={item.intProgramTypeId}
      style={styles.rowFront}
      underlayColor={'#dfdfdf'}
      onPress={postHandler.bind(this, item)}>
      <Post
        intProgramTypeId={item.intProgramTypeId}
        dteCreatedAt={item.dteCreatedAt}
        strProgramTypeName={item.strProgramTypeName}
      />
    </TouchableHighlight>
  );

  const _renderHiddenItem = (rowData, rowMap) => {
    return (
      <View style={styles.rowBack}>
        <View
          style={{
            height: '100%', 
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => rowMap[rowData.item.intProgramTypeId].closeRow()}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableWithoutFeedback
            onPress={deleteHandler.bind(this, rowData.item.intProgramTypeId)}>
            <AntDesign name="delete" size={32} color="#e2f" />
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTxt}>Posts</Text>
        </View>
        <TouchableWithoutFeedback onPress={addPostNavigateHandler}>
          <View>
            <AntDesign name="pluscircleo" size={30} color="#8e44ad" />
          </View>
        </TouchableWithoutFeedback>
      </View>
      {/* always you need a listContainer wrapper for FlatList to work scroll function properly  */}
      <View style={styles.listContainer}>
        <SwipeListView
          useFlatList={true}
          data={posts}
          renderItem={_renderItem}
          renderHiddenItem={_renderHiddenItem}
          keyExtractor={item => item.intProgramTypeId}
          leftOpenValue={75}
          rightOpenValue={-75}
          contentContainerStyle={styles.list}
          onEndReachedThreshold={0.5}
          refreshing={refresh}
          onRefresh={_refreshProducts}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: wh('2%'),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: RFPercentage(5),
    fontWeight: 'bold',
    color: '#8e44ad',
  },
  listContainer: {
    flex: 1,
  },
  list: {
    flexGrow: 1,
  },
  rowFront: {
    padding: 5,
    backgroundColor: '#dfdfdf',
    justifyContent: 'center',
    marginBottom: 10,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginBottom: 10,
    paddingHorizontal: 15,
  },

  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
});

export default Posts;
