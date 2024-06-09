import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  dinner_under,
  lunch_under,
  lunch_E,
  dinner_E,
  lunch_total,
  dinner_total,
  restaurant,
} from "../../data";
import "./week.css";

export default function Week() {
  const { restaurantName } = useParams(); // URL에서 식당 이름 가져오기
  const [lunchMenu, setLunchMenu] = useState([]);
  const [dinnerMenu, setDinnerMenu] = useState([]);

  useEffect(() => {
    if (restaurantName === "지하 학생식당") {
      setLunchMenu(lunch_under);
      setDinnerMenu(dinner_under);
    } else if (restaurantName === "E동 학생식당") {
      setLunchMenu(lunch_E);
      setDinnerMenu(dinner_E);
    } else if (restaurantName === "종합 학생식당") {
      setLunchMenu(lunch_total);
      setDinnerMenu(dinner_total);
    }
  }, [restaurantName]); // restaurantName이 변경될 때마다 호출

  return (
    <div className="w-container">
      <h2 className="title">{restaurantName}</h2>
      <div className="lunch">
        <h3 className="time">중식(11:00 ~ 14:00)</h3>
        <div className="lunch-menu">
          {lunchMenu.map((item, idx) => {
            return (
              <div className="menu-box" key={idx}>
                <p className="date">
                  {item.date}일({item.day})
                </p>
                <ul className="menu">
                  {item.content.map((menu, index) => (
                    <li key={index}>{menu}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="dinner">
        <h3 className="time">석식(17:00 ~ 19:00)</h3>
        <div className="dinner-menu">
          {dinnerMenu.map((item, idx) => {
            return (
              <div className="menu-box" key={idx}>
                <p className="date">
                  {item.date}일({item.day})
                </p>
                <ul className="menu">
                  {item.content.map((menu, index) => (
                    <li key={index}>{menu}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
