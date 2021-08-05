import React, { useEffect, useRef, useState } from 'react'
// import { RootState } from "../../../redux/store";
// import { useSelector, useDispatch } from "react-redux";
// import "../tabelog1.css";
// import "../tabelog2.css";

// export const TopCommentWrap: React.FC = () => {

//   return  (
// <div className="c-overlay is-visible"><div><form accept-charset="UTF-8" action="/rvwr/rvw/bookmark_image_select_download/?msu=015646251" className="js-photo-confirm" method="post">
//   <input className="js-image-ids" name="image_ids" type="hidden" value=""/>
//   <input name="rst_id" type="hidden" value="13019285"/>
// </form>
// <form className="js-bkm-modal-target p-modal-bkm is-visible" id="simple-review-form" enctype="multipart/form-data" action="/rst/auth_rvwimg_upload">
//   <input type="hidden" name="rcd" value="13019285"/>
//   <input type="hidden" name="review_id" value=""/>
//   <div className="js-bkm-modal-header p-modal-bkm__header p-modal-bkm__header--edit">
//     <a href="#index" className="p-modal-bkm__close js-lock js-cancel">閉じる</a>
//     <a href="#edit-visit/13019285/photo" className="js-modal-expand-trigger p-modal-bkm__scaling">
//       <span className="js-modal-expand-text p-modal-bkm__scaling-inner gly-b-scaleup">
//         <span className="p-modal-bkm__scaling-text">
//           表示を大きくする
//         </span>
//       </span>
//       <span className="js-modal-expand-text p-modal-bkm__scaling-inner is-hidden gly-b-scaledown">
//         <span className="p-modal-bkm__scaling-text">
//           表示を小さくする
//         </span>
//       </span>
//     </a>

//     <div className="p-modal-bkm__header-inner">
//       <p className="p-modal-bkm__rst-name-wrap">
//         <span className="p-modal-bkm__rst-name">吾照里 東京駅八重洲口店</span>
//       </p>
//         <p className="p-modal-bkm__rst-aliasname">（オジョリ）</p>
//     </div>
//   </div>

//   <div className="js-score-set-notice p-modal-bkm__fav-rating-notice-wrap is-hidden">
//     <div className="p-modal-bkm__fav-rating-notice c-tooltip c-tooltip--bottom">
//       <p>
//         前回の評価・金額を<br>
//         自動入力しました
//       </p>
//     </div>
//   </div>

//   <div className="js-bkm-modal-scroll p-modal-bkm__contents mCustomScrollbar _mCS_1" style="max-height: 536.8px;"><div id="mCSB_1" className="mCustomScrollBox mCS-modal mCSB_vertical mCSB_inside" style="max-height: 536.8px;" tabindex="0"><div id="mCSB_1_container" className="mCSB_container" style="position:relative; top:0; left:0;" dir="ltr">
//     <div className="p-modal-bkm__fav">
//       <div className="p-modal-bkm__fav-rating js-fav-rating-wrap">
//         <div className="js-scene-select-wrapper p-modal-bkm__sceneselect-wrap">
//           <div className="p-modal-bkm__sceneselect">

//             <div className="p-modal-bkm__sceneselect-text-wrap">
//               <p className="p-modal-bkm__sceneselect-text">投稿の種類</p>
//                 <div className="p-modal-bkm__sceneselect-help c-icon-help c-icon-help--dark">
//                   <span className="c-icon-help__btn">？</span>
//                   <div className="c-icon-help__tooltip-frame p-modal-bkm__help-tooltip p-modal-bkm__help-tooltip--sceneselect">
//                     <div className="c-tooltip-bordered c-tooltip-bordered--top">
//                       <ul>
//                         <li className="p-modal-bkm__help-tooltip-item">
//                           <span className="gly-b-dinner2 p-modal-bkm__help-tooltip-icon"></span>
//                           <p><em>ディナータイム</em>での利用（通常利用/通常利用外）</p>
//                         </li>
//                         <li className="p-modal-bkm__help-tooltip-item">
//                           <span className="gly-b-lunch2 p-modal-bkm__help-tooltip-icon"></span>
//                           <p><em>ランチタイム</em>での利用（通常利用/通常利用外）</p>
//                         </li>
//                         <li className="p-modal-bkm__help-tooltip-item">
//                           <span className="gly-b-takeout p-modal-bkm__help-tooltip-icon"></span>
//                           <p><em>テイクアウト</em>での利用</p>
//                         </li>
//                         <li className="p-modal-bkm__help-tooltip-item">
//                           <span className="gly-b-delivery p-modal-bkm__help-tooltip-icon"></span>
//                           <p><em>デリバリー</em>での利用</p>
//                         </li>
//                         <li className="p-modal-bkm__help-tooltip-item">
//                           <span className="gly-b-etc p-modal-bkm__help-tooltip-icon"></span>
//                           <p><em>その他</em>での利用（お取り寄せ・催事など）</p>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//             </div>

//             <ul className="p-modal-bkm__sceneselect-item-wrap">
//               <li className="p-modal-bkm__sceneselect-item">
//                 <input id="js-dinner-use" className="p-modal-bkm__sceneselect-check" type="checkbox" name="dinner_use" data-use-type="dinner"/>
//                 <label className="p-modal-bkm__sceneselect-label p-modal-bkm__sceneselect-label--dinner" for="js-dinner-use"><span>夜</span></label>
//               </li>
//               <li className="p-modal-bkm__sceneselect-item">
//                 <input id="js-lunch-use" className="p-modal-bkm__sceneselect-check" type="checkbox" name="lunch_use" data-use-type="lunch">
//                 <label className="p-modal-bkm__sceneselect-label p-modal-bkm__sceneselect-label--lunch" for="js-lunch-use"><span>昼</span></label>
//               </li>
//                 <li className="p-modal-bkm__sceneselect-item">
//                   <input id="js-takeout-use" className="p-modal-bkm__sceneselect-check" type="checkbox" name="takeout_use" data-use-type="takeout">
//                   <label className="p-modal-bkm__sceneselect-label p-modal-bkm__sceneselect-label--takeout" for="js-takeout-use"><span>テイクアウト</span></label>
//                 </li>
//                 <li className="p-modal-bkm__sceneselect-item">
//                   <input id="js-delivery-use" className="p-modal-bkm__sceneselect-check" type="checkbox" name="delivery_use" data-use-type="delivery">
//                   <label className="p-modal-bkm__sceneselect-label p-modal-bkm__sceneselect-label--delivery" for="js-delivery-use"><span>デリバリー</span></label>
//                 </li>
//                 <li className="p-modal-bkm__sceneselect-item">
//                   <input id="js-etc-use" className="p-modal-bkm__sceneselect-check" type="checkbox" name="etc_use" data-use-type="etc">
//                   <label className="p-modal-bkm__sceneselect-label p-modal-bkm__sceneselect-label--etc" for="js-etc-use"><span>その他</span></label>
//                 </li>
//             </ul>
//           </div>
//         </div>

