import { useEffect, useState } from 'react';
import supabase from './config/supabaseConfig';
import SmoothieCard from './components/SmoothieCard';
import './App.css';

const App = () => {
  // console.log(supabase);

  // State variable to handle smoothie data and allergen filtering
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);
  const [selectedAllergens, setSelectedAllergens] = useState([]);

  console.log(smoothies);
  // Function to handle allergen selection and filtering
  const handleAllergensChange = (allergen) => {
    // console.log("hey");
    setSelectedAllergens((prev) =>
      prev.includes(allergen) ? prev.filter((item) => item !== allergen) : [...prev, allergen]
    );
  };


  // useEffect hook to fetch smoothies from the database on component mount
  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase.from('smoothies').select();
      // Handle any fetch errors and update state accordingly
      if (error) {
        setFetchError('Could not fetch the smoothies');
        setSmoothies(null);
        console.log(error);
      }
      if (data) {
        setSmoothies(data);
        setFetchError(null);
      }
    };
    // Invoke the fetchSmoothies function
    fetchSmoothies();
  }, []);

  // Render the App component with smoothie data and allergen filter
  return (
    <div className="App">
    <div className="header">SMOOTH OPERATOR</div>
      {fetchError && <p>{fetchError}</p>}
      {smoothies && (
        <div className="smoothies">
          {/* Add checkboxes for each allergen */}
          <div className="allergen-filter">
          <h1 className="title">Filter by allergy</h1>
            {['gluten', 'nuts', 'peanuts', 'milk', 'soy', 'egg', 'sesame'].map((allergen) => {
              const prefixedAllergen = `no ${allergen}`;
              {/* console.log(selectedAllergens); */}
              return (
                <label key={allergen}>
                  <input
                    type="checkbox"
                    // disabled={selectedAllergens[0] && selectedAllergens[0] !== allergen}
                    value={allergen}
                    checked={selectedAllergens.includes(allergen)}
                    onChange={() => handleAllergensChange(allergen)}
                  />
                  {prefixedAllergen.charAt(0).toUpperCase() + prefixedAllergen.slice(1)}
                </label>
              );
            })}
          </div>
          {/* Filter smoothies based on selected allergens */}
          <div className="smoothie-grid">
          {smoothies
  .filter((smoothie) => {
    return selectedAllergens.every((allergen) => !smoothie?.allergens?.includes(allergen));
  })
  .map((smoothie) => (
    <SmoothieCard key={smoothie.id} smoothie={smoothie} />
  ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
