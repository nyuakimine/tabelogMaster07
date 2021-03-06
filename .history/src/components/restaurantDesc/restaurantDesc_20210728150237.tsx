import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetailTitleDataActionCreator } from "../../redux/detailTitle/fetchDetailTitleListSlice";
import "../../pages/tabelog/tabelog1.css";
import "../../pages/tabelog/tabelog2.css";
import { RootState } from "../../redux/store";
import { Genre1 } from "./genre1";

export const RestaurantDesc: React.FC = () => {
  const restaurantDesc = useSelector(
    (state: RootState) => state.restaurantDescSlice.data
  );
  const genreAndStation = useSelector(
    (state: RootState) => state.genreAndStationSlice.data
  );

  let genreName1;
  let genreName2;
  let genreName3;
  if (genreAndStation != null) {
    for (let i = 0; i < genreAndStation.length; i++) {
      if (genreAndStation[i].genreId === 1) {
        genreName1 = genreAndStation[i].genreName;
      } else if (genreAndStation[i].genreId === 2) {
        genreName2 = genreAndStation[i].genreName;
      } else if (genreAndStation[i].genreId === 3) {
        genreName3 = genreAndStation[i].genreName;
      }
    }
  }

  const onMouseOverHandler = (e) => {
    //debugger;
    console.log(e.currentTarget);

    const sortList = document.getElementsByClassName(
      "linktree"
    )[0] as HTMLElement;
    const sLTop = sortList.getBoundingClientRect().top;
    const targetTop = e.currentTarget.getBoundingClientRect().bottom;
    let itemList = Array.prototype.filter.call(
      e.currentTarget.childNodes,
      (node) => node.className === "linktree__childbox"
    )[0] as HTMLElement;
    itemList.style.display = "block";
    itemList.style.top = targetTop - sLTop + "px";
    itemList.style.position = "absolute";
  };

  const onMouseOutHandler = (e) => {
    console.log(e.currentTarget);
    //debugger;
    let itemList = Array.prototype.filter.call(
      e.currentTarget.childNodes,
      (node) => node.className === "linktree__childbox"
    )[0] as HTMLElement;
    itemList.style.display = "block";
  };

  return restaurantDesc === null ? (
    <h2>loading...</h2>
  ) : (
    <div className="rdheader-data">
      <div className="rdheader-info-box">
        <div className="rdheader-subinfo">
          <dl className="rdheader-subinfo__item rdheader-subinfo__item--station">
            <dt className="rdheader-subinfo__item-title">???????????????</dt>
            <dd className="rdheader-subinfo__item-text">
              <div className="linktree">
                <div className="linktree__parent">
                  <a
                    href="https://tabelog.com/tokyo/A1302/A130201/R6586/rstLst/"
                    className="linktree__parent-target"
                  >
                    <span className="linktree__parent-target-text">
                      {restaurantDesc[0].nearbyStation}
                    </span>
                  </a>
                </div>
                <div className="linktree__childbox">
                  <div className="c-balloon c-balloon--top linktree__childbaloon">
                    {/* <ul className="linktree__childlist">
                    {genreAndStation.map((genre1, idx) => {
                      <li className="linktree__childlist-item" key={idx}>
                        <a href="https://tabelog.com/tokyo/A1302/A130201/R6586/rstLst/RC040101/">
                         {genre1.stationName}??{genre1.genreName}
                        </a>
                      </li>
                       })}
                        {/* ??????????????????????? */}
                    {/* <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/A1302/A130201/R6586/rstLst/yakiniku/">
                          ?????????????????
                        </a>
                      </li>
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/A1302/A130201/R6586/rstLst/izakaya/">
                          ????????????????????
                        </a>
                      </li> */}
                    {/* </ul> */}
                  </div>
                </div>
              </div>
            </dd>
          </dl>
          <div className="rdheader-subinfo__item">
            <div className="linktree">
              <div className="linktree__parent">
                [
                <a
                  href="https://tabelog.com/tokyo/"
                  className="linktree__parent-target"
                >
                  <span className="linktree__parent-target-text">??????</span>
                </a>
                ]
              </div>
              <div className="linktree__childbox">
                <div className="c-balloon c-balloon--top linktree__childbaloon">
                  <ul className="linktree__childlist">
                    <li className="linktree__childlist-item">
                      <a href="https://tabelog.com/tokyo/rstLst/RC040101/">
                        ????????????????????
                      </a>
                    </li>
                    <li className="linktree__childlist-item">
                      <a href="https://tabelog.com/tokyo/rstLst/yakiniku/">
                        ??????????????
                      </a>
                    </li>
                    <li className="linktree__childlist-item">
                      <a href="https://tabelog.com/tokyo/rstLst/izakaya/">
                        ?????????????????
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <dl className="rdheader-subinfo__item">
            <dt className="rdheader-subinfo__item-title">???????????????</dt>
            <dd className="rdheader-subinfo__item-text">
              <div
                className="linktree"
                onMouseOver={onMouseOverHandler}
                onMouseOut={onMouseOutHandler}
              >
                <div className="linktree__parent">
                  <a
                    href="https://tabelog.com/rstLst/RC040101/"
                    className="linktree__parent-target"
                  >
                    <span className="linktree__parent-target-text">
                      {genreName1}
                    </span>
                  </a>
                </div>
                <div className="linktree__childbox">
                  <div className="c-balloon c-balloon--top linktree__childbaloon">
                    <Genre1></Genre1>
                    {/* <ul className="linktree__childlist">
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/A1302/A130201/rstLst/RC040101/">
                          ???????????????????????????????????
                        </a>
                      </li>
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/A1302/rstLst/RC040101/">
                          ????????????????????????????????
                        </a>
                      </li>
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/rstLst/RC040101/">
                          ????????????????????
                        </a>
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
              <div
                className="linktree"
                onMouseOver={onMouseOverHandler}
                onMouseOut={onMouseOutHandler}
              >
                <div className="linktree__parent">
                  <a
                    href="https://tabelog.com/rstLst/yakiniku/"
                    className="linktree__parent-target"
                  >
                    <span className="linktree__parent-target-text">??????</span>
                  </a>
                </div>
                <div className="linktree__childbox">
                  <div className="c-balloon c-balloon--top linktree__childbaloon">
                    <ul className="linktree__childlist">
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/A1302/A130201/rstLst/yakiniku/">
                          ?????????????????????????????
                        </a>
                      </li>
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/A1302/rstLst/yakiniku/">
                          ??????????????????????????
                        </a>
                      </li>
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/rstLst/yakiniku/">
                          ??????????????
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="linktree"
                onMouseOver={onMouseOverHandler}
                onMouseOut={onMouseOutHandler}
              >
                <div className="linktree__parent">
                  <a
                    href="https://tabelog.com/rstLst/izakaya/"
                    className="linktree__parent-target"
                  >
                    <span className="linktree__parent-target-text">?????????</span>
                  </a>
                </div>
                <div className="linktree__childbox">
                  <div className="c-balloon c-balloon--top linktree__childbaloon">
                    <ul className="linktree__childlist">
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/A1302/A130201/rstLst/izakaya/">
                          ????????????????????????????????
                        </a>
                      </li>
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/A1302/rstLst/izakaya/">
                          ?????????????????????????????
                        </a>
                      </li>
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/rstLst/izakaya/">
                          ?????????????????
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </dd>
          </dl>
        </div>
        <div className="rdheader-subinfo">
          <dl className="rdheader-subinfo__item">
            <dt className="rdheader-subinfo__item-title">?????????</dt>
            <dd className="rdheader-subinfo__item-text">
              <div className="rdheader-budget">
                <p className="rdheader-budget__icon rdheader-budget__icon--dinner">
                  <i>????????????</i>
                  <span className="rdheader-budget__price">
                    <a
                      href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlratings/#price-range"
                      className="rdheader-budget__price-target"
                    >
                      {restaurantDesc[0].nightBudget}
                    </a>
                  </span>
                </p>
                <p className="rdheader-budget__icon rdheader-budget__icon--lunch">
                  <i>????????????</i>
                  <span className="rdheader-budget__price">
                    <a
                      href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlratings/#price-range"
                      className="rdheader-budget__price-target"
                    >
                      {restaurantDesc[0].dayBudget}
                    </a>
                  </span>
                </p>
              </div>
            </dd>
          </dl>
          <dl className="rdheader-subinfo__item">
            <dt id="js-closed-label" className="rdheader-subinfo__item-title">
              ????????????
            </dt>
            <dd id="short-comment" className="rdheader-subinfo__closed-text">
              {restaurantDesc[0].restDay}{" "}
            </dd>
          </dl>
        </div>

        <div className="rdheader-subinfo">
          <div className="rdheader-gte">
            <a
              target="_blank"
              rel="noopener"
              className="js-analytics rdheader-gte__target"
              data-analytics-btn=":gotoeat_icon"
              data-analytics-add-page-prefix="true"
              href="https://tabelog.com/go-to-eat/"
            >
              {" "}
              <img
                alt="Go To Eat"
                width="47"
                height="12"
                className="rdheader-gte__img loading"
                src="https://tblg.k-img.com/images/restaurant/icon/badge_gotoeat_logo.png"
                data-was-processed="true"
              />
              <span className="rdheader-gte__txt">?????????????????????</span>
            </a>{" "}
          </div>
        </div>

        <div className="rdheader-go-rstinfo">
          <a className="js-go-rstinfo" href="#title-rstdata">
            ????????????????????????
          </a>
        </div>
      </div>
    </div>
  );
};
