import React from "react";
import Button from "@material-ui/core/Button";
import Typeography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
  /* wrapper is react fragment*/

  <Card>
    <CardContent>
      <Typeography id="text">
        {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
      </Typeography>

      <CardActions>
        <Button id="new-quote" size="small" onClick={assignNewQuoteIndex}>
          Next Quote
        </Button>

        <IconButton
          id="tweet-quote"
          target="_blank"
          href={encodeURI(
            `https://twitter.com/intent/tweet?text=${
              selectedQuote.quote + " - " + selectedQuote.author
            }&hashtags=randomquotegenerator`
          )}
        >
          <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
        </IconButton>
      </CardActions>
    </CardContent>
  </Card>
);

export default QuoteMachine;
