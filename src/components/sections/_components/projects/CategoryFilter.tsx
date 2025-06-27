interface CategoryFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-20 w-full max-w-4xl">
      <button
        onClick={() => onCategoryChange('all')}
        className={`inline-block rounded-full font-mono text-sm md:text-base transition-all duration-300 ${
          activeCategory === 'all'
            ? 'bg-primary-blue text-background'
            : 'bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-background'
        }`}
        style={{ padding: '4px 8px' }}
      >
        All
      </button>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`inline-block rounded-full font-mono text-sm md:text-base transition-all duration-300 ${
            activeCategory === category
              ? 'bg-primary-blue text-background'
              : 'bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-background'
          }`}
          style={{ padding: '4px 8px' }}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
