import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Zap, Rocket } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      <header className="container mx-auto py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Create Your Own React App</h1>
        <p className="text-2xl mb-8">Professional, Custom-Built React Applications</p>
        <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300">
          Get Started for Just $299
        </Button>
      </header>

      <main className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-lg">
            <CardContent className="flex flex-col items-center p-6">
              <Code size={48} className="mb-4" />
              <h2 className="text-xl font-semibold mb-2">Custom Code</h2>
              <p className="text-center">Tailored React applications built to your specifications</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-lg">
            <CardContent className="flex flex-col items-center p-6">
              <Zap size={48} className="mb-4" />
              <h2 className="text-xl font-semibold mb-2">Fast Turnaround</h2>
              <p className="text-center">Get your app up and running in no time</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-lg">
            <CardContent className="flex flex-col items-center p-6">
              <Rocket size={48} className="mb-4" />
              <h2 className="text-xl font-semibold mb-2">Launch Ready</h2>
              <p className="text-center">Fully tested and optimized for immediate deployment</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="container mx-auto py-8 text-center">
        <p>&copy; 2024 Your React App Service. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
