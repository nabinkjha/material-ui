import { Container, Grid, Typography } from "@mui/material";
import VibhashReview from "./ReviewCard/Vibhash";
import ShahidReview from "./ReviewCard/Sahid";
import AjitReview from "./ReviewCard/AjitGupta";
const SectionReview = () => {
  return (
    <Container maxWidth="md" sx={{ my: 15 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 10 }}>
        Customer Review
      </Typography>
      <Grid container spacing={2}>
        <Grid container item justifyContent="center" xs={12} sm={6} md={4}>
          <AjitReview />
        </Grid>
        <Grid container item justifyContent="center" xs={12} sm={6} md={4}>
          <ShahidReview />
        </Grid>
        <Grid container item justifyContent="center" xs={12} sm={6} md={4}>
          <VibhashReview />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionReview;
