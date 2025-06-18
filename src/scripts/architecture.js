// Data structures for the architecture components
const architectureData = {
	tiers: [
		{
			id: 'user-layer',
			title: 'User Layer',
			components: [
				{
					type: 'user-group',
					title: 'Job Seekers',
					icon: '👨‍💼',
					description: 'Web, PWA & Mobile access with AI-powered job matching',
				},

				{
					type: 'user-group',
					title: 'Employers',
					icon: '🏢',
					description: 'Web & Mobile access with hiring dashboards and analytics',
				},
				{
					type: 'user-group',
					title: 'Admin',
					icon: '⚙️',
					description: 'Web access for user management, content moderation, and platform analytics.',
				},
			],
		},
		{
			id: 'application-layer',
			title: 'Application Layer',
			components: [
				{
					type: 'component-box',
					title: 'Frontend Applications',
					techItems: [
						{
							id: 'nextjs',
							name: 'Next.js 15 (SSR/SEO)',
							logo: 'https://raw.githubusercontent.com/vercel/next.js/canary/packages/create-next-app/templates/next-template-app/public/next.svg',
							logoStyle: 'filter: invert(1)',
						},
						{
							id: 'react-native',
							name: 'React Native (Mobile)',
							logo: 'https://reactnative.dev/img/header_logo.svg',
						},
						{
							id: 'zustand',
							name: 'Zustand (State)',
							logo: 'https://placehold.co/20x20?text=ZU',
						},
						{
							id: 'tailwind',
							name: 'Tailwind CSS + Headless UI',
							logo: 'https://placehold.co/20x20?text=TA',
						},
						{
							id: 'nextauth',
							name: 'NextAuth.js (Auth)',
							logo: 'https://next-auth.js.org/img/logo/logo-sm.png',
						},
						{
							id: 'rhf',
							name: 'React Hook Form + Zod',
							logo: 'https://react-hook-form.com/images/logo/react-hook-form-logo-gray.png',
							logoStyle: 'filter: invert(1)',
						},
						{
							id: 'storybook',
							name: 'Storybook (Components)',
							logo: 'https://storybook.js.org/images/logos/logo-storybook.svg',
						},
					],
				},
				{
					type: 'component-box',
					title: 'Backend Services',
					techItems: [
						{
							id: 'nestjs',
							name: 'NestJS (Node.js)',
							logo: 'https://placehold.co/20x20?text=NE',
						},
						{
							id: 'prisma',
							name: 'Prisma (ORM)',
							logo: 'https://raw.githubusercontent.com/prisma/prisma/main/docs/logo.png',
							logoStyle: 'filter: invert(1)',
						},
						{
							id: 'class-validator',
							name: 'Class Validator',
							logo: 'https://placehold.co/20x20?text=CV',
						},
						{
							id: 'swagger',
							name: 'Swagger/OpenAPI',
							logo: 'https://static-00.iconduck.com/assets.00/swagger-icon-512x512-halz4461.png',
						},
						{
							id: 'jwt',
							name: 'JWT Authentication',
							logo: 'https://jwt.io/img/pic_logo.svg',
						},
					],
				},
			],
		},
		{
			id: 'services-data-layer',
			title: 'Services & Data Layer',
			components: [
				{
					type: 'service-box',
					title: 'Data Stores',
					techItems: [
						{
							id: 'postgres',
							name: 'PostgreSQL (RDS)',
							logo: 'https://placehold.co/20x20?text=PO',
						},
						{
							id: 'redis',
							name: 'Redis (ElastiCache)',
							logo: 'https://placehold.co/20x20?text=RE',
						},
					],
				},
				{
					type: 'service-box',
					title: 'AI/ML Service',
					description: '✨ Resume analysis, content generation, job matching',
					techItems: [
						{
							id: 'gemini',
							name: 'Google Gemini API',
							logo: 'https://placehold.co/20x20?text=GE',
						},
						{
							id: 'python-fastapi',
							name: 'Python/FastAPI',
							logo: 'https://placehold.co/20x20?text=PF',
						},
					],
				},
				{
					type: 'service-box',
					title: 'Search Service',
					description: 'Advanced filtering & recommendations',
					techItems: [
						{
							id: 'elasticsearch',
							name: 'Elasticsearch',
							logo: 'https://www.elastic.co/assets/bltada7771f270d08f6/elastic-logo-color.svg',
						},
					],
				},
				{
					type: 'service-box',
					title: 'Content Service',
					description: 'Blog, company pages, learning content',
					techItems: [
						{
							id: 'payload',
							name: 'Payload CMS',
							logo: 'https://placehold.co/20x20?text=PA',
						},
					],
				},
				{
					type: 'service-box',
					title: 'Notification Service',
					description: 'Email, in-app, WebSockets',
					techItems: [
						{
							id: 'ses',
							name: '📨 AWS SES',
						},
						{
							id: 'websockets',
							name: '📱 WebSockets',
						},
					],
				},
				{
					type: 'service-box',
					title: 'Event Bus',
					description: 'Event-driven architecture',
					techItems: [
						{
							id: 'redis-streams',
							name: 'Redis Streams',
							logo: 'https://placehold.co/20x20?text=RS',
						},
					],
				},
			],
		},
		{
			id: 'infrastructure-devops',
			title: 'Infrastructure & DevOps',
			components: [
				{
					type: 'service-box',
					title: 'Hosting & CDN',
					techItems: [
						{
							id: 'vercel',
							name: 'Vercel (Frontend)',
							logo: 'https://raw.githubusercontent.com/vercel/next.js/canary/packages/create-next-app/templates/next-template-app/public/vercel.svg',
							logoStyle: 'filter: invert(1)',
						},
						{
							id: 's3',
							name: 'AWS S3 (Storage)',
							logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/AWS_Simple_Storage_Service_Logo.svg/512px-AWS_Simple_Storage_Service_Logo.svg.png',
						},
						{
							id: 'cloudfront',
							name: 'CloudFront (CDN)',
							logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Amazon_CloudFront_Logo.svg/512px-Amazon_CloudFront_Logo.svg.png',
						},
					],
				},
				{
					type: 'service-box',
					title: 'Compute & Orchestration',
					techItems: [
						{
							id: 'docker',
							name: 'Docker',
							logo: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
						},
						{
							id: 'k8s',
							name: 'Kubernetes',
							logo: 'https://placehold.co/20x20?text=K8',
						},
						{
							id: 'fargate',
							name: 'ECS Fargate',
							logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png',
						},
					],
				},
				{
					type: 'service-box',
					title: 'CI/CD Pipeline',
					techItems: [
						{
							id: 'github-actions',
							name: 'GitHub Actions',
							logo: 'https://placehold.co/20x20?text=GA',
						},
						{
							id: 'sonarqube',
							name: 'SonarQube',
							logo: 'https://sonarcloud.io/images/SonarCloud-logo.svg',
						},
					],
				},
				{
					type: 'service-box',
					title: 'Observability',
					techItems: [
						{
							id: 'sentry',
							name: 'Sentry (Error Tracking)',
							logo: 'https://sentry-brand.storage.googleapis.com/sentry-logo-black.png',
							logoStyle: 'filter: invert(1)',
						},
						{
							id: 'prometheus',
							name: 'Prometheus (Metrics)',
							logo: 'https://raw.githubusercontent.com/prometheus/prometheus.github.io/main/assets/prometheus_logo_icon.svg',
						},
						{
							id: 'grafana',
							name: 'Grafana (Dashboards)',
							logo: 'https://raw.githubusercontent.com/grafana/grafana/main/public/img/grafana_icon.svg',
						},
					],
				},
			],
		},
		{
			id: 'development-tools',
			title: 'Development Tools & Standards',
			components: [
				{
					type: 'service-box',
					title: 'Core Dependencies',
					techItems: [
						{
							id: 'jsonwebtoken',
							name: 'jsonwebtoken',
							logo: 'https://jwt.io/img/pic_logo.svg',
						},
						{
							id: 'bcrypt',
							name: 'bcrypt',
							logo: 'https://img.stackshare.io/service/1032/bcrypt.png',
						},
						{
							id: 'cors',
							name: 'cors',
						},
						{
							id: 'helmet',
							name: 'helmet',
							logo: 'https://helmetjs.github.io/images/logo.svg',
						},
					],
				},
				{
					type: 'service-box',
					title: 'Testing & Quality',
					techItems: [
						{
							id: 'jest',
							name: 'Jest',
							logo: 'https://raw.githubusercontent.com/facebook/jest/main/website/static/img/jest.png',
						},
						{
							id: 'rtl',
							name: 'React Testing Library',
							logo: 'https://testing-library.com/img/octopus-64x64.png',
						},
						{
							id: 'sonarqube',
							name: 'SonarQube',
							logo: 'https://sonarcloud.io/images/SonarCloud-logo.svg',
						},
					],
				},
				{
					type: 'service-box',
					title: 'Code Quality',
					techItems: [
						{
							id: 'eslint',
							name: 'ESLint',
							logo: 'https://raw.githubusercontent.com/eslint/eslint/main/static/logo.svg',
						},
						{
							id: 'prettier',
							name: 'Prettier',
							logo: 'https://prettier.io/icon.png',
						},
						{
							id: 'husky',
							name: 'Husky',
							logo: 'https://typicode.github.io/husky/assets/logo.svg',
						},
						{
							id: 'lint-staged',
							name: 'lint-staged',
							logo: 'https://raw.githubusercontent.com/okonet/lint-staged/master/logo/logo.png',
						},
					],
				},
				{
					type: 'service-box',
					title: 'Type Safety',
					techItems: [
						{
							id: 'typescript',
							name: 'TypeScript',
							logo: 'https://raw.githubusercontent.com/microsoft/TypeScript/main/branding/ts-logo-256.png',
						},
						{
							id: 'zod',
							name: 'Zod',
							logo: 'https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg',
						},
					],
				},
			],
		},
	],
};

