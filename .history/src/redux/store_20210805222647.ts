import { createStore, applyMiddleware } from 'redux'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import thunk from 'redux-thunk'
import { actionLog } from './middlewares/actionLog'
import { productDetailSlice } from './productDetail/slice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productSearchSlice } from './productSearch/slice'
import { userSlice } from './user/slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { shoppingCartSlice } from './shoppingCart/slice'
import { orderSlice } from './order/slice'
import fetchCategoriesReducer from './shoppingMall/fetchCategoriesReducer'
import fetchCarouselsReducer from './shoppingMall/fetchCarouselsReducer'
import fetchHotGoodsesReducer from './shoppingMall/fetchHotGoodsesReducer'
import fetchnewAndRecommendGoodsesReducer from './shoppingMall/fetchnewAndRecommendGoodsesReducer'
import { newBeeMallDetailSlice } from './detailNewBeeMall/fetchDetailActions'
import { slice } from '../components/leftImg/leftImgSlice'
import { newBeeMallDescSlice } from './descSlice/fetchDescListSlice'
import { newBeeMallQaSlice } from './qaListSlice/fetchQaListSlice'
import { newBeeMallReviewSlice } from './reviewListSlice/fetchReviewListSlice'
import { newBeeMallQaPagingSlice } from './qaPageSlice/fetchQaPageSlice'
import { newBeeMallOpenAndCloseSlice } from './OpenCloseReviewSlice/openCloseReviewSlice'
import { newBeeMallQaInsertSlice } from './qaInsertSlice/fetchQaInsertSlice'
import { newBeeMallHelpNumSlice } from './reviewHelpNumSlice/reviewHelpNumSlice'
import { tabelogDetailTitleSlice } from './detailTitle/fetchDetailTitleListSlice'
import { tabelogRestaurantDescSlice } from './restaurantDesc/restaurantDesc'
import { tabelogGenreAndStationSlice } from './genreAndStation/genreAndStation'
import { topImgSlice } from '../pages/tabelog/top/imgSlice'
import { tabelogTopNoticeCommentSlice } from '../redux/topNoticeComment/topNoticeComment'
import { tabelogTopImgSlice } from '../redux/topImg/topImg'
import { tabelogTopKodawariSlice } from '../redux/topKodawari/topKodawari'
import { tabelogTopHygieneSlice } from '../redux/topHygiene/topHygiene'
import { madalSlice } from '../pages/tabelog/top/modalSlice'
import { tabelogTopCourseSlice } from '../redux/topCourse/topCourse'
import { tabelogTopCouponSlice } from '../redux/topCoupon/topCoupon'
import { tabelogTopPostphotoSlice } from '../redux/topPostphoto/topPostphoto'
import { imgMadalSlice } from '../pages/tabelog/top/imgModalSlice'
import { modalLikeNumSlice } from '../redux/modalLikeNumSlice/modalLikeNumSlice'
import { newBeeMallDelModalLikeNumSlice } from '../redux/delModalLikeNumSlice/delModalLikeNumSlice'
import { tabelogTopReviewCommentSlice } from '../redux/topReview/topReview'
import { tabelogTopMatomeSlice } from '../redux/topMatome/topMatome'
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}
const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
  user: userSlice.reducer,
  shoppingCart: shoppingCartSlice.reducer,
  order: orderSlice.reducer,
  categories: fetchCategoriesReducer,
  carousels: fetchCarouselsReducer,
  hotGoodses: fetchHotGoodsesReducer,
  newAndRecommendGoodses: fetchnewAndRecommendGoodsesReducer,
  detailNewBeeMall: newBeeMallDetailSlice.reducer,
  leftImg: slice.reducer,
  descSlice: newBeeMallDescSlice.reducer,
  qaListSlice: newBeeMallQaSlice.reducer,
  reviewListSlice: newBeeMallReviewSlice.reducer,
  qaPageSlice: newBeeMallQaPagingSlice.reducer,
  openCloseReviewSlice: newBeeMallOpenAndCloseSlice.reducer,
  qaInsertSlice: newBeeMallQaInsertSlice.reducer,
  insertHelpNum: newBeeMallHelpNumSlice.reducer,
  detailTitleListSlice: tabelogDetailTitleSlice.reducer,
  restaurantDescSlice: tabelogRestaurantDescSlice.reducer,
  genreAndStationSlice: tabelogGenreAndStationSlice.reducer,
  topImg: topImgSlice.reducer,
  topImgSlice: tabelogTopImgSlice.reducer,
  topNoticeCommentSlice: tabelogTopNoticeCommentSlice.reducer,
  topKodawariSlice: tabelogTopKodawariSlice.reducer,
  topHygieneListSlice: tabelogTopHygieneSlice.reducer,
  madal: madalSlice.reducer,
  topCourse: tabelogTopCourseSlice.reducer,
  topCoupon: tabelogTopCouponSlice.reducer,
  topPostphoto: tabelogTopPostphotoSlice.reducer,
  imgMadal: imgMadalSlice.reducer,
  modalLikeNum: modalLikeNumSlice.reducer,
  delModalLikeNum: newBeeMallDelModalLikeNumSlice.reducer,
  topReviewSlice: tabelogTopReviewCommentSlice.reducer,
  topMatome: tabelogTopMatomeSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), actionLog],
  devTools: true
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export default { store, persistor }
