import Header from "../../components/Header";
import List from "../../components/List";
import SectionGrid from "../../components/SectionGrid";

function Skill() {
  return (
    <>
      <section id="skill" className="pb-10 bg-primary">
        {/* Header */}
        <Header title="Skill" />

        <SectionGrid>
          <div>
            <List title="Programming languages">
              <p>HTML, CSS</p>
              <p>Javascript</p>
              <p>Typescript</p>
            </List>
            <List title="Framework & platforms">
              <p>ReactJS, NodeJS</p>
              <p>Firebase</p>
              <p>Bootstrap</p>
              <p>TailwindCSS</p>
            </List>
          </div>
          <div>
            <List title="Database">
              <p>MongoDB</p>
              <p>MySQL</p>
            </List>
            <List title="Version control">
              <p>Github</p>
            </List>
            <List title="IDE">
              <p>Visual Studio Code</p>
              <p>Webstorm</p>
            </List>
          </div>
          <div>
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
          </div>
        </SectionGrid>
      </section>
    </>
  );
}

export default Skill;
