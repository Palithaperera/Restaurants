export default (state = [], action) => {
    switch (action.type) {
      case 'FILTER_RESTAURANTS':
        return action.payload;
      default:
        return state;
    }
  };