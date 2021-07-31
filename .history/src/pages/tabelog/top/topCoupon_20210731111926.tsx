import React, { useEffect, useRef, useState } from 'react'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import '../tabelog1.css'
import '../tabelog2.css'

export const TopCoupon: React.FC = () => {
  const topCoupon = useSelector((state: RootState) => state.topCoupon.data)
  const couponLength = useSelector((state: RootState) => state.topCoupon.data.length)

  return topCoupon === null ? (
    <h2>loading...</h2>
  ) : (
    <div className="rstdtl-coupon">
      <span className="page-link" id="rst-coupon"></span>
      <div className="rstdtl-heading">
        <h3 className="rstdtl-heading__title">{topCoupon[0].headingTitle}</h3>
      </div>
      {topCoupon.map((coupon, idx) => {
        return (
          <div className="rstdtl-rstinfo-coupon " key={idx}>
            <a data-analytics-alliance="" className="rstdtl-rstinfo-coupon__target js-analytics" href={`${coupon.couponTarget}`}>
              <div className="rstdtl-rstinfo-coupon__inner">
                <p className="rstdtl-rstinfo-coupon__subject">{coupon.couponSubject}</p>
                <p className="rstdtl-rstinfo-coupon__description"> {coupon.couponDescription} </p>
                <p className="rstdtl-rstinfo-coupon__btn-wrap">
                  <span className="rstdtl-rstinfo-coupon__btn">{coupon.couponBtn}</span>
                </p>
              </div>
            </a>
          </div>
        )
      })}

      <p className="rstdtl-rstinfo-coupon-more">
        <a className="icon-b-circle-orange" href={`${topCoupon[0].couponTarget}`}>
          <strong>
            {topCoupon[0].couponMoreText1}2{topCoupon[0].couponMoreText2}
          </strong>
          {topCoupon[0].couponMoreText3}
        </a>
      </p>
      <ul className="rstdtl-rstinfo-coupon-notice">
        <li>{topCoupon[0].couponNotice}</li>
      </ul>
    </div>
  )
}
