import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface TabelogProductTopPostphotoState {
  loading: boolean
  error: string | null
  data: { resultCode: number; message: string; data: any[] }
  // { resultCode: number; message: string; data: any[] }
}

const initialState: TabelogProductTopPostphotoState = {
  loading: true,
  error: null,
  data: { resultCode: 0, message: '', data: [] }
  // { resultCode: 0, message: '', data: [] }
}
interface TopPostphoto {
  id: any
}
export const fetchTopPostphotoDataActionCreator = createAsyncThunk(
  'topPostphoto/fetchTopPostphotoDataActionCreator',
  async (topPostphoto: TopPostphoto, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:8081/topPostphoto`, {
      id: topPostphoto.id
    })
    return data
  }
)
export const tabelogTopPostphotoSlice = createSlice({
  name: 'topPostphoto',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopPostphotoDataActionCreator.pending.type]: state => {
      // return { ...state, loading: true };
      state.loading = true
    },
    [fetchTopPostphotoDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payload

      console.log('TopPostphotoTopPostphoto', state.data)

      state.loading = false
      state.error = null
    },
    [fetchTopPostphotoDataActionCreator.rejected.type]: (state, action: PayloadAction<string | null>) => {
      //   const ddd = action.payload;
      state.loading = false
      state.error = action.payload
    }
  }
})
