import type {
  IncomingMessage,
  ServerResponse,
} from 'http';

import cloneDeep from 'lodash/cloneDeep';
import mergeWith from 'lodash/mergeWith';

import {
  configureStore,
  createListenerMiddleware,
} from '@reduxjs/toolkit';
import type { TypedStartListening } from '@reduxjs/toolkit';

import {
  parseCookie,
  getCookie,
  setCookie,
} from '@utils/cookie';

import { slice as sliceSearch } from './slices/sliceSearch';

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
       * Запись состояния в куки для инициализации на стороне сервера.
       */
      setCookie('_state', _state, true);
    },
  }
);

function initStore(state: StateType) {
  return configureStore(
    {
      reducer: {
        [sliceSearch.name]: sliceSearch.reducer,
      },
      middleware(getDefaultMiddleware) {
        return getDefaultMiddleware()
          .prepend(listenerMiddleware.middleware);
      },
      preloadedState: state,
    }
  );
}

function initState(state?: StateType) {
  let _state = cloneDeep(initialState);

  if (state) {
    try {
      /**
       * Слияние начального состояния с полученным. Необходимо
       * для предотвращения ошибок в случае если полученные ключи
       * и значения не соответствуют ожидаемым.
       */
      _state = mergeWith(_state, state, mergeCustomize);
    } catch (error) {
      console.log(error);
    }
  }

  return _state;

  function mergeCustomize(objValue: any, srcValue: any) {
    /**
     * Используем начальное значение если их типы не совпадают.
     * Иначе этом может вызвать ошибку при попытке использования
     * данного значения в компонентах.
     */
    if (typeof objValue !== typeof srcValue) {
      return objValue;
    }

    /**
     * Предотвращение слияния массивов. Ожидается что
     * значение массива будет заменено, так как иначе в массиве
     * могут оказаться неиспользуемые значения.
     */
    if (Array.isArray(objValue)) {
      return srcValue;
    }
  }
}

export function initClient(state?: StateType) {
  return initStore(initState(state));
}

export function initServer(req: IncomingMessage, res: ServerResponse) {
  let state: StateType | undefined;
  let cooks: CooksType = {};

  try {
    cooks = parseCookie(req.headers.cookie);
  } catch (error) {
    console.log(error);
  }

  if (cooks._state) {
    try {
      state = JSON.parse(decodeURIComponent(cooks._state));
    } catch (error) {
      console.log(error);

      /**
       * Удаление невалидного значения состояния из cookie.
       */
      res.setHeader('Set-Cookie', `_state=${cooks._state}; Path=/; Expires=${new Date(0)}`);
    }
  }

  return initStore(initState(state));
}

type StateType = {
  [sliceSearch.name]: ReturnType<typeof sliceSearch.getInitialState>;
};

type CooksType = {
  [key: string]: string;
};

type AppStore = ReturnType<typeof initStore>;
type AppState = ReturnType<AppStore['getState']>;
type AppDispatch = AppStore['dispatch'];
type StartListening = TypedStartListening<AppState, AppDispatch>;

export type {
  AppStore,
  AppState,
  AppDispatch,
};
