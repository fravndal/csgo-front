import React, { Fragment, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_WEAPONS } from "./../queries/WeaponList";
import Loader from "react-loader-spinner";
import ErrorHandler from "./../components/common/ErrorHandler";
import WeaponDetail from "./../components/weapon/WeaponDetail";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Weapons = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("weaponName");
  const [weaponTypeFilter, setWeaponTypeFilter] = useState("");

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const { data, loading, error } = useQuery(GET_WEAPONS);

  let mapWeaponTypes =
    data && data.weapons && data.weapons.map(weapon => weapon.weaponType);
  const weaponTypes = [...new Set(mapWeaponTypes)];

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
        weapon.weaponName.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  const resultsWithWeaponTypeFilter =
    weaponTypeFilter !== ""
      ? data &&
        data.weapons &&
        data.weapons.filter(
          weapon =>
            weapon.weaponType.includes(weaponTypeFilter) &&
            weapon.weaponName
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
        )
      : null;

  const check =
    resultsWithWeaponTypeFilter != null ? resultsWithWeaponTypeFilter : results;

  return (
    <Fragment>
      <div className="bg-dark" style={{ backgroundColor: "grey" }}>
        <div className="container" style={{ backgroundColor: "white" }}>
          <div className="row">
            <div className="col-sm-6">
              <label className="input-group-text" id="basic-addon1">
                Search for weapon
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={searchTerm}
                  onChange={handleSearch}
                  aria-label="Weapon name"
                  aria-describedby="basic-addon1"
                  autoFocus
                />
              </label>
            </div>
            <div className="col-sm-3">
              <label className="input-group-text" id="basic-addon1">
                filter
                <select
                  className="form-control"
                  onChange={e => setFilterTerm(e.target.value)}
                >
                  <option value="weaponName">Name</option>
                  <option value="weaponType">Type</option>
                </select>
              </label>
            </div>

            {filterTerm === "weaponType" && (
              <div id="type-filter" className="col-sm-3">
                <label className="input-group-text" id="basic-addon1">
                  Type filter
                  <select
                    className="form-control"
                    onChange={e => setWeaponTypeFilter(e.target.value)}
                  >
                    <option value="">Select type..</option>
                    {weaponTypes.map((weaponTypeName, i) => (
                      <option
                        key={`weaponTypeOption-${i}`}
                        value={weaponTypeName}
                      >
                        {weaponTypeName}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            )}
          </div>

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
              {check &&
                check.map((weapon, index) => (
                  <React.Fragment key={`weapons-list-row-${index}`}>
                    <tr>
                      <td>
                        <img
                          src={`https://csgo-weapons.s3.eu-north-1.amazonaws.com/${weapon.weaponImageName}`}
                          alt={weapon.weaponImageName}
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
      </div>
    </Fragment>
  );
};

export default Weapons;
