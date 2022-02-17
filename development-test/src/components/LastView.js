import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getViews } from "../redux/actions";

const LastView = () => {
  const dispatch = useDispatch();
  const lastUserViews = useSelector((state) => state.rootReducer);
  // console.log('movie', movie);
  useEffect(() => {
    dispatch(getViews()); //getViews
  }, [dispatch]);

  return (
    <div className="movie-container">
      {lastUserViews.length === 0 ? (
        <h3 style={{ marginTop: "5rem", color: "#000" }}>No added movie</h3>
      ) : (
        lastUserViews?.map((item) => {
          console.log("item from lastView", item);
          const { title, poster_path, vote_average, id } = item;
          return (
            <div className="movie" key={id}>
              <div className="movie-info">
                <h3>{title}</h3>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default LastView;
