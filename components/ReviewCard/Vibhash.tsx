import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

const VibhasReview = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar alt="bivash singh" src="/review/bivash.png" />}
        title="Bivash Singh"
      />
      <CardContent>
        <Rating value={5} readOnly />

        <Typography variant="body2" color="text.secondary">
          Soft and delicious !!!
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VibhasReview;
