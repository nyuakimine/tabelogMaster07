import React, { useEffect, useRef, useState } from 'react'
// import './tabelog1.css'
// import './tabelog2.css'
import './tabelog3.css'
import './modal.css'
import { decrement, increment, clickImg } from './modalSlice'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

export const TopMatome: React.FC = () => {
  const topMatome = useSelector((state: RootState) => state.topMatome.data)
  return topMatome === null ? (
    <h2>loading...</h2>
  ) : (
    <div className="rstdtl-matome">
      <h3 className="rstdtl-matome__heading">{topMatome.matomeHeading}</h3>
      <ul className="rstdtl-matome__list">
        <li className="rstdtl-matome__box clearfix">
          <div className="rstdtl-matome__photo">
            <a href={`${topMatome.path2}`}>
              <img
                // style="medium"
                alt="東京駅周辺の焼肉ランチはココ！予算別おすすめ店6選"
                src={`${topMatome.path1}`}
                width="50"
                height="50"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </div>
          <div className="rstdtl-matome__text">
            <p className="rstdtl-matome__text-title">
              <strong>
                <a href={`${topMatome.path2}`}>{topMatome.matomeTextTitle}</a>
              </strong>
            </p>
            <p className="rstdtl-matome__text-desc">
              <span>{topMatome.matomeTextDesc}</span>
              <a href={`${topMatome.path2}`}>記事を読む»</a>
            </p>
            <div className="rstdtl-matome-rvwr-info">
              <p className="rstdtl-matome-rvwr-info__image">
                <a href={`${topMatome.path3}`}>
                  <img
                    alt="食べログまとめ編集部"
                    src={`${topMatome.path4}`}
                    width="20"
                    height="20"
                    className="loading"
                    data-was-processed="true"
                  />
                </a>
              </p>
              <p className="rstdtl-matome-rvwr-info__name">
                <a href={`${topMatome.path3}`}>食べログまとめ編集部</a>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