//         <div className="p-modal-bkm__fav-rating-item p-modal-bkm__fav-rating-item--dinner js-star-rating-dinner">
//           <div className="p-modal-bkm__fav-score-total js-score-star" data-score-name="dinner_total_score">
//             <div className="p-modal-bkm__fav-scene p-modal-bkm__fav-scene--dinner">
//               <span>夜</span>
//             </div>
//             <div className="p-modal-bkm__fav-total-contents">
//               <div className="p-modal-bkm__fav-total-items">
//                 <div className="p-modal-bkm__fav-total-item">
//                   <div className="p-modal-bkm__fav-total-textframe">
//                     <p className="p-modal-bkm__fav-total-text">総合</p>
//                     <div className="c-icon-help c-icon-help--dark c-icon-help--around">
//                       <span className="c-icon-help__btn">？</span>
//                       <div className="c-icon-help__tooltip-frame p-modal-bkm__help-tooltip p-modal-bkm__help-tooltip--list">
//                         <ul className="c-tooltip-bordered c-tooltip-bordered--top p-modal-bkm__help-tooltip-border">
//                           <li className="p-modal-bkm__help-tooltip-item">総合点は、食べた料理の種類、料理・味、サービス、雰囲気、価格などから総合的に判断してください。</li>
//                           <li className="p-modal-bkm__help-tooltip-item">採点を控える場合は、星（☆☆☆☆☆）をグレー状態のままにしてください。</li>
//                           <li className="p-modal-bkm__help-tooltip-item">「CP」は「コストパフォーマンス」の略です。</li>
//                           <li className="p-modal-bkm__help-tooltip-item">口コミの最上部に表示される評価は、昼・夜の各々の最新の評価が反映されます。</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="input-score">
//                     <div className="js-five-star-rating p-modal-bkm__fav-star-wrapper c-rating-v2"><i className="c-rating-v2__star p-modal-bkm__fav-star-dtl input-score__star"></i><span className="js-point input-score__baloon" data-point="" style="display:none;"></span>
// </div>
//                     <div className="p-modal-bkm__fav-spinner">
//                       <input type="number" step="0.1" min="1.0" max="5.0" name="dinner_total_score" className="js-input textfield p-modal-bkm__score-textfield-total" value="0" placeholder="-" maxlength="3" style="width: 41.75px; margin-right: 16px; text-align: right;"><div className="ui-spinner ui-widget"><div className="ui-spinner-buttons" style="height: 31px; left: -16px; top: 0px; width: 16px;"><div className="ui-spinner-up ui-spinner-button ui-state-default ui-corner-tr" style="width: 16px; height: 15.5px;"><span className="ui-icon ui-icon-triangle-1-n" style="margin-left: 0px; margin-top: -0.25px;">&nbsp;</span></div><div className="ui-spinner-down ui-spinner-button ui-state-default ui-corner-br" style="width: 16px; height: 15.5px;"><span className="ui-icon ui-icon-triangle-1-s" style="margin-left: 0px; margin-top: -0.25px;">&nbsp;</span></div></div></div>
//                     </div>
//                     <div className="js-reset-score p-modal-bkm__reset-score p-modal-bkm__reset-score--total" title="リセット">リセット</div>
//                     <p className="p-modal-bkm__fav-detail-trigger">
//                       <a href="#" className="js-rating-detail-trigger" data-use-type="dinner"/>詳細評価</a>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="p-modal-bkm__fav-total-item">
//                   <p className="p-modal-bkm__fav-total-text p-modal-bkm__fav-total-text--price">使った金額 / 1人</p>
//                   <div className="c-select p-modal-bkm__fav-total-select">
//                     <select name="dinner_price_num" id="js-dinner-price">

//                     <option value="0">－</option><option value="1">～￥999</option><option value="2">￥1,000～￥1,999</option><option value="3">￥2,000～￥2,999</option><option value="4">￥3,000～￥3,999</option><option value="5">￥4,000～￥4,999</option><option value="6">￥5,000～￥5,999</option><option value="7">￥6,000～￥7,999</option><option value="8">￥8,000～￥9,999</option><option value="9">￥10,000～￥14,999</option><option value="10">￥15,000～￥19,999</option><option value="11">￥20,000～￥29,999</option><option value="13">￥30,000～￥39,999</option><option value="14">￥40,000～￥49,999</option><option value="15">￥50,000～￥59,999</option><option value="16">￥60,000～￥79,999</option><option value="17">￥80,000～￥99,999</option><option value="18">￥100,000～</option></select>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-modal-bkm__score-options">
//                 <div className="p-modal-bkm__unordinary-select">
//                   <input className="c-checkbox" id="js-dinner-unordinary-use" name="dinner-unordinary-use" type="checkbox"/>
//                   <label for="js-dinner-unordinary-use">通常利用外</label>
//                   <div className="c-icon-help c-icon-help--dark">
//                     <span className="c-icon-help__btn">？</span>
//                     <div className="c-icon-help__tooltip-frame p-modal-bkm__help-tooltip p-modal-bkm__help-tooltip--unordinary">
//                       <div className="c-tooltip-bordered c-tooltip-bordered--top p-modal-bkm__help-tooltip-border">
//                         <p className="p-modal-bkm__help-tooltip-item">以下の場合は、チェックを入れてください。</p>
//                         <ul className="p-modal-bkm__help-tooltip-item">
//                           <li>・無料招待</li>
//                           <li>・試食会</li>
//                           <li>・プレオープン</li>
//                           <li>・レセプション</li>
//                           <li>・その他、通常とは大幅に異なるサービスでの利用</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <span className="js-scene-clear p-modal-bkm__fav-scene-clear" data-use-type="dinner" role="button">削除</span>
//               </div>
//             </div>
//           </div>

