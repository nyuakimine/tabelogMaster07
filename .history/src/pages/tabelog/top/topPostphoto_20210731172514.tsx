import React, { useEffect, useRef, useState } from 'react'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import '../tabelog1.css'
import '../tabelog2.css'
import './bigImgModal.css'
import { decrement, increment, clickImg } from './imgModalSlice'
interface ifProps {
  id: number
  headingTitle: string
  topPostphotoMoreLink: string
  topPostphotocolPath: string
  topBigPostphotocolPath: string
}

interface pIf {
  data: ifProps[]
}
export const TopPostphoto: React.FC<pIf> = ({ data }) => {
  const imgLength = useSelector((state: RootState) => state.topPostphoto.data.data.length)
  const count = useSelector((state: RootState) => state.imgMadal.counter)
  const currentBigImage = data.filter((num, index) => index === count)[0] as ifProps
  console.log('imgModalCurrentBigImage', currentBigImage)

  const showMoreReviewsBtn = () => {
    const showList = document.getElementsByClassName('c-btn--link')[0] as HTMLElement
    showList.style.display = 'none'

    const cshowList = document.getElementsByClassName('showImg')[0] as HTMLElement
    cshowList.style.display = 'block'
    const imgShowList = document.getElementsByClassName('rstdtl-top-postphoto__more-link-target')[0] as HTMLElement
    imgShowList.style.display = 'block'
  }

  const dispatch = useDispatch()
  return currentBigImage === undefined ? (
    <h2>loading...</h2>
  ) : (
    <div>
      <div className="rstdtl-top-postphoto">
        <div className="rstdtl-heading rstdtl-top-postphoto__heading">
          <h3 className="rstdtl-heading__title rstdtl-heading__title--btn">{data[0].headingTitle}</h3>
          <p className="rstdtl-heading__option">
            <a title="写真を投稿する" className="c-btn c-btn--s c-btn--success" href="https://ssl.tabelog.com/account/login/">
              投稿する
            </a>
          </p>
        </div>
        <ul className="rstdtl-top-postphoto__list">
          {data.slice(0, 10).map((img, idx) => {
            return (
              <li className="rstdtl-top-postphoto__item" key={idx}>
                <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="153839147" data-analytics-img-index="0">
                  <a data-id="153839147" title="吾照里 - " className="js-imagebox-trigger">
                    <img
                      width="125"
                      height="125"
                      alt="吾照里 - "
                      src={`${img.topPostphotocolPath}`}
                      className="loading"
                      data-was-processed="true"
                      onClick={() => dispatch(clickImg(idx))}
                    />
                  </a>
                </p>
              </li>
            )
          })}
          <div className="showImg" style={{ display: 'none' }}>
            {data.slice(10).map((img, idx) => {
              return (
                <li className="rstdtl-top-postphoto__item" key={idx}>
                  <p className="rstdtl-top-postphoto__photo js-analytics" data-analytics-img-id="152921317" data-analytics-img-index="1">
                    <a href={`${img.topBigPostphotocolPath}`} data-id="152921317" title="吾照里 - " className="js-imagebox-trigger">
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
          </div>
        </ul>
        <div className="rstdtl-top-postphoto__more-link-wrap">
          <button
            type="button"
            className="c-btn c-btn--link rstdtl-top-postphoto__more-link js-images-more-link"
            onClick={showMoreReviewsBtn}
          >
            もっと見る
          </button>
          <div className="rstdtl-top-postphoto__more-link-target js-hidden-photolist-link is-hidden">
            <a className="icon-b-circle-orange" href={`${data[0].topPostphotoMoreLink}`}>
              <strong>写真</strong>をもっと見る
            </a>
          </div>
        </div>
      </div>

      <div className="js-imagebox-container p-modal-image is-open" style={{ display: 'none' }}>
        <div className="js-main-view-wrap p-modal-image__main">
          <div className="js-imagebox-navi p-modal-image__nav">
            <a
              className="js-imagebox-navi-prev p-modal-image__nav-btn-prev"
              href="#"
              style={{ display: 'none' }}
              onClick={() => dispatch(decrement(imgLength))}
            ></a>
            <a className="js-imagebox-navi-next p-modal-image__nav-btn-next" href="#" onClick={() => dispatch(increment(imgLength))}></a>
          </div>
          <div className="p-modal-image__image">
            <img className="js-imagebox-photo p-modal-image__image-photo" src={`${currentBigImage.topBigPostphotocolPath}`} />
            <div className="js-imagebox-loader p-modal-image__loader">
              <span className="c-loader c-loader--inverse c-loader--s"></span>
            </div>
          </div>
        </div>
        <div className="js-imagebox-footer p-modal-image__footer">
          <div id="tabelog-lightbox-information-153839147" className="photo-lightbox__photo-information-box">
            <div className="photo-lightbox__photo-information-user">
              <ul className="photo-lightbox__photo-information-list">
                <li className="photo-lightbox__photo-information-item">
                  <div className="like-button photo-lightbox__like-button">
                    <div className="js-like-button-ReviewImage-153839147 like-btn">
                      <a className="like-btn__label" data-proc="add-like">
                        <span>いいね！</span>
                      </a>
                      <div className="like-btn__count js-like-btn-count is-hidden">
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="photo-lightbox__photo-information-item">
                  <p className="photo-lightbox__post-data">2021/06 登録</p>
                </li>
              </ul>

              <ul className="photo-lightbox__link-list">
                <li className="photo-lightbox__link-item">
                  <p className="photo-lightbox__link">
                    <a
                      target="_blank"
                      className="c-btn c-btn--link photo-lightbox__link-btn"
                      href="https://tabelog.com/imgview/original?id=r08490153839147"
                      rel="noreferrer"
                    >
                      オリジナル写真を表示
                    </a>
                  </p>
                </li>
                <li className="photo-lightbox__link-item">
                  <a className="c-btn photo-lightbox__more-link" href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlphotolst/">
                    すべての写真を見る<em>（531）</em>
                  </a>{' '}
                </li>
              </ul>
            </div>
            <p className="photo-lightbox__photo-information-notice">
              写真はユーザーが食事をした当時の内容ですので、最新の情報とは異なる可能性があります。
            </p>
          </div>
        </div>
        <div className="image-data-box">
          <div className="image-data">
            <div className="js-imagebox-side">
              <div id="tabelog-lightbox-side-153839147" className="photo-lightbox-side">
                <div className="photo-lightbox-side__close js-close-trigger">閉じる</div>

                <div className="photo-lightbox-side__userinfo-box">
                  <div className="photo-lightbox-side__user-box clearfix">
                    <p className="photo-lightbox-side__user-icon">
                      <a href="https://tabelog.com/rvwr/008699012/" target="_blank" rel="noreferrer">
                        <img
                          src="https://tblg.k-img.com/user/images/Profile/8699/30x30_8699012.jpg?1623988972"
                          alt="豚汁番長"
                          className="photo-lightbox-side__user-icon-img"
                        />
                      </a>
                    </p>
                    <p className="photo-lightbox-side__user-name">
                      <span>
                        <a target="_blank" href="https://tabelog.com/rvwr/008699012/" rel="noreferrer">
                          豚汁番長
                        </a>
                      </span>
                      さんの写真
                    </p>
                  </div>
                  <p className="photo-lightbox-side__rstname">
                    <a target="_blank" href="/tokyo/A1302/A130201/13019285/">
                      吾照里 東京駅八重洲口店
                    </a>
                  </p>
                  <p className="photo-lightbox-side__image-comment"></p>
                </div>

                <div className="photo-lightbox-side__rvw-box">
                  <p className="photo-lightbox-side__caption-title">この写真の口コミ</p>
                  <p className="photo-lightbox-side__rvw-title">
                    <a href="/tokyo/A1302/A130201/13019285/dtlrvwlst/B430301945/#130426749" target="_blank">
                      <strong>朝ごはん</strong>
                    </a>
                  </p>
                  <p className="photo-lightbox-side__comment">
                    吾照里東京駅八重洲口店で朝食 7:30開店 朝定食が...
                    <a href="/tokyo/A1302/A130201/13019285/dtlrvwlst/B430301945/#130426749" target="_blank">
                      続きを読む»
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-modal-image__overlay js-modal-overlay-clickarea"></div>
      </div>
    </div>
  )
}
