import Board from "../../components/Board";
import Header from "../../components/Header";
import ListProject from "../../components/ListProject";
import cinematic from "../../images/cinematic.png";
import boilcms from "../../images/boilcms.png";

export default function Project() {
  return (
    <>
      <section id="project" className="pb-10 bg-primary">
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
                <span className="font-bold">Project Description</span>: A movie
                website help user to find a favorite movie, review movie
              </p>
              <p>
                <span className="font-bold">Function</span>: Show movie details,
                search movies by keyword, responsive design that scales based on
                device width, log-in/sign-up form with smooth animation
                transitions between states.
              </p>
              <p>
                <span className="font-bold">Technologies</span>: HTML, CSS,
                Javascript to design template, API: Fetch movie detail from OMDb
                API
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
                <span className="font-bold">Project Description</span>: Built a
                framework to quickly create e-commerce or blog platforms,
                inspired by WordPress.
              </p>
              <p>
                <span className="font-bold">Team size</span>: 2
              </p>
              <p>
                <span className="font-bold">Responsibilities</span>:
                Collaborated with my team to plan and develop the project,
                customized components for the admin to easily create new
                products, orders, and users, built a contact page to connect
                guests to the admin, implemented JWT authentication for users.
              </p>
              <p>
                <span className="font-bold">Functionality</span>: Log-in,
                sign-up with email, view product details, purchase products,
                contact the admin. Admin functions: revenue chart, manage all
                details of the website (images, products, accounts, pages,
                orders), and communicate with users.
              </p>
              <p>
                <span className="font-bold">Technologies</span>: Front-end:
                HTML/CSS, Vanilla Javascript, Webpack. Back-end: Nodejs,
                Database: MongoDB
              </p>
            </ListProject>
          </Board>
        </div>
      </section>
    </>
  );
}
