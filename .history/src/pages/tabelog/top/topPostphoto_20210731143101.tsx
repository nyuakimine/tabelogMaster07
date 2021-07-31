import React, { useEffect, useRef, useState } from 'react'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import '../tabelog1.css'
import '../tabelog2.css'

export const TopPostphoto: React.FC = () => {
  const topPostphoto = useSelector((state: RootState) => state.topPostphoto.data)
  return topPostphoto === null ? (
    <h2>loading...</h2>
  ) : (
    <div className="rstdtl-top-postphoto">
      <div className="rstdtl-heading rstdtl-top-postphoto__heading">
        <h3 className="rstdtl-heading__title rstdtl-heading__title--btn">{`${topPostphoto[0].headingTitle}`}</h3>
        <p className="rstdtl-heading__option">
          <a title="写真を投稿する" className="c-btn c-btn--s c-btn--success" href="https://ssl.tabelog.com/account/login/">
            投稿する
          </a>
        </p>
      </div>
      <ul className="rstdtl-top-postphoto__list">
        {topPostphoto.slice(0, 10).map((img, idx) => {
          return (
            <li className="rstdtl-top-postphoto__item" key={idx}>
              <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="153839147" data-analytics-img-index="0">
                <a href={`${img.topBigPostphotocolPath}`} data-id="153839147" title="吾照里 - " className="js-imagebox-trigger">
                  <img
                    width="125"
                    height="125"
                    alt="吾照里 - "
                    src={`${img.topPostphotocolPath}`}
                    className="loading"
                    data-was-processed="true"
                  />
                </a>
              </p>
            </li>
          )
        })}
        {/* <li className="rstdtl-top-postphoto__item">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="152921317" data-analytics-img-index="1">
            <a
              href={`${topPostphoto[0].topPostphotoMoreLink}`}
              data-id="152921317"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/152921/150x150_square_152921317.jpg"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </p>
        </li> */}
      </ul>
      <div className="rstdtl-top-postphoto__more-link-wrap">
        <button type="button" className="c-btn c-btn--link rstdtl-top-postphoto__more-link js-images-more-link">
          もっと見る
        </button>
        <div className="rstdtl-top-postphoto__more-link-target js-hidden-photolist-link is-hidden">
          <a className="icon-b-circle-orange" href={`${topPostphoto[0].topPostphotoMoreLink}`}>
            <strong>写真</strong>をもっと見る
          </a>
        </div>
      </div>
    </div>
  )
}
