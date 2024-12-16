export interface JobItemModel {
  imageCompany: string;
  job_name: string; // Tên công việc
  company: string; // Tên công ty hoặc tổ chức
  employment_type: string; // Loại công việc (Toàn thời gian, Thực tập, ...)
  start_date: Date; // Ngày bắt đầu
  end_date: Date; // Ngày kết thúc
  location: string; // Địa điểm làm việc
  location_type: string; // Loại địa điểm (On-site, Remote, Hybrid)
}

export const job_list: JobItemModel[] = [
  {
    imageCompany:
      "https://media.licdn.com/dms/image/v2/C4E0BAQFSK1eLP-bRig/company-logo_100_100/company-logo_100_100/0/1631350191773?e=1740009600&v=beta&t=zP0NUn1Br6jYmFPJnCYYgvAIlTHbilbGeczLNTCwpGs",
    job_name: "Java Developer",
    company: "FUJINET SYSTEMS JSC",
    employment_type: "Full-time",
    start_date: new Date("2023-02-12"),
    end_date: new Date("2023-06-28"),
    location: "Tân Bình, Ho Chi Minh City, Vietnam",
    location_type: "On-site",
  },
  {
    imageCompany:
      "https://media.licdn.com/dms/image/v2/C560BAQErGtK6uB0qXQ/company-logo_100_100/company-logo_100_100/0/1630614873943/vmsmobifone_logo?e=1740009600&v=beta&t=m42nvnW1NtCiFSbrPFh27-3wh-G02kroo369NK-GOkA",
    job_name: "Frontend Developer",
    company: "Alizalo",
    employment_type: "Freelance",
    start_date: new Date("2022-10-12"),
    end_date: new Date("2024-05-28"),
    location: "Cần Thơ",
    location_type: "Remote",
  },
  {
    imageCompany:
      "https://media.licdn.com/dms/image/v2/C560BAQErGtK6uB0qXQ/company-logo_100_100/company-logo_100_100/0/1630614873943/vmsmobifone_logo?e=1740009600&v=beta&t=m42nvnW1NtCiFSbrPFh27-3wh-G02kroo369NK-GOkA",
    job_name: "Front-End Developer",
    company: "MobiFone Western Region - MobiFone Service Company, Zone 9",
    employment_type: "Full-Time",
    start_date: new Date("2022-01-15"),
    end_date: new Date("2023-05-30"),
    location: "Cần Thơ",
    location_type: "Hybrid",
  },
];
