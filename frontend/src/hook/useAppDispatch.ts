import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store/store'


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch = () => useDispatch<AppDispatch>()
