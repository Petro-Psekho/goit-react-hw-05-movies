// import { useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getMovies } from 'services/fetchMovies ';

// export const Movies = () => {
//   const [foundMovies, setFoundMovies] = useState([]);
//   const navigate = useNavigate();
//   const { query } = useParams();

//   const handleSubmit = async values => {
//     const response = getMovies(query).then(data => {
//       setFoundMovies(data.results);
//     });
//     if (response.success) {
//       navigate('/movies', { replace: false });
//     }
//   };

//   return (
//     <div>
//       <input onSubmit={handleSubmit} />
//     </div>
//   );
// };

import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { getMovies } from 'services/fetchMovies ';

export const Movies = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },

    reset,
  } = useForm();

  // const onSubmit = data => console.log(data);
  const onSubmit = async data => {
    console.log(Object.values(data));

    const query = Object.values(data);
    const response = await getMovies(query);

    reset();

    console.log(response.results);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input autoComplete="off" {...register('query', { required: true })} />

        {errors.query && <span>This field is required</span>}

        <button type="submit">Search</button>
      </form>

      {/* <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul> */}
    </main>
  );
};
