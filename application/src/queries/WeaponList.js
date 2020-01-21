import gql from "graphql-tag";

export const GET_WEAPONS = gql`
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
