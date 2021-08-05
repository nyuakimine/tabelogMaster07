import React, { useEffect, useRef, useState } from 'react'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import '../tabelog1.css'
import '../tabelog2.css'

export const TopReview: React.FC = () => {
  const topNotice = useSelector((state: RootState) => state.topNoticeCommentSlice.data)

  return topNotice === null ? (
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
        <li className="pickup is-official-pickup clearfix">
          <div className="reviewer-data js-pickup-rvwr-data">
            <p className="reviewer-photo">
              <a href="/rvwr/000161396/" target="_blank" rel="noopener">
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
              <a href="/rvwr/000161396/" target="_blank" rel="noopener">
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
                <strong>韓国の極上家庭料理を駅近で堪能できるお店です。</strong>
              </a>
            </h4>
            <div className="rstdtl-rvw__rvw rstdtl-rvw__rvw--setphoto clearfix">
              <p className="rstdtl-rvw__comment">
                今日は吾照里（東京駅八重洲口店）に行ってきました。 東京駅内の黒壁横丁にお店があります。 駅近で食べるには便利なお店です。
                お店の看板です。 韓国酒家・韓国家庭料理 吾照里 って書いていますね。 このお店は１９店舗もあるんですよ。
                渋谷が本店のようです。 お店の概観です。 全体的に木をふんだんに使っています。 高級感のあるお店って感じがしました。
                窓は格子状にな...
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
              <p className="rstdtl-rvw__dtl-date">訪問：2009/03</p>
              <p className="c-rating-v2 rstdtl-rvw__dtl-rating rstdtl-rvw__dtl-rating--dinner u-clearfix c-rating-v2--val35">
                <span className="rstdtl-rvw-c-rating-v2__time rstdtl-rvw-c-rating-v2__time_dinner gly-b-dinner2">夜の点数</span>
                <i className="c-rating-v2__star rstdtl-rvw-c-rating-v2__star"></i>
              </p>
              <p className="c-rating-v2 rstdtl-rvw__dtl-rating rstdtl-rvw__dtl-rating--lunch u-clearfix c-rating-v2--val35">
                <span className="rstdtl-rvw-c-rating-v2__time rstdtl-rvw-c-rating-v2__time_lunch gly-b-lunch2">昼の点数</span>
                <i className="c-rating-v2__star rstdtl-rvw-c-rating-v2__star"></i>
              </p>
              <p className="rstdtl-rvw__visit-count">1回</p>
            </div>
          </div>
        </li>

        <li className="clearfix">
          <div className="reviewer-data js-pickup-rvwr-data">
            <p className="reviewer-photo">
              <a href="/rvwr/003140931/" target="_blank" rel="noopener">
                <img
                  src="https://tblg.k-img.com/user/images/Profile/3140/30x30_3140931.jpg?1627616281"
                  width="30"
                  height="30"
                  alt="ゆっきー78682"
                  className="loading"
                  data-was-processed="true"
                />
              </a>
            </p>
            <p className="reviewer-name auth-mobile">
              <a href="/rvwr/003140931/" target="_blank" rel="noopener">
                <span className="lev3">
                  ゆっきー78682 <span className="count">（334）</span>
                </span>
              </a>
            </p>

            <p className="mark-auth-mobile">
              <a href="http://user-help.tabelog.com/authentication_info">[携帯電話番号認証済]</a>
            </p>

            <div className="c-balloon c-balloon--top reviewer-data__rvwr-balloon is-hidden">
              <p>
                <span className="reviewer-data__rvwr-balloon-dtl">894ログ</span>
                <span>行ったお店 726件</span>
              </p>
              <p>
                <span className="reviewer-data__rvwr-balloon-dtl">フォロー 159人</span>
                <strong>フォロワー 334人</strong>
              </p>
            </div>
          </div>
          <div
            className="rstdtl-rvw js-rstdtl-rvw"
            data-detail-url="/tokyo/A1302/A130201/13019285/dtlrvwlst/B436182688/?lid=unpickup_review"
          >
            <h4 className="rstdtl-rvw__title">
              <a href="/tokyo/A1302/A130201/13019285/dtlrvwlst/B436182688/?lid=unpickup_review">
                <strong>東京駅の黒塀横丁で、韓国料理♪</strong>
              </a>
            </h4>
            <div className="rstdtl-rvw__rvw rstdtl-rvw__rvw--setphoto clearfix">
              <p className="rstdtl-rvw__comment">
                今日のランチは、ちょっと足を延ばして 東京駅の地下一階黒塀横丁 「吾照里東京駅八重洲口店（オジョリ）」
                こちらは、ランチタイムが夕方17時までとありがたいですね！ 　 選...
                <a className="rstdtl-rvw__rvw-more" href="/tokyo/A1302/A130201/13019285/dtlrvwlst/B436182688/?lid=unpickup_review">
                  続きを読む»
                </a>
              </p>
              <p className="rstdtl-rvw__photo">
                <a href="/tokyo/A1302/A130201/13019285/dtlrvwlst/B436182688/">
                  <img
                    src="https://tblg.k-img.com/restaurant/images/Rvw/148233/50x50_square_148233488.jpg"
                    width="50"
                    height="50"
                    alt="吾照里 - "
                    className="loading"
                    data-was-processed="true"
                  />
                </a>
              </p>
            </div>

            <div className="rstdtl-rvw__dtl">
              <div className="like-count rstdtl-rvw__dtl-like-count">
                <span className="like-count__count js-count">33</span>
                <a target="_blank" rel="noopener noreferrer" className="like-count__help" href="http://user-help.tabelog.com/?p=695">
                  ？
                </a>
              </div>
              <p className="rstdtl-rvw__dtl-date">訪問：2021/03</p>
              <p className="c-rating-v2 rstdtl-rvw__dtl-rating rstdtl-rvw__dtl-rating--lunch u-clearfix c-rating-v2--val35">
                <span className="rstdtl-rvw-c-rating-v2__time rstdtl-rvw-c-rating-v2__time_lunch gly-b-lunch2">昼の点数</span>
                <i className="c-rating-v2__star rstdtl-rvw-c-rating-v2__star"></i>
              </p>
              <p className="rstdtl-rvw__visit-count">1回</p>
            </div>
          </div>
        </li>
        <li className="clearfix">
          <div className="reviewer-data js-pickup-rvwr-data">
            <p className="reviewer-photo">
              <a href="/rvwr/004093265/" target="_blank" rel="noopener">
                <img
                  src="https://tblg.k-img.com/user/images/Profile/4093/30x30_4093265.jpg?1626777670"
                  width="30"
                  height="30"
                  alt="parisjunko"
                  className="loading"
                  data-was-processed="true"
                />
              </a>
            </p>
            <p className="reviewer-name auth-mobile">
              <a href="/rvwr/004093265/" target="_blank" rel="noopener">
                <span className="lev4">
                  parisjunko <span className="count">（2079）</span>
                </span>
              </a>
            </p>

            <p className="mark-auth-mobile">
              <a href="http://user-help.tabelog.com/authentication_info">[携帯電話番号認証済]</a>
            </p>

            <div className="c-balloon c-balloon--top reviewer-data__rvwr-balloon is-hidden">
              <p>
                <span className="reviewer-data__rvwr-balloon-dtl">2,343ログ</span>
                <span>行ったお店 2,123件</span>
              </p>
              <p>
                <span className="reviewer-data__rvwr-balloon-dtl">フォロー 457人</span>
                <strong>フォロワー 2,079人</strong>
              </p>
            </div>
          </div>
          <div
            className="rstdtl-rvw js-rstdtl-rvw"
            data-detail-url="/tokyo/A1302/A130201/13019285/dtlrvwlst/B415900469/?lid=unpickup_review"
          >
            <h4 className="rstdtl-rvw__title">
              <a href="/tokyo/A1302/A130201/13019285/dtlrvwlst/B415900469/?lid=unpickup_review">
                <strong>五味、五色に基づいた韓国料理“元気の素”がいっぱい詰まっているオジョリ☆</strong>
              </a>
            </h4>
            <div className="rstdtl-rvw__rvw rstdtl-rvw__rvw--setphoto clearfix">
              <p className="rstdtl-rvw__comment">
                今日は八重洲駅前にある韓国料理に行こうと申し合わせしていたのですが、お昼から雨が降り始めたので八重洲の地下街“黒塀横丁”にある韓国料理屋さんにしました。絶えず満席で入れたことがあり...
                <a className="rstdtl-rvw__rvw-more" href="/tokyo/A1302/A130201/13019285/dtlrvwlst/B415900469/?lid=unpickup_review">
                  続きを読む»
                </a>
              </p>
              <p className="rstdtl-rvw__photo">
                <a href="/tokyo/A1302/A130201/13019285/dtlrvwlst/B415900469/">
                  <img
                    src="https://tblg.k-img.com/restaurant/images/Rvw/109198/50x50_square_109198392.jpg"
                    width="50"
                    height="50"
                    alt="吾照里 - 黒塀横丁～"
                    className="loading"
                    data-was-processed="true"
                  />
                </a>
              </p>
            </div>

            <div className="rstdtl-rvw__dtl">
              <div className="like-count rstdtl-rvw__dtl-like-count">
                <span className="like-count__count js-count">121</span>
                <a target="_blank" rel="noopener noreferrer" className="like-count__help" href="http://user-help.tabelog.com/?p=695">
                  ？
                </a>
              </div>
              <p className="rstdtl-rvw__dtl-date">訪問：2019/06</p>
              <p className="c-rating-v2 rstdtl-rvw__dtl-rating rstdtl-rvw__dtl-rating--lunch u-clearfix c-rating-v2--val35">
                <span className="rstdtl-rvw-c-rating-v2__time rstdtl-rvw-c-rating-v2__time_lunch gly-b-lunch2">昼の点数</span>
                <i className="c-rating-v2__star rstdtl-rvw-c-rating-v2__star"></i>
              </p>
              <p className="rstdtl-rvw__visit-count">1回</p>
            </div>
          </div>
        </li>
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
