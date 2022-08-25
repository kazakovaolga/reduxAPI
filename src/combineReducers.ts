export function combineReducers(config?: {}) {
    return (state = {}, action?: {}) => {
      const result: Object = {};
      for (const key in config) {
        result[key] = config[key](state[key], action);
      }
      return result;
    };
  }  