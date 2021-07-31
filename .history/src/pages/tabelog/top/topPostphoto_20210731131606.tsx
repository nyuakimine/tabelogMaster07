import React, { useEffect, useRef, useState } from 'react'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import '../tabelog1.css'
import '../tabelog2.css'

export const TopPostphoto: React.FC = () => {
  return (
    <div className="rstdtl-top-postphoto">
      <div className="rstdtl-heading rstdtl-top-postphoto__heading">
        <h3 className="rstdtl-heading__title rstdtl-heading__title--btn">投稿写真</h3>
        <p className="rstdtl-heading__option">
          <a title="写真を投稿する" className="c-btn c-btn--s c-btn--success" href="https://ssl.tabelog.com/account/login/">
            投稿する
          </a>
        </p>
      </div>
      <ul className="rstdtl-top-postphoto__list">
        <li className="rstdtl-top-postphoto__item">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="153839147" data-analytics-img-index="0">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/153839/640x640_rect_153839147.jpg"
              data-id="153839147"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/153839/150x150_square_153839147.jpg"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </p>
        </li>
        <li className="rstdtl-top-postphoto__item">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="152921317" data-analytics-img-index="1">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/152921/640x640_rect_152921317.jpg"
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
        </li>
        <li className="rstdtl-top-postphoto__item">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="138876286" data-analytics-img-index="2">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/138876/640x640_rect_138876286.jpg"
              data-id="138876286"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/138876/150x150_square_138876286.jpg"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </p>
        </li>
        <li className="rstdtl-top-postphoto__item">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="138876291" data-analytics-img-index="3">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/138876/640x640_rect_138876291.jpg"
              data-id="138876291"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/138876/150x150_square_138876291.jpg"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </p>
        </li>
        <li className="rstdtl-top-postphoto__item">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="138122215" data-analytics-img-index="4">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/138122/640x640_rect_138122215.jpg"
              data-id="138122215"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/138122/150x150_square_138122215.jpg"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </p>
        </li>
        <li className="rstdtl-top-postphoto__item">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="138122217" data-analytics-img-index="5">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/138122/640x640_rect_138122217.jpg"
              data-id="138122217"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/138122/150x150_square_138122217.jpg"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </p>
        </li>
        <li className="rstdtl-top-postphoto__item">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="136775511" data-analytics-img-index="6">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/136775/640x640_rect_136775511.jpg"
              data-id="136775511"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/136775/150x150_square_136775511.jpg"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </p>
        </li>
        <li className="rstdtl-top-postphoto__item">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="137585314" data-analytics-img-index="7">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/137585/640x640_rect_137585314.jpg"
              data-id="137585314"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/137585/150x150_square_137585314.jpg"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </p>
        </li>
        <li className="rstdtl-top-postphoto__item">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="137954589" data-analytics-img-index="8">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/137954/640x640_rect_137954589.jpg"
              data-id="137954589"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/137954/150x150_square_137954589.jpg"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </p>
        </li>
        <li className="rstdtl-top-postphoto__item">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="120885444" data-analytics-img-index="9">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/120885/640x640_rect_120885444.jpg"
              data-id="120885444"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/120885/150x150_square_120885444.jpg"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </p>
        </li>
        <li className="rstdtl-top-postphoto__item js-hidden-image is-hidden">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="120885445" data-analytics-img-index="10">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/120885/640x640_rect_120885445.jpg"
              data-id="120885445"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/120885/150x150_square_120885445.jpg"
              />
            </a>
          </p>
        </li>
        <li className="rstdtl-top-postphoto__item js-hidden-image is-hidden">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="120885446" data-analytics-img-index="11">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/120885/640x640_rect_120885446.jpg"
              data-id="120885446"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/120885/150x150_square_120885446.jpg"
              />
            </a>
          </p>
        </li>
        <li className="rstdtl-top-postphoto__item js-hidden-image is-hidden">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="120885447" data-analytics-img-index="12">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/120885/640x640_rect_120885447.jpg"
              data-id="120885447"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/120885/150x150_square_120885447.jpg"
              />
            </a>
          </p>
        </li>
        <li className="rstdtl-top-postphoto__item js-hidden-image is-hidden">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="120885448" data-analytics-img-index="13">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/120885/640x640_rect_120885448.jpg"
              data-id="120885448"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/120885/150x150_square_120885448.jpg"
              />
            </a>
          </p>
        </li>
        <li className="rstdtl-top-postphoto__item js-hidden-image is-hidden">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="101030189" data-analytics-img-index="14">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/101030/640x640_rect_101030189.jpg"
              data-id="101030189"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/101030/150x150_square_101030189.jpg"
              />
            </a>
          </p>
        </li>
        <li className="rstdtl-top-postphoto__item js-hidden-image is-hidden">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="101030190" data-analytics-img-index="15">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/101030/640x640_rect_101030190.jpg"
              data-id="101030190"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/101030/150x150_square_101030190.jpg"
              />
            </a>
          </p>
        </li>
        <li className="rstdtl-top-postphoto__item js-hidden-image is-hidden">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="101030191" data-analytics-img-index="16">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/101030/640x640_rect_101030191.jpg"
              data-id="101030191"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/101030/150x150_square_101030191.jpg"
              />
            </a>
          </p>
        </li>
        <li className="rstdtl-top-postphoto__item js-hidden-image is-hidden">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="101030193" data-analytics-img-index="17">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/101030/640x640_rect_101030193.jpg"
              data-id="101030193"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/101030/150x150_square_101030193.jpg"
              />
            </a>
          </p>
        </li>
        <li className="rstdtl-top-postphoto__item js-hidden-image is-hidden">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="101030421" data-analytics-img-index="18">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/101030/640x640_rect_101030421.jpg"
              data-id="101030421"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/101030/150x150_square_101030421.jpg"
              />
            </a>
          </p>
        </li>
        <li className="rstdtl-top-postphoto__item js-hidden-image is-hidden">
          <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="97723831" data-analytics-img-index="19">
            <a
              href="https://tblg.k-img.com/restaurant/images/Rvw/97723/640x640_rect_97723831.jpg"
              data-id="97723831"
              title="吾照里 - "
              className="js-imagebox-trigger"
            >
              <img
                width="125"
                height="125"
                alt="吾照里 - "
                src="https://tblg.k-img.com/restaurant/images/Rvw/97723/150x150_square_97723831.jpg"
              />
            </a>
          </p>
        </li>
      </ul>
      <div className="rstdtl-top-postphoto__more-link-wrap">
        <button type="button" className="c-btn c-btn--link rstdtl-top-postphoto__more-link js-images-more-link">
          もっと見る
        </button>
        <div className="rstdtl-top-postphoto__more-link-target js-hidden-photolist-link is-hidden">
          <a className="icon-b-circle-orange" href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlphotolst/smp2/">
            <strong>写真</strong>をもっと見る
          </a>
        </div>
      </div>
    </div>
  )
}
