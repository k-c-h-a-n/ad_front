import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { withStyles} from '@material-ui/core/styles';
import { palette } from '@mui/system';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box';


const Grids = () => (
  <>
    <Typography componet="h2" variant="h5" gutterBottom>
      Grids
    </Typography>

    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Box bgcolor="info.main" color="info.contrastText" p={2} m={5}>
          1
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="info.main" color="#ffffff" p={2} m={5}>
          2
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.main"  color="info.contrastText" p={2} m={5}>
          3
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          4
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          5
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          6
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          7
        </Box>
      </Grid>
    </Grid>
    <Box clone color="primary.main" m={5}>
          <Button>Button 1</Button>
        </Box>
        <Box color="primary.main" m={5}>
          <Button>Button 2</Button>
        </Box>
        <Box component="span" m={5}>
          <Button>Button 3</Button>
        </Box>
  </>
);

export default Grids;