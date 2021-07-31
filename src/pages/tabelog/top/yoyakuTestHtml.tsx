import React, { useEffect, useRef, useState } from 'react'
import { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import '../tabelog1.css'
import '../tabelog2.css'

export const YoyakuTestHtml: React.FC = () => {
  const topNotice = useSelector((state: RootState) => state.topNoticeCommentSlice.data)

  return (
    <div className="c-overlay js-overlay">
      <div className="js-booking-modal-target c-modal c-modal--s">
        <div className="c-modal__header">
          <p className="c-modal__title">ネット予約</p>
          <p className="c-modal__close js-modal-close">閉じる</p>
        </div>
        <div className="c-modal__contents">
          <div className="c-modal__inner">
            <div className="p-booking-calendar">
              <div className="js-rstdtl-booking-modal">
                <div className="">
                  <div className="p-booking-calendar">
                    <div className="p-booking-calendar__contents">
                      <div className="js-booking-info-root">
                        <dl className="p-booking-calendar__option">
                          <dt className="p-booking-calendar__option-subject">コース</dt>
                          <dd className="p-booking-calendar__option-item">
                            <p className="p-booking-calendar__course-title">
                              飲み放題☆特上牛肉と赤海老が楽しめる！特上焼肉コース〈全12品〉忘新年会・ご宴会・飲み会・女子会
                            </p>
                            <p className="p-booking-calendar__course-price">
                              <span className="p-booking-calendar__course-price-sale">
                                5,980円<span className="p-booking-calendar__course-price-tax">(税込)</span>
                              </span>
                            </p>
                          </dd>
                        </dl>
                      </div>
                      <div className="p-booking-calendar__select-wrap p-booking-calendar__select-wrap--date is-open js-select-date-btn">
                        <div className="p-booking-calendar__select">
                          <p className="p-booking-calendar__select-label">来店日</p>
                          <div className="p-booking-calendar__select-item">
                            <div className="js-selected-date-wrapper">
                              <div className="p-booking-calendar__select-date js-selected-date-inner">
                                <div className="p-booking-calendar__select-date-inner">
                                  <em>7</em>月<em>31</em>日 （土）
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="js-monthly-calendar-wrap p-booking-calendar__calendar-wrap">
                        <div className="p-booking-calendar__calendar-navi">
                          <a
                            className="js-prev-switch p-booking-calendar__calendar-navi-target p-booking-calendar__calendar-navi-target--prev is-disabled"
                            href="#"
                          >
                            <i>前月</i>
                          </a>
                          <a
                            className="js-next-switch p-booking-calendar__calendar-navi-target p-booking-calendar__calendar-navi-target--next"
                            href="#"
                          >
                            <i>翌月</i>
                          </a>
                        </div>
                        <div className="p-booking-calendar__calendar-contents" id="js-calendar-container">
                          <div>
                            <div>
                              <table className="p-booking-calendar__calendar">
                                <caption>
                                  <em>2021</em>年 <em>7</em>月
                                </caption>
                                <thead>
                                  <tr>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--sun">日</th>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--mon">月</th>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--tue">火</th>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--wed">水</th>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--thu">木</th>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--fri">金</th>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--sat">土</th>
                                  </tr>
                                </thead>
                                <tbody className="js-week-wrap">
                                  <tr>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--closed"></td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--closed"></td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--closed"></td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--closed"></td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--thu is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">1</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--fri is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">2</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sat is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">3</span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sun is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">4</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--mon is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">5</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--tue is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">6</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--wed is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">7</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--thu is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">8</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--fri is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">9</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sat is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">10</span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sun is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">11</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--mon is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">12</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--tue is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">13</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--wed is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">14</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--thu is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">15</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--fri is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">16</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sat is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">17</span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sun is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">18</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--mon is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">19</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--tue is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">20</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--wed is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">21</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--thu is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">22</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--fri is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">23</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sat is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">24</span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sun is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">25</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--mon is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">26</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--tue is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">27</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--wed is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">28</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--thu is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">29</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--fri is-past">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--full">30</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sat">
                                      <p className="p-booking-calendar__day">
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--tel">31</span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sun">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="1"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">8/1</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--mon">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="2"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">2</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--tue">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="3"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">3</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--wed">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="4"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">4</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--thu">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="5"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">5</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--fri">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="6"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">6</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sat">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="7"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">7</span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sun is-holiday">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="8"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">8</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--mon is-holiday">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="9"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">9</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--tue">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="10"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">10</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--wed">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="11"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">11</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--thu">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="12"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">12</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--fri">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="13"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">13</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sat">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="14"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">14</span>
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="is-hidden">
                              <table className="p-booking-calendar__calendar">
                                <caption>
                                  <em>2021</em>年 <em>8</em>月
                                </caption>
                                <thead>
                                  <tr>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--sun">日</th>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--mon">月</th>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--tue">火</th>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--wed">水</th>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--thu">木</th>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--fri">金</th>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--sat">土</th>
                                  </tr>
                                </thead>
                                <tbody className="js-week-wrap">
                                  <tr>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sun">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="1"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">1</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--mon">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="2"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">2</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--tue">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="3"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">3</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--wed">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="4"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">4</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--thu">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="5"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">5</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--fri">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="6"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">6</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sat">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="7"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">7</span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sun is-holiday">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="8"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">8</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--mon is-holiday">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="9"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">9</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--tue">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="10"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">10</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--wed">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="11"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">11</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--thu">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="12"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">12</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--fri">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="13"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">13</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sat">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="14"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">14</span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sun">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="15"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">15</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--mon">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="16"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">16</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--tue">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="17"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">17</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--wed">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="18"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">18</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--thu">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="19"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">19</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--fri">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="20"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">20</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sat">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="21"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">21</span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sun">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="22"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">22</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--mon">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="23"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">23</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--tue">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="24"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">24</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--wed">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="25"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">25</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--thu">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="26"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">26</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--fri">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="27"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">27</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sat">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="28"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">28</span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sun">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="29"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">29</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--mon">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="30"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">30</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--tue">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="8"
                                        data-day="31"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">31</span>
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="is-hidden">
                              <table className="p-booking-calendar__calendar">
                                <caption>
                                  <em>2021</em>年 <em>9</em>月
                                </caption>
                                <thead>
                                  <tr>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--sun">日</th>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--mon">月</th>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--tue">火</th>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--wed">水</th>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--thu">木</th>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--fri">金</th>
                                    <th className="p-booking-calendar__cell p-booking-calendar__cell--sat">土</th>
                                  </tr>
                                </thead>
                                <tbody className="js-week-wrap">
                                  <tr>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--closed"></td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--closed"></td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--closed"></td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--wed">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="1"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">1</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--thu">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="2"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">2</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--fri">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="3"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">3</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sat">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="4"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">4</span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sun">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="5"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">5</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--mon">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="6"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">6</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--tue">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="7"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">7</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--wed">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="8"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">8</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--thu">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="9"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">9</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--fri">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="10"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">10</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sat">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="11"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">11</span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sun">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="12"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">12</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--mon">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="13"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">13</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--tue">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="14"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">14</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--wed">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="15"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">15</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--thu">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="16"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">16</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--fri">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="17"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">17</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sat">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="18"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">18</span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sun">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="19"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">19</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--mon is-holiday">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="20"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">20</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--tue">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="21"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">21</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--wed">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="22"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">22</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--thu is-holiday">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="23"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">23</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--fri">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="24"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">24</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sat">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="25"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">25</span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--sun">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="26"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">26</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--mon">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="27"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">27</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--tue">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="28"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">28</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--wed">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="29"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">29</span>
                                      </p>
                                    </td>
                                    <td className="p-booking-calendar__cell p-booking-calendar__cell--thu">
                                      <p
                                        className="js-calendar-day-target p-booking-calendar__day is-selectable"
                                        data-year="2021"
                                        data-month="9"
                                        data-day="30"
                                      >
                                        <span className="p-booking-calendar__day-num p-booking-calendar__day-num--enough">30</span>
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-booking-calendar__select-wrap">
                        <div className="p-booking-calendar__select">
                          <p className="p-booking-calendar__select-label">人数</p>
                          <div className="p-booking-calendar__select-item">
                            <div className="js-headcount">
                              <div className="js-select-member p-booking-calendar__select-item-inner">
                                <p className="p-booking-calendar__select-target c-select">
                                  <select className="js-svps">
                                    <option value="1">× 1名</option>
                                    <option value="2">{/* selected="" */}× 2名</option>
                                    <option value="3">× 3名</option>
                                    <option value="4">× 4名</option>
                                    <option value="5">× 5名</option>
                                    <option value="6">× 6名</option>
                                    <option value="7">× 7名</option>
                                    <option value="8">× 8名</option>
                                    <option value="9">× 9名</option>
                                    <option value="10">× 10名</option>
                                    <option value="11">× 11名</option>
                                    <option value="12">× 12名</option>
                                    <option value="13">× 13名</option>
                                    <option value="14">× 14名</option>
                                    <option value="15">× 15名</option>
                                    <option value="16">× 16名</option>
                                    <option value="17">× 17名</option>
                                    <option value="18">× 18名</option>
                                    <option value="19">× 19名</option>
                                    <option value="20">× 20名</option>
                                    <option value="21">× 21名</option>
                                    <option value="22">× 22名</option>
                                    <option value="23">× 23名</option>
                                    <option value="24">× 24名</option>
                                    <option value="25">× 25名</option>
                                    <option value="26">× 26名</option>
                                    <option value="27">× 27名</option>
                                    <option value="28">× 28名</option>
                                    <option value="29">× 29名</option>
                                    <option value="30">× 30名</option>
                                    <option value="31">× 31名</option>
                                    <option value="32">× 32名</option>
                                    <option value="33">× 33名</option>
                                    <option value="34">× 34名</option>
                                    <option value="35">× 35名</option>
                                    <option value="36">× 36名</option>
                                    <option value="37">× 37名</option>
                                    <option value="38">× 38名</option>
                                    <option value="39">× 39名</option>
                                    <option value="40">× 40名</option>
                                    <option value="41">× 41名</option>
                                    <option value="42">× 42名</option>
                                    <option value="43">× 43名</option>
                                    <option value="44">× 44名</option>
                                    <option value="45">× 45名</option>
                                    <option value="46">× 46名</option>
                                    <option value="47">× 47名</option>
                                    <option value="48">× 48名</option>
                                    <option value="49">× 49名</option>
                                    <option value="50">× 50名</option>
                                    <option value="51">× 51名</option>
                                    <option value="52">× 52名</option>
                                    <option value="53">× 53名</option>
                                    <option value="54">× 54名</option>
                                    <option value="55">× 55名</option>
                                    <option value="56">× 56名</option>
                                    <option value="57">× 57名</option>
                                    <option value="58">× 58名</option>
                                    <option value="59">× 59名</option>
                                    <option value="60">× 60名</option>
                                    <option value="61">× 61名</option>
                                    <option value="62">× 62名</option>
                                    <option value="63">× 63名</option>
                                    <option value="64">× 64名</option>
                                    <option value="65">× 65名</option>
                                    <option value="66">× 66名</option>
                                    <option value="67">× 67名</option>
                                    <option value="68">× 68名</option>
                                    <option value="69">× 69名</option>
                                    <option value="70">× 70名</option>
                                    <option value="71">× 71名</option>
                                    <option value="72">× 72名</option>
                                    <option value="73">× 73名</option>
                                    <option value="74">× 74名</option>
                                    <option value="75">× 75名</option>
                                    <option value="76">× 76名</option>
                                    <option value="77">× 77名</option>
                                    <option value="78">× 78名</option>
                                    <option value="79">× 79名</option>
                                    <option value="80">× 80名</option>
                                    <option value="81">× 81名</option>
                                    <option value="82">× 82名</option>
                                    <option value="83">× 83名</option>
                                    <option value="84">× 84名</option>
                                    <option value="85">× 85名</option>
                                    <option value="86">× 86名</option>
                                    <option value="87">× 87名</option>
                                    <option value="88">× 88名</option>
                                    <option value="89">× 89名</option>
                                    <option value="90">× 90名</option>
                                    <option value="91">× 91名</option>
                                    <option value="92">× 92名</option>
                                    <option value="93">× 93名</option>
                                    <option value="94">× 94名</option>
                                    <option value="95">× 95名</option>
                                    <option value="96">× 96名</option>
                                    <option value="97">× 97名</option>
                                    <option value="98">× 98名</option>
                                    <option value="99">× 99名</option>
                                  </select>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-booking-calendar__select">
                          <p className="p-booking-calendar__select-label">時間</p>
                          <div className="p-booking-calendar__select-item">
                            <div className="js-booking-time">
                              <div className="js-select-time p-booking-calendar__select-item-inner">
                                <p className="p-booking-calendar__select-target c-select">
                                  <select className="js-svt">
                                    <option value="1900" data-url="">
                                      {/* selected="" */}× 19:00
                                    </option>
                                  </select>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="js-no-vacant-notice p-booking-calendar__attention-wrap is-hidden">
                        <p className="p-booking-calendar__attention">
                          ご指定の条件での空席がありません。
                          <br />
                          別の条件でお探しください。
                        </p>
                      </div>
                      <div className="js-available-tpoint-notification"></div>
                      <div className="p-booking-calendar__btn-wrap">
                        <a className="js-booking-form-open c-btn c-btn--full c-btn--primary" href="#">
                          <span className="js-booking-container-button">このコースを予約する</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