//             <ul className="p-modal-bkm__fav-score-wrap">
//                 <li className="p-modal-bkm__fav-score js-score-star js-score-other is-hidden" data-score-name="dinner_score1">
//                   <div className="p-modal-bkm__input-score input-score">
//                     <p className="p-modal-bkm__fav-name">料理・味</p>
//                     <div className="js-five-star-rating c-rating-v2 c-rating-v2--s p-modal-bkm__star-wrapper"><i className="c-rating-v2__star p-modal-bkm__fav-star-dtl input-score__star"></i><span className="js-point input-score__baloon" data-point="" style="display:none;"></span>
// </div>
//                     <div className="p-modal-bkm__spinner">
//                       <input type="number" step="0.1" min="1.0" max="5.0" name="_score1" className="js-input textfield p-modal-bkm__score-textfield" value="0" placeholder="-" maxlength="3" style="width: 30.2px; margin-right: 16px; text-align: right;"><div className="ui-spinner ui-widget"><div className="ui-spinner-buttons" style="height: 22px; left: -16px; top: 0px; width: 16px;"><div className="ui-spinner-up ui-spinner-button ui-state-default ui-corner-tr" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-n" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div><div className="ui-spinner-down ui-spinner-button ui-state-default ui-corner-br" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-s" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div></div></div>
//                     </div>
//                     <div className="js-reset-score p-modal-bkm__reset-score" title="リセット">リセット</div>
//                   </div>
//                 </li>
//                 <li className="p-modal-bkm__fav-score js-score-star js-score-other is-hidden" data-score-name="dinner_score2">
//                   <div className="p-modal-bkm__input-score input-score">
//                     <p className="p-modal-bkm__fav-name">サービス</p>
//                     <div className="js-five-star-rating c-rating-v2 c-rating-v2--s p-modal-bkm__star-wrapper"><i className="c-rating-v2__star p-modal-bkm__fav-star-dtl input-score__star"></i><span className="js-point input-score__baloon" data-point="" style="display:none;"></span>
// </div>
//                     <div className="p-modal-bkm__spinner">
//                       <input type="number" step="0.1" min="1.0" max="5.0" name="_score2" className="js-input textfield p-modal-bkm__score-textfield" value="0" placeholder="-" maxlength="3" style="width: 30.2px; margin-right: 16px; text-align: right;"><div className="ui-spinner ui-widget"><div className="ui-spinner-buttons" style="height: 22px; left: -16px; top: 0px; width: 16px;"><div className="ui-spinner-up ui-spinner-button ui-state-default ui-corner-tr" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-n" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div><div className="ui-spinner-down ui-spinner-button ui-state-default ui-corner-br" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-s" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div></div></div>
//                     </div>
//                     <div className="js-reset-score p-modal-bkm__reset-score" title="リセット">リセット</div>
//                   </div>
//                 </li>
//                 <li className="p-modal-bkm__fav-score js-score-star js-score-other is-hidden" data-score-name="dinner_score3">
//                   <div className="p-modal-bkm__input-score input-score">
//                     <p className="p-modal-bkm__fav-name">雰囲気</p>
//                     <div className="js-five-star-rating c-rating-v2 c-rating-v2--s p-modal-bkm__star-wrapper"><i className="c-rating-v2__star p-modal-bkm__fav-star-dtl input-score__star"></i><span className="js-point input-score__baloon" data-point="" style="display:none;"></span>
// </div>
//                     <div className="p-modal-bkm__spinner">
//                       <input type="number" step="0.1" min="1.0" max="5.0" name="_score3" className="js-input textfield p-modal-bkm__score-textfield" value="0" placeholder="-" maxlength="3" style="width: 30.2px; margin-right: 16px; text-align: right;"><div className="ui-spinner ui-widget"><div className="ui-spinner-buttons" style="height: 22px; left: -16px; top: 0px; width: 16px;"><div className="ui-spinner-up ui-spinner-button ui-state-default ui-corner-tr" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-n" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div><div className="ui-spinner-down ui-spinner-button ui-state-default ui-corner-br" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-s" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div></div></div>
//                     </div>
//                     <div className="js-reset-score p-modal-bkm__reset-score" title="リセット">リセット</div>
//                   </div>
//                 </li>
//                 <li className="p-modal-bkm__fav-score js-score-star js-score-other is-hidden" data-score-name="dinner_score4">
//                   <div className="p-modal-bkm__input-score input-score">
//                     <p className="p-modal-bkm__fav-name">CP</p>
//                     <div className="js-five-star-rating c-rating-v2 c-rating-v2--s p-modal-bkm__star-wrapper"><i className="c-rating-v2__star p-modal-bkm__fav-star-dtl input-score__star"></i><span className="js-point input-score__baloon" data-point="" style="display:none;"></span>
// </div>
//                     <div className="p-modal-bkm__spinner">
//                       <input type="number" step="0.1" min="1.0" max="5.0" name="_score4" className="js-input textfield p-modal-bkm__score-textfield" value="0" placeholder="-" maxlength="3" style="width: 30.2px; margin-right: 16px; text-align: right;"><div className="ui-spinner ui-widget"><div className="ui-spinner-buttons" style="height: 22px; left: -16px; top: 0px; width: 16px;"><div className="ui-spinner-up ui-spinner-button ui-state-default ui-corner-tr" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-n" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div><div className="ui-spinner-down ui-spinner-button ui-state-default ui-corner-br" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-s" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div></div></div>
//                     </div>
//                     <div className="js-reset-score p-modal-bkm__reset-score" title="リセット">リセット</div>
//                   </div>
//                 </li>
//                 <li className="p-modal-bkm__fav-score js-score-star js-score-other is-hidden" data-score-name="dinner_score5">
//                   <div className="p-modal-bkm__input-score input-score">
//                     <p className="p-modal-bkm__fav-name">酒・ドリンク</p>
//                     <div className="js-five-star-rating c-rating-v2 c-rating-v2--s p-modal-bkm__star-wrapper"><i className="c-rating-v2__star p-modal-bkm__fav-star-dtl input-score__star"></i><span className="js-point input-score__baloon" data-point="" style="display:none;"></span>
// </div>
//                     <div className="p-modal-bkm__spinner">
//                       <input type="number" step="0.1" min="1.0" max="5.0" name="_score5" className="js-input textfield p-modal-bkm__score-textfield" value="0" placeholder="-" maxlength="3" style="width: 30.2px; margin-right: 16px; text-align: right;"><div className="ui-spinner ui-widget"><div className="ui-spinner-buttons" style="height: 22px; left: -16px; top: 0px; width: 16px;"><div className="ui-spinner-up ui-spinner-button ui-state-default ui-corner-tr" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-n" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div><div className="ui-spinner-down ui-spinner-button ui-state-default ui-corner-br" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-s" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div></div></div>
//                     </div>
//                     <div className="js-reset-score p-modal-bkm__reset-score" title="リセット">リセット</div>
//                   </div>
//                 </li>
//             </ul>
//         </div>
//         <div className="p-modal-bkm__fav-rating-item p-modal-bkm__fav-rating-item--lunch js-star-rating-lunch">
//           <div className="p-modal-bkm__fav-score-total js-score-star" data-score-name="lunch_total_score">
//             <div className="p-modal-bkm__fav-scene p-modal-bkm__fav-scene--lunch">
//               <span>昼</span>
//             </div>
//             <div className="p-modal-bkm__fav-total-contents">
//               <div className="p-modal-bkm__fav-total-items">
//                 <div className="p-modal-bkm__fav-total-item">
//                   <div className="p-modal-bkm__fav-total-textframe">
//                     <p className="p-modal-bkm__fav-total-text">総合</p>
//                     <div className="c-icon-help c-icon-help--dark c-icon-help--around">
//                       <span className="c-icon-help__btn">？</span>
//                       <div className="c-icon-help__tooltip-frame p-modal-bkm__help-tooltip p-modal-bkm__help-tooltip--list">
//                         <ul className="c-tooltip-bordered c-tooltip-bordered--top p-modal-bkm__help-tooltip-border">
//                           <li className="p-modal-bkm__help-tooltip-item">総合点は、食べた料理の種類、料理・味、サービス、雰囲気、価格などから総合的に判断してください。</li>
//                           <li className="p-modal-bkm__help-tooltip-item">採点を控える場合は、星（☆☆☆☆☆）をグレー状態のままにしてください。</li>
//                           <li className="p-modal-bkm__help-tooltip-item">「CP」は「コストパフォーマンス」の略です。</li>
//                           <li className="p-modal-bkm__help-tooltip-item">口コミの最上部に表示される評価は、昼・夜の各々の最新の評価が反映されます。</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="input-score">
//                     <div className="js-five-star-rating p-modal-bkm__fav-star-wrapper c-rating-v2"><i className="c-rating-v2__star p-modal-bkm__fav-star-dtl input-score__star"></i><span className="js-point input-score__baloon" data-point="" style="display:none;"></span>
// </div>
//                     <div className="p-modal-bkm__fav-spinner">
//                       <input type="number" step="0.1" min="1.0" max="5.0" name="lunch_total_score" className="js-input textfield p-modal-bkm__score-textfield-total" value="0" placeholder="-" maxlength="3" style="width: 41.75px; margin-right: 16px; text-align: right;"><div className="ui-spinner ui-widget"><div className="ui-spinner-buttons" style="height: 31px; left: -16px; top: 0px; width: 16px;"><div className="ui-spinner-up ui-spinner-button ui-state-default ui-corner-tr" style="width: 16px; height: 15.5px;"><span className="ui-icon ui-icon-triangle-1-n" style="margin-left: 0px; margin-top: -0.25px;">&nbsp;</span></div><div className="ui-spinner-down ui-spinner-button ui-state-default ui-corner-br" style="width: 16px; height: 15.5px;"><span className="ui-icon ui-icon-triangle-1-s" style="margin-left: 0px; margin-top: -0.25px;">&nbsp;</span></div></div></div>
//                     </div>
//                     <div className="js-reset-score p-modal-bkm__reset-score p-modal-bkm__reset-score--total" title="リセット">リセット</div>
//                     <p className="p-modal-bkm__fav-detail-trigger">
//                       <a href="#" className="js-rating-detail-trigger" data-use-type="lunch">詳細評価</a>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="p-modal-bkm__fav-total-item">
//                   <p className="p-modal-bkm__fav-total-text p-modal-bkm__fav-total-text--price">使った金額 / 1人</p>
//                   <div className="c-select p-modal-bkm__fav-total-select">
//                     <select name="lunch_price_num" id="js-lunch-price">