// Classes to manage the architecture components
class ArchitectureManager {
	constructor(data) {
		this.data = data;
		this.container = document.querySelector('.space-y-8');
	}

	render() {
		this.container.innerHTML = this.data.tiers.map((tier) => this.renderTier(tier)).join('');
		this.initializeTooltips();
	}

	renderTier(tier) {
		return `
            <div class="tier-group" id="${tier.id}">
                <h3 class="tier-title">${tier.title}</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${tier.components.map((component) => this.renderComponent(component)).join('')}
                </div>
            </div>
        `;
	}

	renderComponent(component) {
		switch (component.type) {
			case 'user-group':
				return this.renderUserGroup(component);
			case 'component-box':
			case 'service-box':
				return this.renderComponentBox(component);
			default:
				return '';
		}
	}

	renderUserGroup(component) {
		return `
            <div class="flex flex-col items-center justify-center text-center">
                <div class="text-6xl mb-4">${component.icon}</div>
                <h4 class="component-title text-sky-400">${component.title}</h4>
                <p class="text-slate-400 text-sm">${component.description}</p>
            </div>
        `;
	}

	renderComponentBox(component) {
		return `
            <div class="${component.type}">
                <h4 class="component-title">${component.title}</h4>
                ${
					component.description
						? `<p class="text-slate-400 text-sm -mt-3 mb-3 text-center">${component.description}</p>`
						: ''
				}
                <div class="space-y-3">
                    ${component.techItems.map((item) => this.renderTechItem(item)).join('')}
                </div>
            </div>
        `;
	}

	renderTechItem(item) {
		const logoHtml = item.logo
			? `<img src="${item.logo}" class="tech-logo" ${item.logoStyle ? `style="${item.logoStyle}"` : ''} alt="${
					item.name
			  }" />`
			: '';

		return `
            <div class="tech-item" data-tech="${item.id}">
                ${logoHtml}
                <span>${item.name}</span>
            </div>
        `;
	}

	initializeTooltips() {
		new TooltipManager();
	}
}

// Export the data and manager class
export { architectureData, ArchitectureManager };
