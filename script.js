// Toggle project details visibility
function toggleDetails(projectId) {
    const projectDetails = document.getElementById(`${projectId}-details`);
    projectDetails.classList.toggle('active');
}
