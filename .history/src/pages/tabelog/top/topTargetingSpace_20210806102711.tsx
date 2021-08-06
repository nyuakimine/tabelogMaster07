import React, { useEffect, useRef, useState } from 'react'
// import './tabelog1.css'
// import './tabelog2.css'
import './tabelog3.css'
import './modal.css'
import { decrement, increment, clickImg } from './modalSlice'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

export const TopTargetingSpace: React.FC = () => {
  return (
    <div id="contents-rstdata" className="rstdtl-rstdata box-contents">
      <span id="title-rstdata" className="page-link"></span>
      <div className="rstdtl-heading">
        <h3 className="rstdtl-heading__title rstdtl-heading__title--btn">店舗情報（詳細）</h3>
      </div>

      <div id="rst-data-head" className="rstinfo-table">
        <h4 className="rstinfo-table__title">店舗基本情報</h4>
        <table className="c-table c-table--form rstinfo-table__table">
          <tbody>
            <tr>
              <th>店名</th>
              <td>吾照里 東京駅八重洲口店 （オジョリ）</td>
            </tr>

            <tr>
              <th>ジャンル</th>
              <td>
                <span>韓国料理、焼肉、居酒屋</span>
              </td>
            </tr>
            <tr>
              <th>
                予約・
                <br />
                お問い合わせ
              </th>
              <td>
                <p className="rstinfo-table__tel-num-wrap">
                  <strong className="rstinfo-table__tel-num">03-5220-5220</strong>
                  <input type="hidden" name="js-tel-type" id="js-tel-type" value="normal" />
                </p>
              </td>
            </tr>

            <tr>
              <th>予約可否</th>
              <td>
                <p className="rstinfo-table__reserve-status">予約可</p>
              </td>
            </tr>
            <tr>
              <th>住所</th>
              <td>
                <p className="rstinfo-table__address">
                  <span>
                    <a href="/tokyo/" className="listlink">
                      東京都
                    </a>
                  </span>
                  <span>
                    <a href="/tokyo/C13101/rstLst/" className="listlink">
                      千代田区
                    </a>
                    <a href="/tokyo/C13101/C36087/rstLst/" className="listlink">
                      丸の内
                    </a>
                    1-9-1
                  </span>{' '}
                  <span>
                    <a className="listlink" href="https://tabelog.com/tokyo/P055549/premiseLst/">
                      東京駅　改札外
                    </a>{' '}
                    B1F 黒塀横丁
                  </span>
                </p>

                <div className="rstinfo-table__map-wrap">
                  <div className="rstinfo-table__map js-catalyst-rstinfo-map">
                    <a data-analytics-alliance="" className="js-analytics" href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlmap/">
                      <img
                        alt="吾照里 東京駅八重洲口店 - 地図"
                        className="js-map-lazyload rstinfo-table__map-image lazy-loaded loaded"
                        data-original="https://maps.googleapis.com/maps/api/staticmap?channel=restaurant_detail_top&amp;key=AIzaSyCFZGUaDWgiusOQeFpnVLT2uPM2R6Mq7J8&amp;hl=ja&amp;center=35.68250899118871,139.76821715448781&amp;style=feature:landscape%7Celement:geometry%7Clightness:25&amp;style=feature:poi%7Celement:geometry%7Clightness:25&amp;style=feature:poi%7Celement:labels.icon%7Ccolor:0xd2d2d2&amp;style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x949499&amp;style=feature:road%7Clightness:25&amp;style=feature:road%7Celement:labels%7Csaturation:-100%7Clightness:40&amp;style=feature:transit.station.airport%7Celement:geometry%7Clightness:25&amp;style=feature:water%7Celement:geometry%7Clightness:25&amp;markers=color:red%7C35.68250899118871,139.76821715448781&amp;zoom=15&amp;size=490x145&amp;signature=xxecTQigD8NKGpuUPkxne_DMEuU="
                        src="https://maps.googleapis.com/maps/api/staticmap?channel=restaurant_detail_top&amp;key=AIzaSyCFZGUaDWgiusOQeFpnVLT2uPM2R6Mq7J8&amp;hl=ja&amp;center=35.68250899118871,139.76821715448781&amp;style=feature:landscape%7Celement:geometry%7Clightness:25&amp;style=feature:poi%7Celement:geometry%7Clightness:25&amp;style=feature:poi%7Celement:labels.icon%7Ccolor:0xd2d2d2&amp;style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x949499&amp;style=feature:road%7Clightness:25&amp;style=feature:road%7Celement:labels%7Csaturation:-100%7Clightness:40&amp;style=feature:transit.station.airport%7Celement:geometry%7Clightness:25&amp;style=feature:water%7Celement:geometry%7Clightness:25&amp;markers=color:red%7C35.68250899118871,139.76821715448781&amp;zoom=15&amp;size=490x145&amp;signature=xxecTQigD8NKGpuUPkxne_DMEuU="
                        data-was-processed="true"
                      />
                    </a>
                  </div>

                  <div className="rstinfo-table__map-link">
                    <span className="rstinfo-table__map-link-item rstinfo-table__map-link-item--bigmap">
                      <a
                        data-analytics-alliance=""
                        className="js-analytics"
                        href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlmap/"
                      >
                        大きな地図を見る
                      </a>
                    </span>
                    <span className="rstinfo-table__map-link-item rstinfo-table__map-link-item--peripheral">
                      <a
                        className="js-catalyst-rstinfo-peripheral-maplink"
                        href="https://tabelog.com/tokyo/A1302/A130201/13019285/peripheral_map/"
                      >
                        周辺のお店を探す
                      </a>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>交通手段</th>
              <td>
                <p>
                  ＪＲ 東京駅 地下一階 黒塀横丁内です。
                  <br />
                  <br />
                  八重洲北口改札口を出てすぐ左へ真っ直ぐ
                  <br />
                  <br />
                  地下へ降りる、エスカレーター、階段を降りたら直ぐです。
                </p>
                <p>東京駅から181m</p>
              </td>
            </tr>

            <tr>
              <th>営業時間</th>
              <td>
                <p className="rstinfo-table__subject">営業時間</p>
                <p className="rstinfo-table__subject-text">
                  ランチタイム
                  <br />
                  11時～17時
                  <br />
                  <br />
                  [ディナータイム]
                  <br />
                  17時～20時 ※ lo. 19
                  <br />
                  17時～20時（月火祝土日）※ lo. 19
                  <br />
                  <br />※ 12月は２時間制
                  <br />
                  お食事 lo ～22時/ドリンク lo ～22時30分
                  <br />
                  <br />
                  【年末年始の営業時間】
                  <br />
                  12月31日19時閉店
                  <br />
                  1月1日～5日22時閉店　Ｌ.Ｏ（30分間）
                  <br />
                  <br />
                  8月営業時間は22時までに変更になります。
                </p>
                <p className="rstinfo-table__subject-text">日曜営業</p>
                <p className="rstinfo-table__subject rstinfo-table__subject--holiday">定休日</p>
                <p className="rstinfo-table__subject-text">無休</p>
                <p className="rstinfo-table__open-closed-attention gly-b-infomark">
                  新型コロナウイルス感染拡大等により、営業時間・定休日が記載と異なる場合がございます。ご来店時は事前に店舗にご確認ください。
                </p>
              </td>
            </tr>

            <tr>
              <th>予算</th>
              <td>
                <div className="rstinfo-table__budget">
                  <span className="rstinfo-table__budget-item">
                    <i>[夜]</i>
                    <em className="gly-b-dinner">￥4,000～￥4,999</em>
                  </span>
                  <span className="rstinfo-table__budget-item">
                    <i>[昼]</i>
                    <em className="gly-b-lunch">～￥999</em>
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                予算<small>（口コミ集計）</small>
              </th>
              <td>
                <div className="rstinfo-table__budget">
                  <span className="rstinfo-table__budget-item">
                    <i>[夜]</i>
                    <em className="gly-b-dinner">￥3,000～￥3,999</em>
                  </span>
                  <span className="rstinfo-table__budget-item">
                    <i>[昼]</i>
                    <em className="gly-b-lunch">～￥999</em>
                  </span>
                </div>
                <p className="rstinfo-table__notice">
                  <a href="/tokyo/A1302/A130201/13019285/dtlratings/#price-range" className="c-link-arrow">
                    <span>予算分布を見る</span>
                  </a>
                </p>
              </td>
            </tr>
            <tr>
              <th>支払い方法</th>
              <td>
                <p>カード可</p>
                <p className="rstinfo-table__notice">（VISA、Master、JCB、AMEX、Diners）</p>
                <p className="rstinfo-table__each-info">電子マネー可</p>
                <p className="rstinfo-table__notice">（交通系電子マネー（Suicaなど）、楽天Edy、nanaco、WAON、iD、QUICPay）</p>
              </td>
            </tr>
          </tbody>
        </table>

        <h4 className="rstinfo-table__title">席・設備</h4>
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

        <h4 className="rstinfo-table__title">メニュー</h4>
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

        <span id="gte-data" className="page-link"></span>
        <h4 className="rstinfo-table__title">特徴・関連情報</h4>
        <table className="c-table c-table--form rstinfo-table__table">
          <tbody>
            <tr>
              <th>利用シーン</th>
              <td>
                <p>
                  <a href="/tokyo/A1302/A130201/rstLst/cond04-00-04/">家族・子供と</a>
                  <span className="line">｜</span>
                  <a href="/tokyo/A1302/A130201/rstLst/cond04-00-00/">大人数の宴会</a>
                  <span className="line">｜</span>
                  <a href="/tokyo/A1302/A130201/rstLst/cond04-00-05/">知人・友人と</a>
                </p>
                <p className="rstinfo-table__notice">こんな時によく使われます。</p>
              </td>
            </tr>

            <tr>
              <th>お子様連れ</th>
              <td>
                <p>子供可、お子様メニューあり、ベビーカー入店可</p>
              </td>
            </tr>

            <tr>
              <th>ホームページ</th>
              <td>
                <p className="homepage">
                  <a target="_blank" rel="nofollow noopener noreferrer" className="c-link-arrow" href="http://www.ojori.jp/">
                    <span>http://www.ojori.jp/</span>
                  </a>{' '}
                </p>
              </td>
            </tr>
            <tr>
              <th>公式アカウント</th>
              <td>
                <div className="rstinfo-sns-table">
                  <a
                    className="rstinfo-sns-link rstinfo-sns-instagram"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://www.instagram.com/toukyouojori/"
                  >
                    <span>https://www.instagram.com/toukyouojori/</span>
                  </a>{' '}
                </div>
              </td>
            </tr>
            <tr>
              <th>備考</th>
              <td>
                <p>
                  吾照里グループ ＬＩＮＥ＠ 始めました！
                  <br />
                  各店舗 異なりますのでご希望の店舗を、お選びください。
                  <br />
                  <a href="http://www.ojori.jp/line/" target="_blank" rel="nofollow noreferrer">
                    http://www.ojori.jp/line/
                  </a>
                </p>
              </td>
            </tr>
            <tr>
              <th>お店のPR</th>
              <td>
                <div className="pr-comment pr-comment--unmember">
                  <p className="pr-comment-title">東京駅地下１階 黒塀横丁内 唯一の｢80名の大宴会｣｢個室･半個室｣｢炭火焼肉｣｢低価格｣</p>
                  <p className="pr-comment__body js-pr-comment-body is-hidden">
                    <span className="pr-comment__first">
                      ｢薬食同源｣｢美食同源」健康にも美容にも良い韓国の家庭料理。上質の焼肉や本場韓国の家庭料理を心行くまでお楽しみ下さいませ。石焼ピビンパ･純豆腐チゲ･冷麺･チヂミ･チャプチェ･参鶏湯･サムギョプサル･ユッケジャン･コムタン･プルコギ･トッポッキ･ケランチム･蒸し鶏･ポッサム･プデチゲ･カムジャタン
                      ◎ 宴会ご予約も承り中！ご予約はお早めに！～ 個室席・大宴会・早割サービス等 スタッフまで御相談下さい
                    </span>
                    <span className="js-pr-comment-more pr-comment__more-icon">...</span>
                    <button type="button" className="pr-comment__more js-pr-comment-more">
                      続きを読む
                    </button>
                    <span className="pr-comment__over js-pr-comment-over is-hidden">
                      {' '}
                      ～<br />
                    </span>
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <th>関連店舗情報</th>
              <td>
                <a href="/grouplst/G00470/">吾照里の店舗一覧を見る</a>
              </td>
            </tr>

            <tr>
              <th>初投稿者</th>
              <td>
                <p className="rstinfo-table__user-image">
                  <img alt="ぬB" src="https://tblg.k-img.com/images/rvwr_icon/lev4.gif" />
                  <a target="_blank" rel="noopener" href="/rvwr/00005054/">
                    <span className="lev4">
                      ぬB<span className="count">（432）</span>
                    </span>
                  </a>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="rstinfo-actions">
        <div className="rstinfo-actions__btn-wrap">
          <p className="rstinfo-actions__btn">
            <a
              className="c-btn c-btn--full gly-b-mail rstinfo-actions__btn-target rstinfo-actions__btn-target--mobile-send js-catalyst-rstinfo-mobile-send"
              href="mailto:?subject=吾照里 東京駅八重洲口店%20[食べログ]&amp;body=吾照里 東京駅八重洲口店%0d%0a03-5220-5220%0d%0a東京都千代田区丸の内1-9-1 東京駅　改札外 B1F 黒塀横丁%0d%0ahttps://tabelog.com/tokyo/A1302/A130201/13019285/"
            >
              メールで情報を送る
            </a>
          </p>
          <p className="rstinfo-actions__btn">
            <a
              href="#"
              data-print-url="https://tabelog.com/rst/rstdtl_print?lat=35.68250899118871&amp;lng=139.76821715448781&amp;rcd=13019285&amp;zoom=17"
              data-analytics-btn="toprint1"
              data-button-id="toprint1"
              className="c-btn c-btn--full c-btn--edit gly-b-printer gly-a-targetwindow rstinfo-actions__btn-target rstinfo-actions__btn-target--print-popup js-rstinfo-print-popup js-catalyst-rstinfo-print-popup js-analytics"
            >
              印刷ページを表示
            </a>
          </p>
        </div>

        <div className="rstinfo-blogparts">
          <p className="rstinfo-blogparts__title">
            <a href="#" id="js-blog-tag" className="is-open" title="ブログに店舗情報を貼る">
              <span>ブログに店舗情報を貼る</span>
            </a>
          </p>
          <div className="rstinfo-blogparts__tag" id="js-blogparts-tag" style={{ display: 'none' }}>
            <p className="rstinfo-blogparts__tag-lead">
              このHTMLタグをブログに貼り付けると、お店の地図や情報を掲載することができます。
              <a href="http://user-help.tabelog.com/?p=236" className="c-link-arrow">
                <span>詳しくはこちら</span>
              </a>
            </p>
            <textarea
              className="js-blogparts-tag-textfield c-textfield c-textfield--textarea c-textfield--full rstinfo-blogparts__textfield"
              name="tbtags"
            >
              &lt;div&gt;&lt;strong&gt;&lt;a target="_blank" href="https://tabelog.com/tokyo/A1302/A130201/13019285/"&gt;吾照里
              東京駅八重洲口店&lt;/a&gt;&lt;/strong&gt; &lt;script
              src="https://tabelog.com/badge/google_badge?escape=false&amp;rcd=13019285" type="text/javascript"
              charset="utf-8"&gt;&lt;/script&gt; &lt;/div&gt; &lt;p style="color:#444444; font-size:12px;"&gt;
              &lt;strong&gt;関連ランキング：&lt;/strong&gt;&lt;a href="https://tabelog.com/rstLst/RC040101/"&gt;韓国料理&lt;/a&gt; | &lt;a
              href="https://tabelog.com/tokyo/A1302/A130201/R6586/rstLst/"&gt;東京駅&lt;/a&gt;、&lt;a
              href="https://tabelog.com/tokyo/A1302/A130201/R1786/rstLst/"&gt;大手町駅&lt;/a&gt;、&lt;a
              href="https://tabelog.com/tokyo/A1302/A130202/R7650/rstLst/"&gt;日本橋駅&lt;/a&gt;&lt;/p&gt;
            </textarea>
          </div>
        </div>
      </div>

      <div className="rstinfo-edit-navi">
        <div className="rstdtl-notice u-text-notice">
          <p>このレストランは食べログ店舗会員等に登録しているため、ユーザーの皆様は編集することができません。</p>
          <p>
            店舗情報に誤りを発見された場合には、ご連絡をお願いいたします。
            <a className="icon-b-arrow-orange" href="https://tabelog.com/support/inquiry?rcd=13019285&amp;type=4">
              お問い合わせフォーム
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
