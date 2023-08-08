import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Mocking the smoothies data
jest.mock('./config/supabaseConfig', () => ({
  from: () => ({
    select: () => ({
      data: [
        {
          id: 1,
          title: 'Berry Bliss',
          allergens: 'Gluten, Nuts',
          ingredients: 'Berries, Yogurt, Honey',
          rating: 4.5,
          image: 'smoothie-image-url',
        },
      ],
    }),
  }),
}));

test('renders app with smoothies and allergen checkboxes', async () => {
  // Wrap the rendering and interactions in an act block
  act(() => {
    render(<App />);
  });

  // Wait for the smoothies to be loaded
  await screen.findByText('Berry Bliss');

  // Check if smoothie cards are rendered
  const smoothieCard = screen.getByText('Berry Bliss');
  expect(smoothieCard).toBeInTheDocument();

  // Check if allergen checkboxes are rendered
  const glutenCheckbox = screen.getByLabelText('No gluten');
  const nutsCheckbox = screen.getByLabelText('No nuts');
  // ... other allergen checkboxes

  expect(glutenCheckbox).toBeInTheDocument();
  expect(nutsCheckbox).toBeInTheDocument();

  // Simulate selecting an allergen
  act(() => {
    userEvent.click(glutenCheckbox);
  });

  // Ensure the allergen is selected
  expect(glutenCheckbox).toBeChecked();

  // Simulate unselecting the same allergen
  act(() => {
    userEvent.click(glutenCheckbox);
  });

  // Ensure the allergen is unselected
  expect(glutenCheckbox).not.toBeChecked();
});
