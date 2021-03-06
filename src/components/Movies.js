import React from "react";
import "./Movies.css";
import { motion, AnimatePresence } from "framer-motion";

const Movies = ({ movie }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1,scale:1 }}
      initial={{ opacity: 0,scale:0 }}
      exit={{ opacity: 0,scale:0 }}
    >
      <h2>{movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt=""
      />
      <div className="info">
        <p>
          IMDB:<span>{movie.vote_average}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default Movies;
