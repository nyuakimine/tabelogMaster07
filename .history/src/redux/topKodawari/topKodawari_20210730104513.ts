import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface TabelogProductTopKodawariState {
  loading: boolean
  error: string | null
  data: { resultCode: number; message: string; data: any[] }
}

const initialState: TabelogProductTopKodawariState = {
  loading: true,
  error: null,
  data: { resultCode: 0, message: '', data: [] }
}
interface TopKodawari {
  id: any
}
export const fetchTopKodawariDataActionCreator = createAsyncThunk(
  'topKodawariSlice/fetchTopKodawariDataActionCreator',
  async (topKodawari: TopKodawari, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:8081/topKodawari`, {
      id: topKodawari.id
    })
    return data
  }
)
export const tabelogTopKodawariSlice = createSlice({
  name: 'topKodawariSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopKodawariDataActionCreator.pending.type]: state => {
      // return { ...state, loading: true };
      state.loading = true
    },
    [fetchTopKodawariDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payload

      console.log('TopKodawariTopKodawari', state.data)

      state.loading = false
      state.error = null
    },
    [fetchTopKodawariDataActionCreator.rejected.type]: (state, action: PayloadAction<string | null>) => {
      //   const ddd = action.payload;
      state.loading = false
      state.error = action.payload
    }
  }
})
