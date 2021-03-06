import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WeaponDetail from "./WeaponDetail";
import { FaChevronRight } from "react-icons/fa";
import Pagination from "../common/Pagination";

const WeaponsData = ({ weapons }) => {
  const [filterData, setFilterData] = useState(weapons);
  const [searchFilter, setSearchFilter] = useState("");
  const [weaponAttribute, setWeaponAttribute] = useState("weaponName");
  const [weaponTypeFilter, setWeaponTypeFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(12);
  const [totalPosts, setTotalPosts] = useState(filterData.length);

  let mapWeaponTypes = weapons.map(x => x.weaponType);

  const weaponTypes = [...new Set(mapWeaponTypes)];

  useEffect(() => {
    let filter = weapons;

    if (searchFilter !== "") {
      filter = filter.filter(x =>
        x.weaponName.toLowerCase().includes(searchFilter.toLocaleLowerCase())
      );
    }
    if (weaponTypeFilter !== "") {
      filter = filter.filter(
        x =>
          x.weaponType.includes(weaponTypeFilter) &&
          x.weaponName.toLowerCase().includes(searchFilter.toLocaleLowerCase())
      );
    }
    if (weaponAttribute === "weaponName") {
      setWeaponTypeFilter("");
    }

    setFilterData(filter);

    setTotalPosts(filter.length);

    if (filter.length <= 12) {
      paginate(1);
    }
  }, [searchFilter, weaponAttribute, weaponTypeFilter, weapons, totalPosts]);

  const handleSearch = event => {
    setSearchFilter(event.target.value);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filterData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const paginate = pageNumber => {
    if (pageNumber - 1 >= 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <React.Fragment>
      <div className="outer-frame">
        <div className="table-frame container">
          <div className="row search-bar">
            {/* search */}
            <div className="col-sm-6">
              <label
                className="search-field input-group-text"
                id="basic-addon1"
              >
                Search for weapon
                <input
                  type="text"
                  className="search-input form-control"
                  placeholder="Name"
                  value={searchFilter}
                  onChange={handleSearch}
                  aria-label="Weapon name"
                  aria-describedby="basic-addon1"
                  autoFocus
                />
              </label>
            </div>
            {/* filter */}
            <div className="col-sm-3">
              <label
                className="filter-field input-group-text"
                id="basic-addon1"
              >
                filter
                <select
                  className="filter-select form-control"
                  onChange={e => {
                    setWeaponAttribute(e.target.value);
                  }}
                >
                  <option value="weaponName">Name</option>
                  <option value="weaponType">Type</option>
                </select>
              </label>
            </div>

            {/* type filter */}
            {weaponAttribute === "weaponType" && (
              <div id="type-filter" className="col-sm-3">
                <label
                  className="filter-type-field input-group-text"
                  id="basic-addon1"
                >
                  Type filter
                  <select
                    className="filter-type-select form-control"
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
              {currentPosts.map((weapon, index) => (
                <React.Fragment key={`weapons-list-row-${index}`}>
                  <tr>
                    <td>
                      <img
                        src={`https://csgo-weapons.s3.eu-north-1.amazonaws.com/${weapon.weaponImageName}`}
                        alt={weapon.weaponImageName}
                        className="weapon-image-thumbnail rounded float-left"
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
                      <Link
                        className="weapon-link"
                        to={{
                          pathname: `/weapons/${weapon.slug}`
                        }}
                      >
                        Select
                        <FaChevronRight />
                      </Link>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="pagination-frame">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
          paginate={paginate}
          getPageNumber={currentPage}
        />
      </div>
    </React.Fragment>
  );
};

export default WeaponsData;
