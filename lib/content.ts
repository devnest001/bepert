export const pillars = [
  {
    slug: "software-development",
    title: "Software Development",
    href: "/services",
    summary:
      "Custom software, web and mobile applications, integrations, AI-enabled features, automation, and ongoing technical support.",
    points: [
      "Web and mobile applications",
      "Integrations and APIs",
      "AI features and automation",
      "Maintenance and support",
    ],
  },
  {
    slug: "technology-consulting",
    title: "Technology Consulting",
    href: "/services#consulting",
    summary:
      "Practical technical guidance, architecture thinking, and technology planning that helps teams make clear, workable decisions.",
    points: [
      "Architecture and technical planning",
      "Solution design",
      "Delivery guidance",
      "Problem-solving with stakeholders",
    ],
  },
  {
    slug: "it-staffing",
    title: "IT Staffing & Staff Augmentation",
    href: "/staffing",
    summary:
      "Technology professionals and staffing support aligned with client project requirements, discussed case by case.",
    points: [
      "Staff augmentation",
      "Specialist resource requests",
      "Support for existing technology teams",
      "Flexible engagement discussion",
    ],
  },
] as const;

export const services = [
  {
    slug: "custom-software",
    title: "Custom Software Development",
    description:
      "Purpose-built software designed around your workflows, users, and operational constraints rather than a one-size-fits-all product.",
    value:
      "Gives you a system that can grow with the business and stay aligned with how your teams actually work.",
    href: "/contact?type=software-development",
  },
  {
    slug: "web-applications",
    title: "Web Application Development",
    description:
      "Responsive web applications for internal operations, customer-facing products, and partner portals.",
    value:
      "Helps teams deliver usable digital experiences that can be accessed securely across devices.",
    href: "/contact?type=software-development",
  },
  {
    slug: "mobile-applications",
    title: "Mobile Application Development",
    description:
      "Native or cross-platform mobile applications for iOS and Android when a mobile experience is part of the solution.",
    value:
      "Extends your product or service to the devices your users already rely on.",
    href: "/contact?type=software-development",
  },
  {
    slug: "ai-automation",
    title: "AI Solutions & Automation",
    description:
      "We can help evaluate and implement AI-enabled features and process automation where they are a practical fit. This is an available service offering, not a claim of completed AI programmes.",
    value:
      "Supports teams looking to reduce repetitive work or add intelligent capabilities with a clear, scoped approach.",
    href: "/contact?type=software-development",
  },
  {
    slug: "api-integration",
    title: "API Development & System Integration",
    description:
      "APIs and integrations that connect applications, data sources, and existing business systems.",
    value:
      "Reduces manual hand-offs and helps information move reliably between the tools you already use.",
    href: "/contact?type=software-development",
  },
  {
    slug: "consulting",
    title: "Technology Consulting",
    description:
      "Independent technical guidance on architecture, technology choices, delivery planning, and solving specific business challenges with software.",
    value:
      "Provides a structured way to examine options before committing budget, time, or a particular stack.",
    href: "/contact?type=consulting",
  },
  {
    slug: "maintenance",
    title: "Software Maintenance & Support",
    description:
      "Ongoing improvement, defect resolution, and technical support for software after it is in use.",
    value:
      "Keeps systems usable, current, and easier to evolve as requirements change.",
    href: "/contact?type=software-development",
  },
] as const;

export const industries = [
  {
    slug: "financial-services",
    title: "Financial Services & Fintech",
    description:
      "Digital products, internal platforms, and integrations for organisations operating in regulated or transaction-heavy environments.",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description:
      "Software and consulting support for care delivery, operations, and information workflows, scoped to each organisation's requirements.",
  },
  {
    slug: "retail",
    title: "Retail & E-commerce",
    description:
      "Customer-facing applications, operations tools, and integrations that support buying, fulfilment, and service journeys.",
  },
  {
    slug: "education",
    title: "Education & Digital Learning",
    description:
      "Technology support for learning products, administration systems, and digital content platforms. BEPERT is a technology services firm, not a training academy.",
  },
  {
    slug: "logistics",
    title: "Logistics & Supply Chain",
    description:
      "Applications and integrations that help coordinate inventory, movement, partners, and operational visibility.",
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    description:
      "Internal systems, client portals, and delivery tools for firms that sell expertise and project work.",
  },
  {
    slug: "startups",
    title: "Startups & Growing Businesses",
    description:
      "Practical delivery and advisory support for teams building their first product or extending an existing platform.",
  },
] as const;

