import './CategoryTabs.css';

function CategoryTabs({ onCategoryClick }) {
  const categories = [
    { id: 1, name: 'Coding' },
    { id: 2, name: 'Languages' },
    { id: 3, name: 'Mathematics' },
    { id: 4, name: 'Excel' },
    { id: 5, name: 'Physics' },
    { id: 6, name: 'Other' },
  ];

  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category.id}
          className="category-tab"
          onClick={() => onCategoryClick(category.id)}
          aria-label={`Filter by ${category.name}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;