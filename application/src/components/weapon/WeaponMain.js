import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import WeaponDetail from "./WeaponDetail";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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

  //const [expanded, setExpanded] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error ${error.message}`;

  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Kill Award</th>
            <th>Damage</th>
            <th>Magazine Size</th>
            <th>DPS</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.weapons &&
            data.weapons.map((weapon, index) => (
              <React.Fragment key={`weapons-list-row-${index}`}>
                <tr>
                  <td>{weapon.weaponName}</td>
                  <td>{weapon.weaponType}</td>
                  <td>{weapon.price}</td>
                  <td>{weapon.killAward}</td>
                  <td>{weapon.damage}</td>
                  <td>{weapon.magazineSize}</td>
                  <td>
                    {(weapon.fireRate / 60) * weapon.damage * weapon.bullets}
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        setExpandedId(
                          expandedId === null || expandedId !== index
                            ? index
                            : null
                        )
                      }
                    >
                      {expandedId === index ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>
                  </td>
                </tr>

                {
                  <WeaponDetail
                    weapon={weapon}
                    expanded={expandedId === index}
                  />
                }
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default WeaponMain;
