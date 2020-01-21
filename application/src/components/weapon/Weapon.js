import React, { useState, Fragment } from "react";
import Button from "./Button";
import WeaponDetail from "./WeaponDetail";
const Weapon = data => {
  return (
    <div className="container">
      <table className="table table-hover">
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Price</th>
          <th>Kill Award</th>
          <th>Damage</th>
          <th>Magazine Size</th>
        </tr>

        {data &&
          data.weapons &&
          data.weapons.map((weapon, index) => (
            <tr>
              <td>{weapon.weaponName}</td>
              <td>{weapon.weaponType}</td>
              <td>{weapon.price}</td>
              <td>{weapon.killAward}</td>
              <td>{weapon.damage}</td>
              <td>{weapon.magazineSize}</td>
              <td>
                <Button />
              </td>
            </tr>
          ))}
        <WeaponDetail {...data} />
      </table>
    </div>
  );
};

export default Weapon;
