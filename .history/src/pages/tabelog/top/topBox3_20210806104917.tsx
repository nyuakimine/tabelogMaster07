import React, { useEffect, useRef, useState } from 'react'
// import './tabelog1.css'
// import './tabelog2.css'
import './tabelog3.css'
import './modal.css'
import { decrement, increment, clickImg } from './modalSlice'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

export const TopBox3: React.FC = () => {
  return (
    <table className="c-table c-table--form rstinfo-table__table">
      <tbody>
        <tr>
          <th>コース</th>
          <td>
            <p>飲み放題</p>
          </td>
        </tr>

        <tr>
          <th>ドリンク</th>
          <td>
            <p>日本酒あり、焼酎あり、ワインあり、カクテルあり、日本酒にこだわる、焼酎にこだわる、カクテルにこだわる</p>
          </td>
        </tr>

        <tr>
          <th>料理</th>
          <td>
            <p>野菜料理にこだわる、健康・美容メニューあり、朝食・モーニングあり</p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
