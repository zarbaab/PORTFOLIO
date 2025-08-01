import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
        Hello, I’m Zarbaab Mehboob, a passionate Frontend Developer with a keen interest in UI/UX design. With a strong foundation in creating intuitive and visually appealing user interfaces, I strive to deliver impactful and memorable digital experiences
        </p>
        <br />
   <h1 className="text-green-600 font-semibold text-xl">
  Education & Training
</h1>
<ol style={{ listStyleType: 'decimal', paddingInlineStart: '20px' }} className="mt-2 space-y-2">
  <li>
    <strong>Bachelor of Science in Software Engineering</strong> — COMSATS University Islamabad, Vehari Campus  
    <br />
    <span className="text-sm">2021 – 2025 | Current GPA: 3.86</span>
  </li>
</ol>

        <br />
        <br />
      <h1 className="text-green-600 font-semibold text-xl">
  Skills & Expertise
</h1>
<div className="mt-2 space-y-4">

  <div>
    <strong>Frontend Development:</strong>
    <ul className="list-disc list-inside ml-4">
      <li>HTML, CSS, JavaScript, React.js</li>
      <li>Tailwind CSS, Bootstrap</li>
      <li>Responsive Web Design</li>
    </ul>
  </div>

  <div>
    <strong>Design Tools:</strong>
    <ul className="list-disc list-inside ml-4">
      <li>Adobe Photoshop, Canva, Figma, Adobe XD</li>
    </ul>
  </div>

  <div>
    <strong>Design Principles:</strong>
    <ul className="list-disc list-inside ml-4">
      <li>Graphic Design</li>
      <li>User Interface Design</li>
      <li>User Experience Design (UX)</li>
    </ul>
  </div>

  <div>
    <strong>Problem-Solving:</strong>
    <ul className="list-disc list-inside ml-4">
      <li>Effective in identifying and resolving complex software and design challenges</li>
    </ul>
  </div>

  <div>
    <strong>Communication & Collaboration:</strong>
    <ul className="list-disc list-inside ml-4">
      <li>Skilled in team environments and clear communication of ideas</li>
    </ul>
  </div>

  <div>
    <strong>Additional Highlights:</strong>
    <ul className="list-disc list-inside ml-4">
      <li>UI/UX & Graphic Designer with freelance experience serving small businesses</li>
      <li>Founder of <i>Hijab & Abaya</i>, a small business selling modest fashion</li>
      <li>Vocalist with 12 years of performance experience</li>
      <li>Voiceover artist for stories and advertisements (1 year of experience)</li>
    </ul>
  </div>
</div>

<br /><br />

<h1 className="text-green-600 font-semibold text-xl">
  Professional Experience
</h1>
<div className="mt-2 space-y-2">
  <h2 className="font-semibold text-lg">Graphic Designer</h2>
  <p><b>Al-Raheem Welfare</b></p>
  <ul className="list-disc list-inside ml-4">
    <li>Delivered creative, high-quality graphic designs with speed and accuracy</li>
    <li>Managed multiple projects simultaneously under tight deadlines</li>
    <li>Prepared final print-ready files for production</li>
    <li>Collaborated with the marketing team to develop strategies and creative assets</li>
  </ul>
</div>

<br /><br />

<h1 className="text-green-600 font-semibold text-xl">
  Mission Statement
</h1>
<p className="mt-2">
  My mission is to leverage my skills and creativity to deliver innovative <b>frontend development</b> solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
</p>


      </div>
    </div>
  );
}

export default About;
