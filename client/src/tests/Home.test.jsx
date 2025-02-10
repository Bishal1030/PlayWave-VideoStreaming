import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Home from '../pages/Home';
import axios from 'axios';


test('File input updates state when a file is selected', () => {
    const setLinkMock = vi.fn();
    render(<Home setLink={setLinkMock} />);

    //  file input correctly using test ID
    const fileInput = screen.getByTestId('file-input'); 

    // Creating a test file
    const testFile = new File(['video content'], 'test-video.mp4', { type: 'video/mp4' });

    // Simulate file selection
    fireEvent.change(fileInput, { target: { files: [testFile] } });

    // Verify if the file input received the correct file
    expect(fileInput.files[0]).toBe(testFile);
});

test('handles axios error gracefully', async () => {
    vi.mock('axios');
    const dummySetLink = vi.fn();
    // Spy on console.log to verify that errors are logged
    const consoleErrorSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    
    render(<Home setLink={dummySetLink} />);
    
    const fileInput = screen.getByTestId('file-input');
    const testFile = new File(['dummy content'], 'dummy.mp4', { type: 'video/mp4' });
    fireEvent.change(fileInput, { target: { files: [testFile] } });
    
    // Mock axios POST to reject with an error
    axios.post.mockRejectedValueOnce(new Error('Network error'));
    
    const uploadButton = screen.getByText(/Upload Video/i);
    fireEvent.click(uploadButton);
    
    // Wait for the error handling to take place
    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalled();
      expect(dummySetLink).not.toHaveBeenCalled();
    });
    
    consoleErrorSpy.mockRestore();
  });

  test("renders the file input and upload button", () => {
    // Create a mock function for setLink using vi.fn()
    const mockSetLink = vi.fn();
  
    // Render the Home component
    render(<Home setLink={mockSetLink} />);
  
    // Check if the file input is rendered correctly
    const fileInput = screen.getByTestId("file-input");
    expect(fileInput).toBeInTheDocument();
  
    // Check if the upload button is rendered correctly
    const uploadButton = screen.getByText(/Upload Video/i);
    expect(uploadButton).toBeInTheDocument();
  });
