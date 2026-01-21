// Portfolio data - all content from the original site
export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/Thuynh808/", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/Thuynh808/Thuynh808", icon: "github" },
];

export const credentials = [
  {
    title: "B.S. Information Technology (WGU)",
    issuer: "Western Governors University",
    date: "Validate CeDiD: 26NE-2GWX-TIHA",
    link: "https://www.wgu.edu/alumni/commencement/e-diploma-verification/validate.html",
  },
  {
    title: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Issued by Red Hat",
    date: "July 25, 2024",
    link: "https://www.credly.com/badges/66a0e7c3-24d6-4890-a013-01a14396ad02",
  },
  {
    title: "Red Hat Certified Engineer (RHCE)",
    issuer: "Issued by Red Hat",
    date: "September 16, 2024",
    link: "https://www.credly.com/badges/7b0fe1f4-1a0b-4699-9643-203a797ce18e",
  },
  {
    title: "CompTIA A+ Certification",
    issuer: "Issued by CompTIA",
    date: "April 24, 2023",
    link: "https://www.credly.com/badges/a378fa93-899c-4d08-9e7e-6df37908bc01",
  },
  {
    title: "CompTIA Network+ Certification",
    issuer: "Issued by CompTIA",
    date: "October 9, 2025",
    link: "https://www.credly.com/badges/bdfca0c9-61d2-4060-8cf8-b5e6e1e82415",
  },
  {
    title: "CompTIA Security+ Certification",
    issuer: "Issued by CompTIA",
    date: "June 19, 2023",
    link: "https://www.credly.com/badges/8f330041-9477-459f-8f42-0d491619ca55",
  },
  {
    title: "CompTIA CySA+ Certification",
    issuer: "Issued by CompTIA",
    date: "November 30, 2023",
    link: "https://www.credly.com/badges/f75bd5e3-adf5-4064-a47c-19b85b971263",
  },
  {
    title: "Cisco Certified CCNA",
    issuer: "Issued by Cisco",
    date: "October 1, 2025",
    link: "https://www.credly.com/badges/45a81eda-e04b-4d7f-aace-2207e18996c1",
  },
  {
    title: "AWS Certified Solutions Architect Associate",
    issuer: "Issued by AWS",
    date: "January 7, 2025",
    link: "https://www.credly.com/badges/9850a812-5692-4f62-b65d-ebe65dc9758f",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Issued by Microsoft",
    date: "April 14, 2025",
    link: "https://learn.microsoft.com/en-us/users/streetrack/credentials/1702f5b5bb009aab",
  },
  {
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Issued by Microsoft",
    date: "February 22, 2024",
    link: "https://learn.microsoft.com/en-us/users/streetrack/credentials/a28426c0e55c96fc",
  },
  {
    title: "Microsoft Certified: Azure Security Engineer Associate",
    issuer: "Issued by Microsoft",
    date: "April 29, 2024",
    link: "https://learn.microsoft.com/en-us/users/streetrack/credentials/e1982960d8e05dd8",
  },
  {
    title: "ITIL v4 Foundation",
    issuer: "Issued by AXELOS Global Best Practice",
    date: "Certificate Number: GR671609817TH",
    link: "https://www.peoplecert.org/for-corporations/certificate-verification-service",
  },
];

