import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_WEAPON } from "../queries/GetWeapon";
import Loader from "react-loader-spinner";
import ErrorHandler from "./../components/common/ErrorHandler";
import WeaponData from "../components/weaponDetails/WeaponData";
import PropTypes from "prop-types";

const Weapon = props => {
  const { data, loading, error } = useQuery(GET_WEAPON, {
    variables: { id: props.match.params.id }
  });

  if (loading)
    return (
      <div className="container">
        <div className="loader-frame">
          <Loader
            className="loader"
            type="ThreeDots"
            color="#00BFFF"
            height={200}
            width={200}
            timeout={3000}
          />
        </div>
      </div>
    );
  if (error)
    return (
      <div className="container">
        <ErrorHandler errorMessage={`${error}`} />
      </div>
    );
  console.log(data);

  return (
    <Fragment>
      <WeaponData weapon={data.weapon} />
    </Fragment>
  );
};

export default Weapon;
