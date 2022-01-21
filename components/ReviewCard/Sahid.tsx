import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Rating,
    Typography,
  } from "@mui/material";
  
  import { blueGrey } from "@mui/material/colors";
  
  const ShahidReview = () => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
        avatar={<Avatar alt="Sahid singh" src="/review/sahid.jpg" />}
        title="Sahid Khan"
      />
        <CardContent>
          <Rating value={5} readOnly />
          <Typography variant="body2" color="text.secondary">
          Freshly baked yummy cakes. No compromise on quality.
          </Typography>
        </CardContent>
      </Card>
    );
  };
  
  export default ShahidReview;
  