export const projects = [
  {
    id: "mon1theus",
    title: "Mon1theus",
    category: "Enterprise Observability Platform",
    description: "Built a centralized observability platform for a Layer-3 collapsed-core OSPF network, consolidating metrics and logs from Cisco switches, a perimeter firewall, and Linux servers into unified Grafana dashboards using Prometheus, Loki, Alloy, SNMP, and Syslog. Validated with load testing and failover scenarios and standardized onboarding with Ansible automation.",
    tags: ["Prometheus & Grafana", "Loki + Alloy", "SNMP & Syslog", "Ansible Automation"],
    githubLink: "https://github.com/Thuynh808/mon1theus/blob/main/README.md",
    image: "/images/capstone2x.gif",
  },
  {
    id: "azure-release-verifier",
    title: "Azure Release Verifier",
    category: "Release Engineering",
    description: "Automated Azure release validation system that scales verification workloads with VM Scale Sets, checks application health post-deployment, and securely stores verification results using Managed Identity and Azure Storage",
    tags: ["Azure App Services", "VM Scale Sets", "Managed Identity"],
    githubLink: "https://github.com/Thuynh808/azure-release-verifier/blob/main/README.md",
    image: "/images/azure-release-verifier2x.gif",
  },
  {
    id: "scanops",
    title: "ScanOps",
    category: "CI/CD",
    description: "Automated a CI/CD pipeline using GitHub Actions, Trivy, and AWS ECR/S3 to scan and promote secure containers, with SBOM generation and Slack alerts for vulnerability tracking",
    tags: ["CI/CD", "AWS ECR", "Vulnerability Scan"],
    githubLink: "https://github.com/Thuynh808/scanops/blob/main/README.md",
    image: "/images/scan_ops2x.png",
  },
  {
    id: "azure-honeynet",
    title: "Azure Honeynet",
    category: "Cloud Security",
    description: "Developed an Azure-based honeynet with integrated log analysis and Microsoft Sentinel, employing NIST guidelines to enhance security monitoring and incident response.",
    tags: ["SIEM", "Live Traffic", "Network Security Group", "Hardening"],
    githubLink: "https://github.com/Thuynh808/Cloud-SOC/blob/main/README.md",
    image: "/images/Azure-soc-honeynet2x.jpg",
  },
  {
    id: "cvedatalake",
    title: "CVEDataLake",
    category: "Automated CVE Intelligence",
    description: "Automates CVE data ingestion, storage, and querying using AWS S3, Glue, and Athena. Integrates public data sources with structured querying to enable security teams to analyze vulnerabilities efficiently. Uses Ansible for deployment automation and generates JSON reports for audits, dashboards, and security workflows.",
    tags: ["Security Automation", "AWS Data Lake", "Ansible Deployment", "Vulnerability Intelligence"],
    githubLink: "https://github.com/Thuynh808/CVEDataLake/blob/main/README.md",
    image: "/images/CVEDataLake2x.png",
  },
  {
    id: "elastic-labs",
    title: "Elastic_Labs",
    category: "Elastic SIEM",
    description: "Automated deployment of an Elastic SIEM on RHEL VMs, with Elasticsearch, Kibana, and Zeek for real-time network and endpoint security monitoring. The setup emphasizes Ansible automation and policy management through Fleet and live security alert testing.",
    tags: ["SIEM", "Ansible Automation", "Red Hat Linux", "Infrastructure as Code"],
    githubLink: "https://github.com/Thuynh808/elastic_labs/blob/main/README.md",
    image: "/images/Elastic_Labs2x.jpg",
  },
  {
    id: "ha-webtrack",
    title: "HA-WebTrack",
    category: "System Monitoring",
    description: "A high-availability web server setup using Ansible, featuring automated deployment, HAProxy load balancing, real-time monitoring with Prometheus/Grafana/Loki, high-load stress testing and failover scenarios.",
    tags: ["High Availability", "Ansible Automation", "Red Hat Linux", "Infrastructure as Code"],
    githubLink: "https://github.com/Thuynh808/HA-WebTrack/blob/main/README.md",
    image: "/images/HA-WebTrack2x.png",
  },
  {
    id: "cyber-streetracker",
    title: "The Cyber Streetracker",
    category: "OSINT Web App",
    description: "A web app delivering real-time cybersecurity news and vulnerability search with OAuth 2.0, Azure Functions, and a Web Application Firewall for secure, responsive performance",
    tags: ["OSINT", "CVE", "CI/CD", "Web Development", "OAuth 2.0"],
    githubLink: "https://github.com/Thuynh808/TheCyberStreetracker/blob/main/README.md",
    image: "/images/CyberStreetracker2x.jpg",
  },
  {
    id: "stig-hardened",
    title: "STIG-Hardened",
    category: "Automated STIG Compliance",
    description: "Automated workflow to scan, remediate, and validate RHEL 9 systems for DISA STIG compliance using Ansible and SCC. Achieves over 80% compliance with repeatable, scalable methods for system hardening and security baselines.",
    tags: ["System Hardening", "STIG Compliance", "Ansible Automation", "Security Baselines"],
    githubLink: "https://github.com/Thuynh808/STIG-Hardened/blob/main/README.md",
    image: "/images/STIG-Hardened2x.png",
  },
  {
    id: "breach-tracker",
    title: "Breach-Tracker",
    category: "Automated Breach Intelligence",
    description: "AWS-based system that automates breach data retrieval using a Flask app on ECS Fargate. Integrates API Gateway, ALB, and ECS for secure and scalable data delivery. Built with Terraform and Ansible for streamlined infrastructure deployment and management.",
    tags: ["Cloud Security", "AWS Infrastructure", "Terraform & Ansible", "Automation"],
    githubLink: "https://github.com/Thuynh808/Breach-Tracker/blob/main/README.md",
    image: "/images/Breach-Tracker2x.png",
  },
];

export const aboutText = "Building reliable, secure systems through automation, I enjoy turning real infrastructure problems into repeatable solutions. Most of my hands-on projects cover networking, security, and Linux system administration.";

export const resumeLink = "images/thuynh-pt-resume.pdf";

export const contactEmail = "thuynh808@streetrack.org";
