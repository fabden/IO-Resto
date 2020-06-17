import { combineReducers } from 'redux';
import counter from './counter';
import menus from './menus';
import oders from './oders';
import users from './users';

export default combineReducers({
  counter, menus, oders, users,
});