//                     <option value="0">－</option><option value="1">～￥999</option><option value="2">￥1,000～￥1,999</option><option value="3">￥2,000～￥2,999</option><option value="4">￥3,000～￥3,999</option><option value="5">￥4,000～￥4,999</option><option value="6">￥5,000～￥5,999</option><option value="7">￥6,000～￥7,999</option><option value="8">￥8,000～￥9,999</option><option value="9">￥10,000～￥14,999</option><option value="10">￥15,000～￥19,999</option><option value="11">￥20,000～￥29,999</option><option value="13">￥30,000～￥39,999</option><option value="14">￥40,000～￥49,999</option><option value="15">￥50,000～￥59,999</option><option value="16">￥60,000～￥79,999</option><option value="17">￥80,000～￥99,999</option><option value="18">￥100,000～</option></select>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-modal-bkm__score-options">
//                 <div className="p-modal-bkm__unordinary-select">
//                   <input className="c-checkbox" id="js-lunch-unordinary-use" name="lunch-unordinary-use" type="checkbox"/>
//                   <label>通常利用外</label>
//                   <div className="c-icon-help c-icon-help--dark">
//                     <span className="c-icon-help__btn">？</span>
//                     <div className="c-icon-help__tooltip-frame p-modal-bkm__help-tooltip p-modal-bkm__help-tooltip--unordinary">
//                       <div className="c-tooltip-bordered c-tooltip-bordered--top p-modal-bkm__help-tooltip-border">
//                         <p className="p-modal-bkm__help-tooltip-item">以下の場合は、チェックを入れてください。</p>
//                         <ul className="p-modal-bkm__help-tooltip-item">
//                           <li>・無料招待</li>
//                           <li>・試食会</li>
//                           <li>・プレオープン</li>
//                           <li>・レセプション</li>
//                           <li>・その他、通常とは大幅に異なるサービスでの利用</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <span className="js-scene-clear p-modal-bkm__fav-scene-clear" data-use-type="lunch" role="button">削除</span>
//               </div>
//             </div>
//           </div>

