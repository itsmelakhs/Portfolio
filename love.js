// script.js
document.getElementById('timelineForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = new Date(document.getElementById('date').value).toLocaleDateString();

    // Create a new timeline item
    const timelineItem = document.createElement('div');
    timelineItem.classList.add('timeline-item');

    timelineItem.innerHTML = `
        <div class="timeline-content">
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
        <div class="timeline-date">${date}</div>
    `;

    // Append the new item to the timeline
    document.getElementById('timeline').appendChild(timelineItem);

    // Clear the form
    document.getElementById('timelineForm').reset();
});
