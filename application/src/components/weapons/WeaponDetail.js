import React from "react";
import PropTypes from "prop-types";

const WeaponDetail = ({ weapon, expanded }) => {
  return (
    <React.Fragment>
      {expanded ? (
        <tr>
          <td colSpan="10">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Bullets per trigger</th>
                  <th>Armor Penetration</th>
                  <th>Fire rate</th>
                  <th>Penetration Power</th>
                  <th>Ammo Reserve</th>
                  <th>Bullet Range</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td></td>
                  <td>{weapon.bullets}</td>
                  <td>{weapon.armorPenetration}</td>
                  <td>{weapon.fireRate}</td>
                  <td>{weapon.penetrationPower}</td>
                  <td>{weapon.ammoReserve}</td>
                  <td>{weapon.bulletRange}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      ) : null}
    </React.Fragment>
  );
};

WeaponDetail.propTypes = {
  weapon: PropTypes.shape({
    bullets: PropTypes.number,
    armorPenetration: PropTypes.number,
    fireRate: PropTypes.number,
    penetrationPower: PropTypes.string,
    ammoReserve: PropTypes.number,
    bulletRange: PropTypes.number
  }),
  expanded: PropTypes.bool.isRequired
};
WeaponDetail.defaultProps = {
  expanded: false
};

export default WeaponDetail;
