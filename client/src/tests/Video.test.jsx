import { render, screen } from "@testing-library/react";
import { expect, vi, test, describe } from "vitest";
import Video from "../components/Video";
import '@testing-library/jest-dom'; 

import videojs from "video.js";
vi.mock("video.js");

describe("Video Component", () => {
  let mockPlayerInstance;
  let onReadyMock;

  beforeEach(() => {
    // Create a mock player instance with spies
    mockPlayerInstance = {
      dispose: vi.fn(),
      autoplay: vi.fn(),
      src: vi.fn(),
      isDisposed: vi.fn().mockReturnValue(false),
    };

    // Ensure video.js always returns the mock player
    videojs.mockImplementation(() => mockPlayerInstance);

    onReadyMock = vi.fn();  // Mock the onReady callback
  });

  test("renders the video component", () => {
    render(<Video options={{ autoplay: false, sources: [] }} onReady={onReadyMock} />);
    
    // Ensure the component is in the DOM
    expect(screen.getByTestId("video-container")).toBeInTheDocument();
  });

  test("disposes of the player on unmount", () => {
    const { unmount } = render(<Video options={{ autoplay: false, sources: [] }} />);
    
    // Unmount the component
    unmount();
    
    // Ensure dispose is called on the player instance
    expect(mockPlayerInstance.dispose).toHaveBeenCalled();
  });
});