//             <ul className="p-modal-bkm__fav-score-wrap">
//                 <li className="p-modal-bkm__fav-score js-score-star js-score-other is-hidden" data-score-name="lunch_score1">
//                   <div className="p-modal-bkm__input-score input-score">
//                     <p className="p-modal-bkm__fav-name">料理・味</p>
//                     <div className="js-five-star-rating c-rating-v2 c-rating-v2--s p-modal-bkm__star-wrapper"><i className="c-rating-v2__star p-modal-bkm__fav-star-dtl input-score__star"></i><span className="js-point input-score__baloon" data-point="" style="display:none;"></span>
// </div>
//                     <div className="p-modal-bkm__spinner">
//                       <input type="number" step="0.1" min="1.0" max="5.0" name="_score1" className="js-input textfield p-modal-bkm__score-textfield" value="0" placeholder="-" maxlength="3" style="width: 30.2px; margin-right: 16px; text-align: right;"><div className="ui-spinner ui-widget"><div className="ui-spinner-buttons" style="height: 22px; left: -16px; top: 0px; width: 16px;"><div className="ui-spinner-up ui-spinner-button ui-state-default ui-corner-tr" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-n" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div><div className="ui-spinner-down ui-spinner-button ui-state-default ui-corner-br" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-s" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div></div></div>
//                     </div>
//                     <div className="js-reset-score p-modal-bkm__reset-score" title="リセット">リセット</div>
//                   </div>
//                 </li>
//                 <li className="p-modal-bkm__fav-score js-score-star js-score-other is-hidden" data-score-name="lunch_score2">
//                   <div className="p-modal-bkm__input-score input-score">
//                     <p className="p-modal-bkm__fav-name">サービス</p>
//                     <div className="js-five-star-rating c-rating-v2 c-rating-v2--s p-modal-bkm__star-wrapper"><i className="c-rating-v2__star p-modal-bkm__fav-star-dtl input-score__star"></i><span className="js-point input-score__baloon" data-point="" style="display:none;"></span>
// </div>
//                     <div className="p-modal-bkm__spinner">
//                       <input type="number" step="0.1" min="1.0" max="5.0" name="_score2" className="js-input textfield p-modal-bkm__score-textfield" value="0" placeholder="-" maxlength="3" style="width: 30.2px; margin-right: 16px; text-align: right;"/><div className="ui-spinner ui-widget"><div className="ui-spinner-buttons" style="height: 22px; left: -16px; top: 0px; width: 16px;"><div className="ui-spinner-up ui-spinner-button ui-state-default ui-corner-tr" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-n" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div><div className="ui-spinner-down ui-spinner-button ui-state-default ui-corner-br" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-s" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div></div></div>
//                     </div>
//                     <div className="js-reset-score p-modal-bkm__reset-score" title="リセット">リセット</div>
//                   </div>
//                 </li>
//                 <li className="p-modal-bkm__fav-score js-score-star js-score-other is-hidden" data-score-name="lunch_score3">
//                   <div className="p-modal-bkm__input-score input-score">
//                     <p className="p-modal-bkm__fav-name">雰囲気</p>
//                     <div className="js-five-star-rating c-rating-v2 c-rating-v2--s p-modal-bkm__star-wrapper"><i className="c-rating-v2__star p-modal-bkm__fav-star-dtl input-score__star"></i><span className="js-point input-score__baloon" data-point="" style="display:none;"></span>
// </div>
//                     <div className="p-modal-bkm__spinner">
//                       <input type="number" step="0.1" min="1.0" max="5.0" name="_score3" className="js-input textfield p-modal-bkm__score-textfield" value="0" placeholder="-" maxlength="3" style="width: 30.2px; margin-right: 16px; text-align: right;"><div className="ui-spinner ui-widget"><div className="ui-spinner-buttons" style="height: 22px; left: -16px; top: 0px; width: 16px;"><div className="ui-spinner-up ui-spinner-button ui-state-default ui-corner-tr" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-n" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div><div className="ui-spinner-down ui-spinner-button ui-state-default ui-corner-br" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-s" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div></div></div>
//                     </div>
//                     <div className="js-reset-score p-modal-bkm__reset-score" title="リセット">リセット</div>
//                   </div>
//                 </li>
//                 <li className="p-modal-bkm__fav-score js-score-star js-score-other is-hidden" data-score-name="lunch_score4">
//                   <div className="p-modal-bkm__input-score input-score">
//                     <p className="p-modal-bkm__fav-name">CP</p>
//                     <div className="js-five-star-rating c-rating-v2 c-rating-v2--s p-modal-bkm__star-wrapper"><i className="c-rating-v2__star p-modal-bkm__fav-star-dtl input-score__star"></i><span className="js-point input-score__baloon" data-point="" style="display:none;"></span>
// </div>
//                     <div className="p-modal-bkm__spinner">
//                       <input type="number" step="0.1" min="1.0" max="5.0" name="_score4" className="js-input textfield p-modal-bkm__score-textfield" value="0" placeholder="-" maxlength="3" style="width: 30.2px; margin-right: 16px; text-align: right;"><div className="ui-spinner ui-widget"><div className="ui-spinner-buttons" style="height: 22px; left: -16px; top: 0px; width: 16px;"><div className="ui-spinner-up ui-spinner-button ui-state-default ui-corner-tr" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-n" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div><div className="ui-spinner-down ui-spinner-button ui-state-default ui-corner-br" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-s" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div></div></div>
//                     </div>
//                     <div className="js-reset-score p-modal-bkm__reset-score" title="リセット">リセット</div>
//                   </div>
//                 </li>
//                 <li className="p-modal-bkm__fav-score js-score-star js-score-other is-hidden" data-score-name="lunch_score5">
//                   <div className="p-modal-bkm__input-score input-score">
//                     <p className="p-modal-bkm__fav-name">酒・ドリンク</p>
//                     <div className="js-five-star-rating c-rating-v2 c-rating-v2--s p-modal-bkm__star-wrapper"><i className="c-rating-v2__star p-modal-bkm__fav-star-dtl input-score__star"></i><span className="js-point input-score__baloon" data-point="" style="display:none;"></span>
// </div>
//                     <div className="p-modal-bkm__spinner">
//                       <input type="number" step="0.1" min="1.0" max="5.0" name="_score5" className="js-input textfield p-modal-bkm__score-textfield" value="0" placeholder="-" maxlength="3" style="width: 30.2px; margin-right: 16px; text-align: right;"/><div className="ui-spinner ui-widget"><div className="ui-spinner-buttons" style="height: 22px; left: -16px; top: 0px; width: 16px;"><div className="ui-spinner-up ui-spinner-button ui-state-default ui-corner-tr" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-n" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div><div className="ui-spinner-down ui-spinner-button ui-state-default ui-corner-br" style="width: 16px; height: 11px;"><span className="ui-icon ui-icon-triangle-1-s" style="margin-left: 0px; margin-top: -2.5px;">&nbsp;</span></div></div></div>
//                     </div>
//                     <div className="js-reset-score p-modal-bkm__reset-score" title="リセット">リセット</div>
//                   </div>
//                 </li>
//             </ul>
//         </div>
//         <div className="p-modal-bkm__fav-rating-item p-modal-bkm__fav-rating-item--takeout js-star-rating-takeout">
//           <div className="p-modal-bkm__fav-score-total js-score-star" data-score-name="takeout_total_score">
//             <div className="p-modal-bkm__fav-scene p-modal-bkm__fav-scene--takeout">
//               <span>テイクアウト</span>
//             </div>
//             <div className="p-modal-bkm__fav-total-contents">
//               <div className="p-modal-bkm__fav-total-items">
//                 <div className="p-modal-bkm__fav-total-item">
//                   <div className="p-modal-bkm__fav-total-textframe">
//                     <p className="p-modal-bkm__fav-total-text">総合</p>
//                     <div className="c-icon-help c-icon-help--dark c-icon-help--around">
//                       <span className="c-icon-help__btn">？</span>
//                       <div className="c-icon-help__tooltip-frame p-modal-bkm__help-tooltip p-modal-bkm__help-tooltip--list">
//                         <ul className="c-tooltip-bordered c-tooltip-bordered--top p-modal-bkm__help-tooltip-border">
//                           <li className="p-modal-bkm__help-tooltip-item">総合点は、食べた料理の種類、料理・味、サービス、雰囲気、価格などから総合的に判断してください。</li>
//                           <li className="p-modal-bkm__help-tooltip-item">採点を控える場合は、星（☆☆☆☆☆）をグレー状態のままにしてください。</li>
//                           <li className="p-modal-bkm__help-tooltip-item">「CP」は「コストパフォーマンス」の略です。</li>
//                           <li className="p-modal-bkm__help-tooltip-item">口コミの最上部に表示される評価は、昼・夜の各々の最新の評価が反映されます。</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="input-score">
//                     <div className="js-five-star-rating p-modal-bkm__fav-star-wrapper c-rating-v2"><i className="c-rating-v2__star p-modal-bkm__fav-star-dtl input-score__star"></i><span className="js-point input-score__baloon" data-point="" style="display:none;"></span>
// </div>
//                     <div className="p-modal-bkm__fav-spinner">
//                       <input type="number" step="0.1" min="1.0" max="5.0" name="takeout_total_score" className="js-input textfield p-modal-bkm__score-textfield-total" value="0" placeholder="-" maxlength="3" style="width: 41.75px; margin-right: 16px; text-align: right;"><div className="ui-spinner ui-widget"><div className="ui-spinner-buttons" style="height: 31px; left: -16px; top: 0px; width: 16px;"><div className="ui-spinner-up ui-spinner-button ui-state-default ui-corner-tr" style="width: 16px; height: 15.5px;"><span className="ui-icon ui-icon-triangle-1-n" style="margin-left: 0px; margin-top: -0.25px;">&nbsp;</span></div><div className="ui-spinner-down ui-spinner-button ui-state-default ui-corner-br" style="width: 16px; height: 15.5px;"><span className="ui-icon ui-icon-triangle-1-s" style="margin-left: 0px; margin-top: -0.25px;">&nbsp;</span></div></div></div>
//                     </div>
//                     <div className="js-reset-score p-modal-bkm__reset-score p-modal-bkm__reset-score--total" title="リセット">リセット</div>
//                   </div>
//                 </div>
//                 <div className="p-modal-bkm__fav-total-item">
//                   <p className="p-modal-bkm__fav-total-text p-modal-bkm__fav-total-text--price">使った金額 / 1人</p>
//                   <div className="c-select p-modal-bkm__fav-total-select">
//                     <select name="takeout_price_num" id="js-takeout-price">

//                     <option value="0">－</option><option value="1">～￥999</option><option value="2">￥1,000～￥1,999</option><option value="3">￥2,000～￥2,999</option><option value="4">￥3,000～￥3,999</option><option value="5">￥4,000～￥4,999</option><option value="6">￥5,000～￥5,999</option><option value="7">￥6,000～￥7,999</option><option value="8">￥8,000～￥9,999</option><option value="9">￥10,000～￥14,999</option><option value="10">￥15,000～￥19,999</option><option value="11">￥20,000～￥29,999</option><option value="13">￥30,000～￥39,999</option><option value="14">￥40,000～￥49,999</option><option value="15">￥50,000～￥59,999</option><option value="16">￥60,000～￥79,999</option><option value="17">￥80,000～￥99,999</option><option value="18">￥100,000～</option></select>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-modal-bkm__score-options">
//                 <span className="js-scene-clear p-modal-bkm__fav-scene-clear" data-use-type="takeout" role="button">削除</span>
//               </div>
//             </div>
//           </div>

