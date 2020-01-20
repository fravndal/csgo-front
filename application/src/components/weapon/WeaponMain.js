import React, { useState, Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Button from "./Button";
import WeaponDetail from "./WeaponDetail";


function WeaponMain() {
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

  const [expanded, setExpanded] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error ${error.message}`;

  

  return (
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
              <td>
                <Button 
                  expanded={expanded}
                  setExpanded={setExpanded}/>
              </td>
            </tr>
            
          ))}
        <WeaponDetail {...data} />
      </table>
    </div>
  );
};

export default WeaponMain;
