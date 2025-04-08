'use client';

import { generateQuiz } from '@/actions/generatequiz';
import { Quiz } from '@/types';
import React, { useState } from 'react';
import QuizComponent from './quiz';

interface QuizInput {
  content: string;
  topic: string;
  numberOfQuestions: number;
  difficulty: string;
  subject: string;
}

const QuizInputForm = () => {
const [quiz, setQuiz] = useState<Quiz | undefined>(undefined); // Replace 'any' with a more specific type if possible
  const [formData, setFormData] = useState<QuizInput>({
    content: '',
    topic: '',
    numberOfQuestions: 0,
    difficulty: 'easy',
    subject: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData, 
      [name]: name === 'numberOfQuestions' ? Number(value) : value 
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., sending the data to an API
    console.log(formData);
    const response = await generateQuiz(formData)
    setQuiz(response);
  };

  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 bg-gray-100">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          {quiz ? <QuizComponent quiz={quiz} /> : <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Quiz Input Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block">Content:</label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      rows={4}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label className="block">Topic:</label>
                    <input
                      type="text"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label className="block">Subject:</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label className="block">Number of Questions:</label>
                    <input
                      type="number"
                      name="numberOfQuestions"
                      value={formData.numberOfQuestions}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label className="block">Difficulty:</label>
                    <select
                      name="difficulty"
                      value={formData.difficulty}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-500 hover:to-sky-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default QuizInputForm;