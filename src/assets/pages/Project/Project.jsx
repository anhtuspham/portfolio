import Board from "../../components/Board";
import Header from "../../components/Header";
import ListProject from "../../components/ListProject";
import cinematic from "../../images/cinematic.png";
import boilcms from "../../images/boilcms.png";

export default function Project() {
  return (
    <>
      <section id="project" className="pb-10">
        <Header title="Project" />
        <div className="flex w-3/5 mx-auto gap-5 mb-10 justify-center ">
          <Board>
            <ListProject
              title="Web cinematic"
              linkGithub="https://github.com/anhtuspham/web-cinema"
              linkDemo="https://cinematic-webpage.netlify.app/"
              imgProject={cinematic}
            >
              <p>
                A comprehensive movie discovery platform built with{" "}
                <span className="font-semibold">
                  HTML, CSS, Vanila Javascript
                </span>
              </p>
              <p>
                Movie Detail: View Detailed information provided for each movie
                including synopsis, cast, ratings, and reviews.
              </p>
              <p>
                Search Functionality: Find movies by movie name keyword. Instant
                search results help quickly locate desired movies
              </p>
              <p>
                Login/Sign-up form: Quickly transition between states with
                smooth animation.
              </p>
              <p>Responsive: Scales up depending on device width.</p>
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
                A fullstack ecommerce web application plaform built with{" "}
                <span className="font-semibold">
                  HTML, CSS, Vanila JS, Nodejs and MongoDB
                </span>
              </p>
              <p>
                The ecommerce web application has two seperate interfaces: user
                interface and admin interface
              </p>
              <p>Display product list</p>
              <p>Using Nodemailer to help user contact with admin</p>
              <p>
                Conain full feature 1 ecommerce web: view products, select
                product quantity , choose product variations, purchase product,
                and track order status
              </p>
              <p>User can reset, change their password through mail</p>
              <p>
                Admins can manage all features of the project including images,
                products, text, users, revenue,...
              </p>
            </ListProject>
          </Board>
        </div>
      </section>
    </>
  );
}
