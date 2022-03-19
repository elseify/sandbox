import {
  useSelector,
  useDispatch,
} from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import type {
  AppStore,
  AppState,
  AppDispatch,
} from './reduxStore';

const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export {
  useAppSelector,
  useAppDispatch,
};
