import React, { useEffect, useRef, useState } from 'react'
import './tabelog1.css'
import './tabelog2.css'
import './modal.css'
import { decrement, increment, clickImg } from './modalSlice'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
interface ifProps {
  id: number
  kodawariPhoto: string
  kodawariHeadingTitle: string
  kodawariTitle: string
  kodawaricolLabel: string
  kodawariModalComment: string
}

interface pIf {
  data: ifProps[]
}
export const TopKodawari: React.FC<pIf> = ({ data }) => {
  const count = useSelector((state: RootState) => state.madal.counter)
  const imgLength = useSelector((state: RootState) => state.topKodawariSlice.data.data.length)
  const currentBigImage = data.filter((num, index) => index === count)[0] as ifProps

  const dispatch = useDispatch()

  const showMoreReviewsBtn = () => {
    const showList = document.getElementsByClassName('c-overlay')[0] as HTMLElement
    showList.style.display = 'block'
    const showModal = document.getElementsByClassName('c-modal__contents')[0] as HTMLElement
    showModal.style.display = 'block'
  }
  const closeShowMoreReviewsBtn = () => {
    const cshowList = document.getElementsByClassName('c-overlay')[0] as HTMLElement
    cshowList.style.display = 'none'
  }
  const closeModal = e => {
    let a = e || window.event //浏览器兼容性
    let elem = a.target || a.srcElement
    while (elem) {
      //循环判断至跟节点，防止点击的是div子元素
      if (elem.id && elem.id === 'close') {
        return
      }
      elem = elem.parentNode
    }
    const closeModalList = document.getElementsByClassName('c-overlay')[0] as HTMLElement
    closeModalList.style.display = 'none' //点击的不是div或其子元素
  }
  console.log('TopKodawariData', data)
  return currentBigImage === undefined ? (
    <h2>loading...</h2>
  ) : (
    <div className="rstdtl-matome">
      <h3 className="rstdtl-matome__heading">吾照里 東京駅八重洲口店が紹介されているグルメ情報まとめ</h3>
      <ul className="rstdtl-matome__list">
        <li className="rstdtl-matome__box clearfix">
          <div className="rstdtl-matome__photo">
            <a href="/matome/15920/">
              <img
                style="medium"
                alt="東京駅周辺の焼肉ランチはココ！予算別おすすめ店6選"
                src="https://tblg.k-img.com/resize/150x150c/restaurant/images/matome/15920/162d73b47abb92554978953491a188d4.jpg?token=bf8faf2&amp;api=v2"
                width="50"
                height="50"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </div>
          <div className="rstdtl-matome__text">
            <p className="rstdtl-matome__text-title">
              <strong>
                <a href="/matome/15920/">東京駅周辺の焼肉ランチはココ！予算別おすすめ店6選</a>
              </strong>
            </p>
            <p className="rstdtl-matome__text-desc">
              <span>
                東京の玄関口である東京駅の周辺には、百貨店やお土産店などショッピングだけでなく、さまざまなグルメが楽しめます。ランチはしっかり、午後の仕事に備えたいときに食べたい焼...
              </span>
              <a href="/matome/15920/">記事を読む»</a>
            </p>
            <div className="rstdtl-matome-rvwr-info">
              <p className="rstdtl-matome-rvwr-info__image">
                <a href="/rvwr/003152767/matomeLst/">
                  <img
                    alt="食べログまとめ編集部"
                    src="https://tblg.k-img.com/user/images/Profile/3152/30x30_3152767.jpg?1563513472"
                    width="20"
                    height="20"
                    className="loading"
                    data-was-processed="true"
                  />
                </a>
              </p>
              <p className="rstdtl-matome-rvwr-info__name">
                <a href="/rvwr/003152767/matomeLst/">食べログまとめ編集部</a>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
