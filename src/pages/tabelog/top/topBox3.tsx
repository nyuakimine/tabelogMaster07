import React, { useEffect, useRef, useState } from 'react'
// import './tabelog1.css'
// import './tabelog2.css'
import './tabelog3.css'
import './modal.css'
import { decrement, increment, clickImg } from './modalSlice'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

export const TopBox3: React.FC = () => {
  const topBox3 = useSelector((state: RootState) => state.topBasicInformation.data)
  return topBox3 === null ? (
    <h2>loading...</h2>
  ) : (
    <table className="c-table c-table--form rstinfo-table__table">
      <tbody>
        <tr>
          <th>コース</th>
          <td>
            <p>{topBox3.box3MenuCourse}</p>
          </td>
        </tr>

        <tr>
          <th>ドリンク</th>
          <td>
            <p>{topBox3.box3Drink}</p>
          </td>
        </tr>

        <tr>
          <th>料理</th>
          <td>
            <p>{topBox3.box3Cuisine}</p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
