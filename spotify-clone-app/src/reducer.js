export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  discover_weekly: null,
  item: null,
  top_artists: null,
  playing: false,
  // token: "BQBNJnDM0VfwU6kFEFZfUWc7JCUY_TPlZiwAOC4B8Sw-QCpYE_ZCJIZ3bVqDbIc7DsybTrr8nrwgD4o1vrlaO_YT73Fc16_EXeT74Z0j4uiVc_gj-R54O0TCK4PV_bTwdJx-l8ic6Ueu9F7ienXKIin-84uYw88"
  token: null
}

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      }

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly
      }

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    default:
      return state;
  }
}

export default reducer;
