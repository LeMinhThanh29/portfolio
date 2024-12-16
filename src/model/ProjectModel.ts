export interface ProjectModel {
  project_id: string;
  project_company: string;
  project_name: string;
  project_role: string;
  project_status: ProjectStatus;
  project_tech: ProjectTech[];
  project_start_date: Date;
  project_end_date: Date;
  project_description: string;
  project_quanlity_member: number;
  project_link: string;
  project_progress: number;
}

interface ProjectStatus {
  status_id: number;
  status: string;
}

interface ProjectTech {
  tech_id: number;
  tech: string;
}

export const projectStatusData: ProjectStatus[] = [
  { status_id: 1, status: "In Progress" },
  { status_id: 2, status: "Completed" },
  { status_id: 3, status: "Paused" },
  // Thêm các trạng thái khác nếu có
];

export const projectTechData: ProjectTech[] = [
  { tech_id: 1, tech: "java" },
  { tech_id: 2, tech: "spring-boot" },
  { tech_id: 3, tech: "sql" },
  { tech_id: 4, tech: "react" },
  { tech_id: 5, tech: "css" },
  { tech_id: 6, tech: "node.js" },
  { tech_id: 7, tech: "vue" },
  { tech_id: 8, tech: "javascript" },
  { tech_id: 9, tech: "html" },
  { tech_id: 10, tech: "python" },
  { tech_id: 11, tech: "php" },
  { tech_id: 12, tech: "csharp" },
  { tech_id: 13, tech: "go" },
  { tech_id: 14, tech: "ruby" },
  { tech_id: 15, tech: "swift" },
  { tech_id: 16, tech: "kotlin" },
  { tech_id: 17, tech: "oracle" },
  { tech_id: 18, tech: "doma" },
  { tech_id: 19, tech: "git" },
  { tech_id: 20, tech: "scss" },
  { tech_id: 21, tech: "redux" },
];

export const projectData: ProjectModel[] = [
  {
    project_id: "p1",
    project_company: "Mobifone",
    project_name: "CoreImport System",
    project_role: "Intern Frontend Developer",
    project_status: {
      status_id: 2,
      status: "Completed",
    },
    project_tech: [
      { tech_id: 4, tech: "React" },
      { tech_id: 5, tech: "CSS" },
      { tech_id: 7, tech: "Vue" },
      { tech_id: 8, tech: "JS" },
      { tech_id: 9, tech: "HTML" },
      { tech_id: 19, tech: "git" },
      { tech_id: 20, tech: "scss" },
      { tech_id: 21, tech: "redux" },
    ],
    project_start_date: new Date("2022-09-02"),
    project_end_date: new Date("2022-11-21"),
    project_description:
      "CoreImport is an internal data integration tool for Mobifone Region 9, designed to import and manage user data and rewards. It allows customizable field mappings and data types when exporting to Excel, ensuring accuracy and flexibility. The tool streamlines the import process and enhances integration with other systems. My role included designing and building interfaces as per client requirements, creating screens using Reactjs, and integrating new APIs. Deliverables: source code via Git.",
    project_quanlity_member: 2,
    project_link: "https://github.com/LeMinhThanh29/CoreImport",
    project_progress: 100, // Đã hoàn thành
  },
  {
    project_id: "p2",
    project_company: "VinaMid",
    project_name: "VieclamZalo",
    project_role: "Frontend Developer",
    project_status: {
      status_id: 2,
      status: "Completed",
    },
    project_tech: [
      { tech_id: 5, tech: "CSS" },
      { tech_id: 7, tech: "Vue" },
      { tech_id: 8, tech: "JS" },
      { tech_id: 9, tech: "HTML" },
      { tech_id: 19, tech: "git" },
    ],
    project_start_date: new Date("2022-11-22"),
    project_end_date: new Date("2023-01-10"),
    project_description:
      "Participate in tasks on Zalo and earn 500 VND for each completed task. The amount will be added to the temporary balance, and once the balance reaches at least 50,000 VND, you can request a withdrawal to the bank account that has been set up.The job involves UI design, front-end development, and API integration. It includes gathering client requirements, developing the UI using HTML, CSS, JavaScript, and VueJS, creating reusable UI components, and handling and optimizing errors to ensure a smooth user experience.",
    project_quanlity_member: 4,
    project_link: "https://github.com/webstudio/ecommerce-platform",
    project_progress: 100, // Đã hoàn thành
  },
  {
    project_id: "p3",
    project_company: "FUJINET SYSTEMS JSC ",
    project_name: "Honto Application",
    project_role: "Backend Developer",
    project_status: {
      status_id: 3,
      status: "Paused",
    },
    project_tech: [
      { tech_id: 1, tech: "java" },
      { tech_id: 2, tech: "spring-boot" },
      { tech_id: 3, tech: "sql" },
      { tech_id: 17, tech: "oracle" },
      { tech_id: 18, tech: "doma" },
      { tech_id: 19, tech: "git" },
    ],
    project_start_date: new Date("2023-06-01"),
    project_end_date: new Date("2024-06-01"),
    project_description:
      "I work on developing and modifying features for the e-commerce site Honto.jp, which specializes in books and digital content. My responsibilities include creating new APIs using Java 8 and SpringBoot, integrating them into the CMS, and performing periodic regression testing. I handle coding, testing, and use Git and SVN for source code management. The deliverables include source code and test result reports.",
    project_quanlity_member: 6,
    project_link: "https://honto.jp/",
    project_progress: 50, // Dự án tạm dừng, đạt 50% tiến độ
  },
  {
    project_id: "p4",
    project_company: "Coursera",
    project_name: "Little Lemon Restaurant ",
    project_role: "Frontend Developer",
    project_status: { status_id: 1, status: "In Progress" },
    project_tech: [
      { tech_id: 7, tech: "React" },
      { tech_id: 5, tech: "CSS" },
      { tech_id: 8, tech: "JS" },
      { tech_id: 9, tech: "HTML" },
      { tech_id: 19, tech: "git" },
      { tech_id: 20, tech: "scss" },
      { tech_id: 21, tech: "redux" },
    ],
    project_start_date: new Date("2024-01-15"),
    project_end_date: new Date(),
    project_description:
      "Developed a responsive website for Little Lemon, a fictional restaurant, as part of Coursera's Front-End Development course. The website includes features such as a food category grid, a popular menu slider, and a detailed menu list. Responsibilities involved creating user-friendly UI designs, coding components using Vue.js, and ensuring smooth integration of all front-end elements. Deliverables: source code managed via Git.",
    project_quanlity_member: 1, // Solo project
    project_link: "https://github.com/LeMinhThanh29/Little-Lemon",
    project_progress: 100, // Completed project
  },
];