export const approachSteps = [
  {
    title: "Understand",
    description:
      "We start with the business problem, constraints, users, and what success should look like before recommending a solution.",
  },
  {
    title: "Shape",
    description:
      "We outline scope, technical approach, and delivery shape so the work is clear enough to discuss, refine, and commit to.",
  },
  {
    title: "Build",
    description:
      "We design and implement the software, integrations, or advisory work needed, keeping communication practical and transparent.",
  },
  {
    title: "Support",
    description:
      "We can continue with maintenance, improvements, consulting, or staffing support as the requirement evolves.",
  },
] as const;

export const whyPoints = [
  {
    title: "Business-aligned delivery",
    description:
      "We treat technology as a means to a business outcome, not as an isolated engineering exercise.",
  },
  {
    title: "Practical technical guidance",
    description:
      "Recommendations stay grounded in what can be built, operated, and maintained by real teams.",
  },
  {
    title: "Flexible engagement",
    description:
      "Work can take the form of delivery, consulting, staffing support, or a combination, depending on the need.",
  },
  {
    title: "Clear collaboration",
    description:
      "We prefer direct communication, visible progress, and honest discussion of trade-offs.",
  },
] as const;

export const values = [
  {
    title: "Practical problem-solving",
    description:
      "We focus on workable solutions that fit the problem, the users, and the constraints in front of us.",
  },
  {
    title: "Transparency",
    description:
      "Scope, progress, risks, and limitations should be visible so decisions can be made with the right information.",
  },
  {
    title: "Quality",
    description:
      "We aim for software and advice that remain usable after the first release, not just impressive in a demo.",
  },
  {
    title: "Collaboration",
    description:
      "We work with client stakeholders and teams, not around them, so the result can be owned and evolved.",
  },
] as const;

export const staffingRoles = [
  {
    title: "Frontend developers",
    description: "Interface and client-side application work for web products.",
  },
  {
    title: "Backend developers",
    description: "Services, APIs, data, and server-side application work.",
  },
  {
    title: "Full-stack developers",
    description: "End-to-end product work across the user interface and supporting services.",
  },
  {
    title: "QA specialists",
    description: "Structured testing support to help teams ship with greater confidence.",
  },
  {
    title: "DevOps & cloud",
    description: "Deployment, environments, and operational support for software teams.",
  },
  {
    title: "Specialist requests",
    description:
      "Other technology roles can be discussed based on the project. Coverage is not guaranteed in advance.",
  },
] as const;

export const staffingProcess = [
  {
    title: "Share the requirement",
    description:
      "Tell us about the role, skills, duration, working model, and how the person would sit with your team.",
  },
  {
    title: "Clarify the brief",
    description:
      "We discuss constraints, seniority, and what good looks like so the request is specific enough to work with.",
  },
  {
    title: "Review options",
    description:
      "Where we can help, we talk through possible next steps. Availability and skill coverage depend on the request.",
  },
  {
    title: "Engage",
    description:
      "If there is a fit, we agree how the engagement should work before anyone starts.",
  },
] as const;

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  technologies: string[];
  outcome?: string;
  image?: string;
};

export const caseStudies: CaseStudy[] = [];

export type JobOpening = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
};

export const jobOpenings: JobOpening[] = [];

export const enquiryTypes = [
  { value: "software-development", label: "Software development" },
  { value: "consulting", label: "Technology consulting" },
  { value: "staffing", label: "IT staffing" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Other enquiry" },
] as const;

export type EnquiryType = (typeof enquiryTypes)[number]["value"];
