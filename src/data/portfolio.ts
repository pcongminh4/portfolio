export type Project = {
  id: number;
  slug: string;
  title: string;
  period: string;
  summary: string;
  role: string;
  stack: string[];
  results: string[];
  links: { label: string; href: string }[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: 'miamap',
    title: 'MiaMap',
    period: 'Feb 2026 - Now',
    summary:
      'Nền tảng tìm kiếm địa điểm theo bán kính có giao diện bản đồ, xác thực người dùng và backend clean architecture cho truy vấn không gian.',
    role: 'Full-stack Developer | Team size: 1',
    stack: ['ASP.NET Core (.NET 9)', 'C#', 'EF Core', 'MediatR', 'PostGIS', 'React Leaflet'],
    results: [
      'Xây dựng backend theo Clean Architecture với CQRS và FluentValidation.',
      'JWT authentication bằng HttpOnly cookies để tăng an toàn cho phiên đăng nhập.',
      'Tối ưu truy vấn nearby location bằng spatial indexing và PostGIS.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/pcongminh4/MiaMap/tree/dev' },
      { label: 'Live demo', href: '#' },
    ],
  },
  {
    id: 2,
    slug: 'online-examination-management-system',
    title: 'Online Examination Management System',
    period: 'Feb 2025 - Mar 2025',
    summary:
      'Ứng dụng desktop quản lý đề thi, tạo biến thể đề, xuất giấy thi và theo dõi kết quả học viên qua luồng admin và guest.',
    role: 'Java Desktop Developer | Team size: 5',
    stack: ['JavaFX', 'JDBC', 'MySQL', 'Maven', 'Apache POI'],
    results: [
      'Xây dựng cấu trúc đề theo topic và mức độ câu hỏi easy/medium/hard.',
      'Sinh đề tự động bằng cách lấy câu hỏi ngẫu nhiên từ cây topic.',
      'Xuất file Word cho đề in ấn và kết quả thi bằng Apache POI.',
    ],
    links: [
      { label: 'Case study', href: 'https://github.com/pcongminh4/PMQuanLyThiTracNghiem' },
      { label: 'Source code', href: '#' },
    ],
  },
  {
    id: 3,
    slug: 'english-management-system',
    title: 'English Management System',
    period: 'Jan 2026 - Apr 2026',
    summary:
      'Nền tảng web cho trung tâm tiếng Anh, hợp nhất đăng ký, placement test, thời khóa biểu, điểm danh, thanh toán và theo dõi học tập.',
    role: 'Full-stack Developer | Team size: 5',
    stack: ['ExpressJS', 'React', 'MySQL', 'Docker', 'GitHub Actions', 'Nginx'],
    results: [
      'Tối ưu scheduling engine bằng cách đẩy validation xuống database và xử lý song song.',
      'Xây dựng linking giữa phụ huynh và học viên để theo dõi điểm và thời khóa biểu.',
      'Dockerized deployment với CI/CD tự động từ GitHub Actions và Docker Hub.',
    ],
    links: [
      { label: 'Preview', href: 'https://github.com/pcongminh4/english-center' },
      { label: 'GitHub', href: 'https://github.com/pcongminh4' },
    ],
  },
];

export const skills: SkillGroup[] = [
  { category: 'Backend Development', items: ['ASP.NET Core', 'Spring Boot', 'Express.js'] },
  { category: 'Programming Languages', items: ['C#', 'TypeScript', 'Java', 'Dart'] },
  { category: 'Database Management', items: ['SQL Server', 'PostgreSQL', 'MySQL'] },
  { category: 'Frontend Frameworks', items: ['React', 'Flutter'] },
  { category: 'DevOps & Tools', items: ['Docker', 'Git', 'CI/CD', 'Figma'] },
];
