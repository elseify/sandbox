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

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
