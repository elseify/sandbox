import {
  cloneDeep,
  mergeWith,
} from 'lodash';

import {
  configureStore,
  createListenerMiddleware,
} from '@reduxjs/toolkit';
import type { TypedStartListening } from '@reduxjs/toolkit';

import { slice as sliceSearch } from './slices/sliceSearch';

import {
  getCookie,
  setCookie,
} from '@utils/cookie';

const initialState: StateType = {
  [sliceSearch.name]: sliceSearch.getInitialState(),
};

const listenerMiddleware = createListenerMiddleware();

const startListening = listenerMiddleware.startListening as StartListening;

startListening(
  {
    predicate: () => true,
    effect(action, listenerApi) {
      // console.log('Action:', action);
      // console.log('State:', listenerApi.getState());

      const _state = JSON.stringify(listenerApi.getState());

      /**
       * Запись состояния в куки для инициализации на стороне
       * сервера с целью предотвращения потери уже измененных значений
       */
      setCookie('_state', _state, true);
    },
  }
);

function initState(state?: StateType) {
  let _state = cloneDeep(initialState);

  if (state) {
    try {
      /**
       * Слияние начального состояния с полученным для предотвращения
       * возможных ошибок когда ключи или типы значений полученного состояния
       * отличаются от ожидаемого
       */
      _state = mergeWith(_state, state, mergeCustomize);
    } catch (error) {
      console.log(error);
    }
  }

  return _state;

  function mergeCustomize(objValue: any, srcValue: any) {
    if (Array.isArray(objValue) && Array.isArray(srcValue)) {
      return objValue;
    }
  }
}

function initStore(state?: StateType) {
  return configureStore(
    {
      reducer: {
        [sliceSearch.name]: sliceSearch.reducer,
      },
      middleware(getDefaultMiddleware) {
        return getDefaultMiddleware()
          .prepend(listenerMiddleware.middleware);
      },
      preloadedState: state ?? cloneDeep(initialState),
    }
  );
}

function initServer(value?: string) {
  let _state: StateType | undefined;

  if (value) {
    try {
      _state = JSON.parse(decodeURIComponent(value));
    } catch (error) {
      console.log(error);
    }
  }

  return initStore(initState(_state));
}

type StateType = {
  [sliceSearch.name]: ReturnType<typeof sliceSearch.getInitialState>;
};

type AppStore = ReturnType<typeof initStore>;
type AppState = ReturnType<AppStore['getState']>;
type AppDispatch = AppStore['dispatch'];
type StartListening = TypedStartListening<AppState, AppDispatch>;

export {
  initialState,
  initState,
  initStore,
  initServer,
};
export type {
  AppStore,
  AppState,
  AppDispatch,
};
