// src/components/SectionHeading.jsx

function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-2 font-heading">
        {title}
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionHeading;