"use client"

import React, { useState } from 'react';

export function Component() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const quizQuestions = [
    {
      question: "What is the fear of spiders?",
      correctOption: "A",
      photo: "https://images.unsplash.com/photo-1611763806287-7f9858f4da69?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNwaWRlcnxlbnwwfHwwfHx8MA%3D%3D", // URL of the image for this question
      options: [
        { label: "A", text: "Arachnophobia" },
        { label: "B", text: "Acrophobia" },
        { label: "C", text: "Ophidiophobia" },
        { label: "D", text: "Claustrophobia" }
      ]
    },
    {
      question: "What is the fear of heights?",
      correctOption: "B",
      photo: "https://aquarteryoung.files.wordpress.com/2019/07/daria-nepriakhina-eocd0z_h1io-unsplash.jpg", // URL of the image for this question
      options: [
        { label: "A", text: "Arachnophobia" },
        { label: "B", text: "Acrophobia" },
        { label: "C", text: "Ophidiophobia" },
        { label: "D", text: "Claustrophobia" }
      ]
    },
    {
      question: "What is the fear of snakes?",
      correctOption: "C",
      photo: "https://media.istockphoto.com/id/1466759447/photo/yellow-pit-viper-in-the-family-viperidae-angry-snake.webp?b=1&s=170667a&w=0&k=20&c=oMhcaTXVYmjwD5Fr-V9dVI3XPSvArK3JaqnEYTKWa6o=", // URL of the image for this question
      options: [
        { label: "A", text: "Arachnophobia" },
        { label: "B", text: "Acrophobia" },
        { label: "C", text: "Ophidiophobia" },
        { label: "D", text: "Claustrophobia" }
      ]
    },
    {
      question: "What is the fear of confined spaces?",
      correctOption: "D",
      photo: "https://images.unsplash.com/photo-1628746402529-658090e3a3e8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F2aW5nfGVufDB8fDB8fHww", // URL of the image for this question
      options: [
        { label: "A", text: "Arachnophobia" },
        { label: "B", text: "Acrophobia" },
        { label: "C", text: "Ophidiophobia" },
        { label: "D", text: "Claustrophobia" }
      ]
    },
    {
      question: "What is the fear of open spaces?",
      correctOption: "A",
      photo: "https://media.istockphoto.com/id/1401722160/photo/sunny-plantation-with-growing-soya.webp?b=1&s=170667a&w=0&k=20&c=evvmxmpiRM6sbnk59z876swwplz8mQN_ZxQWIO2eKA8=", // URL of the image for this question
      options: [
        { label: "A", text: "Agoraphobia" },
        { label: "B", text: "Acrophobia" },
        { label: "C", text: "Ophidiophobia" },
        { label: "D", text: "Claustrophobia" }
      ]
    },
    // Questions about anxiety disorders
    {
      question: "What disorder is characterized by excessive worry about various aspects of life?",
      correctOption: "A",
      options: [
        { label: "A", text: "Generalized Anxiety Disorder (GAD)" },
        { label: "B", text: "Panic Disorder" },
        { label: "C", text: "Social Anxiety Disorder (Social Phobia)" },
        { label: "D", text: "Obsessive-Compulsive Disorder (OCD)" }
      ]
    },
    {
      question: "Which disorder involves recurring unexpected panic attacks?",
      correctOption: "B",
      options: [
        { label: "A", text: "Generalized Anxiety Disorder (GAD)" },
        { label: "B", text: "Panic Disorder" },
        { label: "C", text: "Social Anxiety Disorder (Social Phobia)" },
        { label: "D", text: "Obsessive-Compulsive Disorder (OCD)" }
      ]
    },
    {
      question: "What disorder involves intense fear and avoidance of social situations?",
      correctOption: "C",
      options: [
        { label: "A", text: "Generalized Anxiety Disorder (GAD)" },
        { label: "B", text: "Panic Disorder" },
        { label: "C", text: "Social Anxiety Disorder (Social Phobia)" },
        { label: "D", text: "Obsessive-Compulsive Disorder (OCD)" }
      ]
    },
    {
      question: "Which disorder involves intrusive, unwanted thoughts and repetitive behaviors?",
      correctOption: "D",
      options: [
        { label: "A", text: "Generalized Anxiety Disorder (GAD)" },
        { label: "B", text: "Panic Disorder" },
        { label: "C", text: "Social Anxiety Disorder (Social Phobia)" },
        { label: "D", text: "Obsessive-Compulsive Disorder (OCD)" }
      ]
    },
    {
      question: "What disorder can develop after exposure to a traumatic event?",
      correctOption: "A",
      options: [
        { label: "A", text: "Post-Traumatic Stress Disorder (PTSD)" },
        { label: "B", text: "Panic Disorder" },
        { label: "C", text: "Social Anxiety Disorder (Social Phobia)" },
        { label: "D", text: "Obsessive-Compulsive Disorder (OCD)" }
      ]
    }
  ];


  
  

  const handleNextQuestion = () => {
    if (selectedOption === quizQuestions[currentQuestion].correctOption) {
      setScore(score + 1);
    }
    setCurrentQuestion(prevQuestion => prevQuestion + 1);
    setSelectedOption(null); // Reset selected option for the next question
  };

  const handleOptionClick = (optionLabel) => {
    setSelectedOption(optionLabel);
  };

  return (
    <div>
      <div className="space-y-2 my-4">
        <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Phobia Quiz</h1>
        <p className="text-center text-gray-500 md:text-xl dark:text-gray-400">
          Test your knowledge of phobias! You have 15 seconds to answer each question.
        </p>
      </div>

      <div className="relative grid w-full h-screen min-h-screen gap-0 md:grid-cols-1">
        <div className="flex flex-col items-center justify-center gap-4 p-4 text-center md:gap-0 md:grid md:items-start md:px-6 lg:gap-10">
          <div className="flex items-center justify-center w-full md:justify-start">
            <div className="flex items-center space-x-2">
              <ArrowRightIcon className="h-4 w-4" />
              <p className="text-sm font-semibold tracking-wider">Question {currentQuestion === quizQuestions.length ? quizQuestions.length : currentQuestion + 1}</p>

            </div>
            <div className="flex items-center space-x-2 ml-auto">
              <p className="text-sm font-semibold tracking-wider">Score: {score}/{quizQuestions.length}</p>
            </div>
          </div>

          {currentQuestion < quizQuestions.length && (
            <div className="text-center">
              <p className="text-xl font-semibold mt-4">{quizQuestions[currentQuestion].question}</p>
              {quizQuestions[currentQuestion].photo && ( // Check if photo property exists
                <img
                  src={quizQuestions[currentQuestion].photo}
                  alt={`Photo for question ${currentQuestion + 1}`}
                  className="mt-4 mx-auto max-w-[400px] max-h-[300px] h-auto"
                />
              )}
            </div>
          )}



          <div className="w-full max-w-sm mx-auto space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {currentQuestion < quizQuestions.length &&
                quizQuestions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center p-4 rounded-lg border border-gray-200 bg-white shadow-sm cursor-pointer dark:border-gray-800 
                    ${selectedOption === option.label && (selectedOption === quizQuestions[currentQuestion].correctOption ? 'bg-green-300' : 'bg-red-300')} 
                    hover:shadow transition-transform hover:scale-105 dark:border-gray-800`}
                    onClick={() => handleOptionClick(option.label)}
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center ml-4">
                      <div />
                    </span>
                    <label className="pointer-events-none select-none" htmlFor={`q${currentQuestion + 1}a${index + 1}`}>
                      <span className="text-sm font-medium">{`${option.label}) ${option.text}`}</span>
                    </label>
                  </div>
                ))}
            </div>
          </div>


          {currentQuestion < quizQuestions.length && (
            <button onClick={handleNextQuestion} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next Question</button>
          )}
          {/* Display the score if all questions have been answered */}
          {currentQuestion === quizQuestions.length && (
            <div className="text-center mt-4">
              <p className="text-lg font-semibold">Quiz Completed!</p>
              <p className="text-lg">Your final score is: {score}/{quizQuestions.length}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
