import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_WEAPONS } from "./../queries/WeaponList";
import Loading from "./../components/common/Loading";
import Loader from "react-loader-spinner";
import ErrorHandler from "./../components/common/ErrorHandler";
// import WeaponsTable from "./../components/weapon/WeaponDetail";
import WeaponDetail from "./../components/weapon/WeaponDetail";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { dedentBlockStringValue } from "graphql/language/blockString";

const Weapons = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("weaponName");
  const handleFilter = event => {
    setFilterTerm(event.target.value);
  };
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const { data, loading, error } = useQuery(GET_WEAPONS);

  if (loading)
    return (
      <div className="container">
        <div
          style={{
            textAlign: "center",
            padding: "60px"
          }}
        >
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={200}
            width={200}
            timeout={3000}
            style={{ marginLeft: "auto", marginRight: "auto" }}
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

  const results = !searchTerm
    ? data && data.weapons
    : data &&
      data.weapons &&
      data.weapons.filter(weapon =>
        weapon[filterTerm]
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      );

  console.log(results);

  return (
    <Fragment>
      <div className="container" style={{}}>
        <div className="row">
          <div className="col-sm-8">
            <label className="input-group-text" id="basic-addon1">
              Search for weapon
              <input
                type="text"
                className="form-control"
                placeholder={filterTerm}
                value={searchTerm}
                onChange={handleSearch}
                aria-label="Weapon name"
                aria-describedby="basic-addon1"
                autoFocus
              />
            </label>
          </div>
          <div className="col-sm-4">
            <label className="input-group-text" id="basic-addon1">
              filter
              <select className="form-control" onChange={handleFilter}>
                <option value="weaponName">Name</option>
                <option value="weaponType">Type</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
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
            {results &&
              results.map((weapon, index) => (
                <React.Fragment key={`weapons-list-row-${index}`}>
                  <tr>
                    <td>
                      <img
                        src={`https://csgo-weapons.s3.eu-north-1.amazonaws.com/${weapon.weaponImageName}`}
                        style={{ width: "50px", height: "50px" }}
                        className="rounded float-left"
                      />
                    </td>
                    <td>{weapon.weaponName}</td>
                    <td>{weapon.weaponType}</td>
                    <td>{weapon.price}</td>
                    <td>{weapon.killAward}</td>
                    <td>{weapon.damage}</td>
                    <td>{weapon.magazineSize}</td>
                    <td>
                      {(
                        (weapon.fireRate / 60) *
                        weapon.damage *
                        weapon.bullets
                      ).toFixed(2)}
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
    </Fragment>
  );
};

export default Weapons;
