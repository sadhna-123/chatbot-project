
//============================================================
// Information based on the navbar items
const infoMessages = {
    "about": "Mahakal Institute of Technology (MIT) is a private engineering college located in Ujjain, Madhya Pradesh. It offers undergraduate and postgraduate programs in various engineering disciplines. Established in 2001, it is affiliated with Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal, and approved by AICTE.",
    "history": "MIT Ujjain was established in the year 2001 by the Mahakal Education Society, with the vision of providing quality education in the field of engineering and technology. The college offers programs in various engineering disciplines and works closely with industry leaders for research and development.",
    "vision": "The vision of MIT Ujjain is to foster innovation and research in engineering and technology while providing students with a comprehensive education that aligns with industry standards. The institute aims to produce skilled engineers who can contribute significantly to the development of society.",
    "courses": "MIT Ujjain offers B.Tech programs in the following branches: Computer Science, Electronics & Communication, Mechanical, Civil, Electrical, and Information Technology. The college also offers M.Tech programs in selected engineering disciplines and an MBA program.",
    "faculty": "MIT Ujjain has a highly qualified faculty consisting of experienced and passionate professors who hold degrees from reputed institutions. Faculty members actively participate in research, workshops, and conferences to stay updated on industry trends and technological advancements.",
    "research": "MIT Ujjain emphasizes research in fields such as robotics, automation, artificial intelligence, and renewable energy. The college has well-equipped research labs and encourages students and faculty to collaborate on projects that have real-world applications.",
    "admission": "Admission to MIT Ujjain is based on the scores of JEE Main for B.Tech courses. For M.Tech, the GATE score is considered, and for the MBA program, candidates must have valid CMAT scores. MIT Ujjain also offers direct admission for students based on merit. The online application process is simple and can be done via the official website.",
    "fee": "The fee structure for various programs at MIT Ujjain is designed to be affordable for students from all backgrounds. The fees vary depending on the course. For detailed information on the fee structure, students can refer to the official MIT Ujjain website or contact the admissions office.",
    "scholarship": "MIT Ujjain offers several scholarship schemes to help students with financial constraints. These scholarships are awarded based on academic performance, entrance exam results, and family income. The college also offers merit-based scholarships for outstanding students.",
    "placement": "MIT Ujjain has a dedicated placement cell that helps students secure placements in top companies. The placement record is impressive, with students being placed in organizations such as TCS, Wipro, Cognizant, Infosys, and many more. The placement cell organizes workshops, mock interviews, and pre-placement training.",
    "recruiters": "Some of the major recruiters visiting MIT Ujjain for placements include TCS, Wipro, Infosys, Cognizant, Tech Mahindra, HCL, and many more. The college works hard to bring top companies to its campus and ensures that students are prepared to meet industry standards.",
    "facilities": "MIT Ujjain offers a wide range of facilities to its students, including state-of-the-art classrooms, well-equipped laboratories, a central library with a vast collection of books and journals, Wi-Fi-enabled campus, hostels, and a cafeteria serving hygienic food. The campus is equipped with the latest technology and offers a conducive environment for learning.",
    "sports": "MIT Ujjain provides a variety of sports facilities for its students. These include outdoor sports like cricket, football, and volleyball, as well as indoor games like table tennis, chess, and badminton. The college regularly hosts sports events and encourages students to participate in them.",
    "events": "MIT Ujjain organizes several cultural, technical, and sports events throughout the year. The college hosts fests like ‘Techno Mitra’ for technical innovations and ‘Sanskriti’ for cultural performances. These events help students develop leadership skills and creativity.",
    "contact": "For more information, you can contact MIT Ujjain at: Phone: +91 734 251 3602, Email: info@mitujjain.org, Address: Mahakal Institute of Technology, Ujjain - 456010, Madhya Pradesh. Visit the official website for more details.",
    "cutoff": "The cutoff for MIT Ujjain varies every year based on the JEE Main scores. You can check the detailed cutoff for your preferred course on the official website or contact the admissions office for more information.",
    "admissionProcess": "The admission process for B.Tech courses at MIT Ujjain is based on the JEE Main score. For M.Tech, the GATE score is required. The MBA admission is based on the CMAT score. The college also accepts direct admission for students who meet specific criteria.",
    "infrastructure": "MIT Ujjain boasts excellent infrastructure with modern classrooms, well-equipped labs, seminar halls, a central library, sports facilities, and student hostels. The campus is Wi-Fi-enabled, and students have access to the latest technology and resources for learning.",
    "studentLife": "Student life at MIT Ujjain is vibrant, with opportunities for participation in various cultural, sports, and technical events. Students engage in extracurricular activities, clubs, and student organizations to enhance their overall college experience.",
    "library": "MIT Ujjain has a well-stocked central library with a vast collection of textbooks, reference books, journals, and digital resources. The library is open to students and faculty for academic research and study.",
    "hostel": "MIT Ujjain offers hostel facilities for both male and female students. The hostels are equipped with all modern amenities such as 24/7 water supply, internet access, and round-the-clock security.",
    "canteen": "The college has a spacious and hygienic cafeteria that serves a variety of healthy and nutritious food items to students and staff. The canteen is open throughout the day and offers both vegetarian and non-vegetarian options.",
    "workshops": "MIT Ujjain regularly organizes workshops and seminars on various technical and non-technical topics. These workshops are designed to help students improve their skills and gain practical knowledge that is useful in their professional careers.",
    "internships": "MIT Ujjain encourages students to take part in internships with reputed companies. The placement cell provides assistance in securing internships for students, helping them gain industry exposure and enhance their practical skills.",
    "technicalFest": "The college hosts an annual technical fest called 'Techno Mitra', which brings together students, faculty, and industry experts for workshops, presentations, and competitions related to technology and innovation.",
    "culturalFest": "MIT Ujjain organizes a cultural fest called 'Sanskriti', which celebrates the diversity of Indian culture. Students participate in dance, music, drama, and other cultural activities during this vibrant event.",
    "entrepreneurship": "MIT Ujjain encourages students to develop an entrepreneurial mindset. The college offers incubation support, mentoring, and resources for students who wish to start their own ventures. The Entrepreneurship Development Cell (EDC) helps students turn their ideas into successful businesses.",
    "placementsStatistics": "MIT Ujjain has an excellent placement record, with many students getting placed in top companies like TCS, Infosys, Wipro, and Cognizant. The average salary package for students is competitive, and the college has a high placement percentage.",
    "achievements": "MIT Ujjain has received numerous awards and accolades for academic excellence, innovation in research, and overall development. The college is consistently ranked among the top engineering colleges in the region.",
    "researchCenters": "MIT Ujjain has several research centers focused on emerging technologies such as artificial intelligence, robotics, renewable energy, and data science. These centers encourage students and faculty to engage in cutting-edge research and development.",
    "alumni": "MIT Ujjain has a strong alumni network. The alumni association organizes annual events and meets to help current students connect with graduates who have succeeded in their respective fields.",
    "globalExposure": "MIT Ujjain offers opportunities for global exposure through collaborations with international universities and organizations. Students have the chance to participate in exchange programs, research projects, and internships abroad.",
    "environment": "MIT Ujjain is committed to environmental sustainability. The campus is equipped with green technologies such as solar panels, rainwater harvesting systems, and waste management programs.",
    "socialResponsibility": "MIT Ujjain emphasizes social responsibility and encourages students to engage in community service. The college regularly organizes social outreach programs, health camps, and environmental awareness initiatives."
    
};

