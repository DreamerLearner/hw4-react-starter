
import axios from 'axios';
import types from '../action_types';

const markTodo = todoId => {
  return{
    type: types.MARK_TODO,
    payload: todoId
  }
}

const onTodoSubmit = (todoName,playerId) => {
	return{
		type : types.CREATE_TODO,
		payload : {todoName,playerId}
	}
}

const onSettingsSubmit = (formObj = []) => {
  return{
    type: types.ADD_PLAYERS,
    payload: formObj
  }
}

const onDelete = todoId => {
  return{
    type: types.DELETE_TODO,
    payload: todoId
  }
}

const markCell = cellId => {
  return{
    type: types.MARK_CELL,
    payload: cellId,
  }
}

const lookupData = () => (dispatch) => {

  const headers = { 'X-App-Key': '35ff1aa179aaf801df03bb2e7e095b290ab7c07c793cd939278effc7678aaa3a',
                    'X-Platform':'web',
                    'Content-Type':'application/json',
                    'X-Access-Token':'7BA15E3F075E78D4D10235AAF3B15FF81498727659|iSH16879157|'};

  const data = { 'fieldset' : '{"officenumbers","domains","blockip","google_cities","misspelt_emaildomains","rog_blocked_countries","rog_unblocked_ip","rog_unblocked_ip_count","rog_blocked_phone_numbers","rog_blocked_phone_numbers_count","location_count","location","fields","ethnicity","city_coordinates","astro_cities","employers","colleges","mother_tongue"}'}

  var authOptions = {
    method: 'GET',
    url: 'http://ww4.shaadi.com/api/lookup/fields-options',
    data: data,
    headers: headers,
    json: true
  };

  const request = axios(authOptions);
  
  // axios(authOptions).then(response => {
  //   const payload = {
  //     data: [response.data.data.partner_preference],
  //   };

  //   console.log('PAYLOAD',payload);
  //   return{
  //     type: types.LOOKUP,
  //     payload: payload,
  //   }
  // });


  return{
    type: types.LOOKUP,
    // payload: request,
  }
  
  
}

export {
  markTodo,
  onTodoSubmit,
  onSettingsSubmit,
  onDelete,
  markCell,
  lookupData
};
