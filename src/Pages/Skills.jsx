import SkillCard from "../Components/SkillCard";

const Skills = () => {
    return (
        <div className="pt-24 pb-16" id="skills">
            <h2 className="font-bold text-3xl">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-x-12 gap-y-8">
                <SkillCard
                    skill="Mobile App Development"
                    className="w-10"
                    imgSrc="./flutter.png"
                    detail="Make Android App using Flutter. I have some experience building android apps integrated with firebase as a database."
                ></SkillCard>
                <SkillCard
                    skill="Web Development"
                    className="w-16"
                    imgSrc="./javascript.png"
                    detail="Develop website and a web app. There are several technologies that I used, such as TailwindCSS, BootstrapCSS, VueJs, ReactJs, and ExpressJS"
                ></SkillCard>
                <SkillCard
                    skill="UI Design"
                    className="w-10"
                    imgSrc="./figma.svg"
                    detail="Design an Apps Interface. When I'm working on an individual project, I quite often design the app UI by myself using Figma"
                ></SkillCard>
            </div>
        </div>
    );
};

export default Skills;