//         </div>
//         <div className="p-modal-bkm__fav-rating-item p-modal-bkm__fav-rating-item--delivery js-star-rating-delivery">
//           <div className="p-modal-bkm__fav-score-total js-score-star" data-score-name="delivery_total_score">
//             <div className="p-modal-bkm__fav-scene p-modal-bkm__fav-scene--delivery">
//               <span>デリバリー</span>
//             </div>
//             <div className="p-modal-bkm__fav-total-contents">
//               <div className="p-modal-bkm__fav-total-items">
//                 <div className="p-modal-bkm__fav-total-item">
//                   <div className="p-modal-bkm__fav-total-textframe">
//                     <p className="p-modal-bkm__fav-total-text">総合</p>
//                     <div className="c-icon-help c-icon-help--dark c-icon-help--around">
//                       <span className="c-icon-help__btn">？</span>
//                       <div className="c-icon-help__tooltip-frame p-modal-bkm__help-tooltip p-modal-bkm__help-tooltip--list">
//                         <ul className="c-tooltip-bordered c-tooltip-bordered--top p-modal-bkm__help-tooltip-border">
//                           <li className="p-modal-bkm__help-tooltip-item">総合点は、食べた料理の種類、料理・味、サービス、雰囲気、価格などから総合的に判断してください。</li>
//                           <li className="p-modal-bkm__help-tooltip-item">採点を控える場合は、星（☆☆☆☆☆）をグレー状態のままにしてください。</li>
//                           <li className="p-modal-bkm__help-tooltip-item">「CP」は「コストパフォーマンス」の略です。</li>
//                           <li className="p-modal-bkm__help-tooltip-item">口コミの最上部に表示される評価は、昼・夜の各々の最新の評価が反映されます。</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="input-score">
//                     <div className="js-five-star-rating p-modal-bkm__fav-star-wrapper c-rating-v2"><i className="c-rating-v2__star p-modal-bkm__fav-star-dtl input-score__star"></i><span className="js-point input-score__baloon" data-point="" style="display:none;"></span>
// </div>
//                     <div className="p-modal-bkm__fav-spinner">
//                       <input type="number" step="0.1" min="1.0" max="5.0" name="delivery_total_score" className="js-input textfield p-modal-bkm__score-textfield-total" value="0" placeholder="-" maxlength="3" style="width: 41.75px; margin-right: 16px; text-align: right;"><div className="ui-spinner ui-widget"><div className="ui-spinner-buttons" style="height: 31px; left: -16px; top: 0px; width: 16px;"><div className="ui-spinner-up ui-spinner-button ui-state-default ui-corner-tr" style="width: 16px; height: 15.5px;"><span className="ui-icon ui-icon-triangle-1-n" style="margin-left: 0px; margin-top: -0.25px;">&nbsp;</span></div><div className="ui-spinner-down ui-spinner-button ui-state-default ui-corner-br" style="width: 16px; height: 15.5px;"><span className="ui-icon ui-icon-triangle-1-s" style="margin-left: 0px; margin-top: -0.25px;">&nbsp;</span></div></div></div>
//                     </div>
//                     <div className="js-reset-score p-modal-bkm__reset-score p-modal-bkm__reset-score--total" title="リセット">リセット</div>
//                   </div>
//                 </div>
//                 <div className="p-modal-bkm__fav-total-item">
//                   <p className="p-modal-bkm__fav-total-text p-modal-bkm__fav-total-text--price">使った金額 / 1人</p>
//                   <div className="c-select p-modal-bkm__fav-total-select">
//                     <select name="delivery_price_num" id="js-delivery-price">

//                     <option value="0">－</option><option value="1">～￥999</option><option value="2">￥1,000～￥1,999</option><option value="3">￥2,000～￥2,999</option><option value="4">￥3,000～￥3,999</option><option value="5">￥4,000～￥4,999</option><option value="6">￥5,000～￥5,999</option><option value="7">￥6,000～￥7,999</option><option value="8">￥8,000～￥9,999</option><option value="9">￥10,000～￥14,999</option><option value="10">￥15,000～￥19,999</option><option value="11">￥20,000～￥29,999</option><option value="13">￥30,000～￥39,999</option><option value="14">￥40,000～￥49,999</option><option value="15">￥50,000～￥59,999</option><option value="16">￥60,000～￥79,999</option><option value="17">￥80,000～￥99,999</option><option value="18">￥100,000～</option></select>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-modal-bkm__score-options">
//                 <span className="js-scene-clear p-modal-bkm__fav-scene-clear" data-use-type="delivery" role="button">削除</span>
//               </div>
//             </div>
//           </div>

//         </div>
//         <div className="p-modal-bkm__fav-rating-item p-modal-bkm__fav-rating-item--etc js-star-rating-etc">
//           <div className="p-modal-bkm__fav-score-total js-score-star" data-score-name="etc_total_score">
//             <div className="p-modal-bkm__fav-scene p-modal-bkm__fav-scene--etc">
//               <span>その他</span>
//             </div>
//             <div className="p-modal-bkm__fav-total-contents">
//               <div className="p-modal-bkm__fav-total-items">
//                 <div className="p-modal-bkm__fav-total-item">
//                   <div className="p-modal-bkm__fav-total-textframe">
//                     <p className="p-modal-bkm__fav-total-text">総合</p>
//                     <div className="c-icon-help c-icon-help--dark c-icon-help--around">
//                       <span className="c-icon-help__btn">？</span>
//                       <div className="c-icon-help__tooltip-frame p-modal-bkm__help-tooltip p-modal-bkm__help-tooltip--list">
//                         <ul className="c-tooltip-bordered c-tooltip-bordered--top p-modal-bkm__help-tooltip-border">
//                           <li className="p-modal-bkm__help-tooltip-item">総合点は、食べた料理の種類、料理・味、サービス、雰囲気、価格などから総合的に判断してください。</li>
//                           <li className="p-modal-bkm__help-tooltip-item">採点を控える場合は、星（☆☆☆☆☆）をグレー状態のままにしてください。</li>
//                           <li className="p-modal-bkm__help-tooltip-item">「CP」は「コストパフォーマンス」の略です。</li>
//                           <li className="p-modal-bkm__help-tooltip-item">口コミの最上部に表示される評価は、昼・夜の各々の最新の評価が反映されます。</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="input-score">
//                     <div className="js-five-star-rating p-modal-bkm__fav-star-wrapper c-rating-v2"><i className="c-rating-v2__star p-modal-bkm__fav-star-dtl input-score__star"></i><span className="js-point input-score__baloon" data-point="" style="display:none;"></span>
// </div>
//                     <div className="p-modal-bkm__fav-spinner">
//                       <input type="number" step="0.1" min="1.0" max="5.0" name="etc_total_score" className="js-input textfield p-modal-bkm__score-textfield-total" value="0" placeholder="-" maxlength="3" style="width: 41.75px; margin-right: 16px; text-align: right;"><div className="ui-spinner ui-widget"><div className="ui-spinner-buttons" style="height: 31px; left: -16px; top: 0px; width: 16px;"><div className="ui-spinner-up ui-spinner-button ui-state-default ui-corner-tr" style="width: 16px; height: 15.5px;"><span className="ui-icon ui-icon-triangle-1-n" style="margin-left: 0px; margin-top: -0.25px;">&nbsp;</span></div><div className="ui-spinner-down ui-spinner-button ui-state-default ui-corner-br" style="width: 16px; height: 15.5px;"><span className="ui-icon ui-icon-triangle-1-s" style="margin-left: 0px; margin-top: -0.25px;">&nbsp;</span></div></div></div>
//                     </div>
//                     <div className="js-reset-score p-modal-bkm__reset-score p-modal-bkm__reset-score--total" title="リセット">リセット</div>
//                   </div>
//                 </div>
//                 <div className="p-modal-bkm__fav-total-item">
//                   <p className="p-modal-bkm__fav-total-text p-modal-bkm__fav-total-text--price">使った金額 / 1人</p>
//                   <div className="c-select p-modal-bkm__fav-total-select">
//                     <select name="etc_price_num" id="js-etc-price">

