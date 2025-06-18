import { techData } from './techData.js';
import { architectureData, ArchitectureManager } from './architecture.js';

// Tooltip management
class TooltipManager {
	constructor() {
		this.tooltip = document.getElementById('tooltip');
		this.techItems = document.querySelectorAll('.tech-item');
		this.init();
	}

	init() {
		this.techItems.forEach((item) => {
			item.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
			item.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
			item.addEventListener('mousemove', this.handleMouseMove.bind(this));
		});
	}

	handleMouseEnter(e) {
		const techKey = e.currentTarget.getAttribute('data-tech');
		if (techData[techKey]) {
			const data = techData[techKey];
			this.tooltip.innerHTML = `
                <h5>${data.name}</h5>
                <p><strong>What:</strong> ${data.desc}</p>
                <p><strong>Why:</strong> ${data.purpose}</p>
                <a href="${data.link}" target="_blank" rel="noopener noreferrer">Learn more &rarr;</a>
            `;
			this.tooltip.style.display = 'block';
		}
	}

	handleMouseLeave() {
		this.tooltip.style.display = 'none';
	}

	handleMouseMove(e) {
		let x = e.clientX + 15;
		let y = e.clientY + 15;

		// Prevent tooltip from going off-screen
		if (x + this.tooltip.offsetWidth + 20 > window.innerWidth) {
			x = e.clientX - this.tooltip.offsetWidth - 15;
		}
		if (y + this.tooltip.offsetHeight + 20 > window.innerHeight) {
			y = e.clientY - this.tooltip.offsetHeight - 15;
		}

		this.tooltip.style.left = `${x}px`;
		this.tooltip.style.top = `${y}px`;
	}
}

// Initialize architecture and tooltip functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
	const architectureManager = new ArchitectureManager(architectureData);
	architectureManager.render();
});
