import React, { useEffect, useRef, useState } from 'react'
import '../tabelog1.css'
import '../tabelog2.css'
import { decrement, increment } from './modalSlice'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

interface ifProps {
  id: number
  kodawariPhoto: string
  kodawariHeadingTitle: string
  kodawariTitle: string
  kodawaricolLabel: string
}

interface pIf {
  data: ifProps[]
}
export const KodawariModal: React.FC<pIf> = ({ data }) => {
  const dispatch = useDispatch()
  return data === undefined ? (
    <h2>loading...</h2>
  ) : (
    <div className="c-overlay js-overlay js-modal-overlay-clickarea is-closeable">
      <div className="c-modal rstdtl-top-kodawari__modal js-kodawari-detail-modal">
        <p className="c-modal__close js-modal-close">閉じる</p>
        <div className="c-modal__contents rstdtl-top-kodawari__modal-contents js-kodawari-contents js-kodawari-1">
          <div className="c-modal__inner rstdtl-top-kodawari__modal-contents-inner">
            <button
              name="button"
              type="submit"
              className="rstdtl-top-kodawari__modal-target rstdtl-top-kodawari__modal-target--prev is-disabled"
              data-other-kodawari="0"
              onClick={() => dispatch(decrement(0))}
            >
              <i>前へ</i>
            </button>
            <div className="rstdtl-top-kodawari__modal-photo">
              <img
                width="320"
                height="320"
                alt="安心安全の中で忘新年会を楽しもう！"
                src="https://tblg.k-img.com/restaurant/images/Rvw/133548/320x320_square_133548316.jpg"
                className="loading"
                data-was-processed="true"
              />
            </div>
            <div className="rstdtl-top-kodawari__modal-textbox">
              <p className="rstdtl-top-kodawari__modal-title-wrap">
                <span className="rstdtl-top-kodawari__modal-label rstdtl-top-kodawari__modal-label--other">その他</span>
                <span className="rstdtl-top-kodawari__modal-title">安心安全の中で忘新年会を楽しもう！</span>
              </p>
              <p className="rstdtl-top-kodawari__modal-comment">
                当店では､感染予防の一環として下記の取り組み､衛生管理を徹底したサービスを心がけております。従業員の手洗い､うがいの徹底､従業員のマスク着用､従業員の検温､店内の清掃､消毒の徹底､調理器具や食器の消毒､店舗の入り口や店内の消毒液の設置､お客様同士のソーシャルディスタンス､定期的な換気､等
              </p>
            </div>
            <button
              name="button"
              type="submit"
              className="rstdtl-top-kodawari__modal-target rstdtl-top-kodawari__modal-target--next js-kodawari-modal-change"
              data-other-kodawari="2"
              onClick={() => dispatch(increment(0))}
            >
              <i>次へ</i>
            </button>
          </div>
        </div>
        <div className="c-modal__contents rstdtl-top-kodawari__modal-contents js-kodawari-contents js-kodawari-2 is-hidden">
          <div className="c-modal__inner rstdtl-top-kodawari__modal-contents-inner">
            <button
              name="button"
              type="submit"
              className="rstdtl-top-kodawari__modal-target rstdtl-top-kodawari__modal-target--prev js-kodawari-modal-change"
              data-other-kodawari="1"
            >
              <i>前へ</i>
            </button>
            <div className="rstdtl-top-kodawari__modal-photo">
              <img
                width="320"
                height="320"
                alt="焼肉30％オフ実施中！！※金曜日は不可"
                src="https://tblg.k-img.com/restaurant/images/Rvw/44863/320x320_square_44863216.jpg"
              />
            </div>
            <div className="rstdtl-top-kodawari__modal-textbox">
              <p className="rstdtl-top-kodawari__modal-title-wrap">
                <span className="rstdtl-top-kodawari__modal-label rstdtl-top-kodawari__modal-label--food">料理</span>
                <span className="rstdtl-top-kodawari__modal-title">焼肉30％オフ実施中！！※金曜日は不可</span>
              </p>
              <p className="rstdtl-top-kodawari__modal-comment">
                特上黒毛和牛カルビ（ザブトン）を是非一度！黒毛和牛上カルビ（カイノミ）黒毛和牛特上ロース（肩芯）など..他にも、ヤンニョムで味付けされた韓流骨付きカルビを骨までむしゃぶりついたり、厚切りのサムギョプサルを！お得な焼肉盛合せメニューもあります。是非一度、東京駅の地下街で炭火焼肉を楽しんでください。
              </p>
            </div>
            <button
              name="button"
              type="submit"
              className="rstdtl-top-kodawari__modal-target rstdtl-top-kodawari__modal-target--next js-kodawari-modal-change"
              data-other-kodawari="3"
            >
              <i>次へ</i>
            </button>
          </div>
        </div>
        <div className="c-modal__contents rstdtl-top-kodawari__modal-contents js-kodawari-contents js-kodawari-3 is-hidden">
          <div className="c-modal__inner rstdtl-top-kodawari__modal-contents-inner">
            <button
              name="button"
              type="submit"
              className="rstdtl-top-kodawari__modal-target rstdtl-top-kodawari__modal-target--prev js-kodawari-modal-change"
              data-other-kodawari="2"
            >
              <i>前へ</i>
            </button>
            <div className="rstdtl-top-kodawari__modal-photo">
              <img
                width="320"
                height="320"
                alt="ハッピーアワー実施中！ご一緒にサムギョプサルは超得（^^）"
                src="https://tblg.k-img.com/restaurant/images/Rvw/74927/320x320_square_74927228.jpg"
              />
            </div>
            <div className="rstdtl-top-kodawari__modal-textbox">
              <p className="rstdtl-top-kodawari__modal-title-wrap">
                <span className="rstdtl-top-kodawari__modal-label rstdtl-top-kodawari__modal-label--food">料理</span>
                <span className="rstdtl-top-kodawari__modal-title">ハッピーアワー実施中！ご一緒にサムギョプサルは超得（^^）</span>
              </p>
              <p className="rstdtl-top-kodawari__modal-comment">
                吾照里では、体に嬉しい韓国料理を多数取り揃えております。人気の『サムギョプサル』は、ストレス解消に良いとされるサンチュ、塩分調節に良いエゴマの葉、美容と健康にビタミンたっぷりの新鮮季節野菜で、旨味たっぷりジューシーな焼肉を包んでお召し上がり頂くオススメのメニューです。その他、これからの季節にぴったりなあつあつの『スンドゥブチゲ』や栄養満点の薬膳料理『参鶏湯』など、是非この機会にご賞味下さい。
              </p>
            </div>
            <button
              name="button"
              type="submit"
              className="rstdtl-top-kodawari__modal-target rstdtl-top-kodawari__modal-target--next js-kodawari-modal-change"
              data-other-kodawari="4"
            >
              <i>次へ</i>
            </button>
          </div>
        </div>
        <div className="c-modal__contents rstdtl-top-kodawari__modal-contents js-kodawari-contents js-kodawari-4 is-hidden">
          <div className="c-modal__inner rstdtl-top-kodawari__modal-contents-inner">
            <button
              name="button"
              type="submit"
              className="rstdtl-top-kodawari__modal-target rstdtl-top-kodawari__modal-target--prev js-kodawari-modal-change"
              data-other-kodawari="3"
            >
              <i>前へ</i>
            </button>
            <div className="rstdtl-top-kodawari__modal-photo">
              <img
                width="320"
                height="320"
                alt="吾照里と言えばスンドゥブです。世界一美味しいと自信を持ちます"
                src="https://tblg.k-img.com/restaurant/images/Rvw/79478/320x320_square_79478111.jpg"
              />
            </div>
            <div className="rstdtl-top-kodawari__modal-textbox">
              <p className="rstdtl-top-kodawari__modal-title-wrap">
                <span className="rstdtl-top-kodawari__modal-label rstdtl-top-kodawari__modal-label--food">料理</span>
                <span className="rstdtl-top-kodawari__modal-title">吾照里と言えばスンドゥブです。世界一美味しいと自信を持ちます</span>
              </p>
              <p className="rstdtl-top-kodawari__modal-comment">
                当店のスープは、牛骨を長時間煮込み骨髄に多く含まれているコラーゲンやカルシウムを抽出し栄養価の高いスープに仕上げています。スンドゥブチゲのほかにも、栄養満点の『参鶏湯』や『カムジャタン』など、これからの季節にぴったりなメニューを多数取り揃えております。明日の活力の為にご賞味ください!
              </p>
            </div>
            <button
              name="button"
              type="submit"
              className="rstdtl-top-kodawari__modal-target rstdtl-top-kodawari__modal-target--next is-disabled"
              data-other-kodawari="5"
            >
              <i>次へ</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
