// import React from "react";

// function Conference1() {
//   return (
//     <>
//       <div>
//         <div>
//           <h1>Conferences</h1>
//           <select>
//             <option value="global-business-investment-forum">
//               Global Business and Investment Forum - Canada (March 27th – 29th,
//               2024)
//             </option>
//             {/* You can add more conference options here */}
//           </select>
//         </div>
//         <h2>Global Business and Investment Forum - Canada</h2>
//       <p>
//         Global Business and Investment Forum - Canada is scheduled to take place in Edmonton, Alberta, Canada on March 27th
//         to 29th, 2024. This event will focus on what we do best – connecting people and businesses to innovate, learn,
//         engage in discussions, pursue partnerships, make connections, and celebrate successes. In addition to this, this
//         forum will provide concrete strategies to move your business forward in 2024 with expert speakers, panels, and
//         breakout sessions.
//       </p>
//       <p>
//         Global investment opportunities will be presented to investors looking for profitable business opportunities in the
//         growing markets around the globe. Representatives of overseas government’s investment authorities and business
//         leaders will be there to present and answer questions on how to invest in their respective countries or businesses.
//       </p>
//       </div>
//     </>
//   );
// }

// export default Conference1;
import React from 'react';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
  select: {
    fontSize: '16px',
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
};

function conference1(){


  return (<>
  
    <div style={styles.container}>
      <h1 style={styles.heading}>Conferences</h1>
      <select style={styles.select}>
        <option value="global-business-investment-forum" >Global Business and Investment Forum - Canada (March 27th – 29th, 2024)</option>
        {/* You can add more conference options here */}
      </select>
    </div>
    <div style={styles.container}>
    <h2 style={styles.heading}>Global Business and Investment Forum - Canada</h2>
    <p style={styles.paragraph}>
      Global Business and Investment Forum - Canada is scheduled to take place in Edmonton, Alberta, Canada on March 27th
      to 29th, 2024. This event will focus on what we do best – connecting people and businesses to innovate, learn,
      engage in discussions, pursue partnerships, make connections, and celebrate successes. In addition to this, this
      forum will provide concrete strategies to move your business forward in 2024 with expert speakers, panels, and
      breakout sessions.
    </p>
    <p style={styles.paragraph}>
      Global investment opportunities will be presented to investors looking for profitable business opportunities in the
      growing markets around the globe. Representatives of overseas government’s investment authorities and business
      leaders will be there to present and answer questions on how to invest in their respective countries or businesses.
    </p>
  </div>
  </>
  );
};


export default conference1;
