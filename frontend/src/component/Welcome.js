import { Grid, Typography } from "@material-ui/core";
import "./welcome.css";

const Welcome = (props) => {
  return (
    <>
    <div class="homepage">
        <h2>Welcome To JobBlitz</h2>
    </div>
    <div class="boxes">
        <ul class="single-box">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    </>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
