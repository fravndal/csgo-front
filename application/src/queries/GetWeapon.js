import gql from "graphql-tag";

export const GET_WEAPON = gql`
  query weapon($slug: String!) {
    weapon(slug: $slug) {
      id
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
      weaponImageName
      slug
    }
  }
`;
