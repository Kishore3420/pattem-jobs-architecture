import { techData } from './techData.js';

export class TooltipManager {
	constructor() {
		this.tooltip = document.getElementById('tooltip');
		this.techItems = document.querySelectorAll('.tech-item');
		this.isTooltipHovered = false;
		this.hideTimeout = null;
		this.init();
	}

	init() {
		this.techItems.forEach((item) => {
			item.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
			item.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
			item.addEventListener('mousemove', this.handleMouseMove.bind(this));
		});

		// Add event listeners for the tooltip itself
		this.tooltip.addEventListener('mouseenter', (e) => {
			e.stopPropagation();
			this.isTooltipHovered = true;
			clearTimeout(this.hideTimeout);
		});

		this.tooltip.addEventListener('mouseleave', (e) => {
			e.stopPropagation();
			this.isTooltipHovered = false;
			this.hideTooltip();
		});
	}

	handleMouseEnter(e) {
		clearTimeout(this.hideTimeout);
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

	handleMouseLeave(e) {
		// Only hide if we're not hovering over the tooltip
		if (!this.isTooltipHovered) {
			this.hideTooltip();
		}
	}

	hideTooltip() {
		this.hideTimeout = setTimeout(() => {
			if (!this.isTooltipHovered) {
				this.tooltip.style.display = 'none';
			}
		}, 300); // 300ms delay to give time to reach the tooltip
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
