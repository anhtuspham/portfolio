import Board from "../../components/Board";
import Header from "../../components/Header";
import List from "../../components/List";

function Skill() {
  return (
    <>
      <section id="skill">
        {/* Header */}
        <Header title="Skill" />

        <div className="flex w-3/5 mx-auto gap-5 mb-10">
          <Board>
            <div>
              <List title="Programming languages">
                <p>HTML, CSS</p>
                <p>Javascript</p>
              </List>
              <List title="Framework & platforms">
                <p>ReactJS, NodeJS</p>
                <p>RestfulAPI/JSON</p>
                <p>Firebase</p>
              </List>
            </div>
          </Board>
          <Board>
            <div>
              <List title="Database">
                <p>MongoDB</p>
              </List>
              <List title="Version control">
                <p>Github</p>
              </List>
              <List title="IDE">
                <p>Visual Studio Code</p>
                <p>Webstorm</p>
              </List>
            </div>
          </Board>
          <Board>
            <List title="Foreign language">
              <p>Can read, understand English</p>
            </List>
            <List title="Knowledge">
              <p>
                Good understanding software design, database design,
                RestfulAPI,...
              </p>
              <p>Good time management, presentation and teamwork skills ...</p>
            </List>
          </Board>
        </div>
      </section>
    </>
  );
}

export default Skill;
