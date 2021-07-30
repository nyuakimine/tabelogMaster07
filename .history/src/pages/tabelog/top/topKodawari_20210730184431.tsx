import React, { useEffect, useRef, useState } from 'react'
import './tabelog1.css'
import './tabelog2.css'
import { decrement, increment, clickImg } from './modalSlice'
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
  const count = useSelector((state: RootState) => state.madal.counter)
  const imgLength = useSelector((state: RootState) => state.topKodawariSlice.data.data.length)
  const currentBigImage = data.filter((num, index) => index === count)[0] as ifProps

  //const topKodawari = useSelector((state: RootState) => state.topKodawariSlice.data.data)
  const dispatch = useDispatch()

  const showMoreReviewsBtn = () => {
    const showList = document.getElementsByClassName('c-overlay')[0] as HTMLElement
    showList.style.display = 'block'
    const showModal = document.getElementsByClassName('c-modal__contents')[0] as HTMLElement
    showModal.style.display = 'block'
  }

  const closeShowMoreReviewsBtn = () => {
    const cshowList = document.getElementsByClassName('c-overlay')[0] as HTMLElement
    cshowList.style.display = 'none'
  }
  return currentBigImage === undefined ? (
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
              <div className="js-kodawari-cassete rstdtl-top-kodawari__target" data-kodawari-id="1" key={idx}>
                <div className="rstdtl-top-kodawari__contents" onClick={showMoreReviewsBtn}>
                  <p className="rstdtl-top-kodawari__label rstdtl-top-kodawari__label--food">{img.kodawaricolLabel} </p>
                  <div className="rstdtl-top-kodawari__photo" onClick={() => dispatch(clickImg(idx))}>
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

      <div
        className="c-overlay js-overlay js-modal-overlay-clickarea is-closeable"
        style={{ display: 'none' }}
        onClick={closeShowMoreReviewsBtn}
      >
        <div className="c-modal rstdtl-top-kodawari__modal js-kodawari-detail-modal">
          <p className="c-modal__close js-modal-close" onClick={closeShowMoreReviewsBtn}>
            閉じる
          </p>

          <div className="c-modal__contents rstdtl-top-kodawari__modal-contents js-kodawari-contents js-kodawari-2 is-hidden">
            <div className="c-modal__inner rstdtl-top-kodawari__modal-contents-inner">
              <button
                name="button"
                type="submit"
                className="rstdtl-top-kodawari__modal-target rstdtl-top-kodawari__modal-target--prev js-kodawari-modal-change"
                data-other-kodawari="1"
                onClick={() => dispatch(decrement(imgLength))}
              >
                <i>前へ</i>
              </button>
              <div className="rstdtl-top-kodawari__modal-photo">
                <img width="320" height="320" alt="" src={`${currentBigImage.kodawariPhoto}`} />
              </div>
              <div className="rstdtl-top-kodawari__modal-textbox">
                <p className="rstdtl-top-kodawari__modal-title-wrap">
                  <span className="rstdtl-top-kodawari__modal-label rstdtl-top-kodawari__modal-label--food">
                    {currentBigImage.kodawaricolLabel}
                  </span>
                  <span className="rstdtl-top-kodawari__modal-title">{currentBigImage.kodawariTitle}</span>
                </p>
                <p className="rstdtl-top-kodawari__modal-comment">{currentBigImage.kodawariModalComment}</p>
              </div>
              <button
                name="button"
                type="submit"
                className="rstdtl-top-kodawari__modal-target rstdtl-top-kodawari__modal-target--next js-kodawari-modal-change"
                data-other-kodawari="3"
                onClick={() => dispatch(increment(imgLength))}
              >
                <i>次へ</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
