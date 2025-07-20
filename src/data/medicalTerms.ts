export interface MedicalTerm {
  id: string;
  term: string;
  definition: string;
  category: string;
  pronunciation?: string;
  examples?: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  explanation?: string;
}

export const medicalCategories = [
  { id: "anatomy", name: "Anatomy", description: "Body structures and organs", icon: "🫀" },
  { id: "diseases", name: "Diseases", description: "Medical conditions and illnesses", icon: "🦠" },
  { id: "procedures", name: "Procedures", description: "Medical treatments and operations", icon: "🏥" },
  { id: "abbreviations", name: "Abbreviations", description: "Common medical abbreviations", icon: "📝" },
  { id: "pharmacology", name: "Pharmacology", description: "Medications and drug terms", icon: "💊" },
  { id: "diagnostics", name: "Diagnostics", description: "Tests and diagnostic procedures", icon: "🔬" }
];

export const medicalTerms: MedicalTerm[] = [
  // Anatomy
  {
    id: "1",
    term: "Cardiology",
    definition: "The branch of medicine dealing with disorders of the heart and blood vessels",
    category: "anatomy",
    pronunciation: "kar-dee-OL-uh-jee",
    examples: ["The cardiologist specializes in cardiology"]
  },
  {
    id: "2",
    term: "Nephrology",
    definition: "The branch of medicine concerned with the kidneys",
    category: "anatomy",
    pronunciation: "neh-FROL-uh-jee"
  },
  {
    id: "3",
    term: "Neurology",
    definition: "The branch of medicine dealing with disorders of the nervous system",
    category: "anatomy",
    pronunciation: "noo-ROL-uh-jee"
  },
  {
    id: "4",
    term: "Dermatology",
    definition: "The branch of medicine dealing with the skin and its diseases",
    category: "anatomy",
    pronunciation: "der-muh-TOL-uh-jee"
  },

  // Diseases
  {
    id: "5",
    term: "Hypertension",
    definition: "High blood pressure, a condition where blood pressure is consistently elevated",
    category: "diseases",
    pronunciation: "hahy-per-TEN-shuhn",
    examples: ["Hypertension is often called the 'silent killer'"]
  },
  {
    id: "6",
    term: "Diabetes",
    definition: "A group of metabolic disorders characterized by high blood sugar levels",
    category: "diseases",
    pronunciation: "dahy-uh-BEE-teez"
  },
  {
    id: "7",
    term: "Pneumonia",
    definition: "Infection that inflames air sacs in one or both lungs",
    category: "diseases",
    pronunciation: "noo-MOHN-yuh"
  },
  {
    id: "8",
    term: "Bradycardia",
    definition: "A slower than normal heart rate, typically below 60 beats per minute",
    category: "diseases",
    pronunciation: "brad-i-KAHR-dee-uh"
  },

  // Procedures
  {
    id: "9",
    term: "Angioplasty",
    definition: "A procedure to open narrowed or blocked blood vessels that supply blood to the heart",
    category: "procedures",
    pronunciation: "AN-jee-oh-plas-tee"
  },
  {
    id: "10",
    term: "Endoscopy",
    definition: "A procedure using a flexible tube with a camera to examine internal organs",
    category: "procedures",
    pronunciation: "en-DOS-kuh-pee"
  },
  {
    id: "11",
    term: "Biopsy",
    definition: "Removal and examination of tissue from a living body for diagnostic purposes",
    category: "procedures",
    pronunciation: "BAHY-op-see"
  },
  {
    id: "12",
    term: "Laparoscopy",
    definition: "Minimally invasive surgery using small incisions and a camera",
    category: "procedures",
    pronunciation: "lap-uh-ROS-kuh-pee"
  },

  // Abbreviations
  {
    id: "13",
    term: "CPR",
    definition: "Cardiopulmonary Resuscitation - emergency procedure for cardiac arrest",
    category: "abbreviations"
  },
  {
    id: "14",
    term: "ICU",
    definition: "Intensive Care Unit - specialized hospital department for critical care",
    category: "abbreviations"
  },
  {
    id: "15",
    term: "MRI",
    definition: "Magnetic Resonance Imaging - diagnostic imaging technique",
    category: "abbreviations"
  },
  {
    id: "16",
    term: "CBC",
    definition: "Complete Blood Count - blood test measuring various blood components",
    category: "abbreviations"
  },

  // Pharmacology
  {
    id: "17",
    term: "Antibiotic",
    definition: "Medicine that inhibits the growth of or destroys microorganisms",
    category: "pharmacology",
    pronunciation: "an-ti-bahy-OT-ik"
  },
  {
    id: "18",
    term: "Analgesic",
    definition: "A drug that relieves pain without causing loss of consciousness",
    category: "pharmacology",
    pronunciation: "an-l-JEE-zik"
  },
  {
    id: "19",
    term: "Anticoagulant",
    definition: "A substance that prevents the coagulation of blood",
    category: "pharmacology",
    pronunciation: "an-ti-koh-AG-yuh-luhnt"
  },
  {
    id: "20",
    term: "Diuretic",
    definition: "A drug that promotes the production of urine",
    category: "pharmacology",
    pronunciation: "dahy-uh-RET-ik"
  },

  // Diagnostics
  {
    id: "21",
    term: "Electrocardiogram",
    definition: "A test that measures the electrical activity of the heart",
    category: "diagnostics",
    pronunciation: "ih-lek-troh-KAHR-dee-uh-gram"
  },
  {
    id: "22",
    term: "Ultrasound",
    definition: "Imaging technique using high-frequency sound waves",
    category: "diagnostics",
    pronunciation: "UHL-truh-sound"
  },
  {
    id: "23",
    term: "CT Scan",
    definition: "Computed Tomography - detailed X-ray images of internal structures",
    category: "diagnostics"
  },
  {
    id: "24",
    term: "Blood Pressure",
    definition: "The pressure of circulating blood against the walls of blood vessels",
    category: "diagnostics"
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "What does 'Cardiology' refer to?",
    options: [
      "Study of the brain",
      "Study of the heart and blood vessels",
      "Study of the kidneys",
      "Study of the lungs"
    ],
    correctAnswer: 1,
    category: "anatomy",
    explanation: "Cardiology is the branch of medicine dealing with disorders of the heart and blood vessels."
  },
  {
    id: "q2",
    question: "What does 'Hypertension' mean?",
    options: [
      "Low blood pressure",
      "High blood pressure",
      "Irregular heartbeat",
      "Chest pain"
    ],
    correctAnswer: 1,
    category: "diseases",
    explanation: "Hypertension refers to consistently elevated blood pressure levels."
  },
  {
    id: "q3",
    question: "What is an 'Angioplasty'?",
    options: [
      "Brain surgery",
      "Kidney transplant",
      "Procedure to open blocked blood vessels",
      "Lung operation"
    ],
    correctAnswer: 2,
    category: "procedures",
    explanation: "Angioplasty is a procedure to open narrowed or blocked blood vessels, typically those supplying the heart."
  },
  {
    id: "q4",
    question: "What does 'ICU' stand for?",
    options: [
      "Internal Care Unit",
      "Intensive Care Unit",
      "Immediate Care Unit",
      "Individual Care Unit"
    ],
    correctAnswer: 1,
    category: "abbreviations",
    explanation: "ICU stands for Intensive Care Unit, a specialized hospital department for critical care."
  },
  {
    id: "q5",
    question: "What is an 'Antibiotic'?",
    options: [
      "Pain reliever",
      "Blood thinner",
      "Medicine that fights bacterial infections",
      "Sleep aid"
    ],
    correctAnswer: 2,
    category: "pharmacology",
    explanation: "An antibiotic is a medicine that inhibits the growth of or destroys microorganisms, particularly bacteria."
  },
  {
    id: "q6",
    question: "What does an 'Electrocardiogram' measure?",
    options: [
      "Brain waves",
      "Blood pressure",
      "Heart's electrical activity",
      "Lung capacity"
    ],
    correctAnswer: 2,
    category: "diagnostics",
    explanation: "An electrocardiogram (ECG or EKG) measures the electrical activity of the heart."
  }
];