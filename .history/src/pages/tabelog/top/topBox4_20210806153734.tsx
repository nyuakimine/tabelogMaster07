import React, { useEffect, useRef, useState } from 'react'
// import './tabelog1.css'
// import './tabelog2.css'
import './tabelog3.css'
import './modal.css'
import { decrement, increment, clickImg } from './modalSlice'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

export const TopBox4: React.FC = () => {
  const topBox4 = useSelector((state: RootState) => state.topBasicInformation.data)
  return topBox4 === null ? (
    <h2>loading...</h2>
  ) : (
    <table className="c-table c-table--form rstinfo-table__table">
      <tbody>
        <tr>
          <th>利用シーン</th>
          <td>
            <p>
              <a href={`${topBox4.box4Scene1Link1}`}>{topBox4.box4Scene1}</a>
              <span className="line">｜</span>
              <a href={`${topBox4.box4Scene1Link2}`}>{topBox4.box4Scene2}</a>
              <span className="line">｜</span>
              <a href={`${topBox4.box4Scene1Link3}`}>{topBox4.box4Scene3}</a>
            </p>
            <p className="rstinfo-table__notice">{topBox4.box4UseScene}</p>
          </td>
        </tr>

        <tr>
          <th>お子様連れ</th>
          <td>
            <p>{topBox4.box4WithChildren}</p>
          </td>
        </tr>

        <tr>
          <th>ホームページ</th>
          <td>
            <p className="homepage">
              <a target="_blank" rel="nofollow noopener noreferrer" className="c-link-arrow" href="http://www.ojori.jp/">
                <span>{topBox4.box4Homepage}</span>
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
                <span>{topBox4.box4OfficialAccount}</span>
              </a>{' '}
            </div>
          </td>
        </tr>
        <tr>
          <th>備考</th>
          <td>
            <p>
              {topBox4.box4Remarks}
              <br />

              <br />
              <a href="http://www.ojori.jp/line/" target="_blank" rel="nofollow noreferrer"></a>
            </p>
          </td>
        </tr>
        <tr>
          <th>お店のPR</th>
          <td>
            <div className="pr-comment pr-comment--unmember">
              <p className="pr-comment-title"> {topBox4.box4Pr}</p>
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
  )
}
