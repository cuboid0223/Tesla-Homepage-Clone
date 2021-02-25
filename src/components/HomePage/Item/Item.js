import React from "react";
import "./Item.css";
import Button from "../Button/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const Item = ({
  title,
  desc,
  descLink,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
  twoButtons,
  first,
  last,
}) => {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="item__container">
        <div className="item__textBox">
          <p className="item__title">{title}</p>
          <div className="item__DescBox">
            <a href="#">{desc}</a>
          </div>
        </div>
        <div className="item__lowerThird">
          <div className="item__btns">
            <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
            {twoButtons && (
              <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
            )}
          </div>
          {/* 如果是第一張照片的話 */}
          {first && (
            <div className="item__expand">
              <ExpandMoreIcon
                className="item__expandIcon"
                style={{ fontSize: 50 }}
              />
            </div>
          )}
        </div>
        {last && (
          <div className="item__footer">
            <p>Tesla &copy 2021</p>
            <a href="#">隱私權規範</a>
            <a href="#">聯絡我們</a>
            <a href="#">工作機會</a>
            <a href="#">獲取電子通訊</a>
            <a href="#">最新消息</a>
            <a href="#">地點</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
