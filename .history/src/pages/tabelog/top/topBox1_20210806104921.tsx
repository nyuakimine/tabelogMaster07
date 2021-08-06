import React, { useEffect, useRef, useState } from 'react'
// import './tabelog1.css'
// import './tabelog2.css'
import './tabelog3.css'
import './modal.css'
import { decrement, increment, clickImg } from './modalSlice'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

export const TopBox1: React.FC = () => {
  return (
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
                  <a data-analytics-alliance="" className="js-analytics" href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlmap/">
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
  )
}
