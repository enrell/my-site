"use client";
// import { Hamburger } from "@/app/(components)/hamburger-button/hamburger-button";
import { Menu } from "@/app/(components)/menu/menu";

export default function Header() {
    const logo = "<enrell>";
    return (
        <>
            <header className="flex w-full bg-black h-20 text-white font-sans font-extrabold items-center justify-evenly top-0 left-0 sticky md:flex md:w-full md:justify-evenly z-50">
				{/* Div to center the mobile header */}
				<div className="w-9 md:hidden"></div>
                <div className="flex justify-center">
                    <h1 className="flex text-6xl" id="logo">
                        {logo}
                    </h1>
                </div>
                <nav className="flex items-center justify-center md:justify-center">
                    <ul className="cursor-pointer hidden md:flex md:space-x-6">
                        <li>Skills</li>
                        <li>Experience</li>
                        <li>Certificates</li>
                        <li>Projects</li>
                        <li>Blog</li>
                    </ul>
                    <div>
                        <div className="block md:hidden">
                            <Menu />
                        </div>
                    </div>
                </nav>
				{/* Div to center the header in desktops */}
				<div className="hidden md:block md:w-10"></div>
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

                `}
            </style>
        </>
    );
}
