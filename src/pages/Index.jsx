import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-[#2C5F2D] text-white">
      <header className="py-8 px-4 md:px-8 lg:px-16 bg-[#1E441E]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Invest in AGI Innovation</h1>
        <p className="text-xl md:text-2xl">Building the future of AI in Europe</p>
      </header>

      <main className="py-12 px-4 md:px-8 lg:px-16">
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About the Founder</h2>
          <Card className="bg-[#4E9F3D] p-6">
            <p className="text-lg mb-4">Building AGI in Europe. Previously worked at CERN and Sana Labs. Founded 2x top YC companies.</p>
            <p className="text-lg">Follow for AI + UX experiments</p>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#4E9F3D] p-6">
              <h3 className="text-2xl font-bold mb-4">GPT-Engineer</h3>
              <p className="mb-4">One prompt generates a codebase. Open-source project with 38.5k+ stars on GitHub.</p>
              <Button variant="secondary" className="bg-[#1E441E] hover:bg-[#2C5F2D]">
                <a href="https://github.com/AntonOsika/gpt-engineer" target="_blank" rel="noopener noreferrer">Learn More</a>
              </Button>
            </Card>
            <Card className="bg-[#4E9F3D] p-6">
              <h3 className="text-2xl font-bold mb-4">GPT-Engineer App</h3>
              <p className="mb-4">Web application that allows anyone to build and deploy web apps with plain English.</p>
              <Button variant="secondary" className="bg-[#1E441E] hover:bg-[#2C5F2D]">
                <a href="https://gptengineer.app/" target="_blank" rel="noopener noreferrer">Try It Out</a>
              </Button>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pros and Cons of Investing</h2>
          <div className="space-y-4">
            <Card className="bg-[#4E9F3D] p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center cursor-pointer" onClick={() => toggleSection('pros')}>
                Pros <ChevronDown className={`ml-2 transition-transform ${activeSection === 'pros' ? 'rotate-180' : ''}`} />
              </h3>
              {activeSection === 'pros' && (
                <ul className="list-disc pl-6 space-y-2">
                  <li>Experienced founder with background in top tech companies and research institutions</li>
                  <li>Successful track record with YC-backed companies</li>
                  <li>Rapidly growing open-source project with strong community support</li>
                  <li>Innovative approach to AI and software development</li>
                  <li>Focus on reducing barriers to building software</li>
                </ul>
              )}
            </Card>
            <Card className="bg-[#4E9F3D] p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center cursor-pointer" onClick={() => toggleSection('cons')}>
                Cons <ChevronDown className={`ml-2 transition-transform ${activeSection === 'cons' ? 'rotate-180' : ''}`} />
              </h3>
              {activeSection === 'cons' && (
                <ul className="list-disc pl-6 space-y-2">
                  <li>Highly competitive AI market with rapid advancements</li>
                  <li>Potential regulatory challenges in the AI industry</li>
                  <li>Dependency on large language models and their providers</li>
                  <li>Uncertain timeline for achieving full AGI capabilities</li>
                  <li>Potential ethical concerns surrounding AI development</li>
                </ul>
              )}
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Fun Facts</h2>
          <Card className="bg-[#4E9F3D] p-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>The founder once considered lying down after seeing an impressive AI demo</li>
              <li>GPT-Engineer hasn't fully bootstrapped itself yet, but it's learning with each new prompt</li>
              <li>The founder's dad is awesome (Happy belated birthday, Dad!)</li>
              <li>The company name "Lovable" was launched on Valentine's Day</li>
            </ul>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Invest?</h2>
          <Card className="bg-[#4E9F3D] p-6 text-center">
            <p className="text-xl mb-4">Join us in building the future of AI and software development!</p>
            <Button className="bg-[#1E441E] hover:bg-[#2C5F2D] text-white">
              Contact for Investment Opportunities
            </Button>
          </Card>
        </section>
      </main>

      <footer className="py-8 px-4 md:px-8 lg:px-16 bg-[#1E441E] text-center">
        <p>&copy; 2024 AGI Innovation Company. All rights reserved.</p>
        <p className="mt-2">
          <a href="https://twitter.com/antonosika" target="_blank" rel="noopener noreferrer" className="underline">
            Follow on Twitter
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
