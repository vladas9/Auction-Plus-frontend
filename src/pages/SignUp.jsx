import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Container,
  Grid,
  Typography,
  Slider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    phoneNumber: "",
    address: "",
    paymentDetails: "",
    isHuman: false,
    idUploaded: null,
  });
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [isSliderComplete, setIsSliderComplete] = useState(false);
  const [openCaptchaDialog, setOpenCaptchaDialog] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });
  
    if (event.target.checked) {
      setOpenCaptchaDialog(true); 
    } else {
      setFormData({
        ...formData,
        isHuman: false, 
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value });

    if (name === "password" || name === "repeatPassword") {
      setPasswordMismatch(
        formData.password !== value && formData.repeatPassword !== value
      );
    }
  };

  const handleFileUpload = (e) => {
    setFormData({ ...formData, idUploaded: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordMismatch) {
      console.log("Passwords do not match");
      return;
    }

    const result = true; // Simulated backend response

    if (result) {
      setIsAuthenticated(true);
      navigate('/');
      console.log("Registration successful:", formData);
    } else {
      console.log("Registration failed");
    }
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      phoneNumber: "",
      address: "",
      paymentDetails: "",
      isHuman: false,
      idUploaded: null,
    });
    setPasswordMismatch(false);
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    if (newValue === 100) {
      setIsSliderComplete(true);
    } else {
      setIsSliderComplete(false); 
    }
  };

  const handleSubmitCaptcha = () => {
    if (isSliderComplete) {
      setOpenCaptchaDialog(false); 
      setFormData({
        ...formData,
        isHuman: true, 
      });
    } else {
      setFormData({
        ...formData,
        isHuman: false,
      });
    }
  };

  const handleCloseCaptchaDialog = () => {
    setOpenCaptchaDialog(false);
    setFormData({
        ...formData,
        isHuman: false,
      });
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Typography 
        variant="h5" 
        align="center" 
        gutterBottom 
        style={{ marginTop: '20px' }}
        >
        Only one step left to discover something new!
        </Typography>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Repeat Password"
          type="password"
          name="repeatPassword"
          value={formData.repeatPassword}
          onChange={handleChange}
          margin="normal"
          required
          error={passwordMismatch}
          helperText={passwordMismatch ? "Passwords do not match" : ""}
        />
        <TextField
          fullWidth
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          margin="normal"
          required
          inputProps={{ pattern: "[0-9]*" }}
        />
        <TextField
          fullWidth
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          margin="normal"
          required
        />

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
          <Button
            variant="contained"
            component="label"
            startIcon={<UploadIcon />}
            fullWidth
          >
            Upload ID
            <input
              type="file"
              hidden
              onChange={handleFileUpload}
            />
          </Button>
          </Grid>
          <Grid item xs={6}>
            <Typography>(age verification)</Typography>
          </Grid>
        </Grid>

        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isHuman}
              onChange={handleCheckboxChange}
              name="isHuman"
            />
          }
          label="Are you a human?"
        />

        <Grid container spacing={2}>
          <Grid item xs={6}>
          <Button
            variant="contained"
            color="success"
            type="submit"
            fullWidth
            disabled={!formData.isHuman || passwordMismatch || !formData.idUploaded}
          >
            Register
          </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              color="error"
              onClick={handleClear}
              fullWidth
            >
              Clear
            </Button>
          </Grid>
        </Grid>

        <Dialog
          open={openCaptchaDialog}
          onClose={handleCloseCaptchaDialog}
          aria-labelledby="captcha-dialog-title"
          aria-describedby="captcha-dialog-description"
        >
          <DialogTitle id="captcha-dialog-title">Complete the CAPTCHA</DialogTitle>
          <DialogContent>
            <Slider
              value={sliderValue}
              onChange={handleSliderChange}
              aria-labelledby="continuous-slider"
              min={0}
              max={100}
              valueLabelDisplay="auto"
              style={{ margin: '20px 0' }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmitCaptcha}
            >
              Submit CAPTCHA
            </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseCaptchaDialog} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </Container>
  );
}
