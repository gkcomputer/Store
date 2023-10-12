import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import classes from "./Login.module.css";
// import login_img from "../../assests/login_page_img.jpg";
import login_img from "../../assests/pxfuel.jpg";
import { SignalWifiStatusbarNullTwoTone } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Login() {
  const [flip, setFlip] = useState(false);
  const fliped = { transform: flip ? "rotateY(180deg)" : null };
  return (
    <div className={classes.flipcard}>
      <div className={classes.imgdiv}>
        <img src={login_img} alt="" className={classes.img} />
      </div>
      <div style={fliped} className={classes.flipcardinner}>
        <div className={classes.flipcardfront}>
          <p>Log in to Store</p>
          <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
          <TextField
            id="outlined-error-helper-text"
            label="Error"
            helperText="Incorrect entry."
          />
          <Button variant="contained">Login</Button>
          <div className={classes.logindetails}>
            <div>Forgotten Password</div>
            <div
              onClick={() => {
                setFlip(!flip);
              }}
            >
              Register Account
            </div>
          </div>
        </div>
        <div className={classes.flipcardback}>
          <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
          <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Please confirm your age is 18+ "
          />
          <Button
            onClick={() => {
              setFlip(!flip);
            }}
          >
            Sign up
          </Button>

          <p>
            Already have an account{" "}
            <Link
              onClick={() => {
                setFlip(!flip);
              }}
            >
              login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
