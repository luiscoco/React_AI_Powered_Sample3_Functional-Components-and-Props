# Prompt for the Code Agent (Codex, Gemini Code Assistant or Copilot)

Objective: Refactor our profile card into a reusable component (ProfileCard) and use it multiple times in the App component.

Context:

Objective: Practice creating components and using props.

Project: 01-hola-mundo-react.

File structure: We’ll create a new file for our component.

Versions: React v18+, TypeScript.

Task:

Refactor the current profile card into a reusable component.

Steps:

Create a new folder src/components.

Inside src/components, create a new file named ProfileCard.tsx.

In ProfileCard.tsx:

a. Define a TypeScript interface for the component props. Name the interface ProfileCardProps. It must define three properties: userName (string), imageUrl (string), and description (string).

b. Create a functional component called ProfileCard that accepts these props.

c. Move the JSX logic of the profile card that was in App.tsx into this new component.

d. Replace the hardcoded data with the values received via props.

e. Export the ProfileCard component as the default export.

In src/App.tsx:

a. Remove the userName and userProfile variables.

b. Import the ProfileCard component from ./components/ProfileCard.tsx.

c. Inside the App component’s JSX, use the ProfileCard component three times, each with data for a different person. Use a Fragment to wrap the three cards.

d. Example data for the cards:

Card 1: Ada Lovelace (the data we already had).

Card 2: Grace Hopper, image https://i.imgur.com/tk5Ziro.jpeg, description “Pioneer in compilers and COBOL.”

Card 3: Margaret Hamilton, image https://i.imgur.com/t2yUXL6.jpeg, description “Director of Software Engineering for the Apollo Project.”

Create a new file src/components/ProfileCard.css and move the .profile-card styles from App.css into this new file.

In ProfileCard.tsx, import ./ProfileCard.css.

In src/App.css, add a simple style for App’s main container (e.g., display: flex, gap: 16px) so the cards are displayed side by side.

Deliverables:

Final code for src/components/ProfileCard.tsx.

Final code for src/components/ProfileCard.css.

Final code for src/App.tsx.

Final code for src/App.css.

Acceptance Criteria:

The application refreshes in the browser without errors.

Three profile cards are now displayed side by side.

Each card shows a different person’s information (image, name, description).

The code in App.tsx is much cleaner and more declarative, simply instantiating three ProfileCard components.

Verification Instructions:
• Inspect the DOM in the developer tools. You’ll see the div structure with the profile-card class repeated three times, demonstrating component reuse.
• In VS Code, notice how TypeScript helps with prop autocompletion when using the <ProfileCard ... /> component and would flag an error if you forgot to pass any required prop.
