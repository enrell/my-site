"use client";
// import { Hamburger } from "@/app/(components)/hamburger-button/hamburger-button";
import { Menu } from "@/app/(components)/menu/menu";

export default function Header() {
	const logo = "<enrell>";
	return (
		<>
			<header className="flex w-full bg-black h-20 text-white font-sans font-extrabold items-center justify-center top-0 left-0 sticky">
				<nav className="flex items-center w-full justify-center">
					<h1 className="flex text-6xl" id="logo">
						{logo}
					</h1>
					<ul className="flex cursor-pointer">
						<li className="hidden">Skills</li>
						<li className="hidden">Experiência</li>
						<li className="hidden">Certificados</li>
						<li className="hidden">Projetos</li>
						<li className="hidden">Blog</li>
					</ul>
					<div id="btn">
						<Menu />
					</div>
				</nav>
			</header>

			<style jsx>
				{`
					@import url("https://fonts.googleapis.com/css2?family=Lavishly+Yours&display=swap");

					* {
						margin: 0;
						padding: 0;
					}

					#logo {
						font-family: "Lavishly Yours";
						font-weight: 400;
					}

					#btn {
						margin-left: 25%;
						margin-right: -30%;
					}
				`}
			</style>
		</>
	);
}
