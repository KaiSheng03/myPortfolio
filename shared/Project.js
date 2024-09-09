const Project = [
    {
        id: 1,
        title: "Finance Manager",
        desc: "An web application that allow users to put in their daily expenses which calculates them their budget remaining.",
        team: "Solo",
        role: ["Developer", "Designer"],
        tech: ["PHP", "MySQL"],
    },
    {
        id: 2,
        title: "PlayZone",
        desc: "An sports application which opens the users with the capability of discovering sports games around.",
        team: "Solo",
        role: ["Developer", "Designer"],
        tech: ["NextJS", "Firebase"],
        github: "https://github.com/KaiSheng03/PlayZone"
    },
    {
        id: 3,
        title: "Maze Solving Robot",
        desc: "A mini robot equipped with depth search algorithm that is capable of solving a maze automatically",
        team: "A team of 4",
        role: ["Programmer"],
        tech: ["Arduino", "Electronics"]
    },
    {
        id: 4,
        title: "Spying Robot",
        desc: "Designed a robot equipped with ESP32 Camera Module that uses bluetooth connection for controller pairing and camera configuration.",
        team: "A team of 3",
        role: ["Programmer"],
        tech: ["Arduino", "ESP32 Cam", "Electronics"]
    },
    {
        id: 4,
        title: "Seedling Collection and Planting Robot",
        desc: "A robot for the Robocon 2024, designed and programmed to collect and plant seedlings.",
        team: "A team of 50",
        role: ["Lead Programmer"],
        tech: ["Arduino", "Electronics"]
    },
    {
        id: 5,
        title: "Toxicity Classification Model",
        desc: "A deep neural network model trained with 160k of datas to classify comments into different categories of toxicity.",
        team: "Solo",
        role: ["Developer"],
        tech: ["Jupyter", "Python", "Tensorflow"],
        github: "https://github.com/KaiSheng03/PlayZone"
    }
]

const Experience = [
    {
        id: 1,
        title: "UM - Crest Hackathon 2024",
        challenge: "Lack of community engagement between drone community",
        desc: "Aerospace challenge, built a business proposal with the key strenght of centralizing the informations of drone-related events",
        team: "A team of 4",
        role: ["Project Lead"],
        tech: ["React-Native", "Firebase"],
    },
    {
        id: 2,
        title: "UROCK 2024",
        challenge: "Rope Climbing Robot Challenge",
        desc: "Built a robot to climb slanted ropes. Had a honor to be placed as the first runner up of the challenge.",
        team: "A team of 3",
        role: ["Programmer"],
        tech: ["Arduino"],
    },
    
]

const Skill = [
    {
        category: "Programming Language",
        skill: [
            {
                name: "C++",
                proficiency: 4,
                year: 2
            },
            {
                name: "Python",
                proficiency: 3,
                year: 2
            }
        ]
    },
    {
        category: "Web",
        skill: [
            {
                name: "HTML",
                proficiency: 5,
                year: 2
            },
            {
                name: "CSS",
                proficiency: 3,
                year: 2
            },
            {
                name: "JavaScript",
                proficiency: 3,
                year: 2
            },
            {
                name: "React",
                proficiency: 3,
                year: 1
            },
            {
                name: "NextJS",
                proficiency: 3,
                year: 1
            },
            {
                name: "Python Flask",
                proficiency: 2,
                year: 1
            },
            {
                name: "REST API",
                proficiency: 2,
                year: 1
            },
            {
                name: "PHP",
                proficiency: 3,
                year: 1
            }
        ]
    },
    {
        category: "Database",
        skill: [
            {
                name: "SQL",
                proficiency: 3,
                year: 1
            },
            {
                name: "Firebase",
                proficiency: 3,
                year: 1
            },
            {
                name: "MongoDB",
                proficiency: 2,
                year: 1
            },
        ]
    },
    {
        category: "Robotics",
        skill: [
            {
                name: "Arduino",
                proficiency: "4",
                year: 2
            },
            {
                name: "ESP32",
                proficiency: "2",
                year: 1
            },
            {
                name: "Electronics",
                proficiency: "4",
                year: 2
            },
            {
                name: "IoT",
                proficiency: "3",
                year: 2
            }
        ]
    },
    {
        category: "AI/Machine Learning/Deep Learning",
        skill: ["Tensorflow"]   
    }
]

export default{
    Project, Experience, Skill
}