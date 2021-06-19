import React, {useState} from 'react';

import {View, TouchableOpacity, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {getFormattedCurrentDate} from '../../Util/DateConfigure';
import {default as s} from '../../Master/styles/GlobalStyles';
import DateTimePicker from 'react-native-modal-datetime-picker';

const SimpleDatePicker = props => {
  const {onChangeInputValue, mode, level, iconSize, isLevelShow, value} = props;
  const pickerMode =
    typeof mode === 'undefined' || mode === null ? 'date' : mode;
  const levelText =
    typeof level === 'undefined' || level === null ? 'Date *' : level;
  const iconSizeNo =
    typeof iconSize === 'undefined' || iconSize === null ? 20 : iconSize;
  const isLevelShowValue =
    typeof isLevelShow === 'undefined' || isLevelShow === null
      ? true
      : isLevelShow;
  const dateValue =
    typeof value === 'undefined' || value === null
      ? getFormattedCurrentDate()
      : value;

  const [date, setDate] = useState(dateValue);
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);

  const handleDatePicked = date => {
    let dateTime = '';
    if (mode === 'date') {
      let year = date.getFullYear();
      let dateNow = date.getDate();
      let month = parseInt(date.getMonth() + 1);
      const monthString = month < 10 ? '0' + month : month;
      dateTime = year + '-' + monthString + '-' + dateNow;
    } else {
      let hours = date.getHours();
      let miniutes = date.getMinutes();
      dateTime = hours + ':' + miniutes + ':' + '00';
    }
    setIsDateTimePickerVisible(false);
    setDate(dateTime);
    onChangeInputValue(dateTime);
  };

  const showDateTimePicker = () => {
    setIsDateTimePickerVisible(true);
  };

  const hideDateTimePicker = () => {
    setIsDateTimePickerVisible(false);
  };

  return (
    <>
      <View>
        {isLevelShowValue && <Text style={[s.textMd]}> {levelText} </Text>}

        <TouchableOpacity onPress={showDateTimePicker}>
          <View
            style={[
              s.textInputStyle,
              s.rowDirection,
              {marginLeft: 0, marginRight: 0},
            ]}>
            <View style={[s.flexBasis90]}>
              <Text>{date}</Text>
            </View>
            <View style={[s.flexBasis10, s.ml10]}>
              <Text>
                {' '}
                {/* <Icon name={mode === 'date' ? 'calendar' : ''} size={iconSizeNo} /> */}
              </Text>
            </View>
            <Text
              title="Show DatePicker"
              onPress={showDateTimePicker}
              //   style={{ marginBottom: -15 }}
            />
            <DateTimePicker
              isVisible={isDateTimePickerVisible}
              onConfirm={handleDatePicked}
              onCancel={hideDateTimePicker}
              datePickerModeAndroid={'spinner'}
              mode={pickerMode}
            />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SimpleDatePicker;
