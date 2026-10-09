/**
 * Portfolio content for Ammika Srinivas, based on the uploaded resume.
 * Publication descriptions are intentionally conservative: a title on a resume
 * is not evidence of implementation details, experimental outcomes or metrics.
 * Public contact information deliberately omits the street address and phone.
 */
export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Ammika Srinivas',
  displayName: 'Ammika Srinivas',
  firstName: 'SRINIVAS',
  seriesTag: 'THE SERIES',
  originalLabel: 'AN AMMIKA ORIGINAL',
  role: 'Mechanical Engineering Educator & Researcher',
  tagline: ['Mechanical Engineering', 'Machine Design', 'Teaching & Research'],
  intro: 'Mechanical engineer with an M.Tech in Machine Design and experience as an Assistant Professor at engineering institutions in Andhra Pradesh. My academic work spans engineering design, research publications, mechanical systems and student mentoring.',
  location: 'Dhone, Andhra Pradesh, India',
  email: 'ammika.srinivas@gmail.com',
  links: {
    linkedin: '', // Add your LinkedIn URL here when ready.
    github: 'https://github.com/srinivasa-jpg',
  },
  resumePdf: '/assets/Ammika_Srinivas_Portfolio_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Ammika Srinivas',
  },
  interests: ['Machine Design', 'Finite Element Analysis', 'CAD / CAM', 'Engineering Education'],
};

export const education = [
  { school: 'Rajeev Gandhi Memorial College of Engineering & Technology (RGMCET)', place: 'Nandyal', degree: 'M.Tech — Machine Design', period: '2012', score: '74.50%' },
  { school: 'Dr. SGIET', place: 'Markapur', degree: 'B.Tech — Mechanical Engineering', period: '2010', score: '57.96%' },
  { school: 'Sri Krishna Junior College', place: 'Kurnool', degree: 'Intermediate', period: '2006', score: '60.20%' },
  { school: 'Railway High School', place: 'Guntakal', degree: '10th Standard', period: '2003', score: '62.20%' },
];

export const experience = [
  { company: 'G. Pullaiah College of Engineering & Technology', role: 'Assistant Professor', place: 'Andhra Pradesh', period: 'December 2019 – April 2022', points: ['Teaching experience in mechanical engineering.', 'Academic roles listed in the resume include examination cell, timetable, R&D and placement coordination.'] },
  { company: 'G. Pullaiah College of Engineering & Technology', role: 'Assistant Professor', place: 'Andhra Pradesh', period: 'December 2015 – May 2018', points: ['Served as Assistant Professor in engineering education.', 'Subjects handled include machine design, machine drawing, mechanics and CAD/CAM.'] },
  { company: 'Sir Vishveshwaraiah Institute of Science & Technology', role: 'Assistant Professor', place: 'Madanapalle', period: 'April 2014 – December 2015', points: ['Mechanical engineering teaching and related academic work.'] },
  { company: 'Narayanadri Institute of Science and Technology', role: 'Assistant Professor', place: 'Rajampet', period: 'August 2012 – April 2014', points: ['Assistant Professor role following completion of M.Tech.'] },
];

export type Metric = { value: string; label: string };
export type Project = {
  id: string; title: string; year: string; genre: string; logline: string;
  stack: string[]; build: string[]; features: string[]; metrics: Metric[];
  github?: string; palette: Palette; motif: 'shield' | 'flow' | 'tenants';
};

