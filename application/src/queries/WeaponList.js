import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

function WeaponList() {
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

  return GET_WEAPONS;
}

export default WeaponList;
