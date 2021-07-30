import React, { useEffect, useRef, useState } from 'react'
import '../tabelog1.css'
import '../tabelog2.css'
import { decrement, increment, clickImg } from './imgSlice'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

interface ifProps {
  id: number
  kodawariPhoto: string
  kodawariHeadingTitle: string
  kodawariTitle: string
  kodawaricolLabel: string
}

interface pIf {
  data: ifProps[]
}
export const TopKodawari: React.FC<pIf> = ({ data }) => {
  const topKodawari = useSelector((state: RootState) => state.topKodawariSlice.data.data)
  return data === undefined ? (
    <h2>loading...</h2>
  ) : (
    <div className="rstdtl-top-kodawari">
      <div className="rstdtl-heading">
        <h3 className="rstdtl-heading__title">お店のこだわり</h3>
        {/* {data.kodawariHeadingTitle} */}
      </div>
      <div className="rstdtl-top-kodawari__item">
        {data.map((img, idx) => {
          return (
            <div className="js-kodawari-cassete rstdtl-top-kodawari__target" data-kodawari-id="1" key={idx}>
              <div className="rstdtl-top-kodawari__contents">
                <p className="rstdtl-top-kodawari__label rstdtl-top-kodawari__label--other">{img.kodawaricolLabel} </p>
                <div className="rstdtl-top-kodawari__photo">
                  <img
                    src={`${img.kodawariPhoto}`}
                    alt="安心安全の中で忘新年会を楽しもう！"
                    className="loading"
                    data-was-processed="true"
                  />
                </div>
                <p className="rstdtl-top-kodawari__title">{img.kodawariTitle} </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
