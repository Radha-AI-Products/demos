# TripMate Demo: Build a Modern Travel App Front-End in Minutes with Blazor & Instruct UI

This demo showcases the source code used in the YouTube video "[Build an TripMate Front-End in Minutes Using Blazor & Instruct UI](https://www.youtube.com/watch?v=4EnZ0s9cAmo)". It highlights how quickly you can create a modern, responsive travel planning app UI using [Instruct UI](https://instructui.com/), a conversation AI tool for Blazor UI development, styled with [Tailwind CSS](https://tailwindcss.com/).

## Prerequisites

Before you can run or build this Blazor demo, which is featured in the linked YouTube video, ensure you have the following installed on your system:

* **[.NET SDK](https://dotnet.microsoft.com/download):** The latest supported .NET SDK is required to run Blazor applications.
* **A code editor (Optional but recommended):** For an enhanced development experience, consider using Visual Studio, Visual Studio Code with the C# extension, or JetBrains Rider.
* **[Node.js](https://nodejs.org/):** Node.js is necessary to run npm, which manages Tailwind CSS dependencies and builds the CSS.
* **[npm (Node Package Manager)](https://www.npmjs.com/):** npm is included with Node.js and will be used to install Tailwind CSS and execute build scripts.

## How to Build the Demo (as seen in the YouTube video)

Follow these steps to build and run the TripMate demo application, as demonstrated in the YouTube video:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Radha-AI-Products/demos.git
    cd demos/TripMate
    ```

2.  **Install Tailwind CSS dependencies:** Execute the following command in your terminal within the project directory:

    ```bash
    npm install
    ```

    This command will download and install all the Tailwind CSS and related packages listed in the `package.json` file.

3.  **Build Tailwind CSS:** After the dependencies are installed, run the npm script that compiles your CSS. This script is usually found under the `scripts` section in your `package.json` file (e.g., `css:build`). Run it using:

    ```bash
    npm run css:build
    ```

4.  **Run the Blazor application:** In the same terminal (still within the project directory),run the Blazor application using the .NET CLI:

    ```bash
    dotnet run
    ```

    This process compiles your Blazor code and integrates the static assets, including the Tailwind CSS output (typically in `wwwroot/css/app.css`).

5.  **Access the application in your browser:** Once the build and run process is complete, the terminal will display the URL where the application is hosted (usually something like `https://localhost:xxxx` or `http://localhost:xxxx`). Open this URL in your web browser to view the TripMate UI.

6.  **Explore the TripMate UI:** You can now interact with the TripMate demo, showcasing Blazor components built with Instruct UI and styled with Tailwind CSS, just as shown in the YouTube video.

7.  **Conclusion:** Now that you have the TripMate demo set up, you can explore and modify the application as needed. Feel free to make changes, experiment, and build your own travel planning app using Blazor and InstructUI.
8.  For more information on  InstuctUI visit: [InstructUI](https://instructui.com/)

