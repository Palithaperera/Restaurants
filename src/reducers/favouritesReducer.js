export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_FAVOURITES':
        return action.payload;
      case 'ADD_TO_FAVOURITES':
        return action.payload;
      default:
        return state;
    }
  };