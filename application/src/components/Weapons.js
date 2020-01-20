import React, { useState } from "react";
import Header from "./Header";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Weapons = () => {
  const GET_WEAPONS = gql`
    {
      weapons {
        weaponName
        weaponType
        price
        killAward
        damage
        bullets
        armorPenetration
        damageFalloff
        fireRate
        penetrationPower
        magazineSize
        ammoReserve
        mobility
        taggingPower
        bulletRange
        holdToShoot
        tracers
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_WEAPONS);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error ${error.message}`;

  return (
    <React.Fragment>
      <Header />
      <div class="container">
        <table class="table table-hover">
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
              </tr>
            ))}
        </table>
      </div>
    </React.Fragment>
  );
};

export default Weapons;
