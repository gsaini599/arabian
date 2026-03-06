import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, MapPin, Home, Users, Wifi, Car } from 'lucide-react';
import './HostingAbilityCheck.css';

const HostingAbilityCheck = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const questions = [
    {
      id: 'propertyType',
      question: 'What type of property do you have?',
      icon: <Home size={32} />,
      options: [
        { value: 'apartment', label: 'Apartment', score: 10 },
        { value: 'villa', label: 'Villa/House', score: 10 },
        { value: 'studio', label: 'Studio', score: 8 },
        { value: 'penthouse', label: 'Penthouse', score: 10 },
      ]
    },
    {
      id: 'location',
      question: 'Where is your property located?',
      icon: <MapPin size={32} />,
      type: 'input',
      placeholder: 'Enter city and country',
      score: 10
    },
    {
      id: 'nearbyAttractions',
      question: 'Is your property near tourist attractions or business districts?',
      icon: <MapPin size={32} />,
      options: [
        { value: 'yes-walking', label: 'Yes, within walking distance', score: 10 },
        { value: 'yes-short-drive', label: 'Yes, short drive away', score: 8 },
        { value: 'moderate', label: 'Moderately accessible', score: 5 },
        { value: 'remote', label: 'Remote location', score: 3 },
      ]
    },
    {
      id: 'capacity',
      question: 'How many guests can your property accommodate?',
      icon: <Users size={32} />,
      options: [
        { value: '1-2', label: '1-2 guests', score: 7 },
        { value: '3-4', label: '3-4 guests', score: 10 },
        { value: '5-8', label: '5-8 guests', score: 10 },
        { value: '8+', label: '8+ guests', score: 9 },
      ]
    },
    {
      id: 'amenities',
      question: 'What amenities does your property have?',
      icon: <Wifi size={32} />,
      type: 'multiple',
      options: [
        { value: 'wifi', label: 'High-speed WiFi', score: 3 },
        { value: 'kitchen', label: 'Full Kitchen', score: 2 },
        { value: 'washer', label: 'Washer/Dryer', score: 2 },
        { value: 'ac', label: 'Air Conditioning', score: 3 },
        { value: 'pool', label: 'Pool', score: 2 },
        { value: 'gym', label: 'Gym', score: 1 },
        { value: 'workspace', label: 'Dedicated Workspace', score: 2 },
      ]
    },
    {
      id: 'parking',
      question: 'Is parking available?',
      icon: <Car size={32} />,
      options: [
        { value: 'free', label: 'Free parking on premises', score: 10 },
        { value: 'paid', label: 'Paid parking available', score: 7 },
        { value: 'street', label: 'Street parking only', score: 5 },
        { value: 'none', label: 'No parking', score: 2 },
      ]
    },
    {
      id: 'maintenance',
      question: 'Can you arrange local maintenance and cleaning services?',
      icon: <CheckCircle size={32} />,
      options: [
        { value: 'yes', label: 'Yes, I have contacts', score: 10 },
        { value: 'maybe', label: 'I can find them', score: 7 },
        { value: 'help', label: 'I need help with this', score: 5 },
        { value: 'no', label: 'No, outside my area', score: 0 },
      ]
    }
  ];

  const handleAnswer = (questionId, value, scoreValue) => {
    setAnswers({ ...answers, [questionId]: { value, score: scoreValue } });
  };

  const handleMultipleAnswer = (questionId, value, scoreValue, checked) => {
    const current = answers[questionId] || { values: [], score: 0 };
    
    if (checked) {
      setAnswers({
        ...answers,
        [questionId]: {
          values: [...current.values, value],
          score: current.score + scoreValue
        }
      });
    } else {
      setAnswers({
        ...answers,
        [questionId]: {
          values: current.values.filter(v => v !== value),
          score: current.score - scoreValue
        }
      });
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateScore();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    let maxScore = 0;

    questions.forEach(q => {
      if (q.type === 'multiple') {
        maxScore += q.options.reduce((sum, opt) => sum + opt.score, 0);
        totalScore += answers[q.id]?.score || 0;
      } else if (q.type === 'input') {
        maxScore += q.score;
        totalScore += answers[q.id]?.value ? q.score : 0;
      } else {
        maxScore += 10;
        totalScore += answers[q.id]?.score || 0;
      }
    });

    const percentage = Math.round((totalScore / maxScore) * 100);
    setScore(percentage);
  };

  const isCurrentQuestionAnswered = () => {
    const currentQ = questions[currentStep];
    if (currentQ.type === 'input') {
      return answers[currentQ.id]?.value?.trim().length > 0;
    }
    if (currentQ.type === 'multiple') {
      return answers[currentQ.id]?.values?.length > 0;
    }
    return answers[currentQ.id] !== undefined;
  };

  const needsVendorHelp = () => {
    return answers.maintenance?.value === 'no' || answers.maintenance?.value === 'help';
  };

  const renderResults = () => {
    const needsVendors = needsVendorHelp();
    
    return (
      <div className="results-container">
        <div className="score-display">
          <div className="score-circle" style={{
            background: score >= 70 ? 'linear-gradient(135deg, #10b981, #059669)' :
                       score >= 50 ? 'linear-gradient(135deg, #f59e0b, #d97706)' :
                       'linear-gradient(135deg, #ef4444, #dc2626)'
          }}>
            <div className="score-value">{score}%</div>
          </div>
          <h2 className="score-title">
            {score >= 70 ? 'Excellent Hosting Potential! 🎉' :
             score >= 50 ? 'Good Hosting Potential! 👍' :
             'We Can Help You Succeed! 💪'}
          </h2>
          <p className="score-description">
            {score >= 70 
              ? 'Your property has excellent characteristics for short-term rentals. Let\'s get started!'
              : score >= 50
              ? 'Your property has good potential. We\'ll help you optimize it for maximum returns.'
              : 'While your property faces some challenges, we have solutions to help you succeed.'}
          </p>
        </div>

        <div className="results-cards">
          <div className="result-card">
            <CheckCircle size={32} color="#10b981" />
            <h3>What's Great</h3>
            <ul>
              {answers.nearbyAttractions?.value?.includes('yes') && 
                <li>Prime location near attractions</li>}
              {answers.capacity?.value && 
                <li>Good guest capacity</li>}
              {answers.parking?.value === 'free' && 
                <li>Free parking available</li>}
              {answers.amenities?.values?.includes('wifi') && 
                <li>High-speed internet</li>}
            </ul>
          </div>

          {needsVendors && (
            <div className="result-card vendor-card">
              <MapPin size={32} color="#f59e0b" />
              <h3>Vendor Support Needed</h3>
              <p>
                Based on your location, we'll connect you with trusted local vendors
                for cleaning, maintenance, and other services.
              </p>
              <button 
                className="btn btn-secondary"
                onClick={() => navigate('/vendors')}
              >
                Browse Vendors
              </button>
            </div>
          )}
        </div>

        <div className="results-actions">
          {needsVendors ? (
            <>
              <button 
                className="btn btn-primary btn-large"
                onClick={() => navigate('/vendors')}
              >
                View Vendor Network First
              </button>
              <button 
                className="btn btn-secondary btn-large"
                onClick={() => navigate('/owner-signup', { state: { hostingScore: score, answers } })}
              >
                Skip to Sign Up
              </button>
            </>
          ) : (
            <button 
              className="btn btn-primary btn-large"
              onClick={() => navigate('/owner-signup', { state: { hostingScore: score, answers } })}
            >
              Continue to Sign Up
            </button>
          )}
        </div>
      </div>
    );
  };

  if (score !== null) {
    return (
      <div className="hosting-check">
        <div className="container">
          {renderResults()}
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="hosting-check">
      <div className="container">
        <div className="check-header">
          <h1>Hosting Ability Assessment</h1>
          <p>Help us understand your property to provide the best service</p>
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        <div className="question-card">
          <div className="question-icon">{currentQuestion.icon}</div>
          <h2 className="question-text">{currentQuestion.question}</h2>
          <p className="question-step">Question {currentStep + 1} of {questions.length}</p>

          <div className="answer-options">
            {currentQuestion.type === 'input' ? (
              <input
                type="text"
                className="form-input"
                placeholder={currentQuestion.placeholder}
                value={answers[currentQuestion.id]?.value || ''}
                onChange={(e) => handleAnswer(currentQuestion.id, e.target.value, currentQuestion.score)}
              />
            ) : currentQuestion.type === 'multiple' ? (
              currentQuestion.options.map(option => (
                <label key={option.value} className="checkbox-option">
                  <input
                    type="checkbox"
                    checked={answers[currentQuestion.id]?.values?.includes(option.value) || false}
                    onChange={(e) => handleMultipleAnswer(
                      currentQuestion.id,
                      option.value,
                      option.score,
                      e.target.checked
                    )}
                  />
                  <span className="checkbox-label">{option.label}</span>
                </label>
              ))
            ) : (
              currentQuestion.options.map(option => (
                <button
                  key={option.value}
                  className={`option-btn ${answers[currentQuestion.id]?.value === option.value ? 'selected' : ''}`}
                  onClick={() => handleAnswer(currentQuestion.id, option.value, option.score)}
                >
                  {option.label}
                </button>
              ))
            )}
          </div>

          <div className="question-actions">
            {currentStep > 0 && (
              <button className="btn btn-secondary" onClick={handleBack}>
                Back
              </button>
            )}
            <button 
              className="btn btn-primary"
              onClick={handleNext}
              disabled={!isCurrentQuestionAnswered()}
            >
              {currentStep === questions.length - 1 ? 'See Results' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingAbilityCheck;

