import React, { useEffect, useRef, useState } from 'react'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import '../tabelog1.css'
import '../tabelog2.css'

export const TopCoupon: React.FC = () => {
  const topComment = useSelector((state: RootState) => state.topNoticeCommentSlice.data)

  const showMoreReviewsBtn = () => {
    const showList = document.getElementsByClassName('pr-comment__more')[0] as HTMLElement
    showList.style.display = 'none'
    const show = document.getElementsByClassName('pr-comment__more-icon')[0] as HTMLElement
    show.style.display = 'none'

    const cshowList = document.getElementsByClassName('pr-comment__over')[0] as HTMLElement
    cshowList.style.display = 'block'
    cshowList.style.display = 'inline'
  }

  return topComment === null ? (
    <h2>loading...</h2>
  ) : (
    <div className="rstdtl-coupon">
      <span className="page-link" id="rst-coupon"></span>
      <div className="rstdtl-heading">
        <h3 className="rstdtl-heading__title">お得なクーポン</h3>
      </div>
      <div className="rstdtl-rstinfo-coupon ">
        <a
          data-analytics-alliance=""
          className="rstdtl-rstinfo-coupon__target js-analytics"
          href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlmap/"
        >
          <div className="rstdtl-rstinfo-coupon__inner">
            <p className="rstdtl-rstinfo-coupon__subject">クーポン</p>
            <p className="rstdtl-rstinfo-coupon__description">
              {' '}
              【 忘新年会特別 】～17時まで/21時～ ご宴会ご予約の方は､お1人様５００円引き♪♪♪{' '}
            </p>
            <p className="rstdtl-rstinfo-coupon__btn-wrap">
              <span className="rstdtl-rstinfo-coupon__btn">詳細</span>
            </p>
          </div>
        </a>
      </div>
      <div className="rstdtl-rstinfo-coupon ">
        <a
          data-analytics-alliance=""
          className="rstdtl-rstinfo-coupon__target js-analytics"
          href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlmap/"
        >
          <div className="rstdtl-rstinfo-coupon__inner">
            <p className="rstdtl-rstinfo-coupon__subject">クーポン</p>
            <p className="rstdtl-rstinfo-coupon__description">１ドリンクサービス致します</p>
            <p className="rstdtl-rstinfo-coupon__btn-wrap">
              <span className="rstdtl-rstinfo-coupon__btn">詳細</span>
            </p>
          </div>
        </a>
      </div>

      <p className="rstdtl-rstinfo-coupon-more">
        <a className="icon-b-circle-orange" href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlmap/">
          <strong>全部で2枚のクーポン</strong>を全て見る
        </a>
      </p>
      <ul className="rstdtl-rstinfo-coupon-notice">
        <li>※ クーポンごとに条件が異なりますので、必ず利用条件・提示条件をご確認ください。</li>
      </ul>
    </div>
  )
}
