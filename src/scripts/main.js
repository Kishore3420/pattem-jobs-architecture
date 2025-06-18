import { techData } from './techData.js';
import { architectureData, ArchitectureManager } from './architecture.js';

// Initialize architecture and tooltip functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
	const architectureManager = new ArchitectureManager(architectureData);
	architectureManager.render();
});
