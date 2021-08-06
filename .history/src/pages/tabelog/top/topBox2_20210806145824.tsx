import React, { useEffect, useRef, useState } from 'react'
// import './tabelog1.css'
// import './tabelog2.css'
import './tabelog3.css'
import './modal.css'
import { decrement, increment, clickImg } from './modalSlice'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

export const TopBox2: React.FC = () => {
  const topBox2 = useSelector((state: RootState) => state.topBasicInformation.data)
  return topBox2 === null ? (
    <h2>loading...</h2>
  ) : (
    <table className="c-table c-table--form rstinfo-table__table">
      <tbody>
        <tr>
          <th>席数</th>
          <td>
            <p>{topBox2.box2SeatsNumber}</p>
            <p className="rstinfo-table__notice"></p>
          </td>
        </tr>
        <tr>
          <th>個室</th>
          <td>
            <p>{topBox2.box2PrivateRoom}</p>
            <p className="rstinfo-table__notice"></p>
            <p className="rstinfo-table__notice"></p>
          </td>
        </tr>
        <tr>
          <th>貸切</th>
          <td>
            <p>{topBox2.box2Reserved} </p>
            <p className="rstinfo-table__notice"></p>
          </td>
        </tr>

        <tr>
          <th>禁煙・喫煙</th>
          <td>
            <p className="p-input-form__line">{topBox2.box2Smoking}</p>
            <p className="rstinfo-table__notice"></p>
          </td>
        </tr>
        <tr>
          <th>駐車場</th>
          <td>
            <p>{topBox2.box2ParkingLot}</p>
          </td>
        </tr>

        <tr>
          <th>空間・設備</th>
          <td>
            <p>{topBox2.box2SpaceEquipment}</p>
          </td>
        </tr>

        <tr>
          <th>携帯電話</th>
          <td>
            <p>{topBox2.box2MobilePhone}</p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
