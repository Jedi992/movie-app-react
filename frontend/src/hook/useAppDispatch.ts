import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../redux/store/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()