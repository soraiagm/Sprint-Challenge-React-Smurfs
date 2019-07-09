import React from 'react';
import { Link } from "react-router-dom";

const Smurf = props => {
    const smurf = props.smurfs.find(i => String(i.id)  === props.match.params.id);

    return (
        <div className="smurf-wrapper">
             
            <div className="smurf-header">
            </div>
         
            <div className="smurf-title-wrapper">
                <h2>{smurf.name}</h2>
                <h3>{smurf.age}</h3>
                <h3>{smurf.height}</h3>
            </div> 

            <nav>
                <Link to={`/edit/${smurf.id}`}>Delete Smurf</Link>
            </nav> 

         </div> 
          ); 
        }
    export default Smurf;
            
       // <div className="smurf-wrapper">
            //   <div className="smurf-header">
            //     <div className="smurf-wrapper">
            //         <h2>{smurf.name}</h2>
            //         <h3>{smurf.age}</h3>
            //         <h3>{smurf.height}</h3>
            //     </div>
            //   </div>
            // </div>
        // )
    



// const Smurf = props => {
//   return (
//     <div key={props.id} className="Smurf">
//       <h3>{props.name}</h3>
//       <strong>{props.height} tall</strong>
//       <p>{props.age} smurf years old</p>
//     </div>
//   );
// };

// Smurf.defaultProps = {
//   name: '',
//   height: '',
//   age: ''
// };

// export default Smurf;



// {/* <nav>
//       < Link to={`/smurf/${props.match.params.id}`}>SmurfForm</Link>
// </nav> */}

