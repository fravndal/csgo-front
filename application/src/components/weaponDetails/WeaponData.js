import React, { useState, useEffect } from "react";

const WeaponData = ({ weapon }) => {
  return (
    <div className="outer-frame">
      <div className="weapon-frame container">
        <div className="row">
          <div className="col-3">
            <img
              src={`https://csgo-weapons.s3.eu-north-1.amazonaws.com/${weapon.weaponImageName}`}
              alt={weapon.weaponImageName}
              className="weapon-image-standard rounded float-left"
            />
          </div>
          <div className="col-9">
            Name:
            {weapon.weaponName}
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
      </div>
    </div>
  );
};

export default WeaponData;