//                     <option value="0">－</option><option value="1">～￥999</option><option value="2">￥1,000～￥1,999</option><option value="3">￥2,000～￥2,999</option><option value="4">￥3,000～￥3,999</option><option value="5">￥4,000～￥4,999</option><option value="6">￥5,000～￥5,999</option><option value="7">￥6,000～￥7,999</option><option value="8">￥8,000～￥9,999</option><option value="9">￥10,000～￥14,999</option><option value="10">￥15,000～￥19,999</option><option value="11">￥20,000～￥29,999</option><option value="13">￥30,000～￥39,999</option><option value="14">￥40,000～￥49,999</option><option value="15">￥50,000～￥59,999</option><option value="16">￥60,000～￥79,999</option><option value="17">￥80,000～￥99,999</option><option value="18">￥100,000～</option></select>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-modal-bkm__score-options">
//                 <span className="js-scene-clear p-modal-bkm__fav-scene-clear" data-use-type="etc" role="button">削除</span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       <p className="p-modal-bkm__textfield-title js-review-title-wrap">
//         <textarea className="p-modal-bkm__textfield-title-target" name="subject" id="js-review-title" maxlength="100" placeholder="タイトルを入れてください" rows="1" style="overflow: hidden; overflow-wrap: break-word; height: 23px;"></textarea>
//       </p>
//       <div className="p-modal-bkm__textfield-comment js-review-comment-wrapper">
//         <textarea id="js-review-comment" className="p-modal-bkm__textfield-comment-target" placeholder="口コミ本文を入れてください（15,000文字以下）" name="comment" rows="1" cols="30" style="max-height: 259px; overflow-x: hidden; overflow-wrap: break-word; height: 94px;"></textarea>
//         <div className="p-modal-bkm__notice-frame p-modal-bkm__notice-frame--border">
//           <p className="p-modal-bkm__textfield-notice">
//             <span>入力文字数：</span>
//             <em className="js-text-count-num p-modal-bkm__notice-item">0</em>
//             <span className="js-review-notes-short-characters p-modal-bkm__notice-item">（<span className="js-text-count-under-num">100</span>文字未満の口コミは、お店ページに表示されません。ご了承ください。）</span>
//             <span className="js-review-alert-exceed-characters p-modal-bkm__notice-item is-error is-hidden">（最大文字数を <em className="js-text-count-over-num"></em> 文字超えています）</span>
//           </p>
//           <div className="p-modal-bkm__textfield-notation js-textedit-buttons-wrapper is-hidden">
//             <div className="clearfix" tabindex="-1">
//               <ul className="textedit-buttons clearfix" data-target-id="js-review-comment">
//                 <li className="edit-bold button"><a href="#" title="太字">太字</a></li>
//                 <li className="edit-italic button"><a href="#" title="斜体">斜体</a></li>
//                 <li className="edit-underline button"><a href="#" title="下線">下線</a></li>
//                 <li className="edit-rstlink button"><a href="#" title="レストランにリンク">レストランにリンク</a></li>
//                 <li className="edit-howto"><a href="#" className="c-link-arrow"><span>記法一覧</span></a></li>
//               </ul>
//               <div className="c-icon-help c-icon-help--link c-icon-help--dark">
//                 <a href="http://user-help.tabelog.com/?p=304" target="_blank" className="c-icon-help__btn" title="食べログwiki記法とは？">？</a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="js-review-notes-for-user p-modal-bkm__overtxt p-modal-bkm__overtxt--top is-hidden">
//           <div className="p-modal-bkm__overtxt-title">「口コミ」を投稿する前に</div>
//           <div className="p-modal-bkm__overtxt-dtl">
//             <p>食べログでは、口コミを書き込む上でのルールを定めております。詳しくは<a className="link-underline" href="http://user-help.tabelog.com/review_guide" target="_blank">口コミガイドライン</a>をご確認ください。</p>
//           </div>
//         </div>
//         <div className="js-review-notes-for-owner p-modal-bkm__overtxt is-hidden">
//           <div className="p-modal-bkm__overtxt-title">店舗関係者の方へ</div>
//           <div className="p-modal-bkm__overtxt-dtl">
//             <p>
//               食べログは、ユーザーが実際にお店で食事をした際の主観的な感想・意見を投稿する口コミサイトです。<br>
//               店舗関係者の方が関係店舗に口コミを投稿することはご遠慮ください。<br>
//               食べログでは、そうした投稿が信憑性の低い口コミとして見分けが付きやすいようになっており、逆にお店の評判を下げることになりかねませんので、ご留意ください。
//             </p>
//           </div>
//         </div>
//         <div className="js-review-notes-for-user p-modal-bkm__overtxt p-modal-bkm__overtxt--bottom is-hidden">
//           <div className="p-modal-bkm__overtxt-dtl">
//             <p>
//               ※口コミの具体性などを保つため一定の文字数に満たない口コミに関しては優先順位を下げさせていただく場合がございます。<br>
//               ※機種依存文字・絵文字等は反映されません。ご了承ください。
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="js-options-wrap p-modal-bkm__options-wrap">
//         <div className="p-modal-bkm__options-inner">
//           <ul className="p-modal-bkm__options u-clearfix">
//             <li className="p-modal-bkm__option-tab js-image-tab is-selected">
//               <p>
//                 <a href="#edit-visit/13019285/photo" className="p-modal-bkm__option-btn p-modal-bkm__option-btn--photo js-tab js-no-history">写真追加</a>
//               </p>
//             </li>
//           </ul>
//           <div className="p-modal-bkm__notice-wrap">
//               <div className="p-modal-bkm__hozon-notice">
//                 <input id="hozon-notice" type="checkbox" name="hozon-notice" className="c-checkbox p-modal-bkm__hozon-notice-input">
//                 <label for="hozon-notice">お店を保存する</label>
//                 <div className="p-modal-bkm__hozon-help c-icon-help c-icon-help--dark">
//                   <span className="c-icon-help__btn">？</span>
//                   <ul className="p-modal-bkm__hozon-help-target c-tooltip-bordered c-tooltip-bordered--bottom">
//                     <li>チェックを入れたまま投稿すると、お店が保存済みに追加されます。</li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="js-timeline-notice p-modal-bkm__timeline-notice" style="display: none;">
//                 <input id="timeline-notice" type="checkbox" name="timeline-notice" className="c-checkbox js-timeline-notice-check p-modal-bkm__timeline-notice-input">
//                 <label for="timeline-notice">タイムラインに通知しない</label>
//                 <div className="p-modal-bkm__timeline-help c-icon-help c-icon-help--dark">
//                   <span className="c-icon-help__btn">？</span>
//                   <ul className="p-modal-bkm__timeline-help-target c-tooltip-bordered c-tooltip-bordered--bottom">
//                     <li>このチェックをいれることで、タイムラインに通知せずに、「行った」を投稿できます。</li>
//                     <li>本文のある「行った」は1度だけタイムラインにお知らせすることができます。</li>
//                   </ul>
//                 </div>
//               </div>
//             <div className="sns-share p-modal-bkm__sns-share">
//               <ul className="sns-share__list">
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="p-modal-bkm__option-container">
//         <div className="js-image-area p-modal-bkm__entry-photo">
// <div className="p-modal-bkm__photo-frame u-clearfix">
//   <div className="p-modal-bkm__photo-menu">
//     <a href="#" className="js-download_select_images">写真の一括ダウンロード</a>
//     <a className="p-modal-bkm__bestshot-reset js-bestshot-reset">ベストショットをリセット</a>
//   </div>
//   <div className="p-modal-bkm__photo-toggle">
//       <span className="p-modal-bkm__photo-toggle-menu p-modal-bkm__photo-toggle-menu--default p-modal-bkm__photo-toggle-menu--selected">通常</span>
//       <input type="button" value="サムネイル" className="js-toggle-thumbnail js-lock p-modal-bkm__photo-toggle-menu p-modal-bkm__photo-toggle-menu--thumbnail">
//   </div>
// </div>
// <input type="file" id="js-file-input" name="files[]" multiple="multiple" className="u-hidden">
// <div id="sortable_area" className="p-modal-bkm__upphoto is-no-exist-photo">
//   <div id="rect" className="p-modal-bkm__move-rect"></div>
//   <div id="splitter" className="p-modal-bkm__move-splitter"></div>
//   <div id="badge" className="p-modal-bkm__move-badge"></div>
//   <ul className="js-image-list p-modal-bkm__photo-list">
//     <li className="js-simple-rvw-photo-dialog-trigger">
//       <div className="p-modal-bkm__photo-add">
//         <button id="js-file-dialog" type="button" className="p-modal-bkm__photo-add-btn gly-b-add js-lock">写真追加</button>
//       </div>
//     </li>
//   </ul>
// </div>
// <ul className="p-modal-bkm__upphoto-help">
//   <li className="p-modal-bkm__upphoto-help-item gly-a-targetwindow">
//     <a href="http://user-help.tabelog.com/review_image_guide" target="_blank">
//       画像投稿ガイドライン
//     </a>
//   </li>
//   <li className="p-modal-bkm__upphoto-help-item gly-a-targetwindow">
//     <a href="http://user-help.tabelog.com/?p=211" target="_blank">
//       画像投稿の詳しい操作方法
//     </a>
//   </li>
//   <li className="p-modal-bkm__upphoto-help-item gly-a-targetwindow">
//     <a href="http://user-help.tabelog.com/?p=1094" target="_blank">
//       ベストショットとは
//     </a>
//   </li>
// </ul>
// </div>
//       </div>
//     </div>
//     <div className="js-modal-footer-adjust" style="height: 79.6px;"></div>
//   </div><div id="mCSB_1_scrollbar_vertical" className="mCSB_scrollTools mCSB_1_scrollbar mCS-modal mCSB_scrollTools_vertical" style="display: block;"><div className="mCSB_draggerContainer"><div id="mCSB_1_dragger_vertical" className="mCSB_dragger" style="position: absolute; min-height: 30px; display: block; height: 351px; max-height: 526.8px; top: 0px;"><div className="mCSB_dragger_bar" style="line-height: 30px;"></div></div><div className="mCSB_draggerRail"></div></div></div></div></div>

