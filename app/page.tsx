import Image from "next/image";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ui/ScrollToTop";
//import Footer from "../components/Footer";

export default function Home() {
    return (
        <main className="bg-black-100 flex flex-col overflow-hidden mx-auto">
            <div className=" w-full">
                <FloatingNav navItems={navItems} />
                <Hero />
                
                <Grid />
                <RecentProjects />
                <Experience />
                <Contact />
                <ScrollToTop />
            </div>
        </main>
    );
}
