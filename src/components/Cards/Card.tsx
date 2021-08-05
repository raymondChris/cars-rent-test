import React, {FC} from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import {ICardProps} from '../../shared/Interfaces'
import checkHoliday from "../../utils/checkHoliday";

//function to get the first word from car model -> to display image
function firstWordOfModel(name: string) {
  return name.split(" ")[0].toLowerCase();
}

const Card: FC<ICardProps> = ({ name, jahr, rentable, power, accelaration }) => {
  const holiday = checkHoliday();
  return (
    <div className={"card " + (rentable ? "selectable" : "not_selectable")}>
      <Link to={( rentable ? "/contact" : "/")} style={{ textDecoration: "none" }}>
      
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{name}</h5>
          <p className="card-text"><strong>Year:</strong> {jahr}</p>
          <p className="card-text"><strong>Power:</strong> {power} CV</p>
          <p className="card-text"><strong>Accelaration:</strong> {accelaration} m/s²</p>
          <p className="card-text"><strong>Available:</strong> {rentable ? "Yes" : "No"}</p>
          {rentable && holiday ? <img
            alt="discount-tag"
            className="card-discount"
            width={70}
            height={70}
            src={require(`../../assets/discount.png`)}
          ></img> : null}
          <img
            alt={name}
            className={
              "card-img-bottom float-right " +
              (firstWordOfModel(name) === "ferrari" ? "moveImgDown" : "")
            }
            src={require(`../../assets/Cars/${firstWordOfModel(name)}.png`)}
          ></img>
        </div>
      </Link>
    </div>
  );
}

export default Card;
