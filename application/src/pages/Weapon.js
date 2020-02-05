import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_WEAPONS } from "./../queries/WeaponList";
import Loader from "react-loader-spinner";
import ErrorHandler from "./../components/common/ErrorHandler";
import WeaponData from "../components/weaponDetails/WeaponData";

const Weapon = () => {
  const { data, loading, error } = useQuery(GET_WEAPONS);

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

  return (
    <Fragment>
      <WeaponData weapons={data.weapons} />
    </Fragment>
  );
};

export default Weapon;
