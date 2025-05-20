# React---Cousre
Repo for learning react framework.

<!------------------ Environment setup ---------------------->

-> Download 'VS Code' / any code editor.

-> Download 'Node'

-> Creating Project

    - npx create-react-app project_name

        - npx: node package executer

        - cd project_name 

        - npm start / npm run start (Opening project)
        
        - npm run build (Another method)

    - npm create vite@latest (New easy method)
    
        - cd project_name

        - npm install / npm i (Installing node modules)

        - npm run dev (Opening project)

-> Linking tailwind in react

    - Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

        - npm install -D tailwindcss@3 postcss autoprefixer

        - npx tailwindcss init -p

    - Add the paths to all of your template files in your tailwind.config.js file.

        -  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],

    - Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

        - @tailwind base;
          @tailwind components;
          @tailwind utilities;




<!---------------------------- React Course -------------------------->

-> React makes eassy to manage & build complex frontend.

-> Most project don't need react in initial phase.

-> React is a library.

-> Topics to learn

    - Core to React (State or UI manipulation, JSX)
    
    - Component Reusability

    - Reusing of component (Props)

    - How to propagate change (hooks)

        - useState 

-> Additional addon to React

    - Router (React don't have Router)

    - State management (React don't have state management)

        - Redux, Redux toolkit, Zustand, Context API
    
    - Class based component

        - Legacy code
    
    - BAAS Apps

        - Social media clone, E-Commerce App,....

-> React is not a complete solution in most case

    - no seo, browser Render of js, no routing

    - NextJS,Remix,Gatsby

