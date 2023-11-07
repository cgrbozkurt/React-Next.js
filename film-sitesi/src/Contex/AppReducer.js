export default (state, action) => {
    switch (action.type) {
      case "ADD_TO_WATCHLIST":
        return {
          ...state,
          watchList: [...state.watchList, action.payload],
        };
      case "REMOVE_FROM_WATCHLIST":
        return {
          ...state,
          watchList: state.watchList.filter((item) => item.id !== action.payload),
        };
      case "ADD_TO_WATCHED":
        return {
          ...state,
          watched: [...state.watched, action.payload],
        };
      case "REMOVE_FROM_WATCHED":
        return {
          ...state,
          watched: state.watched.filter((item) => item.id !== action.payload),
        };
      default:
        return state;
    }
  };
  