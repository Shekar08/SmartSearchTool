import { useState } from 'react';
import { Search } from 'lucide-react';

interface Course {
  title: string;
  description: string;
  link: string;
}

function SmartSearchTool() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Course[]>([]);

  const allCourses: Course[] = [
    { title: "Python for Data Science", description: "Learn Python from scratch and how to apply it to Data Science", link: "https://courses.analyticsvidhya.com/courses/python-for-data-science" },
    { title: "Data Science with R", description: "Learn Data Science with R from scratch", link: "https://courses.analyticsvidhya.com/courses/data-science-with-r" },
    { title: "Machine Learning with Python", description: "Learn Machine Learning with Python from scratch", link: "https://courses.analyticsvidhya.com/courses/machine-learning-with-python" },
    { title: "Deep Learning with Python", description: "Learn Deep Learning with Python from scratch", link: "https://courses.analyticsvidhya.com/courses/deep-learning-with-python" },
    { title: "Natural Language Processing with Python", description: "Learn Natural Language Processing with Python from scratch", link: "https://courses.analyticsvidhya.com/courses/natural-language-processing-with-python" },
    { title: "Data Visualization with Tableau", description: "Learn Data Visualization with Tableau from scratch", link: "https://courses.analyticsvidhya.com/courses/data-visualization-with-tableau" },
    { title: "Data Science with SQL", description: "Learn Data Science with SQL from scratch", link: "https://courses.analyticsvidhya.com/courses/data-science-with-sql" },
    { title: "Data Science with Excel", description: "Learn Data Science with Excel from scratch", link: "https://courses.analyticsvidhya.com/courses/data-science-with-excel" },
    { title: "Data Science with Power BI", description: "Learn Data Science with Power BI from scratch", link: "https://courses.analyticsvidhya.com/courses/data-science-with-power-bi" },
    { title: "Data Science with Python and R", description: "Learn Data Science with Python and R from scratch", link: "https://courses.analyticsvidhya.com/courses/data-science-with-python-and-r" },
    { title: "Certified Data Scientist with Python", description: "Learn Data Science with Python and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-data-scientist-with-python" },
    { title: "Certified Data Scientist with R", description: "Learn Data Science with R and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-data-scientist-with-r" },
    { title: "Certified Machine Learning Engineer", description: "Learn Machine Learning and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-machine-learning-engineer" },
    { title: "Certified Deep Learning Engineer", description: "Learn Deep Learning and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-deep-learning-engineer" },
    { title: "Certified Natural Language Processing Engineer", description: "Learn Natural Language Processing and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-natural-language-processing-engineer" },
    { title: "Certified Data Analyst with Excel", description: "Learn Data Analysis with Excel and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-data-analyst-with-excel" },
    { title: "Certified Data Analyst with SQL", description: "Learn Data Analysis with SQL and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-data-analyst-with-sql" },
    { title: "Certified Data Analyst with Tableau", description: "Learn Data Analysis with Tableau and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-data-analyst-with-tableau" },
    { title: "Certified Data Analyst with Power BI", description: "Learn Data Analysis with Power BI and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-data-analyst-with-power-bi" },
    { title: "Certified Business Analyst", description: "Learn Business Analysis and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-business-analyst" },
    { title: "Certified Marketing Analyst", description: "Learn Marketing Analysis and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-marketing-analyst" },
    { title: "Certified Operations Analyst", description: "Learn Operations Analysis and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-operations-analyst" },
    { title: "Certified Financial Analyst", description: "Learn Financial Analysis and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-financial-analyst" },
    { title: "Certified Human Resource Analyst", description: "Learn Human Resource Analysis and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-human-resource-analyst" },
    { title: "Certified Supply Chain Analyst", description: "Learn Supply Chain Analysis and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-supply-chain-analyst" },
    { title: "Certified Data Scientist with SAS", description: "Learn Data Science with SAS and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-data-scientist-with-sas" },
    { title: "Certified Data Scientist with SPSS", description: "Learn Data Science with SPSS and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-data-scientist-with-spss" },
    { title: "Certified Data Scientist with JMP", description: "Learn Data Science with JMP and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-data-scientist-with-jmp" },
    { title: "Certified Data Scientist with MATLAB", description: "Learn Data Science with MATLAB and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-data-scientist-with-matlab" },
    { title: "Certified Data Scientist with Julia", description: "Learn Data Science with Julia and get certified", link: "https://courses.analyticsvidhya.com/courses/certified-data-scientist-with-julia" },
  ];

  const handleSearch = () => {
    const filteredResults = allCourses.filter(result => result.title.toLowerCase().includes(searchQuery.toLowerCase()));
    setSearchResults(filteredResults);
  };

  const handleReset = () => {
    setSearchResults([]);
    setSearchQuery('');
  };

  return (
    <div className="h-screen w-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.analyticsvidhya.com/wp-content/uploads/2017/04/13034116/Screen-Shot-2017-04-13-at-9.10.43-AM.png)' }}>
      <div className="max-w-7xl mx-auto p-4 mt-12 rounded-lg shadow-md bg-white bg-opacity-90">
        <h1 className="text-3xl font-bold mb-4">Smart Course Search</h1>
        <div className="flex items-center mb-4 bg-gray-100 rounded-lg p-4">
          <Search className="w-6 h-6 text-gray-400 mr-2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for courses"
            className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <button
            className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        {searchResults.length > 0 && (
          <ul className="list-none p-0 m-0">
            {searchResults.map((result, index) => (
              <li key={index} className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-bold mb-2">{result.title}</h2>
                <p className="text-sm text-gray-600">{result.description}</p>
                <a
                  href={result.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Open Course
                </a>
              </li>
            ))}
          </ul>
        )}
        {searchResults.length === 0 && searchQuery !== '' && (
          <ul className="list-none p-0 m-0 mt-4">
            {allCourses.slice(0, 5).map((course, index) => (
              <li key={index} className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-bold mb-2">{course.title}</h2>
                <p className="text-sm text-gray-600">{course.description}</p>
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Open Course
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SmartSearchTool