import React, { useEffect, useRef, useState } from 'react'
import '../tabelog1.css'
import '../tabelog2.css'
import { decrement, increment, clickImg } from './imgSlice'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

export const TopHygiene: React.FC = () => {
  return (
    <div className="rstdtl-hygiene">
      <div className="rstdtl-hygiene__link-target" id="hygiene-data"></div>
      <div className="rstdtl-heading">
        <h3 className="rstdtl-heading__title">感染症対策</h3>
      </div>
      <table className="rstdtl-hygiene__table">
        <tbody>
          <tr>
            <th>
              <p className="rstdtl-hygiene__item-name rstdtl-hygiene__item-name--instore">店内</p>
            </th>
            <td>
              <p className="gly-b-check rstdtl-hygiene__data">定期的な換気</p>
              <p className="gly-b-check rstdtl-hygiene__data">隣客との距離確保または間仕切りあり</p>
            </td>
          </tr>
          <tr>
            <th>
              <p className="rstdtl-hygiene__item-name rstdtl-hygiene__item-name--customer">お客様</p>
            </th>
            <td>
              <p className="gly-b-check rstdtl-hygiene__data">手指消毒液の用意</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="rstinfo-edit-navi">
        <div className="rstdtl-notice u-text-notice">
          <p>店舗にご登録いただいた情報を掲載しています。感染症対策の実施状況詳細やご不明点については、店舗までご確認ください。</p>
          <p>
            Go To Eatキャンペーン参加店舗では、
            <a href="http://user-help.tabelog.com/sanitations_information">ガイドライン</a>
            に沿った感染症対策遵守に同意しています。
          </p>
          <p>
            <a className="icon-b-arrow-orange js-analytics" href="https://tabelog.com/support/inquiry?rcd=13019285&amp;type=36">
              内容に誤りがある場合
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