/** Selected research publications from the resume, presented as research work rather than software repositories. */
export const projects: Project[] = [
  {
    id: 'boat-hull-stability', title: 'Boat Hull Stability Analysis', year: '2012',
    genre: 'Mechanical Design • Computational Analysis',
    logline: 'Research publication on stability and computational analysis of a boat hull.',
    stack: ['Mechanical Engineering', 'Stability Analysis', 'Computational Analysis'],
    build: ['Published “Stability and Computational Analysis on Boat Hull” in the International Journal of Modern Engineering Research (IJMER), Vol. 2, Issue 5 (2012).'],
    features: ['Boat hull stability', 'Computational analysis', 'Mechanical design research'],
    metrics: [{ value: '2012', label: 'publication year' }, { value: 'IJMER', label: 'journal' }],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' }, motif: 'shield',
  },
  {
    id: 'weed-remover', title: 'Double-Wheeled Weed Remover', year: '2015',
    genre: 'Agricultural Machinery • Mechanical Design',
    logline: 'Published engineering work on the development of a double-wheeled multipurpose weed remover.',
    stack: ['Agricultural Machinery', 'Mechanical Design', 'Product Development'],
    build: ['Published “Development of Double Wheeled Multipurpose Weed Remover” in IJETMAS, Vol. 3, Issue 2 (2015).'],
    features: ['Double-wheeled configuration', 'Multipurpose weed removal', 'Agricultural equipment research'],
    metrics: [{ value: '2015', label: 'publication year' }, { value: 'IJETMAS', label: 'journal' }],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' }, motif: 'tenants',
  },
  {
    id: 'screw-conveyor', title: 'Screw Conveyor Design & Analysis', year: '2016',
    genre: 'Machine Design • Material Handling',
    logline: 'Research publication concerning the design and analysis of a screw conveyor.',
    stack: ['Machine Design', 'Mechanical Analysis', 'Material Handling'],
    build: ['Published “Design and Analysis of Screw Conveyor” in the International Journal of Engineering Research and Science & Technology, Vol. 2, No. 3 (August 2016).'],
    features: ['Screw conveyor design', 'Mechanical analysis', 'Material-handling machinery'],
    metrics: [{ value: '2016', label: 'publication year' }, { value: 'Design', label: 'research area' }],
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' }, motif: 'flow',
  },
  {
    id: 'solar-light-trap', title: 'Solar Light Trap Optimization', year: '2015',
    genre: 'Optimization • Agricultural Engineering',
    logline: 'Published research on modeling and optimizing a solar light trap for pest population control.',
    stack: ['Modeling', 'Optimization', 'Solar Applications'],
    build: ['Published “Modeling and Optimization of Solar Light Trap for Reducing and Controlling the Pest Population” in IJETMAS, Vol. 3, Issue 4 (April 2015).'],
    features: ['Solar light trap modeling', 'Optimization study', 'Pest population control application'],
    metrics: [{ value: '2015', label: 'publication year' }, { value: 'Solar', label: 'application' }],
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' }, motif: 'flow',
  },
];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [
  { id: 'journals', title: '9 Journal Papers', org: 'Engineering Research', detail: 'The uploaded resume lists nine publications spanning boat hull stability, manufacturing systems, mechanical design, and related areas (2012–2017).', laurel: 'Published Research' },
  { id: 'conferences', title: '3 Conference Papers', org: 'Engineering Conferences', detail: 'Conference topics include heavy-vehicle composites, R600a refrigerant in the VCR cycle, and two-wheeler connecting rod analysis.', laurel: 'Conference Work' },
  { id: 'rnd-coordinator', title: 'R&D Coordinator', org: 'Academic Activities', detail: 'Department-level research and development coordination, as listed in the resume.', laurel: 'Research' },
  { id: 'placement-coordinator', title: 'Placement Coordinator', org: 'Academic Activities', detail: 'Served as department-level placement coordinator.', laurel: 'Student Support' },
  { id: 'exam-timetable', title: 'Academic Coordination', org: 'Academic Activities', detail: 'Exam Cell In-charge II and timetable in-charge responsibilities.', laurel: 'Administration' },
];

