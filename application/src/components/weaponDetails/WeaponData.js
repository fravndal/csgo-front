import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

const WeaponData = ({ weapon }) => {
  return (
    <div className="outer-frame">
      <div className="weapon-frame container">
        <div className="row">
          <div className="col-3">
            <Link to="/weapons">
              <FaChevronLeft color="white" />

              <span className="backspace">Go back</span>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="weapon-image-frame col-3">
            <img
              src={`https://csgo-weapons.s3.eu-north-1.amazonaws.com/${weapon.weaponImageName}`}
              alt={weapon.weaponImageName}
              className="weapon-image-standard "
            />
          </div>
          <div className="col-8 weapon-name-row">
            <span className="weapon-name">{weapon.weaponName}</span>
          </div>

          {weapon.weaponType}
          {weapon.price}
          {weapon.killAward}
          {weapon.damage}
          {weapon.magazineSize}
          {weapon.bullets}
          {weapon.armorPenetration}
          {weapon.fireRate}
          {weapon.penetrationPower}
          {weapon.ammoReserve}
          {weapon.bulletRange}
        </div>
        <div>
          <div>
            <span>
              {(
                (weapon.fireRate / 60) *
                weapon.damage *
                weapon.bullets
              ).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeaponData;
