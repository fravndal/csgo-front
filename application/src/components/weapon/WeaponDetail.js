import React, { useState, Fragment } from "react";

const WeaponDetail = ({ data, expanded }) => {
  return (
    <React.Fragment>
      {expanded ? (
        <div class="container">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Kill Award</th>
            <th>Damage</th>
            <th>Magazine Size</th>
            <th>X</th>
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
              </tr>
            ))}
        </div>
      ) : null}
      ;
    </React.Fragment>
  );
};

export default WeaponDetail;
