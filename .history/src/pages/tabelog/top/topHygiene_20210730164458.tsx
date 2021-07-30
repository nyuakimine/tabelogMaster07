import React, { useEffect, useRef, useState } from 'react'
import './tabelog1.css'
import './tabelog2.css'
//import './img.css'
import { decrement, increment, clickImg } from './imgSlice'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

export const TopHygiene: React.FC = () => {
  const topHygiene = useSelector((state: RootState) => state.topHygieneListSlice.data)
  console.log()
  return topHygiene === null ? (
    <h2>loading...</h2>
  ) : (
    <div>
      <div className="rstdtl-hygiene">
        <div className="rstdtl-hygiene__link-target" id="hygiene-data"></div>
        <div className="rstdtl-heading">
          <h3 className="rstdtl-heading__title">{topHygiene.headingTitle}</h3>
        </div>
        <table className="rstdtl-hygiene__table">
          <tbody>
            <tr>
              <th>
                <p className="rstdtl-hygiene__item-name rstdtl-hygiene__item-name--instore">{topHygiene.hygieneItemName1}</p>
              </th>
              <td>
                <p className="gly-b-check rstdtl-hygiene__data">{topHygiene.hygieneData1}</p>
                <p className="gly-b-check rstdtl-hygiene__data">{topHygiene.hygieneData2}</p>
              </td>
            </tr>
            <tr>
              <th>
                <p className="rstdtl-hygiene__item-name rstdtl-hygiene__item-name--customer">{topHygiene.hygieneItemName2}</p>
              </th>
              <td>
                <p className="gly-b-check rstdtl-hygiene__data">{topHygiene.hygieneData3}</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="rstinfo-edit-navi">
          <div className="rstdtl-notice u-text-notice">
            <p>{topHygiene.textNotice1}</p>
            <p>
              {topHygiene.textNotice2}
              <a href={`${topHygiene.path1}`}>{topHygiene.textNotice3}</a>
              {topHygiene.textNotice4}
            </p>
            <p>
              <a className="icon-b-arrow-orange js-analytics" href={`${topHygiene.path2}`}>
                {topHygiene.textNotice5}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="c-overlay js-overlay js-modal-overlay-clickarea is-closeable" style={{ display: 'none' }}>
        <div className="c-modal rstdtl-top-kodawari__modal js-kodawari-detail-modal">
          <p className="c-modal__close js-modal-close">閉じる</p>
          <div className="c-modal__contents rstdtl-top-kodawari__modal-contents js-kodawari-contents js-kodawari-1">
            <div className="c-modal__inner rstdtl-top-kodawari__modal-contents-inner">
              <button
                name="button"
                type="submit"
                className="rstdtl-top-kodawari__modal-target rstdtl-top-kodawari__modal-target--prev is-disabled"
                data-other-kodawari="0"
              >
                <i>前へ</i>
              </button>
              <div className="rstdtl-top-kodawari__modal-photo">
                <img
                  width="320"
                  height="320"
                  alt="安心安全の中で忘新年会を楽しもう！"
                  src="https://tblg.k-img.com/restaurant/images/Rvw/133548/320x320_square_133548316.jpg"
                  className="loading"
                  data-was-processed="true"
                />
              </div>
              <div className="rstdtl-top-kodawari__modal-textbox">
                <p className="rstdtl-top-kodawari__modal-title-wrap">
                  <span className="rstdtl-top-kodawari__modal-label rstdtl-top-kodawari__modal-label--other">その他</span>
                  <span className="rstdtl-top-kodawari__modal-title">安心安全の中で忘新年会を楽しもう！</span>
                </p>
                <p className="rstdtl-top-kodawari__modal-comment">
                  当店では､感染予防の一環として下記の取り組み､衛生管理を徹底したサービスを心がけております。従業員の手洗い､うがいの徹底､従業員のマスク着用､従業員の検温､店内の清掃､消毒の徹底､調理器具や食器の消毒､店舗の入り口や店内の消毒液の設置､お客様同士のソーシャルディスタンス､定期的な換気､等
                </p>
              </div>
              <button
                name="button"
                type="submit"
                className="rstdtl-top-kodawari__modal-target rstdtl-top-kodawari__modal-target--next js-kodawari-modal-change"
                data-other-kodawari="2"
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
