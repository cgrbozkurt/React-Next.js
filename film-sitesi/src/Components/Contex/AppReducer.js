export default (state, action) => {
    switch (action.type) {
      case "ADD_TO_WATCHLIST":
        return {
          ...state,
          watchlist: [...state.watchlist, action.payload],
        };
      case "REMOVE_FROM_WATCHLIST":
        return {
          ...state,
          watchlist: state.watchlist.filter((item) => item.id !== action.payload),
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
  