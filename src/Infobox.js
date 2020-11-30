import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
function Infobox({ title, cases, total }) {
  return (
    <div>
      <Card className="infobox">
        <CardContent>
          <Typography className="infobox__title">{title}</Typography>
          <h2 className="infobox__cases">{cases}</h2>
          <Typography className="infobox__total">Total:{total}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Infobox;
