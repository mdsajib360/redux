import {useDispatch, useSelector} from 'react-redux'
const dispatch = useDispatch();
const count = useSelector(state => state.value)
