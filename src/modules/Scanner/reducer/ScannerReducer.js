import * as Types from '../types/type';

// Initial state
const initialState = {
  scannedItem: '',
  scannedItemStatus: '',
};

const ScannerReducer = (state = initialState, action) => {
  const cloneState = {...state};
  switch (action.type) {
    case Types.SCANNER_INPUT_CHANGE:
      return {
        ...state,
        scannedItem: action.payload.inputValue,
      };
    case Types.SCANNED_ITEM:
      return {
        ...state,
        scannedItem: action.payload,
        scannedItemStatus: '1',
      };

    case Types.CLEAR_SCANNED_ITEM_STATUS:
      return {
        ...state,
        scannedItemStatus: '',
      };
    default:
      break;
  }
  return cloneState;
};

export default ScannerReducer;
