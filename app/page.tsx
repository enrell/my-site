import Header from "@/app/(components)/header/header";
import Image from "next/image";
import ProfileImage from "@/app/public/perfil-photo.png";
import LinkedinIcon from "@/app/public/social/linkedin.png";
import GithubIcon from "@/app/public/social/github-mark.svg";
import DockerIcon from "@/app/public/technologies/docker.png";
import GitIcon from "@/app/public/technologies/git.png";
import GoIcon from "@/app/public/technologies/go.svg";
import JavaIcon from "@/app/public/technologies/java.png";
import JavascriptIcon from "@/app/public/technologies/javascript.png";
import MysqlIcon from "@/app/public/technologies/mysql.png";
import NodejsIcon from "@/app/public/technologies/nodejs_plain.png";
import PostgresqlIcon from "@/app/public/technologies/postgresql.png";
import PythonIcon from "@/app/public/technologies/python.png";

const techIcons = {
  Docker: DockerIcon,
  Git: GitIcon,
  Go: GoIcon,
  Java: JavaIcon,
  Javascript: JavascriptIcon,
  MySQL: MysqlIcon,
  NodeJs: NodejsIcon,
  PostgreSQL: PostgresqlIcon,
  Python: PythonIcon,
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full justify-center items-center mt-10">
        <section id="about" className="flex flex-col w-5/6 justify-center items-center text-center">
          <div className="mb-10">
            <Image
              width={120}
              height={120}
              src={ProfileImage}
              alt="Foto de perfil"
              className="rounded-full"
            />
          </div>
          <h1 className="font-extrabold text-4xl">
            Olá, me chamo Ênrell! 👋👋
          </h1>
          <p className="font-medium mt-8 text-lg">
            Sou desenvolvedor de software full-stack, focado em
            evoluir constantemente para me tornar um profissional de
            excelência.
          </p>
        </section>

        <section id="social" className="mt-16">
          <h2 className="font-bold text-2xl mb-8">
            Confira minhas redes
          </h2>
          <div className="flex flex-row space-x-10 justify-center items-center">
            {[
              { icon: LinkedinIcon, name: "LinkedIn" },
              { icon: GithubIcon, name: "Github" },
            ].map((social, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center items-center"
              >
                <Image
                  src={social.icon}
                  width={50}
                  height={50}
                  alt={`Ícone ${social.name}`}
                />
                <p className="font-medium mt-2">
                  {social.name}
                </p>
              </div>
            ))}
            <div className="flex flex-col justify-center items-center">
              <img
                width={60}
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt="Ícone Dev Community"
              />
              <div className="mt-1 text-center">
                <p className="font-medium">Dev</p>
                <p className="font-medium">Community</p>
              </div>
            </div>
          </div>
        </section>

        <section id="technologies" className="mt-14">
          <h2 className="font-bold text-2xl mb-10">
            Meu stack de tecnologias
          </h2>
          <div className="grid grid-cols-3 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Object.entries(techIcons).map(
              ([techName, techIcon], idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-center items-center"
                >
                  <Image
                    src={techIcon}
                    width={50}
                    height={50}
                    alt={`Icon ${techName}`}
                  />
                  <p className="font-medium mt-2">
                    {techName}
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        <section id="projects" className="mt-14 mb-20">
          <h2 className="font-bold text-2xl mb-6">Projetos</h2>
          <p>Produzindo...</p>
        </section>
      </div>
    </>
  );
}