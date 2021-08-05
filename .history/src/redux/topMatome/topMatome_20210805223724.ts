import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface TabelogProductTopMatomeState {
  loading: boolean
  error: string | null
  data: any
  // { resultCode: number; message: string; data: any[] }
}

const initialState: TabelogProductTopMatomeState = {
  loading: true,
  error: null,
  data: null
  // { resultCode: 0, message: '', data: [] }
}
interface TopMatome {
  id: any
}
export const fetchTopMatomeDataActionCreator = createAsyncThunk(
  'topMatome/fetchTopMatomeDataActionCreator',
  async (topMatome: TopMatome, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:8081/topMatome`, {
      id: topMatome.id
    })
    return data
  }
)
export const tabelogTopMatomeSlice = createSlice({
  name: 'topMatome',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopMatomeDataActionCreator.pending.type]: state => {
      // return { ...state, loading: true };
      state.loading = true
    },
    [fetchTopMatomeDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payload.data

      console.log('TopMatomeTopMatome', state.data)

      state.loading = false
      state.error = null
    },
    [fetchTopMatomeDataActionCreator.rejected.type]: (state, action: PayloadAction<string | null>) => {
      //   const ddd = action.payload;
      state.loading = false
      state.error = action.payload
    }
  }
})
