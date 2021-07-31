import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface TabelogProductTopCourseState {
  loading: boolean
  error: string | null
  data: { resultCode: number; message: string; data: any[] }
}

const initialState: TabelogProductTopCourseState = {
  loading: true,
  error: null,
  data: { resultCode: 0, message: '', data: [] }
}
interface TopCourse {
  id: any
}
export const fetchTopCourseDataActionCreator = createAsyncThunk(
  'topCourse/fetchTopCourseDataActionCreator',
  async (topCourse: TopCourse, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:8081/topCourse`, {
      id: topCourse.id
    })
    return data
  }
)
export const tabelogTopCourseSlice = createSlice({
  name: 'topCourse',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopCourseDataActionCreator.pending.type]: state => {
      // return { ...state, loading: true };
      state.loading = true
    },
    [fetchTopCourseDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payload

      console.log('TopCourseTopCourse', state.data)

      state.loading = false
      state.error = null
    },
    [fetchTopCourseDataActionCreator.rejected.type]: (state, action: PayloadAction<string | null>) => {
      //   const ddd = action.payload;
      state.loading = false
      state.error = action.payload
    }
  }
})
