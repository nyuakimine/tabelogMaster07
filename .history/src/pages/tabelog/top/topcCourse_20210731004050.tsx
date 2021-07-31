import React, { useEffect, useRef, useState } from 'react'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import '../tabelog1.css'
import '../tabelog2.css'

export const TopcCourse: React.FC = () => {
  const topComment = useSelector((state: RootState) => state.topNoticeCommentSlice.data)

  const showMoreReviewsBtn = () => {
    const showList = document.getElementsByClassName('pr-comment__more')[0] as HTMLElement
    showList.style.display = 'none'
    const show = document.getElementsByClassName('pr-comment__more-icon')[0] as HTMLElement
    show.style.display = 'none'

    const cshowList = document.getElementsByClassName('pr-comment__over')[0] as HTMLElement
    cshowList.style.display = 'block'
    cshowList.style.display = 'inline'
  }

  return topComment === null ? (
    <h2>loading...</h2>
  ) : (
    <div className="rstdtl-top-course">
      <div className="rstdtl-heading rstdtl-top-course__heading">
        <h3 className="rstdtl-heading__title">コース</h3>
      </div>

      <div className="rstdtl-course-list js-rstdtl-course-list">
        <div className="rstdtl-course-list__inner">
          <p className="rstdtl-course-list__img">
            <a
              className="rstdtl-course-list__img-target"
              href="https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A130201&amp;LstPrf=A1302&amp;pal=tokyo&amp;pplan_id=38767406&amp;rcd=13019285"
            >
              <img
                alt=""
                height="120"
                width="120"
                src="https://tblg.k-img.com/restaurant/images/Rvw/139581/200x200_square_139581073.jpg"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </p>
          <div className="rstdtl-course-list__data">
            <div className="rstdtl-course-list__data-header">
              <div className="rstdtl-course-list__course-summary">
                <div className="rstdtl-course-list__option">
                  <span className="c-label c-label--s rstdtl-course-list__label rstdtl-course-list__label--emphasis">飲み放題</span>
                </div>
                <p className="rstdtl-course-list__course-title">
                  <a
                    className="rstdtl-course-list__target"
                    href="https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A130201&amp;LstPrf=A1302&amp;pal=tokyo&amp;pplan_id=38767406&amp;rcd=13019285"
                  >
                    <span className="rstdtl-course-list__course-title-text">
                      飲み放題☆特上牛肉と赤海老が楽しめる！特上焼肉コース〈全12品〉忘新年会・ご宴会・飲み会・女子会
                    </span>
                  </a>
                  <span className="c-label c-label--s rstdtl-course-list__label">12品</span>
                </p>
                <p className="rstdtl-course-list__desc">
                  特上牛肉と赤海老、ご用意致しました。絶品です！ 上質の焼肉と新鮮な海鮮赤海老を塩焼きにしてお召し上がり下さい。
                </p>
              </div>
              <div className="rstdtl-course-list__action-btn">
                <span
                  className="c-btn c-btn--s c-btn--primary rstdtl-course-list__action-btn-target js-show-yoyaku-modal-trigger-course"
                  data-catalog-price=""
                  data-catalyst-name="yoyaku_rstdtl_courselst_a"
                  data-course-name="飲み放題☆特上牛肉と赤海老が楽しめる！特上焼肉コース〈全12品〉忘新年会・ご宴会・飲み会・女子会"
                  data-ex-tax-plan="false"
                  data-none-tax-plan="false"
                  data-plan-id="38767406"
                  data-real-price="5,980"
                  data-tax="(税込)"
                >
                  予約する
                </span>
                <a
                  className="c-btn c-btn--s rstdtl-course-list__action-btn-target"
                  href="https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A130201&amp;LstPrf=A1302&amp;pal=tokyo&amp;pplan_id=38767406&amp;rcd=13019285"
                >
                  コース詳細
                </a>
              </div>
            </div>
            <div className="rstdtl-course-list__data-body">
              <div className="rstdtl-course-list__subinfo">
                <div className="rstdtl-course-list__price-wrap">
                  <div className="rstdtl-course-list__price">
                    <span className="rstdtl-course-list__price-num">
                      <em>5,980</em>円 <span className="rstdtl-course-list__price-num-tax">(税込)</span>
                    </span>
                  </div>
                </div>
                <dl className="rstdtl-course-list__course-rule">
                  <dt>
                    <span className="rstdtl-course-list__course-rule-title rstdtl-course-list__course-rule-title--member">
                      <i>人数</i>
                    </span>
                  </dt>
                  <dd>1～20名様</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rstdtl-course-list js-rstdtl-course-list">
        <div className="rstdtl-course-list__inner">
          <p className="rstdtl-course-list__img">
            <a
              className="rstdtl-course-list__img-target"
              href="https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A130201&amp;LstPrf=A1302&amp;pal=tokyo&amp;pplan_id=38767393&amp;rcd=13019285"
            >
              <img
                alt=""
                height="120"
                width="120"
                src="https://tblg.k-img.com/restaurant/images/Rvw/139581/200x200_square_139581077.jpg"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </p>
          <div className="rstdtl-course-list__data">
            <div className="rstdtl-course-list__data-header">
              <div className="rstdtl-course-list__course-summary">
                <div className="rstdtl-course-list__option">
                  <span className="c-label c-label--s rstdtl-course-list__label rstdtl-course-list__label--emphasis">飲み放題</span>
                </div>
                <p className="rstdtl-course-list__course-title">
                  <a
                    className="rstdtl-course-list__target"
                    href="https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A130201&amp;LstPrf=A1302&amp;pal=tokyo&amp;pplan_id=38767393&amp;rcd=13019285"
                  >
                    <span className="rstdtl-course-list__course-title-text">
                      飲み放題☆当店一番人気！焼肉コース〈全12品〉忘新年会・ご宴会・飲み会・女子会・合コ
                    </span>
                  </a>
                  <span className="c-label c-label--s rstdtl-course-list__label">12品</span>
                </p>
                <p className="rstdtl-course-list__desc">宴会と言えば焼肉！沢山の仲間とお酒を飲んで皆でお酒を飲んで楽しもう！</p>
              </div>
              <div className="rstdtl-course-list__action-btn">
                <span
                  className="c-btn c-btn--s c-btn--primary rstdtl-course-list__action-btn-target js-show-yoyaku-modal-trigger-course"
                  data-catalog-price=""
                  data-catalyst-name="yoyaku_rstdtl_courselst_a"
                  data-course-name="飲み放題☆当店一番人気！焼肉コース〈全12品〉忘新年会・ご宴会・飲み会・女子会・合コ"
                  data-ex-tax-plan="false"
                  data-none-tax-plan="false"
                  data-plan-id="38767393"
                  data-real-price="4,980"
                  data-tax="(税込)"
                >
                  予約する
                </span>
                <a
                  className="c-btn c-btn--s rstdtl-course-list__action-btn-target"
                  href="https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A130201&amp;LstPrf=A1302&amp;pal=tokyo&amp;pplan_id=38767393&amp;rcd=13019285"
                >
                  コース詳細
                </a>
              </div>
            </div>
            <div className="rstdtl-course-list__data-body">
              <div className="rstdtl-course-list__subinfo">
                <div className="rstdtl-course-list__price-wrap">
                  <div className="rstdtl-course-list__price">
                    <span className="rstdtl-course-list__price-num">
                      <em>4,980</em>円 <span className="rstdtl-course-list__price-num-tax">(税込)</span>
                    </span>
                  </div>
                </div>
                <dl className="rstdtl-course-list__course-rule">
                  <dt>
                    <span className="rstdtl-course-list__course-rule-title rstdtl-course-list__course-rule-title--member">
                      <i>人数</i>
                    </span>
                  </dt>
                  <dd>1～20名様</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rstdtl-course-list js-rstdtl-course-list">
        <div className="rstdtl-course-list__inner">
          <p className="rstdtl-course-list__img">
            <a
              className="rstdtl-course-list__img-target"
              href="https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A130201&amp;LstPrf=A1302&amp;pal=tokyo&amp;pplan_id=38767412&amp;rcd=13019285"
            >
              <img
                alt=""
                height="120"
                width="120"
                src="https://tblg.k-img.com/restaurant/images/Rvw/74927/200x200_square_74927228.jpg"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </p>
          <div className="rstdtl-course-list__data">
            <div className="rstdtl-course-list__data-header">
              <div className="rstdtl-course-list__course-summary">
                <div className="rstdtl-course-list__option">
                  <span className="c-label c-label--s rstdtl-course-list__label rstdtl-course-list__label--emphasis">飲み放題</span>
                </div>
                <p className="rstdtl-course-list__course-title">
                  <a
                    className="rstdtl-course-list__target"
                    href="https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A130201&amp;LstPrf=A1302&amp;pal=tokyo&amp;pplan_id=38767412&amp;rcd=13019285"
                  >
                    <span className="rstdtl-course-list__course-title-text">
                      飲み放題☆大人気の韓国料理が楽しめる！選べる女子会コース&lt;全７品&gt;・ご宴会・飲み会・女子会
                    </span>
                  </a>
                  <span className="c-label c-label--s rstdtl-course-list__label">7品</span>
                </p>
                <p className="rstdtl-course-list__desc">
                  今話題の韓国料理と言えばコレ！サムギョプサル！チーズタッカルビ！鍋料理（プデチゲ、特製鶏鍋）
                  話題の韓国料理を女子会をしながら楽しくつつき合おう！
                  勿論、キムチもナムルもチヂミもキンパプも登場！沢山マッコリも飲んじゃおう～
                </p>
              </div>
              <div className="rstdtl-course-list__action-btn">
                <span
                  className="c-btn c-btn--s c-btn--primary rstdtl-course-list__action-btn-target js-show-yoyaku-modal-trigger-course"
                  data-catalog-price=""
                  data-catalyst-name="yoyaku_rstdtl_courselst_a"
                  data-course-name="飲み放題☆大人気の韓国料理が楽しめる！選べる女子会コース<全７品>・ご宴会・飲み会・女子会"
                  data-ex-tax-plan="false"
                  data-none-tax-plan="false"
                  data-plan-id="38767412"
                  data-real-price="4,580"
                  data-tax="(税込)"
                >
                  予約する
                </span>
                <a
                  className="c-btn c-btn--s rstdtl-course-list__action-btn-target"
                  href="https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A130201&amp;LstPrf=A1302&amp;pal=tokyo&amp;pplan_id=38767412&amp;rcd=13019285"
                >
                  コース詳細
                </a>
              </div>
            </div>
            <div className="rstdtl-course-list__data-body">
              <div className="rstdtl-course-list__subinfo">
                <div className="rstdtl-course-list__price-wrap">
                  <div className="rstdtl-course-list__price">
                    <span className="rstdtl-course-list__price-num">
                      <em>4,580</em>円 <span className="rstdtl-course-list__price-num-tax">(税込)</span>
                    </span>
                  </div>
                </div>
                <dl className="rstdtl-course-list__course-rule">
                  <dt>
                    <span className="rstdtl-course-list__course-rule-title rstdtl-course-list__course-rule-title--member">
                      <i>人数</i>
                    </span>
                  </dt>
                  <dd>1～20名様</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rstdtl-top-course__footer">
        <p className="rstdtl-top-course__more-link">
          <a title="コース一覧" className="c-link-circle" href="/tokyo/A1302/A130201/13019285/party/">
            <span>
              <strong>コース</strong>をもっと見る（4件）
            </span>
          </a>
        </p>
      </div>
    </div>
  )
}
