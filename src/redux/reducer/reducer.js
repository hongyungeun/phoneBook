const initialState = {
  contactList :[],
  keyword:'',

}

const reducer =(state = initialState,action) =>{
  let {type,payload}= action
  switch (type) {
    case 'ADD_CONTACT':
      state.contactList.push({
        name: payload.name,
        phoneNum: payload.phoneNum,
      });
      break;
      case 'SEARCH': state.keyword = payload.keyword;
      break;
    }
    return {...state};
};

export default reducer
