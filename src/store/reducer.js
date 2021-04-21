export const initialSate = {
    images: [],
    isLoading: true,
    term: ''
};

const reducer = (state, action) => {
    switch (action.type) {
      case "SET_IMAGES":
        return {
          ...state,
          images: action.images,
        };

      // 
      case "SET_LOADING":
        return {
          ...state,
          isLoading: action.isLoading,
        };
      
      // 
      case "SET_TERM":
        return {
          ...state,
          term: action.term,
        };

      default:
        return state;
    }
};

export default reducer;