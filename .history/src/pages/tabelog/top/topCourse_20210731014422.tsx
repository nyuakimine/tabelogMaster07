import React, { useEffect, useRef, useState } from 'react'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import '../tabelog1.css'
import '../tabelog2.css'

interface ifProps {
  id: number
  courseBtn: string
  courseListDesc: string
  courseListLabel: string
  courseListLabel2: string
  courseMember: string
  coursePriceNum: string
  coursePath: string
  courseTitleText: string
  imgPath: string
  priceNumTax: string
  yoyakuBtn: string
  headingTitle: string
  courseMoreLink: string
}

interface pIf {
  data: ifProps[]
}
export const TopCourse: React.FC<pIf> = ({ data }) => {
  return data === null ? (
    <h2>loading...</h2>
  ) : (
    <div className="rstdtl-top-course">
      <div className="rstdtl-heading rstdtl-top-course__heading">
        <h3 className="rstdtl-heading__title">コース</h3>
      </div>
      {data.map((img, idx) => {
        return (
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
        )
      })}
      <div className="rstdtl-top-course__footer">
        <p className="rstdtl-top-course__more-link">
          <a title="コース一覧" className="c-link-circle" href="https://tabelog.com/tokyo/A1302/A130201/13019285/party/">
            <span>
              <strong>コース</strong>をもっと見る（4件）
            </span>
          </a>
        </p>
      </div>
    </div>
  )
}
