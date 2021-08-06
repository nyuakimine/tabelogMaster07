import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface TabelogProductTopBasicInformationState {
  loading: boolean
  error: string | null
  data: any
  // { resultCode: number; message: string; data: any[] }
}

const initialState: TabelogProductTopBasicInformationState = {
  loading: true,
  error: null,
  data: null
  // { resultCode: 0, message: '', data: [] }
}
interface TopBasicInformation {
  id: any
}
export const fetchTopBasicInformationDataActionCreator = createAsyncThunk(
  'topBasicInformation/fetchTopBasicInformationDataActionCreator',
  async (topBasicInformation: TopBasicInformation, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:8081/topBasicInformation`, {
      id: topBasicInformation.id
    })
    return data
  }
)
export const tabelogTopBasicInformationSlice = createSlice({
  name: 'topBasicInformation',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopBasicInformationDataActionCreator.pending.type]: state => {
      // return { ...state, loading: true };
      state.loading = true
    },
    [fetchTopBasicInformationDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payload.data[0]

      console.log('TopBasicInformationTopBasicInformation', state.data)

      state.loading = false
      state.error = null
    },
    [fetchTopBasicInformationDataActionCreator.rejected.type]: (state, action: PayloadAction<string | null>) => {
      //   const ddd = action.payload;
      state.loading = false
      state.error = action.payload
    }
  }
})
