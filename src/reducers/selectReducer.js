export default (state = null, action) => {
    switch (action.type) {
      case 'SELECT_RESTAURANT':
        return action.payload;
      default:
        return state;
    }
  };