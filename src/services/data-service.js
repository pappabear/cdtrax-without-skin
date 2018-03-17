import request from 'superagent'
import * as types from '../constants'

const dataService = store => next => action => {
  /*
  Pass all actions through by default
  */
  next(action)
  
  switch (action.type) {
    
    case types.GET_BANKS:
        /*
        In case we receive an action to send an API request, send the appropriate request
        */
        request
        .get('http://localhost:3001/banks')
        .end((err, res) => {
            if (err) {
              /*
              in case there is any error, dispatch an action containing the error
              */
              return next({
                  type: 'GET_TODO_DATA_ERROR',
                  err
              })
            }

            const data = JSON.parse(res.text)

            /*
            Once data is received, dispatch an action telling the application
            that data was received successfully, along with the parsed data
            */
            next({
              type: 'GET_BANKS_DATA_RECEIVED',
              data
            })
        })
        break

    case types.ADD_BANK:
        var bank = {code: action.code, description: action.description }
        request
          .post('http://localhost:3001/banks')
          .send(bank)
          .set('Accept', 'application/json')
          .end(function(err, res){
            if (err || !res.ok) {
              console.log('Oh no! error ' + err);
            } else {
              console.log('SuperAgent is happy, and API call was successful!  ' + JSON.stringify(res.body));
            }
          })
        break

    case types.UPDATE_BANK:
        bank = {id: action.id, code: action.code, description: action.description }
        request
          .put('http://localhost:3001/banks/' + action.id)
          .send(bank)
          .set('Accept', 'application/json')
          .end(function(err, res){
            if (err || !res.ok) {
              console.log('Oh no! error ' + err);
            } else {
              console.log('SuperAgent is happy, and API call was successful!  ' + JSON.stringify(res.body));
            }
          })
        break

    case types.DELETE_BANK:
        request
          .delete('http://localhost:3001/banks/' + action.id)
          .end(function(err, res){
            if (err || !res.ok) {
              console.log('Oh no! error ' + err);
            } else {
              console.log('SuperAgent is happy, and API call was successful!  ' + JSON.stringify(res.body));
            }
          })
        break

    /*
    Do nothing if the action does not interest us
    */
    default:
        console.log('dataService default() because ' + action.type)
        break
  }

};

export default dataService
