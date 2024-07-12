import Board from "../components/Board";
import Header from "../components/Header";
import ListProject from "../components/ListProject";
import cinematic from "../images/cinematic.png"
import boilcms from "../images/boilcms.png"

export default function Project() {
  return (
    <>
      <Header title="Project" />
      <div className="flex w-3/5 mx-auto gap-5 mb-10 justify-center">
        <Board>
          <ListProject
            title="Web cinematic"
            linkGithub="https://github.com/anhtuspham/web-cinema"
            linkDemo="https://cinematic-webpage.netlify.app/"
            imgProject={cinematic}
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
          <ListProject
            title="Boilcms"
            linkGithub="https://github.com/anhtuspham/boilcms-ec"
            linkDemo="https://boicms-ec.onrender.com/"
            imgProject={boilcms}
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
      </div>
    </>
  );
}
