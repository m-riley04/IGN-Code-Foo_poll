import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import PollOption from "./polloption";
import PollButton from "./pollbutton";
import PollResult from "./pollresult";

// Properties for the poll option button
interface Properties {
  title: string;
  options: any[];
}

/**
 * @param title
 * @param options
 */
const Poll: React.FC<Properties> = ({ title, options }) => {
  // Variables
  const [isResults, setIsResults] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  let selectedOption = null;

  /** Show the results of the poll */
  function showResults() {
    console.log("Showing results:");

    setIsResults((prevResults) => !prevResults);
  }

  /** Create poll options in list form */
  function createOptions() {
    function setSelected(option) {
      console.log(`Clicked option #${option.key}.`);
      selectedOption = option.key;
      setIsSelected((prevSelected) => true);
    }

    const children = options.map((option) => (
      <Grid>
        <PollOption
          key={option.key}
          title={option.title}
          votes={option.votes}
          onClick={() => setSelected(option)}
          buttonStyle="option"
          titleStyle="optionTitle"
        ></PollOption>
      </Grid>
    ));

    return children;
  }

  /** Create results */
  function createResults() {
    const children = options.map((option) => (
      <Grid>
        <PollResult
          key={option.key}
          title={option.title}
          votes={option.votes}
          buttonStyle="result"
          titleStyle="resultTitle"
          votesStyle="resultVotes"
        ></PollResult>
      </Grid>
    ));

    return children;
  }

  /** Returns the total votes across every option */
  function getVoteTotal() {
    let total = 0;

    for (let i = 0; i < options.length; i += 1) {
      total += options[i].votes;
    }

    return total + 1;
  }

  /**  Create the main poll box div and populate with options/results/buttons */
  function buildPollBox() {
    const question = <h2 className="pollTitle">{title}</h2>;

    const optionButtons = createOptions();
    const resultsHeader = <h1 className="resultsHeader">Results:</h1>;
    const resultsVotes = (
      <p className="resultsTotalVotes">Total Votes: {getVoteTotal()}</p>
    );
    const results = createResults();
    const resultsButton = (
      <PollButton
        title="Show Results"
        onClick={() => {
          showResults();
        }}
        buttonStyle="button"
        titleStyle="buttonTitle"
      ></PollButton>
    );
    return (
      <div className="poll">
        <div className="pollHeader">
          {!isResults && question}
          {isResults && resultsHeader}
        </div>

        <div className="pollBody">
          {!isResults && optionButtons}
          {isResults && results}
        </div>

        <div className="pollFooter">
          {isResults && resultsVotes}
          {isSelected && !isResults && resultsButton}
          {isResults && (
            <em className="resultsMessage">Thank you for voting!</em>
          )}
        </div>
      </div>
    );
  }

  // Return all
  return buildPollBox();
};

export default Poll;
