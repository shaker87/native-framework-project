import React, {useEffect, useState} from 'react';
import {View, TouchableWithoutFeedback, Image} from 'react-native';

// third party imports

import {useDispatch, useSelector} from 'react-redux';

// local imports
import SearchBar from '../../../components/SearchBar/SearchBar';
import Posts from '../components/Posts/Posts';
import Post from '../components/Posts/Post/Post';
import FullViewModal from '../../../components/modal/FullViewModal';
import SearchPage from '../../../components/SearchPage/SearchPage';

// redux
import {getPosts, searchPost} from '../store/action/postActions';

const PostsScreen = props => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const {searchedPosts, postCount} = useSelector(state => state.post);

  // const searchHandler = () => {
  //   props.navigation.navigate('searchPage', {routeName: 'post'});
  // };

  const toggleModal = () => {
    setVisible(preState => !preState);
  };

  const _srhInputHandler = value => {
    dispatch(searchPost(value));
  };

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      dispatch(getPosts());
    });
  }, [postCount]);
  return (
    <View style={{flex: 1, marginTop: 20, paddingHorizontal: 10}}>
      <FullViewModal toggleModal={toggleModal} isModalVisible={visible}>
        <SearchPage
          data={searchedPosts}
          RenderItem={Post}
          backNavigateHandler={toggleModal}
          srhInputHandler={_srhInputHandler}
        />
      </FullViewModal>
      <View style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View>
            <SearchBar placeholder="search post" />
          </View>
        </TouchableWithoutFeedback>
        <Posts />
      </View>
    </View>
  );
};

export default PostsScreen;
