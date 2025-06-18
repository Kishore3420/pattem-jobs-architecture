export const techData = {
	// Client Layer
	nextjs: {
		name: 'Next.js',
		desc: 'A React framework for building full-stack web applications. It enables server-side rendering (SSR) and static site generation (SSG).',
		purpose:
			'To build our fast, SEO-friendly frontend for job seekers and employers, ensuring a great user experience and visibility on search engines.',
		link: 'https://nextjs.org/',
	},
	'react-native': {
		name: 'React Native',
		desc: 'A framework for building native mobile apps for iOS and Android using React.',
		purpose:
			'To create a unified mobile experience for job seekers and employers on the go, sharing logic with our web platform.',
		link: 'https://reactnative.dev/',
	},
	zustand: {
		name: 'Zustand',
		desc: 'A small, fast, and scalable state-management solution for React.',
		purpose:
			'To manage the application state (like user info, job lists, filters) in a simple and efficient way, without boilerplate.',
		link: 'https://github.com/pmndrs/zustand',
	},
	tailwind: {
		name: 'Tailwind CSS',
		desc: 'A utility-first CSS framework for rapidly building custom user interfaces.',
		purpose:
			'To create a consistent, modern, and responsive design system across all our applications with maximum flexibility.',
		link: 'https://tailwindcss.com/',
	},
	nextauth: {
		name: 'NextAuth.js',
		desc: 'An authentication library for Next.js applications.',
		purpose:
			'To handle user authentication securely, supporting social logins (e.g., Google, LinkedIn) and traditional email/password methods.',
		link: 'https://next-auth.js.org/',
	},
	rhf: {
		name: 'React Hook Form & Zod',
		desc: 'A library for managing forms with easy-to-use hooks, combined with Zod for schema validation.',
		purpose:
			'To create performant, accessible, and easily validated forms for user registration, profile creation, and job applications.',
		link: 'https://react-hook-form.com/',
	},
	storybook: {
		name: 'Storybook',
		desc: 'A tool for building UI components and pages in isolation.',
		purpose:
			'To develop, document, and test our UI components (buttons, cards, etc.) independently, ensuring consistency and reusability.',
		link: 'https://storybook.js.org/',
	},

	// Application Layer
	nestjs: {
		name: 'NestJS',
		desc: 'A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.',
		purpose:
			'To serve as the core of our backend, providing a structured and maintainable architecture for our API services.',
		link: 'https://nestjs.com/',
	},
	prisma: {
		name: 'Prisma',
		desc: 'A next-generation ORM (Object-Relational Mapper) for Node.js and TypeScript.',
		purpose:
			'To provide a type-safe and intuitive way to interact with our PostgreSQL database, simplifying data access.',
		link: 'https://www.prisma.io/',
	},
	'class-validator': {
		name: 'class-validator',
		desc: 'A library that allows the use of decorator-based validation for classes.',
		purpose:
			'To ensure that all data coming into our API (e.g., from user forms) is in the correct format and meets our requirements.',
		link: 'https://github.com/typestack/class-validator',
	},
	swagger: {
		name: 'Swagger/OpenAPI',
		desc: 'A standard for defining and documenting RESTful APIs.',
		purpose:
			'To automatically generate interactive API documentation, making it easy for frontend and backend teams to collaborate.',
		link: 'https://swagger.io/',
	},
	jwt: {
		name: 'JSON Web Token',
		desc: 'A compact, URL-safe means of representing claims between two parties.',
		purpose: 'To secure our API endpoints by creating access tokens that verify user identity for each request.',
		link: 'https://jwt.io/',
	},

	// Services & Data Layer
	postgres: {
		name: 'PostgreSQL',
		desc: 'A powerful, open-source object-relational database system.',
		purpose:
			'To serve as our primary database for storing all core data like users, jobs, applications, and company profiles.',
		link: 'https://www.postgresql.org/',
	},
	redis: {
		name: 'Redis',
		desc: 'An in-memory data structure store, used as a database, cache, and message broker.',
		purpose:
			'To cache frequently accessed data (like popular job listings or user sessions) to improve application performance and reduce database load.',
		link: 'https://redis.io/',
	},
	gemini: {
		name: 'Google Gemini API',
		desc: 'A family of powerful and multimodal large language models from Google.',
		purpose:
			'To power our advanced AI features, such as generating job descriptions, summarizing resumes, and building an intelligent chatbot.',
		link: 'https://ai.google.dev/',
	},
	'python-fastapi': {
		name: 'Python & FastAPI',
		desc: 'Python is a versatile programming language. FastAPI is a modern, fast web framework for building APIs with Python.',
		purpose:
			'To build and serve our specialized AI/ML models. FastAPI provides high performance for our AI-driven features.',
		link: 'https://fastapi.tiangolo.com/',
	},
	elasticsearch: {
		name: 'Elasticsearch',
		desc: 'A distributed, RESTful search and analytics engine.',
		purpose:
			'To provide powerful and fast full-text search capabilities, allowing users to find relevant jobs with complex filters and ranking.',
		link: 'https://www.elastic.co/elasticsearch/',
	},
	payload: {
		name: 'Payload CMS',
		desc: 'A headless, TypeScript-based Content Management System.',
		purpose:
			'To allow non-technical team members to manage content like blog posts, company pages, and other static content easily.',
		link: 'https://payloadcms.com/',
	},
	ses: {
		name: 'Amazon SES',
		desc: 'Amazon Simple Email Service is a cloud-based email sending service.',
		purpose:
			'To reliably send transactional emails for our platform, such as password resets, job alerts, and application confirmations.',
		link: 'https://aws.amazon.com/ses/',
	},
	websockets: {
		name: 'WebSockets',
		desc: 'A communication protocol that provides full-duplex communication channels over a single TCP connection.',
		purpose: 'To enable real-time features like in-app notifications and employer-candidate messaging.',
		link: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
	},
	'redis-streams': {
		name: 'Redis Streams',
		desc: 'A data structure in Redis that models a log, enabling event-driven architectures.',
		purpose:
			'To act as a lightweight event bus, allowing our microservices to communicate asynchronously (e.g., notifying the search service when a new job is posted).',
		link: 'https://redis.io/docs/data-structures/streams/',
	},

	// Infrastructure & DevOps
	vercel: {
		name: 'Vercel',
		desc: 'A cloud platform for static sites and Serverless Functions.',
		purpose:
			'To host our Next.js frontend, providing automatic deployments, global CDN, and optimized performance out-of-the-box.',
		link: 'https://vercel.com/',
	},
	s3: {
		name: 'AWS S3',
		desc: 'Amazon Simple Storage Service is an object storage service.',
		purpose: 'To securely store user-uploaded files like resumes, cover letters, and company logos.',
		link: 'https://aws.amazon.com/s3/',
	},
	cloudfront: {
		name: 'Amazon CloudFront',
		desc: 'A fast content delivery network (CDN) service.',
		purpose: 'To deliver our static assets (images, CSS, JS) and stored files quickly to users around the world.',
		link: 'https://aws.amazon.com/cloudfront/',
	},
	docker: {
		name: 'Docker',
		desc: 'A platform for developing, shipping, and running applications in containers.',
		purpose:
			'To package our backend services and their dependencies into standardized units, ensuring they run consistently everywhere.',
		link: 'https://www.docker.com/',
	},
	k8s: {
		name: 'Kubernetes',
		desc: 'An open-source system for automating deployment, scaling, and management of containerized applications.',
		purpose:
			'To orchestrate our containerized backend services in production, managing scaling, and ensuring high availability.',
		link: 'https://kubernetes.io/',
	},
	fargate: {
		name: 'AWS Fargate',
		desc: 'A serverless compute engine for containers.',
		purpose:
			'To run our containers without having to manage servers or clusters, simplifying our infrastructure management.',
		link: 'https://aws.amazon.com/fargate/',
	},
	'github-actions': {
		name: 'GitHub Actions',
		desc: 'An automation tool to build, test, and deploy code right from GitHub.',
		purpose:
			'To create our CI/CD pipelines, automatically testing and deploying our frontend and backend code when changes are pushed.',
		link: 'https://github.com/features/actions',
	},
	sonarqube: {
		name: 'SonarQube',
		desc: 'An open-source platform for continuous inspection of code quality.',
		purpose:
			'To automatically scan our code for bugs, vulnerabilities, and code smells, helping us maintain a high-quality codebase.',
		link: 'https://www.sonarsource.com/products/sonarqube/',
	},
	sentry: {
		name: 'Sentry',
		desc: 'An error tracking and performance monitoring platform.',
		purpose:
			'To proactively identify, diagnose, and resolve errors and performance issues in our applications in real-time.',
		link: 'https://sentry.io/',
	},
	prometheus: {
		name: 'Prometheus',
		desc: 'An open-source monitoring and alerting toolkit.',
		purpose:
			'To collect and store metrics from our services (e.g., API response times, CPU usage) for monitoring and alerting.',
		link: 'https://prometheus.io/',
	},
	grafana: {
		name: 'Grafana',
		desc: 'An open-source platform for monitoring and observability.',
		purpose:
			"To create dashboards and visualizations from our Prometheus metrics, giving us a clear view of our system's health.",
		link: 'https://grafana.com/',
	},

	// Development Tools
	jsonwebtoken: {
		name: 'jsonwebtoken',
		desc: 'An npm package to create and verify JSON Web Tokens (JWT).',
		purpose: 'To implement our JWT-based authentication strategy on the backend.',
		link: 'https://www.npmjs.com/package/jsonwebtoken',
	},
	bcrypt: {
		name: 'bcrypt',
		desc: 'A library to help you hash passwords.',
		purpose: 'To securely hash and store user passwords, never storing them in plain text.',
		link: 'https://www.npmjs.com/package/bcrypt',
	},
	cors: {
		name: 'CORS',
		desc: 'A Node.js package for providing a Connect/Express middleware that can be used to enable CORS.',
		purpose: 'To allow our frontend application (on a different domain) to make requests to our backend API.',
		link: 'https://www.npmjs.com/package/cors',
	},
	helmet: {
		name: 'Helmet',
		desc: 'A middleware for Express-based apps (like NestJS) that helps secure them by setting various HTTP headers.',
		purpose: 'To add a baseline layer of security to our backend services.',
		link: 'https://helmetjs.github.io/',
	},
	jest: {
		name: 'Jest',
		desc: 'A delightful JavaScript Testing Framework with a focus on simplicity.',
		purpose: 'To write and run unit and integration tests for both our frontend and backend code.',
		link: 'https://jestjs.io/',
	},
	rtl: {
		name: 'React Testing Library',
		desc: 'A library for testing React components in a way that resembles how users interact with them.',
		purpose: 'To write user-centric tests for our Next.js components, ensuring they are accessible and functional.',
		link: 'https://testing-library.com/',
	},
	eslint: {
		name: 'ESLint',
		desc: 'A static code analysis tool for identifying and reporting on patterns in JavaScript.',
		purpose: 'To enforce consistent code style and catch potential errors early in the development process.',
		link: 'https://eslint.org/',
	},
	prettier: {
		name: 'Prettier',
		desc: 'An opinionated code formatter.',
		purpose:
			'To automatically format our code, ensuring a consistent style across the entire codebase without any manual effort.',
		link: 'https://prettier.io/',
	},
	husky: {
		name: 'Husky',
		desc: 'A tool that makes it easy to use Git hooks.',
		purpose:
			'To run automated scripts (like linting and testing) before commits or pushes, preventing bad code from entering the repository.',
		link: 'https://typicode.github.io/husky/',
	},
	'lint-staged': {
		name: 'lint-staged',
		desc: 'A tool to run linters on staged git files.',
		purpose:
			'To run linters only on the files that are about to be committed, making the pre-commit checks much faster.',
		link: 'https://github.com/okonet/lint-staged',
	},
	typescript: {
		name: 'TypeScript',
		desc: 'A strongly typed programming language that builds on JavaScript.',
		purpose:
			'To add static types to our code, which helps catch errors during development and improves developer productivity and code quality.',
		link: 'https://www.typescriptlang.org/',
	},
	zod: {
		name: 'Zod',
		desc: 'A TypeScript-first schema declaration and validation library.',
		purpose:
			'To define schemas and validate data on both the client and server, ensuring type safety from end to end.',
		link: 'https://zod.dev/',
	},
};
