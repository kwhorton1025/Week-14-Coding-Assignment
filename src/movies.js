import React, { useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      title: "Aladdin",
      genre: "Musical Adventure Comedy",
      rating: "",
      poster:
        "https://assets0.dostuffmedia.com/uploads/aws_asset/aws_asset/7813950/f1145515-9ddd-4725-ac1d-7a696ace951f.jpg",
      review: "",
    },
    {
      title: "Mulan",
      genre: "Action-Adventure",
      rating: "",
      poster:
        "https://whatsondisneyplus.com/wp-content/uploads/2020/05/Mulan.png",
      review: "",
    },
    {
      title: "Pocahontas",
      genre: "Musical Romance-Drama",
      rating: "",
      poster:
        "https://th.bing.com/th/id/R.f138f04b485d0083193c619f2cfa888c?rik=EeqyBA3kIpPbLw&pid=ImgRaw&r=0",
      review: "",
    },
    {
      title: "Robin Hood",
      genre: "Musical Adventure Comedy",
      rating: "",
      poster:
        "https://th.bing.com/th/id/R.afc213bd1c72f1e9353fcfdbb930e268?rik=2pVc07xs4XK80Q&pid=ImgRaw&r=0",
      review: "",
    },
    {
      title: "Tarzan",
      genre: "Action-Adventure",
      rating: "",
      poster:
        "https://th.bing.com/th/id/R.2623a59e8104f17fe2426af3729f3a61?rik=zQL6eHsznlgddg&pid=ImgRaw&r=0",
      review: "",
    },
    {
      title: "The Fox and the Hound",
      genre: "Buddy Drama",
      rating: "",
      poster:
        "https://th.bing.com/th/id/R.9b388185f9e4ef6af75eb38d6daac88a?rik=uCBa8brOAfqdpA&pid=ImgRaw&r=0",
      review: "",
    },
    {
      title: "The Jungle Book",
      genre: "Musical Adventure Comedy",
      rating: "",
      poster:
        "https://th.bing.com/th/id/R.557bb0b036e416c73473c75bda195be8?rik=DKL5tLCby6bvjQ&pid=ImgRaw&r=0",
      review: "",
    },
    {
      title: "The Lion King",
      genre: "Musical Drama",
      rating: "",
      poster:
        "https://th.bing.com/th/id/R.6313d202b539c985507ba4298ef59938?rik=oHAfIwg%2bjUjd6g&pid=ImgRaw&r=0",
      review: "",
    },
    {
      title: "Toy Story",
      genre: "Animated Comedy",
      rating: "",
      poster:
        "https://th.bing.com/th/id/R.e70a3f1868c2cc32668a2ac855229469?rik=%2fPSBxD3i2iql3A&riu=http%3a%2f%2fwww.numericapac.org%2fwp-content%2fuploads%2f2018%2f01%2fMovie_ToyStory.jpg&ehk=I7oIeR7mLp1rXKTnEwVnCGWNRI0Z%2fsxP77QKUZF%2bFqQ%3d&risl=&pid=ImgRaw&r=0",
      review: "",
    },
  ]);

  const handleRatingChange = (index, newRating) => {
    const newMovies = [...movies];
    newMovies[index].rating = newRating;
    setMovies(newMovies);
  };

  const handleReviewChange = (index, newReview) => {
    const newMovies = [...movies];
    newMovies[index].review = newReview;
    setMovies(newMovies);
  };

  const handleReviewSubmit = (index) => {
    const newMovies = [...movies];
    const review = newMovies[index].review;
    // Here you can save the review to a database or perform any other necessary operations with the review
    console.log(`Review for ${newMovies[index].title}: ${review}`);
    setMovies(newMovies);
    const reviewList = document.createElement("div");
    const reviewRating = document.createElement("span");
    reviewRating.innerHTML = `Rating: ${newMovies[index].rating} Stars`;
    const reviewText = document.createElement("p");
    reviewText.innerHTML = review;
    reviewList.appendChild(reviewRating);
    reviewList.appendChild(reviewText);
    const movieListItem = document.querySelectorAll(".movie-list li")[index];
    movieListItem.appendChild(reviewList);
  };

  return (
    <div className="movies-container">
      <h2 class="subheading">Please Review Each Disney Movie Below:</h2>
      <ul className="movie-list">
        {movies.map((movie, index) => (
          <li key={index}>
            <div className="movie-info">
              <img
                src={movie.poster}
                alt={movie.title}
                style={{ width: "400px", height: "200px" }}
              />
              <div>
                <h3>{movie.title}</h3>
                <p>{movie.genre}</p>
              </div>
            </div>
            <div className="rating-section">
              <p>Rate This Movie:</p>
              <div className="star-ratings">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label key={rating}>
                    <input
                      type="radio"
                      name={`rating-${index}`}
                      value={rating}
                      checked={movie.rating === rating}
                      onChange={() => handleRatingChange(index, rating)}
                    />
                    <span
                      className="star-icon"
                      role="img"
                      aria-label={`${rating} star`}
                    >
                      ⭐️
                    </span>
                  </label>
                ))}
              </div>
              <div className="review-section">
                <p>Leave a Review:</p>
                <input
                  type="text"
                  value={movie.review}
                  onChange={(e) => handleReviewChange(index, e.target.value)}
                />
                <button onClick={() => handleReviewSubmit(index)}>
                  Submit
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
