import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DetailTitle } from '../../components/detailTitle/DetailTitle'
import { RestaurantDesc } from '../../components/restaurantDesc'
import { RouteComponentProps, useParams } from 'react-router-dom'
import { fetchDetailTitleDataActionCreator } from '../../redux/detailTitle/fetchDetailTitleListSlice'
import { fetchRestaurantDescDataActionCreator } from '../../redux/restaurantDesc/restaurantDesc'
import { fetchGenreAndStationDataActionCreator } from '../../redux/genreAndStation/genreAndStation'
import { fetchTopNoticeCommentDataActionCreator } from '../../redux/topNoticeComment/topNoticeComment'
import { fetchTopImgDataActionCreator } from '../../redux/topImg/topImg'
import { fetchTopKodawariDataActionCreator } from '../../redux/topKodawari/topKodawari'
import { fetchTopHygieneDataActionCreator } from '../../redux/topHygiene/topHygiene'
import { fetchTopCourseDataActionCreator } from '../../redux/topCourse/topCourse'
import { Sidebar } from './top/sidebar'
import { TopNotice } from './top/topNotice'
import { TopImg } from './top/img'
import { TopCommentWrap } from './top/topCommentWrap'
import { TopKodawari } from './top/topKodawari'
import { TopHygiene } from './top/topHygiene'
//import {topImg} from "./top/img"
import { RootState } from '../../redux/store'
import './tabelog1.css'
import './tabelog2.css'
//import {detailTitleListSlice} from "../../redux/detailTitle/fetchDetailTitleListSlice"
interface MatchParams {
  id: string
}
export const Tabelog: React.FC<RouteComponentProps<MatchParams>> = () => {
  const topImg = useSelector((state: RootState) => state.topImgSlice.data.data)
  const topKodawari = useSelector((state: RootState) => state.topKodawariSlice.data.data)
  const { id } = useParams<MatchParams>()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDetailTitleDataActionCreator({ id: id }))
    dispatch(fetchRestaurantDescDataActionCreator({ id: id }))
    dispatch(fetchGenreAndStationDataActionCreator({ id: id }))
    dispatch(fetchTopNoticeCommentDataActionCreator({ id: id }))
    dispatch(fetchTopImgDataActionCreator({ id: id }))
    dispatch(fetchTopKodawariDataActionCreator({ id: id }))
    dispatch(fetchTopHygieneDataActionCreator({ id: id }))
    dispatch(fetchTopCourseDataActionCreator({ id: id }))
  }, [])
  return topImg === null ? (
    <h2>loading...</h2>
  ) : (
    <div id="container">
      <div>
        <div id="rstdtl-head" className="rstdtl-header-wrap">
          <div className="rstdtl-header">
            <section className="rdheader-info-wrap pillow-header">
              <div className="owner-badge">
                {/* <p className="owner-badge__icon">??????</p> */}
                <div className="owner-badge__tooltip-frame">
                  <div className="c-tooltip-bordered c-tooltip-bordered--bottom owner-badge__ex">
                    {/* <p>??????????????????????????????????????????????????????????????????????????????</p> */}
                  </div>
                </div>
              </div>
              <div className="rdheader-go-hygiene">
                {/* <a
                  className="rdheader-go-hygiene__text js-scroll-to-sanitation js-analytics"
                  data-analytics-btn="sanitations_information_icon"
                  href="#hygiene-data"
                >
                  ???????????????
                </a> */}
              </div>
              <DetailTitle></DetailTitle>
              <RestaurantDesc></RestaurantDesc>
              {/* <a name="photoheader" id="photoheader"></a> */}
              <Sidebar></Sidebar>
              <div id="column-main" className="layout1-main">
                <TopNotice></TopNotice>
                <span id="shoppr" className="page-link"></span>
                <TopImg data={topImg}></TopImg>
                <TopCommentWrap></TopCommentWrap>
                <TopKodawari data={topKodawari}></TopKodawari>
                <TopHygiene></TopHygiene>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
