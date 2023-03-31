import "./styles.css";
import Poll from "./components/Poll/poll";
import * as pollJSON from "./fruit.json";

export default function App() {
  return (
    <div className="App">
      <h1>IGN Code Foo</h1>
      <Poll
        title="What is the best fruit?"
        options={
          // Poll Options
          [
            {
              key: 1,
              title: "Apples",
              votes: pollJSON.poll.options.apples.votes
            },
            {
              key: 2,
              title: "Oranges",
              votes: pollJSON.poll.options.oranges.votes
            },
            {
              key: 3,
              title: "Bananas",
              votes: pollJSON.poll.options.bananas.votes
            },
            {
              key: 4,
              title: "Strawberries",
              votes: pollJSON.poll.options.strawberries.votes
            },
            {
              key: 5,
              title: "Mangos",
              votes: pollJSON.poll.options.mangos.votes
            },
            {
              key: 6,
              title: "Tomatos",
              votes: pollJSON.poll.options.tomatoes.votes
            }
          ]
        }
      ></Poll>
    </div>
  );
}
