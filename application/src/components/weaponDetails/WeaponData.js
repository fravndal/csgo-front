import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

const WeaponData = ({ weapon }) => {
  return (
    <div className="outer-frame">
      <div className="weapon-frame container">
        <div className="row">
          <div className="backspace-frame col-3">
            <Link to="/weapons">
              <FaChevronLeft color="white" />

              <span className="backspace">Go back</span>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="weapon-image-frame col-4 rowSpan-7">
            <img
              src={`https://csgo-weapons.s3.eu-north-1.amazonaws.com/${weapon.weaponImageName}`}
              alt={weapon.weaponImageName}
              className="weapon-image-standard"
            />
          </div>
          <div className="weapon-main-details col-7">
            <div className="weapon-name-row">
              <span className="weapon-name">{weapon.weaponName}</span>
            </div>
            <div className="weapon-type-row">
              <span className="weapon-type">Type: {weapon.weaponType}</span>
            </div>
            <div className="weapon-price-row">
              <span className="weapon-price">Price: {weapon.price}</span>
            </div>
            <div className="weapon-kill-award-row">
              <span className="weapon-kill-award">
                Kill award: {weapon.killAward}
              </span>
            </div>
            <div className="weapon-damage-row">
              <span className="weapon-damage">Damage: {weapon.damage}</span>
            </div>
            <div className="weapon-magazine-size-row">
              <span className="weapon-magazine-size">
                Magazine size: {weapon.magazineSize}
              </span>
            </div>
            <div className="weapon-dps-row">
              <span className="weapon-dps">
                Damage per second:{" "}
                {(
                  (weapon.fireRate / 60) *
                  weapon.damage *
                  weapon.bullets
                ).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <div>
          <span></span>
          {weapon.bullets}
          {weapon.armorPenetration}
          {weapon.fireRate}
          {weapon.penetrationPower}
          {weapon.ammoReserve}
          {weapon.bulletRange}
        </div>
      </div>
    </div>
  );
};

export default WeaponData;
