/* eslint-disable default-case */
const counterReducer = (state, action) => {
    switch (action) {
      case 'INCREMENT':
        return state + 1
    }
  }
export default counterReducer;
//https://flaviocopes.com/react-hook-usereducer/?fbclid=IwAR13sqi4KPqoJlQioJXPZNJs-x0nsppjzulG3NAYeirDftaCv-pJ-OAGdOQ