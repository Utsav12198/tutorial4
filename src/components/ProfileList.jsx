import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const ProfileList = () => {
  const [data, setData] = useState();
  const [searchdata, setSearchdata] = useState();
  const [searchquery, setSearchquery] = useState("");
  const [searchmessage, setSearchmessage] = useState("");

  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchquery(event.target.value);

    const filteredUsers = data.filter((index) => {
      return index.name.toLowerCase().match(event.target.value.toLowerCase());
    });

    setSearchdata([...filteredUsers]);

    if (filteredUsers.length === 0) {
      setSearchmessage("No result found");
    } else {
      setSearchmessage(filteredUsers.length + " Result found");
    }
  };

  useEffect(() => {
    axios.get(`https://express-t4.onrender.com/api/users`).then((res) => {
      setData(res.data);
      setSearchdata(res.data);
    });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Profile Detail</h1>

      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          value={searchquery}
          placeholder="Search here for profiles"
          onChange={handleSearch}
          style={{
            padding: "0.7rem 2rem",
            outline: "none",
            border: "1px solid #ccc",
            borderRadius: "20px",
            width: "50%",
          }}
        />
      </div>
      {searchquery ? (
        <h2 style={{ textAlign: "center" }}>{searchmessage}</h2>
      ) : null}
      <p>
        <Paper
          sx={{
            mx: { xs: 3, md: 5 },
            my: { xs: 3, md: 5 },
            p: { xs: 2, md: 3 },
          }}
        >
          <Grid container spacing={2}>
            {searchdata?.map((list) => {
              return (
                <Card
                  onClick={() => {
                    navigate(`/profile_detail/${list._id}`);
                  }}
                  sx={{ maxWidth: 345, margin: "2rem auto", padding: "2rem" }}
                  key={list._id}
                >
                  <CardMedia
                    sx={{
                      height: 140,
                      width: 140,
                      borderRadius: "50%",
                      margin: "0 auto",
                    }}
                    image={list.picture}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                      {list.name}
                    </Typography>
                    <Typography
                      sx={{ textAlign: "center" }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {list.email}
                    </Typography>
                    <Typography
                      sx={{ textAlign: "center" }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {list.phone}
                    </Typography>
                    <CardActions>
                      <Button
                        onClick={() => {
                          navigate(`/profile_detail/${list._id}`);
                        }}
                        variant="contained"
                        sx={{ margin: "0 auto" }}
                      >
                        View Profile
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              );
            })}
          </Grid>
        </Paper>
      </p>
    </>
  );
};
