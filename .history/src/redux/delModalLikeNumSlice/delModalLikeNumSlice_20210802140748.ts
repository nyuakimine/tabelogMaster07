import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { fetchTopPostphotoDataActionCreator } from '../topPostphoto/topPostphoto'
interface NewBeeMallProductDelModalLikeNumState {
  loading: boolean
  error: string | null
  data: any
}

const initialState: NewBeeMallProductDelModalLikeNumState = {
  loading: true,
  error: null,
  data: null
}
interface modalLikeNum {
  id: string
  // ids?:number[];
  likeId: number
}

export const fetchDelModalLikeNumDataActionCreator = createAsyncThunk(
  'delModalLikeNum/fetchDelModalLikeNumDataActionCreator',
  async (modalLikeNum: modalLikeNum, thunkAPI) => {
    debugger
    const { data } = await axios.post(
      `http://localhost:8081/deleteModalLikeNum`,
      { likeId: modalLikeNum.likeId },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    if (data != null) {
      debugger
      thunkAPI.dispatch(fetchTopPostphotoDataActionCreator({ id: modalLikeNum.id }))
    }
    return data
  }
)
export const newBeeMallDelModalLikeNumSlice = createSlice({
  name: 'delModalLikeNum',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDelModalLikeNumDataActionCreator.pending.type]: state => {
      // return { ...state, loading: true };
      state.loading = true
    },
    [fetchDelModalLikeNumDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payload.data

      console.log('aaaaaaaaDelModalLikeNum', state.data)

      state.loading = false
      state.error = null
    },
    [fetchDelModalLikeNumDataActionCreator.rejected.type]: (state, action: PayloadAction<string | null>) => {
      //   const ddd = action.payload;
      state.loading = false
      state.error = action.payload
    }
  }
})
