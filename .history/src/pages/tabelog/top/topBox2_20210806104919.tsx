import React, { useEffect, useRef, useState } from 'react'
// import './tabelog1.css'
// import './tabelog2.css'
import './tabelog3.css'
import './modal.css'
import { decrement, increment, clickImg } from './modalSlice'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

export const TopBox2: React.FC = () => {
  return (
    <table className="c-table c-table--form rstinfo-table__table">
      <tbody>
        <tr>
          <th>席数</th>
          <td>
            <p>90席</p>
            <p className="rstinfo-table__notice">（半個室のご利用は15名様から18名様迄）</p>
          </td>
        </tr>
        <tr>
          <th>個室</th>
          <td>
            <p>有 </p>
            <p className="rstinfo-table__notice">（10～20人可）</p>
            <p className="rstinfo-table__notice">半個室 15名～18名 個室 8名～13名 お店貸し切り68名～80名（7000コースのみ受付可）</p>
          </td>
        </tr>
        <tr>
          <th>貸切</th>
          <td>
            <p>可 </p>
            <p className="rstinfo-table__notice">（50人以上可）</p>
          </td>
        </tr>

        <tr>
          <th>禁煙・喫煙</th>
          <td>
            <p className="p-input-form__line">全席禁煙</p>
            <p className="rstinfo-table__notice">4月より店内全席禁煙になりました。</p>
          </td>
        </tr>
        <tr>
          <th>駐車場</th>
          <td>
            <p>無</p>
          </td>
        </tr>

        <tr>
          <th>空間・設備</th>
          <td>
            <p>落ち着いた空間、ソファー席あり、座敷あり、掘りごたつあり、バリアフリー</p>
          </td>
        </tr>

        <tr>
          <th>携帯電話</th>
          <td>
            <p>docomo、au、SoftBank、Y!mobile</p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
