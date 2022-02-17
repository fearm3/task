import { CardContent, Typography } from "@mui/material";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState();
  const [userPost, setUserPost] = useState();
  const [loading, setLoading] = useState(false);
  const fetchUsersData = async (id) => {
    setLoading(true);

    const response = await axios.get(
      `https://gorest.co.in/public/v2/users/${id}`
    );
    //https://gorest.co.in/public/v2/users/3904
    setUserData(response.data);
    setLoading(false);

    console.log("data", response.data);
  };
  const fetchUsersPost = async (id) => {
    setLoading(true);

    const response = await axios.get(
      `https://gorest.co.in/public/v2/users/${id}/posts`
    );
    //https://gorest.co.in/public/v2/users/3904/posts
    setUserPost(response.data);
    setLoading(false);

    console.log("post", response.data);
  };
  useEffect(() => {
    fetchUsersData(id);
    fetchUsersPost(id);
  }, [id]);

  return (
    <div>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {userData?.name}
        </Typography>
        <Typography variant="h5" component="div">
          {userData?.email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {userData?.gender}
        </Typography>
        <Typography variant="body2">{userData?.status}</Typography>
        {userPost?.length !== 0 ? (
          userPost?.map((post) => (
            <Fragment key={post.id}>
              <Typography variant="body2">{post.title}</Typography>
              <Typography variant="body2">{post.body}</Typography>
            </Fragment>
          ))
        ) : (
          <p>No post added</p>
        )}
      </CardContent>
    </div>
  );
};

export default Detail;
