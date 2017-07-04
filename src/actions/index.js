import axios from 'axios';
import types from '../action_types';

const markTodo = todoId => ({
  type: types.MARK_TODO,
  payload: todoId,
});

const onTodoSubmit = (todoName, playerId) => ({
  type: types.CREATE_TODO,
  payload: { todoName, playerId },
});

const onSettingsSubmit = (formObj = []) => ({
  type: types.ADD_PLAYERS,
  payload: formObj,
});

const onDelete = todoId => ({
  type: types.DELETE_TODO,
  payload: todoId,
});

const markCell = cellId => ({
  type: types.MARK_CELL,
  payload: cellId,
});

const lookupData = () => dispatch => {
  const headers = {
    'X-App-Key': '35ff1aa179aaf801df03bb2e7e095b290ab7c07c793cd939278effc7678aaa3a',
    'X-Platform': 'web',
    'Content-Type': 'application/json',
    'X-Access-Token': '7F6FFAA6BB0B408017B62254211691B51498738321|iSH16879157|',
  };

  const data = {
    fieldset:
      '{"officenumbers","domains","blockip","google_cities","misspelt_emaildomains","rog_blocked_countries","rog_unblocked_ip","rog_unblocked_ip_count","rog_blocked_phone_numbers","rog_blocked_phone_numbers_count","location_count","location","fields","ethnicity","city_coordinates","astro_cities","employers","colleges","mother_tongue"}',
  };

  const authOptions = {
    method: 'GET',
    url: 'http://ww4.shaadi.com/api/lookup/fields-options',
    data,
    headers,
    json: true,
  };

  const request = axios(authOptions);

  // const request = axios(authOptions).then(response => {
  //   const payload = {
  //     data: [response.data.data.partner_preference],
  //   };

  //   return{
  //     type: types.LOOKUP,
  //     payload: payload,
  //   }
  // }).catch(error => console.log(error));

  return {
    type: types.LOOKUP,
    payload: request,
  };
};

export { markTodo, onTodoSubmit, onSettingsSubmit, onDelete, markCell, lookupData };
