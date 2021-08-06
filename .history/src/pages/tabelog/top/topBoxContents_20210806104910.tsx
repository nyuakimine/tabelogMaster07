import React, { useEffect, useRef, useState } from 'react'
import { TopBox1 } from './topBox1'
import { TopBox2 } from './topBox2'
import { TopBox3 } from './topBox3'
import { TopBox4 } from './topBox4'

import './tabelog3.css'
import './modal.css'
import { decrement, increment, clickImg } from './modalSlice'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

export const TopBoxContents: React.FC = () => {
  return (
    <div id="contents-rstdata" className="rstdtl-rstdata box-contents">
      <span id="title-rstdata" className="page-link"></span>
      <div className="rstdtl-heading">
        <h3 className="rstdtl-heading__title rstdtl-heading__title--btn">店舗情報（詳細）</h3>
      </div>
      <div id="rst-data-head" className="rstinfo-table">
        <h4 className="rstinfo-table__title">店舗基本情報</h4>
        <TopBox1></TopBox1>
        <h4 className="rstinfo-table__title">席・設備</h4>
        <TopBox2></TopBox2>
        <h4 className="rstinfo-table__title">メニュー</h4>
        <TopBox3></TopBox3>
        <span id="gte-data" className="page-link"></span>
        <h4 className="rstinfo-table__title">特徴・関連情報</h4>
        <TopBox4></TopBox4>
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
