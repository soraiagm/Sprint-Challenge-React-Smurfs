import React from 'react';
import { Link } from "react-router-dom";

  const Smurfs = props => {
      return (
          <div className="smurf-list-wrapper">
              {props.smurfs.map( (smurf) => (
                <Link to="{`/smurf/{smurf.id}`}" className="smurf-card" key={smurf.id}>
                    <h2>{smurf.name}</h2>
                    <h4>{smurf.age}</h4>
                    <h4>{smurf.height}</h4>
                </Link>
                ))}
          </div>
      )
  }

  export default Smurfs;
                  
                  
                  
                  
                //   Link to={`/smurf/{smurf.id}`} className="smurf-card" key={smurf.id}>
                //      <h2>{smurf.name}</h2>
                //      <h4>{smurf.age}</h4>
                //      <h4>{smurf.height}</h4>
                // </Link>
            // ))}
    
  //     );
  // }


  



// class Smurfs extends Component {
//   render() {
//     return (
//       <div className="Smurfs-list-wrapper">
//         <h1>Smurf Village</h1>
//         <ul>
//           {this.props.smurfs.map(smurf => {
//             return (
//               <Smurf
//                 name={smurf.name}
//                 id={smurf.id}
//                 age={smurf.age}
//                 height={smurf.height}
//                 key={smurf.id}
//               />
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// Smurf.defaultProps = {
//  smurfs: [],
// };


