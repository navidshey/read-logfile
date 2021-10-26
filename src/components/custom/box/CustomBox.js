import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

/**
 * A Box to show some text in it
 *
 * @param {string} className - css className of the box
 * @param {string} title - the text which is shows inside the box
 * @param {string} color - the color of the box
 */
export function CustomBox({ className, title, color }) {
  return (
    <Card className={className} sx={{ maxWidth: 1, my: 1 }}>
      <CardMedia sx={{ background: color }}  data-testid="custom-box">
        <Typography sx={{ pt: 1, pl: 1, pb: 1 }} color="white">
          {title}
        </Typography>
      </CardMedia>
    </Card>
  );
}

CustomBox.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
