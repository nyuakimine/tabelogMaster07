import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface TabelogProductTopCouponState {
  loading: boolean
  error: string | null
  data: any
  // { resultCode: number; message: string; data: any[] }
}

const initialState: TabelogProductTopCouponState = {
  loading: true,
  error: null,
  data: null
  // { resultCode: 0, message: '', data: [] }
}
interface TopCoupon {
  id: any
}
export const fetchTopCouponDataActionCreator = createAsyncThunk(
  'topCoupon/fetchTopCouponDataActionCreator',
  async (topCoupon: TopCoupon, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:8081/topCoupon`, {
      id: topCoupon.id
    })
    return data
  }
)
export const tabelogTopCouponSlice = createSlice({
  name: 'topCoupon',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopCouponDataActionCreator.pending.type]: state => {
      // return { ...state, loading: true };
      state.loading = true
    },
    [fetchTopCouponDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payload.data
      console.log('TopCouponTopCoupon', state.data)

      state.loading = false
      state.error = null
    },
    [fetchTopCouponDataActionCreator.rejected.type]: (state, action: PayloadAction<string | null>) => {
      //   const ddd = action.payload;
      state.loading = false
      state.error = action.payload
    }
  }
})
