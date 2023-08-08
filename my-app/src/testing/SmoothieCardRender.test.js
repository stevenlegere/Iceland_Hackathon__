import React from 'react';
import { render } from '@testing-library/react';
import SmoothieCard from '../components/SmoothieCard';

const mockSmoothie = {
  id: 1,
  title: 'Berry Bliss',
  allergens: 'Gluten, Nuts',
  ingredients: 'Berries, Yogurt, Honey',
  rating: 4.5,
  image: 'smoothie-image-url',
};

test('renders smoothie card with correct content', () => {
  const { getByAltText, getByText } = render(<SmoothieCard smoothie={mockSmoothie} />);
  
  const smoothieImage = getByAltText('Smoothie');
  const smoothieTitle = getByText('Berry Bliss');
  const smoothieAllergens = getByText('Gluten, Nuts');
  const smoothieRating = getByText('4.5');
  
  expect(smoothieImage).toBeInTheDocument();
  expect(smoothieTitle).toBeInTheDocument();
  expect(smoothieAllergens).toBeInTheDocument();
  expect(smoothieRating).toBeInTheDocument();
});