//   <div className="js-modal-footer c-modal__footer c-modal__footer--floating p-modal-bkm__footer">
//     <p className="p-modal-bkm__footer-notice js-term">
//       <a href="http://user-help.tabelog.com/rules" target="_blank" className="link-underline">利用規約</a>と<a href="http://user-help.tabelog.com/review_guide" target="_blank" className="link-underline">ガイドライン</a>をご確認ください。
//     </p>
//     <div className="p-modal-bkm__footer-frame">
//       <div className="p-modal-bkm__footer-addinfo p-modal-bkm__footer-addinfo--visit">
//         <dl className="p-modal-bkm__data p-modal-bkm__data--edit">
//           <dt className="p-modal-bkm__data-subject">訪問日</dt>
//           <dd className="p-modal-bkm__data-select">
//             <p className="p-modal-bkm__data-btn-wrapper c-select">
//               <input type="hidden" className="js-visit-date-input" name="visit_date" value=""/>
//               <input type="button" className="js-visit-date-trigger p-modal-bkm__data-btn-dtl" value="-">
//             </p>
//             <div className="js-visit-date-calendar-wrapper p-modal-bkm__calendar-wrapper">
//             </div>
//             <div className="js-exif-balloon c-balloon c-balloon--bottom p-modal-bkm__data-select-ballon is-hidden">
//               写真の情報を元に<br>
//               設定されました
//             </div>
//           </dd>
//         </dl>
//         <div className="p-modal-bkm__public-level-wrapper js-public-level-wrapper">
//           <div className="p-modal-bkm__public-level-balloon c-balloon c-balloon--bottom js-public-level-balloon">
//             <ul className="c-link-list">
//               <li className="c-link-list__item">
//                 <p className="p-modal-bkm__public-level-title">公開範囲</p>
//               </li>
//                 <li className="c-link-list__item">
//                   <p className="p-modal-bkm__public-level-choice">
//                     <input id="rvw-public-level-public" type="radio" name="status_num" className="p-modal-bkm__public-level-radio" value="1">
//                     <label for="rvw-public-level-public" className="p-modal-bkm__public-level-label">
//                       <span className="p-modal-bkm__public-level p-modal-bkm__public-level--public">公開</span>
//                     </label>
//                   </p>
//                 </li>
//               <li className="c-link-list__item">
//                 <p className="p-modal-bkm__public-level-choice">
//                   <input id="rvw-public-level-follow" type="radio" name="status_num" className="p-modal-bkm__public-level-radio" value="2">
//                   <label for="rvw-public-level-follow" className="p-modal-bkm__public-level-label">
//                     <span className="p-modal-bkm__public-level p-modal-bkm__public-level--follower">フォロワーのみ</span>
//                   </label>
//                 </p>
//               </li>
//               <li className="c-link-list__item">
//                 <p className="p-modal-bkm__public-level-choice">
//                   <input id="rvw-public-level-own" type="radio" name="status_num" className="p-modal-bkm__public-level-radio" value="3">
//                   <label for="rvw-public-level-own" className="p-modal-bkm__public-level-label">
//                     <span className="p-modal-bkm__public-level p-modal-bkm__public-level--own">自分のみ</span>
//                   </label>
//                 </p>
//               </li>
//             </ul>
//           </div>
//           <button type="button" className="p-modal-bkm__public-level-select js-public-level-button">
//               <span className="p-modal-bkm__public-level p-modal-bkm__public-level--public js-public-level-button-text-1">公開</span>
//             <span className="p-modal-bkm__public-level p-modal-bkm__public-level--follower js-public-level-button-text-2 is-hidden">フォロワーのみ</span>
//             <span className="p-modal-bkm__public-level p-modal-bkm__public-level--own js-public-level-button-text-3 is-hidden">自分のみ</span>
//           </button>
//         </div>
//       </div>
//       <p className="p-modal-bkm__footer-save">
//         <button type="button" id="js-save" className="c-btn c-btn--success p-modal-bkm__footer-btn p-modal-bkm__footer-btn--success js-lock">同意して投稿</button>
//       </p>
//       <p className="p-modal-bkm__footer-draft">
//         <button type="button" id="js-draft" className="c-btn js-lock p-modal-bkm__footer-btn p-modal-bkm__footer-btn--draft">下書き保存</button>
//       </p>
//     </div>
//   </div>
// </form>
// </div></div>
//   );
// };
