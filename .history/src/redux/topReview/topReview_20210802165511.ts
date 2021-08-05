import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface TabelogProductTopReviewCommentState {
  loading: boolean
  error: string | null
  data: any
}

const initialState: TabelogProductTopReviewCommentState = {
  loading: true,
  error: null,
  data: null
}
interface TopReviewComment {
  id: any
}
export const fetchTopReviewCommentDataActionCreator = createAsyncThunk(
  'topReviewSlice/fetchTopReviewCommentDataActionCreator',
  async (topReview: TopReviewComment, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:8081/topReview`, {
      id: topReview.id
    })
    return data
  }
)
export const tabelogTopReviewCommentSlice = createSlice({
  name: 'topReviewSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopReviewCommentDataActionCreator.pending.type]: state => {
      // return { ...state, loading: true };
      state.loading = true
    },
    [fetchTopReviewCommentDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payload.data

      console.log('TopReviewCommentTopReviewComment', state.data)

      state.loading = false
      state.error = null
    },
    [fetchTopReviewCommentDataActionCreator.rejected.type]: (state, action: PayloadAction<string | null>) => {
      //   const ddd = action.payload;
      state.loading = false
      state.error = action.payload
    }
  }
})
