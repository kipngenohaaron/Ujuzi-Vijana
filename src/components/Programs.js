// // src/components/Programs.js
// import React from 'react';

// const Programs = () => {
//   const programs = [
//     {
//       title: 'Digital Skills Training',
//       description: 'Learn essential digital skills, including web development, graphic design, and more.',
//     },
//     {
//       title: 'Entrepreneurship Bootcamp',
//       description: 'Develop the mindset and skills to start and grow your business.',
//     },
//     {
//       title: 'Creative Arts Workshop',
//       description: 'Explore your artistic potential with hands-on training in various creative fields.',
//     },
//   ];

//   return (
//     <section className="programs" id="programs">
//       <div className="container">
//         <h2>Our Programs</h2>
//         <div className="program-list">
//           {programs.map((program, index) => (
//             <div className="program-item" key={index}>
//               <h3>{program.title}</h3>
//               <p>{program.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Programs;
import React from 'react';

const Programs = () => {
  const programs = [
    { title: 'Digital Skills Training', description: 'Learn web development, design, and more.' },
    { title: 'Entrepreneurship Bootcamp', description: 'Develop skills to start your business.' },
    { title: 'Creative Arts Workshop', description: 'Unlock your artistic potential.' },
  ];

  return (
    <section className="programs" id="programs">
      <h2>Our Programs</h2>
      {programs.map((program, index) => (
        <div className="program-item" key={index}>
          <h3>{program.title}</h3>
          <p>{program.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Programs;
