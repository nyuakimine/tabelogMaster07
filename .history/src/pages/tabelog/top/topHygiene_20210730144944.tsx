import React, { useEffect, useRef, useState } from 'react'
import '../tabelog1.css'
import '../tabelog2.css'
import './img.css'
import { decrement, increment, clickImg } from './imgSlice'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

export const TopHygiene: React.FC = () => {
  const topHygiene = useSelector((state: RootState) => state.topHygieneListSlice.data)
  console.log()
  return topHygiene === null ? (
    <h2>loading...</h2>
  ) : (
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
            <a href="http://user-help.tabelog.com/sanitations_information">{topHygiene.textNotice3}</a>
            {topHygiene.textNotice4}
          </p>
          <p>
            <a className="icon-b-arrow-orange js-analytics" href="https://tabelog.com/support/inquiry?rcd=13019285&amp;type=36">
              {topHygiene.textNotice5}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
