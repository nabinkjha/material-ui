import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";

const AjitReview = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: orange[500] }}
            aria-label="Ajit Gupta letter"
            src="/review/ajit.jpg"
          >
            AG
          </Avatar>
        }
        title="Ajit Gupta"
      />
      <CardContent>
        <Rating value={4.5} precision={0.5} readOnly />
        <Typography variant="body2" color="text.secondary">
          Very delicious cake....
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AjitReview;
