import React from "react";
import Button from "@material-ui/core/Button";
import Typeography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const QuoteMachine = (props) => (
  /* wrapper is react fragment*/

  <Card>
    <CardContent>
      {" "}
      {props.selectedQuote ? (
        <Typeography>
          {props.selectedQuote.quote} - {props.selectedQuote.author}
        </Typeography>
      ) : null}
      <CardActions>
        <Button size="small" onClick={props.assignNewQuoteIndex}>
          Next Quote
        </Button>
      </CardActions>
    </CardContent>
  </Card>
);

export default QuoteMachine;
