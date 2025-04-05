function saveProgress(courseId) {
  localStorage.setItem(courseId, 'completed');
  alert('Course marked as completed!');
  
  // Optional: Update progress bar to 100% when course is marked completed
  updateProgressBar(100);
}

// For displaying list of completed courses (like on a "My Courses" page)
window.onload = function () {
  const list = document.getElementById('progress-list');
  if (list) {
    for (let key in localStorage) {
      if (localStorage[key] === 'completed') {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerText = `${key.replace('-', ' ')} - Completed`;
        list.appendChild(li);
      }
    }
  }

  // Load progress if on course detail page
  const progressBar = document.getElementById('courseProgressBar');
  if (progressBar) {
    const courseKey = 'html-course-progress';
    const savedProgress = localStorage.getItem(courseKey);
    if (savedProgress) {
      updateProgressBar(100);
    }
  }
};

// Reusable function to update progress bar
function updateProgressBar(progress) {
  const progressBar = document.getElementById('courseProgressBar');
  if (progressBar) {
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress);
    progressBar.innerText = `${progress}%`;
  }
}
