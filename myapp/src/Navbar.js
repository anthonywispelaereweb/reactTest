import React from 'react';

function NavBar({ somProp }) {
  console.log(somProp);
  return (
    <div className="navBar">
      <nav>
        <ul className="navBar-list">
          {somProp.map(function(item) {
            var data = (
              <li key={item.title} className="navBar-item">
                <a href={item.url}> {item.title} </a>
              </li>
            );
            return data;
          })}
        </ul>
      </nav>
    </div>
  );
}
// const NavBar = ({ somProp }) => (
//   <div className="navBar">
//     <nav>
//       <ul>
//         {somProp.map(function(item) {
//           var data = (
//             <li>
//               <a href="/">{item}</a>
//             </li>
//           );
//           return data;
//         })}
//       </ul>
//     </nav>
//   </div>
// );
export default NavBar;