/** These are professional development programs (not claimed as certifications). */
export type Certification = { issuer: string; name: string; link?: string };
export const certifications: Certification[] = [
  { issuer: 'JNTUACE, Pulivendula', name: 'Two-day workshop: Application of FEM using ANSYS (January)' },
  { issuer: 'MITS, Madanapalle', name: 'Two-week Faculty Development Programme: Fatigue & Fracture Mechanics in Finite Element Analysis (3–15 March 2014)' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
  { id: 'tools', title: 'Design Tools', subtitle: 'Software listed in the resume', skills: [
    { name: 'AutoCAD', mono: 'AC' }, { name: 'Pro-E', mono: 'PE' }, { name: 'ANSYS', mono: 'An' },
  ] },
  { id: 'design', title: 'Design & Analysis', subtitle: 'Mechanical engineering disciplines', skills: [
    { name: 'Machine Design', mono: 'MD' }, { name: 'CAD / CAM', mono: 'CC' }, { name: 'Finite Element Analysis', mono: 'FE' }, { name: 'Mechanics of Solids', mono: 'MS' },
  ] },
  { id: 'teaching', title: 'Teaching', subtitle: 'Subjects handled', skills: [
    { name: 'Engineering Drawing', mono: 'ED' }, { name: 'Engineering Mechanics', mono: 'EM' }, { name: 'Machine Drawing', mono: 'Dr' }, { name: 'Automobile Engineering', mono: 'AE' }, { name: 'Machine Elements I & II', mono: 'ME' },
  ] },
  { id: 'research', title: 'Research Areas', subtitle: 'Themes of listed publications', skills: [
    { name: 'Boat Hull Stability', mono: 'BH' }, { name: 'Manufacturing Systems', mono: 'MF' }, { name: 'Agricultural Machinery', mono: 'AG' }, { name: 'Mechanical Optimization', mono: 'Op' },
  ] },
  { id: 'academic', title: 'Academic Roles', subtitle: 'Responsibilities from the resume', skills: [
    { name: 'R&D Coordination', mono: 'RD' }, { name: 'Placement Coordination', mono: 'PC' }, { name: 'Exam Cell', mono: 'EX' }, { name: 'Timetable Coordination', mono: 'TT' },
  ] },
];
export const skillEvidence: Record<string, string[]> = {
  ANSYS: ['Application of FEM using ANSYS workshop'],
  'Finite Element Analysis': ['Fatigue & Fracture Mechanics faculty development programme'],
  'Machine Design': ['M.Tech in Machine Design', 'Screw Conveyor Design & Analysis'],
  'CAD / CAM': ['Subject handled', 'AutoCAD and Pro-E listed in skill set'],
  'Mechanics of Solids': ['Subject handled'],
  'Boat Hull Stability': ['Stability and Computational Analysis on Boat Hull', 'Stability Comparison on Boat Hull'],
  'Manufacturing Systems': ['Metaheuristics for flexible manufacturing systems publication'],
  'Agricultural Machinery': ['Double Wheeled Multipurpose Weed Remover', 'Solar Light Trap'],
  'Mechanical Optimization': ['Solar Light Trap optimization', 'Flexible manufacturing systems paper'],
  'R&D Coordination': ['Department R&D Coordinator'],
  'Placement Coordination': ['Department Placement Coordinator'],
  'Exam Cell': ['Exam Cell In-charge II'],
  'Timetable Coordination': ['Timetable In-charge'],
};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };
export const seasons: Season[] = [
  { number: 1, title: 'The Foundation', period: '2003 – 2010', synopsis: 'Early education and a foundation in mechanical engineering.', episodes: [
    { code: 'S01 E01', title: 'First Steps', description: 'Secondary education at Railway High School in Guntakal, followed by intermediate at Sri Krishna Junior College, Kurnool.', tags: ['School', 'Intermediate'], runtime: '2003 – 2006', palette: amber },
    { code: 'S01 E02', title: 'Mechanical Engineer', description: 'B.Tech in Mechanical Engineering at Dr. SGIET, Markapur, affiliated with JNTU Kakinada.', tags: ['B.Tech', 'Mechanical'], runtime: '2010', palette: ocean },
  ] },
  { number: 2, title: 'The Specialization', period: '2010 – 2012', synopsis: 'Postgraduate specialization in machine design.', episodes: [
    { code: 'S02 E01', title: 'Machine Design', description: 'Completed M.Tech in Machine Design at RGMCET, Nandyal, affiliated with JNTUA, with 74.50%.', tags: ['M.Tech', 'Machine Design', '74.50%'], runtime: '2012', palette: violet },
    { code: 'S02 E02', title: 'Boat Hull Research', description: 'Published research on stability and computational analysis of a boat hull in IJMER.', tags: ['Research', 'Stability'], runtime: '2012', palette: ocean },
  ] },
  { number: 3, title: 'At the Lectern', period: '2012 – 2015', synopsis: 'Early years teaching engineering in Rajampet and Madanapalle.', episodes: [
    { code: 'S03 E01', title: 'The Educator', description: 'Assistant Professor at Narayanadri Institute of Science and Technology, Rajampet.', tags: ['Teaching', 'Mechanical Engineering'], runtime: 'Aug 2012 – Apr 2014', palette: amber },
    { code: 'S03 E02', title: 'Teaching & Development', description: 'Assistant Professor at Sir Vishveshwaraiah Institute of Science & Technology, Madanapalle. Attended faculty development on fatigue and fracture mechanics.', tags: ['Teaching', 'FEA'], runtime: 'Apr 2014 – Dec 2015', palette: jade },
  ] },
  { number: 4, title: 'Research & Mentoring', period: '2015 – 2018', synopsis: 'Engineering publications, classroom teaching and academic coordination.', episodes: [
    { code: 'S04 E01', title: 'Applied Research', description: 'Published on weed removal, solar pest control, screw conveyors and additional mechanical engineering topics.', tags: ['Publications', 'Design'], runtime: '2015 – 2017', palette: crimson },
    { code: 'S04 E02', title: 'Supporting Students', description: 'Assistant Professor at G. Pullaiah College of Engineering & Technology.', tags: ['Teaching', 'Academics'], runtime: 'Dec 2015 – May 2018', palette: ocean },
  ] },
  { number: 5, title: 'Continued Contribution', period: '2019 – 2022', synopsis: 'A further period of Assistant Professor experience and academic responsibilities.', episodes: [
    { code: 'S05 E01', title: 'Back in the Classroom', description: 'Assistant Professor at G. Pullaiah College of Engineering & Technology.', tags: ['Assistant Professor', 'Mechanical'], runtime: 'Dec 2019 – Apr 2022', palette: violet },
    { code: 'S05 E02', title: 'Beyond the Classroom', description: 'Academic activities recorded in the resume include the exam cell, timetable management, R&D coordination and placement coordination.', tags: ['R&D', 'Administration', 'Placement'], runtime: 'Academic service', palette: jade },
  ] },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'Specialization', title: 'Machine Design', detail: 'M.Tech · RGMCET, Nandyal', palette: violet },
  { label: 'Engineering background', title: 'Mechanical', detail: 'B.Tech · Dr. SGIET, Markapur', palette: ocean },
  { label: 'Publications', title: '9 Papers', detail: 'Journal publications listed on the resume', palette: crimson },
  { label: 'Academic events', title: '3 Conferences', detail: 'Conference papers listed on the resume', palette: amber },
  { label: 'Design software', title: 'AutoCAD', detail: 'CAD tool', palette: jade },
  { label: 'Engineering software', title: 'ANSYS', detail: 'FEM workshop and skills', palette: ocean },
  { label: 'CAD tool', title: 'Pro-E', detail: 'Listed technical skill', palette: violet },
  { label: 'Research area', title: 'Boat Hull', detail: 'Stability and computational analysis', palette: crimson },
  { label: 'Applied design', title: 'Screw Conveyor', detail: 'Design and analysis publication', palette: amber },
  { label: 'Academic role', title: 'R&D Coordination', detail: 'Department responsibilities', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  { kicker: 'Background', title: 'Mechanical Engineer', lines: ['B.Tech in Mechanical Engineering · 2010', 'M.Tech in Machine Design · 2012'], chips: ['Design', 'Analysis', 'Teaching'] },
  { kicker: 'Career', title: 'The Educator', lines: ['Assistant Professor roles from 2012 to 2022', 'Narayanadri Institute · Sir Vishveshwaraiah Institute · G. Pullaiah College'] },
  { kicker: 'Research', title: 'Published Work', lines: ['Nine journal papers listed on the resume', 'Boat hulls, machine design, manufacturing and agricultural applications'] },
  { kicker: 'Tools', title: 'Design & Simulation', lines: ['AutoCAD · Pro-E · ANSYS', 'Mechanics of Solids · Machine Elements · CAD/CAM'] },
  { kicker: 'Events', title: 'Conferences', lines: ['Three conference papers', 'Composites, refrigerants, connecting rod analysis'] },
  { kicker: 'Academic Service', title: 'Supporting Learning', lines: ['Exam cell · Timetables', 'R&D coordination · Placement coordination'] },
];

export type ProfileId = 'srinivas' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'srinivas', name: 'Srinivas', blurb: 'The full story, in order', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Experience, education and resume first', color: '#4cc9ff', order: ['story', 'about', 'moments', 'skills', 'journey', 'originals', 'picks'] },
  { id: 'developer', name: 'Engineer', blurb: 'Design, research and skills first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'Academic', blurb: 'Teaching and publications first', color: '#ffb547', order: ['journey', 'moments', 'picks', 'about', 'originals', 'skills', 'story'] },
];
export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Background & education', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Research', card: 'Selected Research', meta: `${projects.length} Featured Publications`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Highlights', card: 'Research & Activities', meta: `${achievements.length} Highlights • ${certifications.length} Workshops / FDP`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
