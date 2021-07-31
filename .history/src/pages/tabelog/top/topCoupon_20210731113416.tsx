import React, { useEffect, useRef, useState } from 'react'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import '../tabelog1.css'
import '../tabelog2.css'

interface ifProps {
  id: number
  couponBtn: string
  couponDescription: string
  couponMoreText1: string
  couponMoreText2: string
  couponMoreText3: string
  couponNotice: string
  couponSubject: string
  couponTarget: string
  headingTitle: string
}

interface pIf {
  data: ifProps[]
}

export const TopCoupon: React.FC<pIf> = ({ data }) => {
  //const topCoupon = useSelector((state: RootState) => state.topCoupon.data)
  const couponLength = useSelector((state: RootState) => state.topCoupon.data.data.length)
  console.log('couponLengthcouponLength', couponLength)
  return couponLength === null ? (
    <h2>loading...</h2>
  ) : (
    <div className="rstdtl-coupon">
      <span className="page-link" id="rst-coupon"></span>
      <div className="rstdtl-heading">
        <h3 className="rstdtl-heading__title">{/* {data[0].headingTitle} */}</h3>
      </div>
      {data.map((coupon, idx) => {
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
        <a
          className="icon-b-circle-orange"
          // href={`${data[0].couponTarget}`}
        >
          <strong>
            {/* {data[0].couponMoreText1} */}
            {couponLength}
            {/* {data[0].couponMoreText2} */}
          </strong>
          {/* {data[0].couponMoreText3} */}
        </a>
      </p>
      <ul className="rstdtl-rstinfo-coupon-notice">{/* <li>{data[0].couponNotice}</li> */}</ul>
    </div>
  )
}
