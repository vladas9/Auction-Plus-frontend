import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Box
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const result = true;

    if (result) {
      setIsAuthenticated(true); 
      navigate('/');
      console.log(username);
      console.log(password);
    } else {
      console.log("Login failed");
    }
  };

  const handleClear = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xs">
        <form onSubmit={handleLogin}>
          <Typography variant="h5" gutterBottom align="center">
            We are happy you come back!
          </Typography>
          <TextField
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClear}
                fullWidth
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
}
