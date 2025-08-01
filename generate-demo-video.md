# Generate Neural Demo Video

## Instructions

1. **Open the Neural Demo Animation**
   - Open `public/neural-demo.html` in your web browser
   - The animation will start automatically

2. **Record the Animation**
   - Use screen recording software (QuickTime, OBS, etc.)
   - Set recording area to capture just the browser window
   - Record for exactly 15 seconds
   - The animation cycles through:
     - 0-2s: Initialization
     - 2-6s: Network formation
     - 6-10s: Intelligence emergence
     - 10-12s: Big bang explosion
     - 12-15s: Cosmic expansion

3. **Save the Video**
   - Export as MP4 format
   - Save as `neural-demo.mp4` in the `public/` folder
   - Ensure the video is 390x844 resolution (iPhone dimensions)
   - Use 60fps for smooth animation

4. **Alternative: Use the Recording Script**
   ```bash
   npm install puppeteer
   node record-demo.js
   ```
   Then manually record the browser window that opens.

## Animation Features

The neural demo shows:
- **Neural Nodes**: Pulsing golden nodes representing brain cells
- **Network Connections**: Lines forming between nearby nodes
- **Data Flow**: Animated particles traveling along connections
- **Intelligence Level**: Percentage counter showing AI emergence
- **Big Bang Effect**: Explosion of particles from center
- **Cosmic Web**: Background network representing universe structure

## Visual Style

- Black background
- Golden/yellow neural elements (#fbbf24)
- Smooth animations with easing
- Glowing effects and particle systems
- iPhone-optimized dimensions

The demo communicates:
- **Intelligence**: Through the intelligence level counter
- **Neural Networks**: Through the connected nodes and data flow
- **Big Bang**: Through the explosion effect and cosmic expansion 