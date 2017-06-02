export const artistLoaded = (artists) => (dispatch) => {
  dispatch({ type: 'search_done', artists });
};


export const selectSearch = () => ({
  type: 'select_search'
});

export const selectFavorites = () => ({
  type: 'select_favorites'
});
