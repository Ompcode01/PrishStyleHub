##PrishStyleHub

To run PrishStyleHub on your local machine, follow these steps. You will need Node.js (v18 or higher) installed on your computer.
1. Download the Project
In the Google AI Studio UI, go to the Settings menu (usually a gear icon or three dots in the top right) and select:
Export to GitHub (to push the code to a repository) or
Download ZIP (to get a local archive of the files).
2. Install Dependencies
Open your terminal inside the project folder and run:
code
Bash
npm install
This will install all necessary libraries like React, Vite, and Framer Motion.
3. Set Up Environment Variables
Create a new file named .env in the root directory (the same level as package.json). Copy the contents from .env.example and provide your Gemini API key:
code
Env
GEMINI_API_KEY="your_api_key_here"
(Note: You can get an API key from the Google AI Studio Secrets panel.)
4. Run the Development Server
Start the local server by running:
code
Bash
npm run dev
By default, the project will be available at http://localhost:3000. Open this URL in your web browser to see your site.
5. Building for Production
If you want to create an optimized production build:
code
Bash
# Create the production build
npm run build

# Preview the production build locally
npm run preview
Summary of Commands:
Action	Command
Install	npm install
Start Dev	npm run dev
Build	npm run build
Preview	npm run preview
Your project is now ready for local development and customization!