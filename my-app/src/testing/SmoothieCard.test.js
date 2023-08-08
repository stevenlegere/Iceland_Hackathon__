import React from 'react';
import { render } from '@testing-library/react';
import SmoothieCard from '../components/SmoothieCard';

// Test suite for the SmoothieCard component
describe('SmoothieCard', () => {

    // Test case to check that the SmoothieCard component renders correctly
    it('renders correctly', () => {
        // Render the SmoothieCard component
        const { container } = render(<SmoothieCard smoothie={{title: 'Smoothie', allergens: 'nuts', ingredients: 'banana, milk, nuts', rating: 4}} />);
        // Check that the SmoothieCard component renders correctly
        expect(container).toMatchSnapshot();
    });

    // Test case to check that the SmoothieCard component renders the correct smoothie title
    it('renders the correct smoothie title', () => {
        // Render the SmoothieCard component
        const { getByText } = render(<SmoothieCard smoothie={{title: 'Smoothie', allergens: 'nuts', ingredients: 'banana, milk, nuts', rating: 4}} />);
        // Check that the SmoothieCard component renders the correct smoothie title
        expect(getByText('Smoothie')).toBeInTheDocument();
    });

    // Test case to check that the SmoothieCard component renders the correct smoothie allergens
    it('renders the correct smoothie allergens', () => {
        // Render the SmoothieCard component
        const { getByText } = render(<SmoothieCard smoothie={{title: 'Smoothie', allergens: 'nuts', ingredients: 'banana, milk, nuts', rating: 4}} />);
        // Check that the SmoothieCard component renders the correct smoothie allergens
        expect(getByText('nuts')).toBeInTheDocument();
    });

    // Test case to check that the SmoothieCard component renders the correct smoothie rating
    it('renders the correct smoothie rating', () => {
        // Render the SmoothieCard component
        const { getByText } = render(<SmoothieCard smoothie={{title: 'Smoothie', allergens: 'nuts', ingredients: 'banana, milk, nuts', rating: 4}} />);
        // Check that the SmoothieCard component renders the correct smoothie rating
        expect(getByText('4')).toBeInTheDocument();
    });


});


