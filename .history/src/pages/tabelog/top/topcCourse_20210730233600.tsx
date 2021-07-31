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
              href="https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A130101&amp;LstPrf=A1301&amp;pal=tokyo&amp;pplan_id=166097872&amp;rcd=13040258"
            >
              <img
                alt=""
                height="120"
                width="120"
                src="https://tblg.k-img.com/restaurant/images/Rvw/55848/200x200_square_55848805.jpg"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </p>
          <div className="rstdtl-course-list__data">
            <div className="rstdtl-course-list__data-header">
              <div className="rstdtl-course-list__course-summary">
                <p className="rstdtl-course-list__course-title">
                  <a
                    className="rstdtl-course-list__target"
                    href="https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A130101&amp;LstPrf=A1301&amp;pal=tokyo&amp;pplan_id=166097872&amp;rcd=13040258"
                  >
                    <span className="rstdtl-course-list__course-title-text">
                      【個別料理】旬の料理を一皿毎に楽しめるご宴会『会席コース』＊料理のみ
                    </span>
                  </a>
                  <span className="c-label c-label--s rstdtl-course-list__label">9品</span>
                </p>
                <p className="rstdtl-course-list__desc">
                  旬をお届けする「旬会席コース」。七輪で炙る酒肴、彩り前菜、漁港直送の鮮魚や、旬素材による炉端焼き、揚物など、自然豊かな石川・能登の味をご堪能頂けます。３名様からの掘りごたつ個室もご用意。お付き合いを深める接待にどうぞ。
                  ※写真はイメージです。
                </p>
              </div>
              <div className="rstdtl-course-list__action-btn">
                <span
                  className="c-btn c-btn--s c-btn--primary rstdtl-course-list__action-btn-target js-show-yoyaku-modal-trigger-course"
                  data-catalog-price=""
                  data-catalyst-name="yoyaku_rstdtl_courselst_a"
                  data-course-name="【個別料理】旬の料理を一皿毎に楽しめるご宴会『会席コース』＊料理のみ"
                  data-ex-tax-plan="false"
                  data-none-tax-plan="false"
                  data-plan-id="166097872"
                  data-real-price="5,500"
                  data-tax="(税込)"
                >
                  予約する
                </span>
                <a
                  className="c-btn c-btn--s rstdtl-course-list__action-btn-target"
                  href="https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A130101&amp;LstPrf=A1301&amp;pal=tokyo&amp;pplan_id=166097872&amp;rcd=13040258"
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
                      <em>5,500</em>円 <span className="rstdtl-course-list__price-num-tax">(税込)</span>
                    </span>
                  </div>
                </div>
                <dl className="rstdtl-course-list__course-rule">
                  <dt>
                    <span className="rstdtl-course-list__course-rule-title rstdtl-course-list__course-rule-title--member">
                      <i>人数</i>
                    </span>
                  </dt>
                  <dd>2～8名様</dd>
                  <dt>
                    <span className="rstdtl-course-list__course-rule-title rstdtl-course-list__course-rule-title--time">
                      <i>利用可能時間</i>
                    </span>
                  </dt>
                  <dd>17:00～20:00</dd>
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
              href="https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A130101&amp;LstPrf=A1301&amp;pal=tokyo&amp;pplan_id=166097875&amp;rcd=13040258"
            >
              <img
                alt=""
                height="120"
                width="120"
                src="https://tblg.k-img.com/restaurant/images/Rvw/147044/200x200_square_147044519.jpg"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </p>
          <div className="rstdtl-course-list__data">
            <div className="rstdtl-course-list__data-header">
              <div className="rstdtl-course-list__course-summary">
                <p className="rstdtl-course-list__course-title">
                  <a
                    className="rstdtl-course-list__target"
                    href="https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A130101&amp;LstPrf=A1301&amp;pal=tokyo&amp;pplan_id=166097875&amp;rcd=13040258"
                  >
                    <span className="rstdtl-course-list__course-title-text">
                      【名物】能登ぶり・ずわい蟹と旬のカジキマグロの和出汁しゃぶしゃぶ『めぇもんコース』＊料理のみ
                    </span>
                  </a>
                  <span className="c-label c-label--s rstdtl-course-list__label">8品</span>
                </p>
                <p className="rstdtl-course-list__desc">
                  自慢の「能登ぶりしゃぶしゃぶ」が人気のコース
                  市場直送の鰤、たっぷりの葱や水菜、輪島直送の海藻とあわせてご賞味いただきます。
                  また、焼物は「のど黒の一夜干し」をご用意しており、〆は鍋での雑炊を御用意。
                  石川の食材を存分にご堪能頂ける当店の人気コースです。 ※写真はイメージです。
                </p>
              </div>
              <div className="rstdtl-course-list__action-btn">
                <span
                  className="c-btn c-btn--s c-btn--primary rstdtl-course-list__action-btn-target js-show-yoyaku-modal-trigger-course"
                  data-catalog-price=""
                  data-catalyst-name="yoyaku_rstdtl_courselst_a"
                  data-course-name="【名物】能登ぶり・ずわい蟹と旬のカジキマグロの和出汁しゃぶしゃぶ『めぇもんコース』＊料理のみ"
                  data-ex-tax-plan="false"
                  data-none-tax-plan="false"
                  data-plan-id="166097875"
                  data-real-price="5,500"
                  data-tax="(税込)"
                >
                  予約する
                </span>
                <a
                  className="c-btn c-btn--s rstdtl-course-list__action-btn-target"
                  href="https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A130101&amp;LstPrf=A1301&amp;pal=tokyo&amp;pplan_id=166097875&amp;rcd=13040258"
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
                      <em>5,500</em>円 <span className="rstdtl-course-list__price-num-tax">(税込)</span>
                    </span>
                  </div>
                </div>
                <dl className="rstdtl-course-list__course-rule">
                  <dt>
                    <span className="rstdtl-course-list__course-rule-title rstdtl-course-list__course-rule-title--member">
                      <i>人数</i>
                    </span>
                  </dt>
                  <dd>2～8名様</dd>
                  <dt>
                    <span className="rstdtl-course-list__course-rule-title rstdtl-course-list__course-rule-title--time">
                      <i>利用可能時間</i>
                    </span>
                  </dt>
                  <dd>17:00～20:00</dd>
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
              href="https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A130101&amp;LstPrf=A1301&amp;pal=tokyo&amp;pplan_id=166097956&amp;rcd=13040258"
            >
              <img
                alt=""
                height="120"
                width="120"
                src="https://tblg.k-img.com/restaurant/images/Rvw/55848/200x200_square_55848761.jpg"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </p>
          <div className="rstdtl-course-list__data">
            <div className="rstdtl-course-list__data-header">
              <div className="rstdtl-course-list__course-summary">
                <p className="rstdtl-course-list__course-title">
                  <a
                    className="rstdtl-course-list__target"
                    href="https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A130101&amp;LstPrf=A1301&amp;pal=tokyo&amp;pplan_id=166097956&amp;rcd=13040258"
                  >
                    <span className="rstdtl-course-list__course-title-text">
                      【鍋会席】ワンランク上のご宴会 豪華海鮮しゃぶしゃぶ【輪島コース】※料理のみ
                    </span>
                  </a>
                  <span className="c-label c-label--s rstdtl-course-list__label">10品</span>
                </p>
                <p className="rstdtl-course-list__desc">
                  ワンランク上の海鮮しゃぶしゃぶ「のど黒・鰤・蟹・金目鯛の和出汁しゃぶしゃぶ」がメインのコース。しゃぶしゃぶはお一人様毎のご提供となります。
                  美味な和出汁と豪勢な海鮮が至福の時を演出します。 大切なご接待や特別な宴会、美食宴会に最適です
                </p>
              </div>
              <div className="rstdtl-course-list__action-btn">
                <span
                  className="c-btn c-btn--s c-btn--primary rstdtl-course-list__action-btn-target js-show-yoyaku-modal-trigger-course"
                  data-catalog-price=""
                  data-catalyst-name="yoyaku_rstdtl_courselst_a"
                  data-course-name="【鍋会席】ワンランク上のご宴会 豪華海鮮しゃぶしゃぶ【輪島コース】※料理のみ"
                  data-ex-tax-plan="false"
                  data-none-tax-plan="false"
                  data-plan-id="166097956"
                  data-real-price="7,000"
                  data-tax="(税込)"
                >
                  予約する
                </span>
                <a
                  className="c-btn c-btn--s rstdtl-course-list__action-btn-target"
                  href="https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A130101&amp;LstPrf=A1301&amp;pal=tokyo&amp;pplan_id=166097956&amp;rcd=13040258"
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
                      <em>7,000</em>円 <span className="rstdtl-course-list__price-num-tax">(税込)</span>
                    </span>
                  </div>
                </div>
                <dl className="rstdtl-course-list__course-rule">
                  <dt>
                    <span className="rstdtl-course-list__course-rule-title rstdtl-course-list__course-rule-title--member">
                      <i>人数</i>
                    </span>
                  </dt>
                  <dd>2～8名様</dd>
                  <dt>
                    <span className="rstdtl-course-list__course-rule-title rstdtl-course-list__course-rule-title--time">
                      <i>利用可能時間</i>
                    </span>
                  </dt>
                  <dd>17:00～20:00</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rstdtl-top-course__footer">
        <p className="rstdtl-top-course__more-link">
          <a title="コース一覧" className="c-link-circle" href="/tokyo/A1301/A130101/13040258/party/">
            <span>
              <strong>コース</strong>をもっと見る（8件）
            </span>
          </a>
        </p>
      </div>
    </div>
  )
}
