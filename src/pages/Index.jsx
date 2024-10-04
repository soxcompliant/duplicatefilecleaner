import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, FastForward, Shield } from 'lucide-react';

const Index = () => {
  const features = [
    { icon: <FastForward className="w-6 h-6 text-green-500" />, text: "Instant Results" },
    { icon: <Shield className="w-6 h-6 text-blue-500" />, text: "Safe & Secure" },
    { icon: <Download className="w-6 h-6 text-purple-500" />, text: "Easy to Use" },
  ];

  const faqItems = [
    {
      question: "Do I need technical skills to use this tool?",
      answer: "Absolutely not! The tool is designed for anyone to use. It's as simple as running the program and confirming that you want to delete the files it finds."
    },
    {
      question: "Can I trust it to only delete duplicates?",
      answer: "Yes! It only targets files that are duplicates, like files ending in (1), (2), etc., and won't touch anything else."
    },
    {
      question: "What if I don't want to delete certain files?",
      answer: "You'll be shown a list of files before any deletion happens, and you can choose to cancel if you like."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-800">
      <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-blue-600">Duplicate File Cleaner</h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Clean Up Your Computer in Seconds!</h2>
          <p className="text-xl mb-6">Instantly remove all duplicate files from your computer—no tech skills needed.</p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition hover:scale-105">
            Buy Now - Just $5
          </Button>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Why Choose This Tool?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h4 className="font-semibold">{feature.text}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Download the tool.</li>
            <li>Run it—no complicated setup needed!</li>
            <li>See the list of duplicates on your screen.</li>
            <li>Confirm deletion with one click.</li>
          </ol>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details key={index} className="bg-white shadow rounded-lg p-4">
                <summary className="font-semibold cursor-pointer">{item.question}</summary>
                <p className="mt-2">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Clean Up Your Computer?</h3>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition hover:scale-105">
            Get Started Now
          </Button>
        </section>
      </main>

      <footer className="bg-gray-100 py-6 px-4 mt-12">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2024 Duplicate File Cleaner. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;