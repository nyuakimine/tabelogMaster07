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
  return data === null ? (
    <h2>loading...</h2>
  ) : (
    <div className="rstdtl-top-kodawari">
      <div className="rstdtl-heading">
        <h3 className="rstdtl-heading__title"></h3>
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
        {/* <div className="js-kodawari-cassete rstdtl-top-kodawari__target" data-kodawari-id="2">
          <div className="rstdtl-top-kodawari__contents">
            <p className="rstdtl-top-kodawari__label rstdtl-top-kodawari__label--food">料理 </p>
            <div className="rstdtl-top-kodawari__photo">
              <img
                src="https://tblg.k-img.com/restaurant/images/Rvw/44863/320x320_square_44863216.jpg"
                alt="焼肉30％オフ実施中！！※金曜日は不可"
                className="loading"
                data-was-processed="true"
              />
            </div>
            <p className="rstdtl-top-kodawari__title">焼肉30％オフ実施中！！※金曜日は不可 </p>
          </div>
        </div>
        <div className="js-kodawari-cassete rstdtl-top-kodawari__target" data-kodawari-id="3">
          <div className="rstdtl-top-kodawari__contents">
            <p className="rstdtl-top-kodawari__label rstdtl-top-kodawari__label--food">料理 </p>
            <div className="rstdtl-top-kodawari__photo">
              <img
                src="https://tblg.k-img.com/restaurant/images/Rvw/74927/320x320_square_74927228.jpg"
                alt="ハッピーアワー実施中！ご一緒にサムギョプサルは超得（^^）"
                className="loading"
                data-was-processed="true"
              />
            </div>
            <p className="rstdtl-top-kodawari__title">ハッピーアワー実施中！ご一緒にサムギョプサルは超得（^^） </p>
          </div>
        </div>
        <div className="js-kodawari-cassete rstdtl-top-kodawari__target" data-kodawari-id="4">
          <div className="rstdtl-top-kodawari__contents">
            <p className="rstdtl-top-kodawari__label rstdtl-top-kodawari__label--food">料理 </p>
            <div className="rstdtl-top-kodawari__photo">
              <img
                src="https://tblg.k-img.com/restaurant/images/Rvw/79478/320x320_square_79478111.jpg"
                alt="吾照里と言えばスンドゥブです。世界一美味しいと自信を持ちます"
                className="loading"
                data-was-processed="true"
              />
            </div>
            <p className="rstdtl-top-kodawari__title">吾照里と言えばスンドゥブです。世界一美味しいと自信を持ちます </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}
