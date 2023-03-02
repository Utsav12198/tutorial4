import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProfileDetail = () => {
  const params = useParams();

  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios
      .get(`https://express-t4.onrender.com/api/users/${params.id}`)
      .then((res) => {
        setDetail(res.data);
      });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Profile Details</h1>
      <Card sx={{ maxWidth: 345, margin: "2rem auto" }}>
        <CardMedia sx={{ height: 140 }} image={detail.picture} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {detail.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Age: {detail.age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gender: {detail.gender}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {detail.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address: {detail.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Balance: {detail.balance}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Company: {detail.company}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            About: {detail.about}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
