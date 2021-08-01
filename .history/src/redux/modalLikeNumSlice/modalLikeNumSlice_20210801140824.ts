import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { fetchOpenAndCloseDataActionCreator } from '../OpenCloseReviewSlice/openCloseReviewSlice'
interface ProductModalLikeNumState {
  loading: boolean
  error: string | null
  data: any
}

const initialState: ProductModalLikeNumState = {
  loading: true,
  error: null,
  data: null
}
interface modalLikeNum {
  // goodsId:string;
  // ids?:number[];
  likeId: number
}

export const fetchModalLikeNumDataActionCreator = createAsyncThunk(
  'modalLikeNum/fetchModalLikeNumDataActionCreator',
  async (modalLikeNum: modalLikeNum, thunkAPI) => {
    debugger
    const { data } = await axios.post(
      `http://localhost:8081/modalLikeNum`,
      { likeId: modalLikeNum.likeId }
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    // if(data!=null){
    //   debugger;
    // thunkAPI.dispatch(fetchOpenAndCloseDataActionCreator({ids:goodsReviewModalLikeNum.ids,goodsId:goodsReviewModalLikeNum.goodsId}))
    // }
    return data
  }
)
export const modalLikeNumSlice = createSlice({
  name: 'modalLikeNum',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchModalLikeNumDataActionCreator.pending.type]: state => {
      // return { ...state, loading: true };
      state.loading = true
    },
    [fetchModalLikeNumDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payload.data

      console.log('aaaaaaaaModalLikeNum', state.data)

      state.loading = false
      state.error = null
    },
    [fetchModalLikeNumDataActionCreator.rejected.type]: (state, action: PayloadAction<string | null>) => {
      //   const ddd = action.payload;
      state.loading = false
      state.error = action.payload
    }
  }
})
