/* Edit biography, profile links, research, and publications here.
   Empty links are hidden. Citations checked in October 2026.
   Figure excerpts are credited to their original papers. */
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
      id: "gate-stacks", title: "2D transistors & gate dielectrics", category: "2D transistors", year: "01 / MATERIALS",
      summary: "Exploring hBN dielectrics and metal electrodes for reliable, low-voltage two-dimensional transistors.",
      description: "I study how metal electrodes and ultrathin hBN dielectrics influence leakage, reliability, and the electrical performance of MoS₂ transistors. My work connects materials selection with the design of low-voltage electronic devices.",
      tags: ["hBN", "MoS₂", "Gate dielectrics"], image: "./assets/gate-transistors.png", imageAlt: "Microscopy and electrical characteristics of MoS₂ transistors with Pt/hBN gate stacks", figureCredit: "Shen et al. · Nature Electronics (2024), Fig. 6", figureUrl: "https://doi.org/10.1038/s41928-024-01233-w",
      url: "https://doi.org/10.1038/s41928-024-01233-w", linkLabel: "Read the Nature Electronics paper"
    },
    {
      id: "memristors", title: "Memristors & material defects", category: "Memristors & reliability", year: "02 / DEVICES",
      summary: "Studying defects, variability, and resistive switching in two-dimensional materials-based memristors.",
      description: "I investigate how defects in hBN affect resistive switching, device variability, and circuit yield. By combining microscopy with electrical measurements, I connect local material structure with the behaviour of memristive devices.",
      tags: ["Defect engineering", "Memristors", "Characterization"], image: "./assets/memristor-defects.png", imageAlt: "Optical micrographs and current–voltage curves of monolayer and multilayer hBN memristors", figureCredit: "Shen et al. · Advanced Materials (2021), Fig. 1", figureUrl: "https://doi.org/10.1002/adma.202103656",
      url: "https://doi.org/10.1002/adma.202103656", linkLabel: "Read the Advanced Materials paper"
    },
    {
      id: "integration", title: "From 2D materials to microchips", category: "Circuits & integration", year: "03 / SYSTEMS",
      summary: "Bringing layered materials into CMOS and radiofrequency platforms through collaborative research.",
      description: "My research explores the integration of hBN into working microchips. Collaborative studies extend this work to hybrid 2D–CMOS circuits, millimetre-wave memristive circuits, and reconfigurable GaN platforms with hBN switches.",
      tags: ["CMOS integration", "RF switches", "hBN / GaN"], image: "./assets/chip-integration.png", imageAlt: "Microscopy and electrical measurements of hBN structures embedded in a microchip", figureCredit: "Shen et al. · Nature Electronics (2024), Fig. 5", figureUrl: "https://doi.org/10.1038/s41928-024-01233-w",
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
