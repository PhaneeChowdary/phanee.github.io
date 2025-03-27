// utils/about-me.ts
export type AboutMeData = {
  name: string;
  role: string;
  education: string[];
  skills: string[];
  experience: Array<{
    company: string;
    role: string;
    period: string;
    description: string;
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    url?: string;
    github?: string;
  }>;
  achievements: string[];
  interests: string[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
}

export const aboutMe: AboutMeData = {
  name: "Phaneendra Babu Gunturu",
  role: "Deep Learning Researcher",
  education: [
    "Masters in Computer Science, Indiana University-Purdue University, USA, 2025",
    "Bharath Institute of Higher Education & Research, India, 2023"
  ],
  skills: [
    "Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision", "Python", "TensorFlow",
    "PyTorch", "Scikit-learn", "Keras", "OpenCV", "SQL", "Git" 
  ],
  experience: [
    {
      company: "Indiana University-Purdue University, USA",
      role: "Deep Learning Researcher",
      period: "Nov 2024 - Present",
      description: "Conducting NSF-funded research on large-scale medical datasets using deep learning architectures, including Transformers. Developing and optimizing models for improved accuracy and efficiency, leveraging PyTorch and TensorFlow. Collaborating with a multidisciplinary team to design and implement novel solutions for healthcare applications"
    },
    {
      company: "Indiana University-Purdue University, USA",
      role: "Mathematics Tutor",
      period: "Jan 2024 - Jan 2025",
      description: "Provided one-on-one and group tutoring sessions in calculus, linear algebra, statistics, and probability at the Mathematics DepartmentAssistance Center (MAC), improving student comprehension and academic performance."
    },
    {
      company: "Verzeo, INDIA",
      role: "Machine Learning Intern",
      period: "Aug 2021 - Dec 2021",
      description: "Led a 5-member team in developing a diabetes prediction system for women, achieving 95% accuracy through ensemble modeling of Random Forest, SVM, and Naive Bayes algorithms while reducing false negatives by 25%. Implemented robust cross-validation techniques and feature selection methods that reduced overfitting by 30%, while optimizing hyperparameters using GridSearchCV to improve model accuracy from 87% to 95%."
    },
  ],
  projects: [
    {
      name: "AI-Powered Document Classification System",
      description: "Architected an enterprise-grade document classification system leveraging Vision Transformers (ViT) and PyTorch, achieving 93.81% accuracy on 400K+ documents with MLflow-based experiment tracking and automated model versioning. Implemented production-ready MLOps pipeline with automated data preprocessing, model checkpointing, and performance monitoring, processing 20K documents/epoch and achieving 98.57% training accuracy. Developed and optimized a multi-label classification model using cutting-edge ViT architecture achieving 95% reduction in document processing time, while maintaining high accuracy across 5 distinct document categories in mortgage domain",
      technologies: ["Transformers", "PyTorch", "MLflow", "MLOps", "ViT"],
      url: "https://github.com/PhaneeChowdary/Document-Classification-System",
      github: "https://github.com/PhaneeChowdary/Document-Classification-System"
    },
    {
      name: "Image Captioning System using Deep Learning and Computer Vision",
      description: "Developed and implemented an advanced Image Captioning system using TensorFlow and InceptionResNetV2, incorporating attention mechanisms and beam search to generate contextually accurate descriptions with a BLEU-4 score of 0.178. Designed and trained a neural network architecture combining CNN and RNN components, achieving 58.65% word-level prediction accuracy while implementing comprehensive evaluation metrics using NLTK. Created an efficient inference pipeline with beam search algorithm, optimizing caption generation process while maintaining code modularity and error handling for production-ready implementation",
      technologies: ["TensorFlow", "InceptionResNetV2", "CNN", "RNN", "NLTK"],
      url: "https://github.com/PhaneeChowdary/Image-Captioning-Using-InceptionResNetV2",
      github: "https://github.com/PhaneeChowdary/Image-Captioning-Using-InceptionResNetV2"
    },
    {
      name: "Pubg Player analysis and Rank Prediction",
      description: "Applied advanced data cleaning techniques and optimized dataset memory by 65.5% (983.90 MB to 339.28 MB) while maintaining data integrity and eliminating fraudulent gameplay data. Engineered 15+ game-specific features including normalized kill ratios, movement patterns, and team dynamics to capture comprehensive player performance metrics. Implemented Random Forest Regressor with feature importance analysis, achieving 0.0488 MAE for player ranking prediction while identifying key performance indicators",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest"],
      url: "https://github.com/PhaneeChowdary/Pubg",
      github: "https://github.com/PhaneeChowdary/Pubg"
    },
    {
      name: "Diabetes Prediction",
      description: "Engineered a machine learning model to predict whether a woman is diagnosed with diabetes or not. Utilized Seaborn for visualizing data distributions of features, including Age, Pregnancy, Insulin, and other features. Applied diverse machine learning models, including Decision Trees Classifier and Random Forest classifier. Improved the accuracy of the RandomForestClassifier model from 80% to 91% by performing hyperparameter tuning using GridSearchCV and RandomizedSearchCV techniques. Designed and created a web application using HTML, CSS for frontend, and Flask for backend integration.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Seaborn", "Flask"],
      url: "https://github.com/PhaneeChowdary/Diabetes-Prediction",
      github: "https://github.com/PhaneeChowdary/Diabetes-Prediction"
    },
  ],
  achievements: ["Attained a global rank of 1770 in TCS CodeVita season 10, TCS.", "Certified as an outstanding intern in Machine Learning, Verzeo.", "Secured a rank of 4696 in Google Kickstart Round G 2022, Google."],
  interests: ["Cricket", "Chess", "Reading", "Traveling", "Mentoring", "Coding", "Research", "Blog Writing"],
  contact: {
    email: "phaneegunturu@gmail.com",
    linkedin: "https://www.linkedin.com/in/gunturuphanee/",
    github: "https://github.com/PhaneeChowdary",
    portfolio: "https://phaneechowdary.github.io/Portfolio"
  }
};