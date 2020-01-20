import React, { useState } from "react";
import Header from "./Header";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Weapon from "./weapon/Weapon";
import WeaponDetails from "./weapon/WeaponDetail";

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
      <Weapon {...data} />
      {/* <Button onClick={toggleShow} /> */}
      {/* <WeaponDetails {...data} expanded={expanded} /> */}
    </React.Fragment>
  );
};

export default Weapons;
