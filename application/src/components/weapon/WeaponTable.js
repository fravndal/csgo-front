// import React, { Fragment, useState } from "react";
// import WeaponDetail from "./../components/weapon/WeaponDetail";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const WeaponsTable = data => {
//   console.log(data.data);
//   return (
//     <Fragment>
//       <table className="table table-hover">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Type</th>
//             <th>Price</th>
//             <th>Kill Award</th>
//             <th>Damage</th>
//             <th>Magazine Size</th>
//             <th>DPS</th>
//             <th></th>
//           </tr>
//         </thead>

//         <tbody>
//           {data &&
//             data.map((weapon, index) => (
//               <React.Fragment key={`weapons-list-row-${index}`}>
//                 <tr>
//                   <td>{weapon.weaponName}</td>
//                   <td>{weapon.weaponType}</td>
//                   <td>{weapon.price}</td>
//                   <td>{weapon.killAward}</td>
//                   <td>{weapon.damage}</td>
//                   <td>{weapon.magazineSize}</td>
//                   <td>
//                     {(weapon.fireRate / 60) * weapon.damage * weapon.bullets}
//                   </td>
//                   <td>
//                     <button
//                       onClick={() =>
//                         setExpandedId(
//                           expandedId === null || expandedId !== index
//                             ? index
//                             : null
//                         )
//                       }
//                     >
//                       {expandedId === index ? (
//                         <FaChevronUp />
//                       ) : (
//                         <FaChevronDown />
//                       )}
//                     </button>
//                   </td>
//                 </tr>

//                 {
//                   <WeaponDetail
//                     weapon={weapon}
//                     expanded={expandedId === index}
//                   />
//                 }
//               </React.Fragment>
//             ))}
//         </tbody>
//       </table>
//     </Fragment>
//   );
// };

// export default WeaponsTable;
