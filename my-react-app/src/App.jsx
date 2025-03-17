import { useState } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import CategoryTabs from './components/CategoryTabs/CategoryTabs';
import CourseCard from './components/CourseCard/CourseCard';
import './index.css';

function App() {
  const [courses] = useState([
    {
      id: 1,
      title: "Machine Learning And Deep Learning",
      instructor: "Potato Head",
      schedule: { days: "Mon, Wed", time: "13:00 ~ 14:00" },
      weeks: 8,
      enrolled: false,
    },
    {
      id: 2,
      title: "Electronics",
      instructor: "Lion",
      schedule: { days: "Mon, Tue", time: "15:00 ~ 17:00" },
      weeks: 8,
      enrolled: false,
    },
    {
      id: 3,
      title: "Data Science",
      instructor: "Keskes",
      schedule: { days: "Mon, Wed", time: "13:00 ~ 14:00" },
      weeks: 8,
      enrolled: false,
    },
    {
      id: 4,
      title: "Advanced Mathematics",
      instructor: "Potato Head",
      schedule: { days: "Mon, Wed", time: "13:00 ~ 14:00" },
      weeks: 8,
      enrolled: false,
    },
    {
      id: 5,
      title: "Python Scripting",
      instructor: "Lion",
      schedule: { days: "Mon, Tue", time: "15:00 ~ 17:00" },
      weeks: 8,
      enrolled: false,
    },
    {
      id: 6,
      title: "Excel And Office Tools",
      instructor: "Keskes",
      schedule: { days: "Mon, Wed", time: "13:00 ~ 14:00" },
      weeks: 8,
      enrolled: true,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleEnroll = (courseId) => {
    console.log(`Enrolled in course ${courseId}`);
  };

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? course.categoryId === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  console.log("Filtered Courses:", filteredCourses);

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <SearchBar onSearch={handleSearch} />
        <CategoryTabs onCategoryClick={handleCategoryClick} />

        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              instructor={course.instructor}
              schedule={course.schedule}
              weeks={course.weeks}
              enrolled={course.enrolled}
              onEnroll={() => handleEnroll(course.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;