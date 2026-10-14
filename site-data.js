/* Edit biography, profile links, research, and publications here.
   Empty links are hidden. Citations checked in October 2026.
   All illustrations are abstract artwork, not experimental figures. */
window.SITE_DATA = {
  name: "Yaqing Shen",
  title: "Yaqing Shen — Materials Science & Nanoelectronics",
  description: "Yaqing Shen is a materials scientist at Carnegie Mellon University working on two-dimensional materials, nanoelectronics, and integrated devices.",
  eyebrow: "Materials science & nanoelectronics",
  hero: { firstLine: "Small scale.", secondLine: "Big", accent: "possibilities." },
  introduction: "I’m Yaqing Shen, a materials scientist exploring two-dimensional materials and the next generation of electronic devices.",
  footnote: "Postdoctoral Research Associate · Carnegie Mellon University",
  domains: ["2D materials", "Nanoelectronics", "Devices"],
  about: [
    "I’m a Postdoctoral Research Associate at Carnegie Mellon University, working with Professor Xu Zhang. My research connects two-dimensional materials, device physics, and nanoelectronic integration.",
    "I earned my Ph.D. in Materials Science and Engineering at KAUST, where I worked with Professor Mario Lanza. My work spans hBN gate dielectrics, transistor engineering, memristor reliability, and the integration of 2D materials into microchips."
  ],
  interests: ["2D materials", "Device fabrication", "Gate dielectrics", "Memristors", "Electron microscopy", "Electrical characterization"],
  email: "yaqing@cmu.edu",
  github: "https://github.com/YaqingShen",
  scholar: "https://scholar.google.com/citations?user=0gdqGOEAAAAJ&hl=en",
  linkedin: "https://www.linkedin.com/in/yaqing-shen-553298152/",
  orcid: "https://orcid.org/0000-0002-2325-5618",
  cv: "./cv.html",
  previewContent: false,
  education: [
    { years: "Current", institution: "Carnegie Mellon University", degree: "Postdoctoral Research Associate" },
    { years: "2022–2025", institution: "KAUST", degree: "Ph.D. · Materials Science & Engineering" },
    { years: "2019–2022", institution: "Soochow University", degree: "M.S. · Materials Science & Engineering" },
    { years: "2013–2017", institution: "Yangzhou University", degree: "B.S. · Polymer Science & Engineering" }
  ],
  projects: [
    {
      id: "gate-stacks", title: "Engineering the gate stack", category: "2D transistors", year: "01 / MATERIALS",
      summary: "Exploring hBN dielectrics and metal electrodes for reliable, low-voltage two-dimensional transistors.",
      description: "How can a layered dielectric become a practical part of a transistor? My first-author work investigates how electrode materials influence leakage and dielectric reliability in hBN gate stacks, and explores MoS₂ transistors with ultrathin hBN dielectrics. These studies connect materials choices with device-level electrical performance.",
      tags: ["hBN", "MoS₂", "Gate dielectrics"], artwork: "layers",
      url: "https://doi.org/10.1038/s41928-024-01233-w", linkLabel: "Read the Nature Electronics paper"
    },
    {
      id: "memristors", title: "Understanding the imperfections", category: "Memristors & reliability", year: "02 / DEVICES",
      summary: "Studying defects, variability, and resistive switching in two-dimensional materials-based memristors.",
      description: "Real materials contain imperfections. My research examines how different defects in hBN influence electrical behaviour, variability, and circuit yield. A first-author study in Advanced Materials investigates why out-of-plane memristive devices can respond differently to local defects than in-plane electronic devices.",
      tags: ["Defect engineering", "Memristors", "Characterization"], artwork: "lattice",
      url: "https://doi.org/10.1002/adma.202103656", linkLabel: "Read the Advanced Materials paper"
    },
    {
      id: "integration", title: "Connecting materials to microchips", category: "Circuits & integration", year: "03 / SYSTEMS",
      summary: "Bringing layered materials into CMOS and radiofrequency platforms through collaborative research.",
      description: "Taking a material beyond an isolated device requires integration with working circuits. My collaborative publications include hybrid 2D–CMOS microchips, hBN memristive circuits for millimetre-wave applications, and reconfigurable GaN microchips with integrated hBN switches. Together, these studies explore routes from nanoscale materials to circuit functions.",
      tags: ["CMOS integration", "RF switches", "hBN / GaN"], artwork: "circuit",
      url: "https://doi.org/10.1038/s41586-026-10761-8", linkLabel: "Read the Nature paper"
    }
  ],
  publications: [
    { year: "2026", journal: "Nature", title: "Reconfigurable mmWave microchips co-integrating hBN switches on GaN", authors: "S. Pazos, A. Fontana, Y. Shen et al.", firstAuthor: false, url: "https://doi.org/10.1038/s41586-026-10761-8" },
    { year: "2025", journal: "ACS Nano", title: "MoS₂ Transistors with 4 nm hBN Gate Dielectric and 0.46 V Threshold Voltage", authors: "Y. Shen, S. Pazos, W. Zheng et al.", firstAuthor: true, url: "https://doi.org/10.1021/acsnano.5c02341" },
    { year: "2024", journal: "Nature Electronics", title: "Two-dimensional-materials-based transistors using hexagonal boron nitride dielectrics and metal gate electrodes with high cohesive energy", authors: "Y. Shen, K. Zhu, Y. Xiao et al.", firstAuthor: true, url: "https://doi.org/10.1038/s41928-024-01233-w" },
    { year: "2024", journal: "Nature Electronics", title: "Memristive circuits based on multilayer hexagonal boron nitride for millimetre-wave radiofrequency applications", authors: "S. Pazos, Y. Shen, H. Zhang et al.", firstAuthor: false, url: "https://doi.org/10.1038/s41928-024-01192-2" },
    { year: "2023", journal: "Nature", title: "Hybrid 2D–CMOS microchips for memristive applications", authors: "K. Zhu, S. Pazos, F. Aguirre, Y. Shen et al.", firstAuthor: false, url: "https://doi.org/10.1038/s41586-023-05973-1" },
    { year: "2021", journal: "Advanced Materials", title: "Variability and Yield in h-BN-Based Memristive Circuits: The Role of Each Type of Defect", authors: "Y. Shen, W. Zheng, K. Zhu et al.", firstAuthor: true, url: "https://doi.org/10.1002/adma.202103656" }
  ],
  awards: [
    { year: "2025", title: "Dean’s Award", organization: "KAUST" },
    { year: "2023", title: "Ph.D. Student Fellowship", organization: "IEEE Electron Devices Society" }
  ]
};
