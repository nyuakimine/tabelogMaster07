import React, { useEffect, useRef, useState } from 'react'
import './tabelog1.css'
import './tabelog2.css'
import { clickImg } from './modalSlice'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { KodawariModal } from './kodawariModal'

interface ifProps {
  id: number
  kodawariPhoto: string
  kodawariHeadingTitle: string
  kodawariTitle: string
  kodawaricolLabel: string
  kodawariModalComment: string
}

interface pIf {
  data: ifProps[]
}
export const TopKodawari: React.FC<pIf> = ({ data }) => {
  //const topKodawari = useSelector((state: RootState) => state.topKodawariSlice.data.data)
  const dispatch = useDispatch()
  return data === undefined ? (
    <h2>loading...</h2>
  ) : (
    <div>
      <div className="rstdtl-top-kodawari">
        <div className="rstdtl-heading">
          <h3 className="rstdtl-heading__title">お店のこだわり</h3>
          {/* {data[0].kodawariHeadingTitle} */}
        </div>
        <div className="rstdtl-top-kodawari__item">
          {data.map((img, idx) => {
            return (
              <div
                className="js-kodawari-cassete rstdtl-top-kodawari__target"
                data-kodawari-id="1"
                key={idx}
                onClick={() => dispatch(clickImg(idx))}
              >
                <div className="rstdtl-top-kodawari__contents">
                  <p className="rstdtl-top-kodawari__label rstdtl-top-kodawari__label--food">{img.kodawaricolLabel} </p>
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

      <div className="c-overlay js-overlay js-modal-overlay-clickarea is-closeable">
        <div className="c-modal rstdtl-top-kodawari__modal js-kodawari-detail-modal">
          <p className="c-modal__close js-modal-close">閉じる</p>
          <div className="c-modal__contents rstdtl-top-kodawari__modal-contents js-kodawari-contents js-kodawari-2 is-hidden">
            <div className="c-modal__inner rstdtl-top-kodawari__modal-contents-inner">
              <button
                name="button"
                type="submit"
                className="rstdtl-top-kodawari__modal-target rstdtl-top-kodawari__modal-target--prev js-kodawari-modal-change"
                data-other-kodawari="1"
              >
                <i>前へ</i>
              </button>
              <div className="rstdtl-top-kodawari__modal-photo">
                <img
                  width="320"
                  height="320"
                  alt="焼肉30％オフ実施中！！※金曜日は不可"
                  src="https://tblg.k-img.com/restaurant/images/Rvw/44863/320x320_square_44863216.jpg"
                />
              </div>
              <div className="rstdtl-top-kodawari__modal-textbox">
                <p className="rstdtl-top-kodawari__modal-title-wrap">
                  <span className="rstdtl-top-kodawari__modal-label rstdtl-top-kodawari__modal-label--food">料理</span>
                  <span className="rstdtl-top-kodawari__modal-title">焼肉30％オフ実施中！！※金曜日は不可</span>
                </p>
                <p className="rstdtl-top-kodawari__modal-comment">
                  特上黒毛和牛カルビ（ザブトン）を是非一度！黒毛和牛上カルビ（カイノミ）黒毛和牛特上ロース（肩芯）など..他にも、ヤンニョムで味付けされた韓流骨付きカルビを骨までむしゃぶりついたり、厚切りのサムギョプサルを！お得な焼肉盛合せメニューもあります。是非一度、東京駅の地下街で炭火焼肉を楽しんでください。
                </p>
              </div>
              <button
                name="button"
                type="submit"
                className="rstdtl-top-kodawari__modal-target rstdtl-top-kodawari__modal-target--next js-kodawari-modal-change"
                data-other-kodawari="3"
              >
                <i>次へ</i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <KodawariModal></KodawariModal> */}
    </div>
  )
}
