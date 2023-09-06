"use client";
import { useState } from 'react'

export default function Home() {

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      job: 'BlockchainEngineer',
      resume: '',
      phone: '',
      github: '',
      twitter: '',
      website: '',
      location: '',
      discordUsername: '',
      superpower: 'Code Ninja',
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      // Define the API endpoint
      const endpoint = 'https://api.verbwire.com/jobs/submit';
  
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log(response)
          alert('Application submitted successfully!');
          formData.Reset();
          // You can redirect or show a success message here
        } else {
          alert('Failed to submit application.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
 
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
 return (
  <div className="grid items-center min-h-screen grid-cols-1 justify-center text-center px-6 sm:px-10 md:px-20 lg:px-40 xl:px-60">
    <h1 className="text-4xl font-bold mb-4">Verbwire Jobs</h1>
  <form onSubmit={handleSubmit} className="flex flex-col w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
    {/* Create input fields for each form field */}
    <label className="text-left">Name:</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="border border-black p-2 mb-4"
    />
    <label className="text-left">Email:</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="border border-black p-2 mb-4"
    />
    <label className="text-left">Job:</label>
    <select
      name="job"
      value={formData.job}
      onChange={handleChange}
      className="border border-black p-2 mb-4"
    >
      <option value="BlockchainEngineer">Blockchain Engineer</option>
      <option value="FrontendDeveloper">Frontend Developer</option>
      <option value="BackendDeveloper">Backend Developer</option>
      <option value="FullstackDeveloper">Fullstack Developer</option>
      <option value="DevOpsEngineer">DevOps Engineer</option>
      <option value="CommunityManager">Community Manager</option>
      <option value="DeveloperRelations">Developer Relations</option>
      <option value="Other">Other</option>
    </select>
    <label className="text-left">Resume:</label>
    <input
      type="text"
      name="resume"
      value={formData.resume}
      onChange={handleChange}
      className="border border-black p-2 mb-4"
    />
    <label className="text-left">Phone:</label>
    <input
      type="text"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className="border border-black p-2 mb-4"
    />
    <label className="text-left">Github:</label>
    <input
      type="text"
      name="github"
      value={formData.github}
      onChange={handleChange}
      className="border border-black p-2 mb-4"
    />
    <label className="text-left">Twitter:</label>
    <input
      type="text"
      name="twitter"
      value={formData.twitter}
      onChange={handleChange}
      className="border border-black p-2 mb-4"
    />
    <label className="text-left">Website:</label>
    <input
      type="text"
      name="website"
      value={formData.website}
      onChange={handleChange}
      className="border border-black p-2 mb-4"
    />
    <label className="text-left">Location:</label>
    <input
      type="text"
      name="location"
      value={formData.location}
      onChange={handleChange}
      className="border border-black p-2 mb-4"
    />
    <label className="text-left">Discord Username:</label>
    <input
      type="text"
      name="discordUsername"
      value={formData.discordUsername}
      onChange={handleChange}
      className="border border-black p-2 mb-4"
    />
    <label className="text-left">Superpower:</label>
    <select
      name="superpower"
      value={formData.superpower}
      onChange={handleChange}
      className="border border-black p-2 mb-4"
    >
      <option value="CodeNinja">Code Ninja</option>
      <option value="DesignWizard">Design Wizard</option>
      <option value="CommunityHero">Community Hero</option>
      <option value="Other">Other</option>
    </select>
    {/* Add a submit button */}
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Submit
    </button>
  </form>
      </div>
 )
}