// Function to send user input and get a response
function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput) {
        // Display user message
        displayMessage(userInput, "user");

        // Get bot response
        const botResponse = getBotResponse(userInput);

        // Display bot response
        setTimeout(() => {
            displayMessage(botResponse, "bot");
        }, 1000);
    }

    // Clear user input
    document.getElementById("user-input").value = '';
}

// Function to display messages in the chatbox
function displayMessage(message, sender) {
    const chatboxBody = document.getElementById("chatbox-body");
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender + "-message");
    messageElement.innerHTML = `<p>${message}</p>`;
    chatboxBody.appendChild(messageElement);
    chatboxBody.scrollTop = chatboxBody.scrollHeight; // Scroll to the bottom
}

// Function to handle "Enter" key press in the input field
function checkEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Function to process user query and return a response
function getBotResponse(query) {
    query = query.toLowerCase();

    // Handle greetings like "Hello", "Hi", "Hey"
    if (query.includes("hello") || query.includes("hi") || query.includes("hey")|| query.includes("hy")) {
        return "Hello! How can I assist you today?";
    }

    // Match user input with predefined responses
    if (query.includes("about") || query.includes("information")) {
        return infoMessages["about"];
    } else if (query.includes("history") || query.includes("foundation")) {
        return infoMessages["history"];
    } else if (query.includes("vision") || query.includes("mission")) {
        return infoMessages["vision"];
    } else if (query.includes("course") || query.includes("program")) {
        return infoMessages["courses"];
    } else if (query.includes("faculty") || query.includes("professors")) {
        return infoMessages["faculty"];
    } else if (query.includes("research") || query.includes("projects")) {
        return infoMessages["research"];
    } else if (query.includes("admission") || query.includes("apply")) {
        return infoMessages["admission"];
    } else if (query.includes("fee") || query.includes("cost")) {
        return infoMessages["fee"];
    } else if (query.includes("scholarship") || query.includes("financial aid")) {
        return infoMessages["scholarship"];
    } else if (query.includes("placement") || query.includes("recruiters")) {
        return infoMessages["placement"];
    } else if (query.includes("recruiters") || query.includes("companies")) {
        return infoMessages["recruiters"];
    } else if (query.includes("facility") || query.includes("amenities")) {
        return infoMessages["facilities"];
    } else if (query.includes("sports") || query.includes("games")) {
        return infoMessages["sports"];
    } else if (query.includes("event") || query.includes("fest")) {
        return infoMessages["events"];
    } else if (query.includes("contact") || query.includes("address")) {
        return infoMessages["contact"];
    } else if (query.includes("cutoff") || query.includes("rank")) {
        return infoMessages["cutoff"];
    } else if (query.includes("admission process") || query.includes("how to apply")) {
        return infoMessages["admissionProcess"];
    } else if (query.includes("infrastructure") || query.includes("campus")) {
        return infoMessages["infrastructure"];
    } else if (query.includes("student life") || query.includes("college life")) {
        return infoMessages["studentLife"];
    } else if (query.includes("library") || query.includes("books")) {
        return infoMessages["library"];
    } else if (query.includes("hostel") || query.includes("accommodation")) {
        return infoMessages["hostel"];
    } else if (query.includes("canteen") || query.includes("food")) {
        return infoMessages["canteen"];
    } else if (query.includes("workshop") || query.includes("seminar")) {
        return infoMessages["workshops"];
    } else if (query.includes("internship") || query.includes("industry experience")) {
        return infoMessages["internships"];
    } else if (query.includes("technical fest") || query.includes("techno mitra")) {
        return infoMessages["technicalFest"];
    } else if (query.includes("cultural fest") || query.includes("sanskriti")) {
        return infoMessages["culturalFest"];
    } else if (query.includes("entrepreneurship") || query.includes("business ideas")) {
        return infoMessages["entrepreneurship"];
    } else if (query.includes("placement statistics") || query.includes("placement record")) {
        return infoMessages["placementsStatistics"];
    } else if (query.includes("achievements") || query.includes("awards")) {
        return infoMessages["achievements"];
    } else if (query.includes("research centers") || query.includes("labs")) {
        return infoMessages["researchCenters"];
    } else if (query.includes("alumni") || query.includes("alumni network")) {
        return infoMessages["alumni"];
    } else if (query.includes("global exposure") || query.includes("international programs")) {
        return infoMessages["globalExposure"];
    } else if (query.includes("environment") || query.includes("sustainability")) {
        return infoMessages["environment"];
    } else if (query.includes("social responsibility") || query.includes("community service")) {
        return infoMessages["socialResponsibility"];
    } else {
        // Provide MIT website link for more details
        return "For more detailed information, please visit the official MIT Ujjain website: <a href='https://mitujjain.ac.in' target='_blank'>https://mitujjain.ac.in</a>";
    }
}
