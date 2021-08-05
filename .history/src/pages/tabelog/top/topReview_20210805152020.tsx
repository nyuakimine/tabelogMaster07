import React, { useEffect, useRef, useState } from 'react'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import '../tabelog1.css'
import '../tabelog2.css'

export const TopReview: React.FC = () => {
  const topReview = useSelector((state: RootState) => state.topReviewSlice.data)

  return topReview === null ? (
    <h2>loading...</h2>
  ) : (
    <div id="contents-review" className="rstdtl-top-rvwlst" data-login="true">
      <div className="rstdtl-heading">
        <h3 className="rstdtl-heading__title rstdtl-heading__title--btn">
          口コミ
          <span className="c-icon-help c-icon-help--light">
            <a href="http://user-help.tabelog.com/r_about_review" target="_blank" rel="noopener noreferrer" className="c-icon-help__btn">
              ？
            </a>
          </span>
        </h3>
        <p className="rstdtl-heading__option">
          <a title="口コミを投稿する" className="c-btn c-btn--s c-btn--success js-no-history" href="#edit-review/13019285">
            投稿する
          </a>
        </p>
      </div>
      <p
        className="js-show-encourage-follow-modal-rd p-encourage-follow-banner js-analytics"
        data-analytics-btn="rd_follow_recommend_login"
      >
        <span className="p-encourage-follow-banner__contents">
          <span className="p-encourage-follow-banner__icons">
            <img
              alt=""
              src="https://tblg.k-img.com/images/restaurant/image/encourage_follow_banner_icons.png"
              width="106"
              height="42"
              className="loading"
              data-was-processed="true"
            />
          </span>
          <span className="p-encourage-follow-banner__title">好みのあう人をフォローすると、その人のオススメのお店から探せます。</span>
        </span>
      </p>

      <ul className="rstdtl-top-rvwlst__list js-pickup-rvw-contents">
        {topReview.slice(0, 3).map((review, idx) => {
          return (
            <li className="pickup is-official-pickup clearfix" key={idx}>
              <div className="reviewer-data js-pickup-rvwr-data">
                <p className="reviewer-photo">
                  <a href={`${review.topImgPath1}`} target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://tblg.k-img.com/user/images/Profile/161/30x30_161396.jpg?1627669750"
                      width="30"
                      height="30"
                      alt="kazuchi"
                      className="loading"
                      data-was-processed="true"
                    />
                  </a>
                </p>
                <p className="reviewer-name auth-mobile">
                  <a href={`${review.topImgPath1}`} target="_blank" rel="noopener noreferrer">
                    <span className="lev5">
                      kazuchi <span className="count">（3837）</span>
                    </span>
                  </a>
                </p>

                <p className="mark-auth-mobile">
                  <a href="http://user-help.tabelog.com/authentication_info">[携帯電話番号認証済]</a>
                </p>

                <div className="c-balloon c-balloon--top reviewer-data__rvwr-balloon is-hidden">
                  <p>
                    <span className="reviewer-data__rvwr-balloon-dtl">5,126ログ</span>
                    <span>行ったお店 4,512件</span>
                  </p>
                  <p>
                    <span className="reviewer-data__rvwr-balloon-dtl">フォロー 2,808人</span>
                    <strong>フォロワー 3,837人</strong>
                  </p>
                </div>
              </div>
              <div
                className="rstdtl-rvw rstdtl-rvw--pickup js-rstdtl-rvw"
                data-detail-url="/tokyo/A1302/A130201/13019285/dtlrvwlst/B115581589/?lid=owner_pickup_review"
              >
                <p className="rstdtl-rvw-pickup rstdtl-rvw-pickup--owner">
                  <strong className="rstdtl-rvw-pickup__title rstdtl-rvw-pickup__title--owner">
                    <span className="rstdtl-rvw-pickup__text-owner">お店が選ぶピックアップ！口コミ</span>
                  </strong>
                </p>
                <h4 className="rstdtl-rvw__title">
                  <a href="/tokyo/A1302/A130201/13019285/dtlrvwlst/B115581589/?lid=owner_pickup_review">
                    <strong>{review.rstdtlRvwTitle}</strong>
                  </a>
                </h4>
                <div className="rstdtl-rvw__rvw rstdtl-rvw__rvw--setphoto clearfix">
                  <p className="rstdtl-rvw__comment">
                    {review.clearfixComment}
                    <a className="rstdtl-rvw__rvw-more" href="/tokyo/A1302/A130201/13019285/dtlrvwlst/B115581589/?lid=owner_pickup_review">
                      続きを読む»
                    </a>
                  </p>
                  <p className="rstdtl-rvw__photo">
                    <a href="/tokyo/A1302/A130201/13019285/dtlrvwlst/B115581589/">
                      <img
                        src="https://tblg.k-img.com/restaurant/images/Rvw/4044/50x50_square_4044607.jpg"
                        width="50"
                        height="50"
                        alt="吾照里 - 外観写真:お店の看板です。韓国酒家・韓国家庭料理　吾照里　って書いていますね。"
                        className="loading"
                        data-was-processed="true"
                      />
                    </a>
                  </p>
                </div>
                <div className="rstdtl-rvw__dtl">
                  <div className="like-count rstdtl-rvw__dtl-like-count">
                    <span className="like-count__count js-count">24</span>
                    <a target="_blank" rel="noopener noreferrer" className="like-count__help" href="http://user-help.tabelog.com/?p=695">
                      ？
                    </a>
                  </div>
                  <p className="rstdtl-rvw__dtl-date">訪問：{review.rvwDtlDate}</p>
                  <p className="c-rating-v2 rstdtl-rvw__dtl-rating rstdtl-rvw__dtl-rating--dinner u-clearfix c-rating-v2--val35">
                    <span className="rstdtl-rvw-c-rating-v2__time rstdtl-rvw-c-rating-v2__time_dinner gly-b-dinner2">夜の点数</span>
                    <i className="c-rating-v2__star rstdtl-rvw-c-rating-v2__star"></i>
                  </p>
                  <p className="c-rating-v2 rstdtl-rvw__dtl-rating rstdtl-rvw__dtl-rating--lunch u-clearfix c-rating-v2--val35">
                    <span className="rstdtl-rvw-c-rating-v2__time rstdtl-rvw-c-rating-v2__time_lunch gly-b-lunch2">昼の点数</span>
                    <i className="c-rating-v2__star rstdtl-rvw-c-rating-v2__star"></i>
                  </p>
                  <p className="rstdtl-rvw__visit-count">{review.likeCount}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <p className="rstdtl-top-rvwlst__more-link">
        <a href="/tokyo/A1302/A130201/13019285/dtlrvwlst/" className="c-link-circle">
          <span>
            <strong>口コミ</strong>をもっと見る （<strong>125</strong>件）
          </span>
        </a>
      </p>
    </div>
  )
}
