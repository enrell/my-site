import "./header.css";
import SegmentedControl from "../theme-change-button/theme-change-button";

export default function Header() {
	const logo = "<enrell>"
	return (
		<header className="flex bg-black w-full h-20 text-white text-2xl font-sans font-extrabold items-center justify-center aspect-auto">
			<nav className="flex">
				<h1 id="logo" className="text-6xl">{logo}</h1>
				<ul className="flex space-x-9 cursor-pointer">
					<li>Skills</li>
					<li>Experiência</li>
					<li>Certificados</li>
					<li>Projetos</li>
					<li>Blog</li>
					<li></li>
				</ul>
				<SegmentedControl/>
			</nav>
		</header>
	);
}
