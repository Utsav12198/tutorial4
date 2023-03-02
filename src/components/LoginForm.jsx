import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const credentials = {
    username: uname,
    password: pwd,
  };

  console.log(credentials.username);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://express-t4.onrender.com/api/login", credentials)
      .then((response) => {
        navigate("/profile_list");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div>
      <form>
        <Box
          display={"flex"}
          flexDirection={"column"}
          maxWidth={400}
          justifyContent={"center"}
          margin={"auto"}
          marginTop={5}
          marginBottom={5}
          padding={13}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography
            sx={{ textAlign: "center" }}
            variant="h2"
            paddingBottom={5}
          >
            Login
          </Typography>
          <TextField
            margin="normal"
            type={Text}
            variant="outlined"
            label="Username"
            value={uname}
            required
            onChange={(e) => {
              setUname(e.target.value);
            }}
          ></TextField>
          <TextField
            margin="normal"
            type={"password"}
            variant="outlined"
            label="Password"
            value={pwd}
            onChange={(e) => {
              setPwd(e.target.value);
            }}
            required
          ></TextField>

          <Button
            type="submit"
            onClick={handleSubmit}
            sx={{
              marginTop: 3,
              borderRadius: 5,
              width: 100,
              alignSelf: "center",
              justifyContent: "center",
              ":hover": { background: "black" },
            }}
            variant="contained"
            color="warning"
          >
            Login
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default LoginForm;
