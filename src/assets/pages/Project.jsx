import Board from "../components/Board";
import Header from "../components/Header";
import List from "../components/List";
import ListProject from "../components/ListProject";

export default function Project() {
  return (
    <>
      <Header title="Project" />
      <div className="flex w-3/5 mx-auto gap-5 mb-10">
        <Board>
          <ListProject
            title="Web cinematic"
            linkGithub="https://github.com/anhtuspham/web-cinema"
            linkDemo="https://cinematic-webpage.netlify.app/"
          >
            <p>
              A comprehensive movie discovery platform built with React.js,
              Tailwind CSS, and Node.js
            </p>
            <p>
              Movie Listings: View extensive lists of movies categorized by
              genres, popularity, and release date. Detailed information
              provided for each movie including synopsis, cast, ratings, and
              reviews.
            </p>
            <p>
              Search Functionality: Powerful search tool to find movies by
              title, actor, director, or keywords. Instant search results to
              quickly locate desired movies
            </p>
          </ListProject>
        </Board>
        <Board>
          <List>Boilcms</List>
        </Board>
      </div>
    </>
  );
}
