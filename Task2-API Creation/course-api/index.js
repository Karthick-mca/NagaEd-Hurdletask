const express = require('express');
const app = express();

app.use(express.json());

let courses = [
  { id: 1, title: 'Introduction to Python', description: 'A beginner course on Python programming.', duration: '3 hours' },
  { id: 2, title: 'Advanced JavaScript', description: 'In-depth JavaScript concepts for experienced developers.', duration: '5 hours' }
];

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.post('/api/courses', (req, res) => {
  const { title, description, duration } = req.body;

  if (!title || !description || !duration) {
    return res.status(400).json({ error: 'Title, description, and duration are required.' });
  }

  const newCourse = {
    id: courses.length + 1,
    title,
    description,
    duration
  };

  courses.push(newCourse);
  res.status(201).json(newCourse);
});

app.put('/api/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  const { title, description, duration } = req.body;

  const course = courses.find(course => course.id === courseId);

  if (!course) {
    return res.status(404).json({ error: 'Course not found.' });
  }

  if (title) course.title = title;
  if (description) course.description = description;
  if (duration) course.duration = duration;

  res.json(course);
});

app.delete('/api/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  
  const courseIndex = courses.findIndex(course => course.id === courseId);

  if (courseIndex === -1) {
    return res.status(404).json({ error: 'Course not found.' });
  }

  courses.splice(courseIndex, 1);

  res.json({ message: 'Course deleted successfully.' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
