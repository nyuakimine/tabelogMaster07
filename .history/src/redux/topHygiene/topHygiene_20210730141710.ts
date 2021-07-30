import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface TabelogProductTopHygieneState {
  loading: boolean
  error: string | null
  data: any
}

const initialState: TabelogProductTopHygieneState = {
  loading: true,
  error: null,
  data: null
}
interface TopHygiene {
  id: any
}
export const fetchTopHygieneDataActionCreator = createAsyncThunk(
  'topHygieneListSlice/fetchTopHygieneDataActionCreator',
  async (topHygiene: TopHygiene, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:8081/topHygiene`, {
      id: topHygiene.id
    })
    return data
  }
)
export const tabelogTopHygieneSlice = createSlice({
  name: 'topHygieneListSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopHygieneDataActionCreator.pending.type]: state => {
      // return { ...state, loading: true };
      state.loading = true
    },
    [fetchTopHygieneDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payloa[0]

      console.log('TopHygieneTopHygiene', state.data)

      state.loading = false
      state.error = null
    },
    [fetchTopHygieneDataActionCreator.rejected.type]: (state, action: PayloadAction<string | null>) => {
      //   const ddd = action.payload;
      state.loading = false
      state.error = action.payload
    }
  }
})
