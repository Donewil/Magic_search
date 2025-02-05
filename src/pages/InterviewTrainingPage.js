import React, { useState } from 'react';

const InterviewTrainingPage = () => {
  const [skills, setSkills] = useState('');
  const [questions, setQuestions] = useState([]);

  const startSpeechToText = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSkills(transcript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };
  };

  const generateQuestions = () => {
    if (!skills.trim()) return alert('Please describe your skills.');
    const mockQuestions = [
      `Tell me about your experience with ${skills}.`,
      `How do you handle challenges related to ${skills}?`,
    ];
    setQuestions(mockQuestions);
  };

  return (
    <div>
      <h1>Interview Training</h1>
      <textarea
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        placeholder="Describe your skills..."
      />
      <button onClick={startSpeechToText}>Speak Your Skills</button>
      <button onClick={generateQuestions}>Generate Questions</button>
      <div>
        {questions.map((question, index) => (
          <div key={index} className="question">{question}</div>
        ))}
      </div>
    </div>
  );
};

export default InterviewTrainingPage;