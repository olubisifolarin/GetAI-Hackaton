import React, {useState} from "react";


const faqData = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Can I work on a project I started before the hackathon?",
    },

    {
        question: "What happens if I need help during the hackathon?",
        answer: "What happens if I need help during the hackathon?",
      },
     
    {
      question: "What happens if I don't have an idea for a project?",
      answer: "What happens if I don't have an idea for a project?",
    },

    {
        question: "Can I join a team or do I have to come with one?",
        answer: "Can I join a team or do I have to come with one?",
    },

    {
        question: "What happens after the hackathon ends",
        answer: "What happens after the hackathon ends",
    },
    
    {
        question: "Can I work on a project I started before the hackathon?",
        answer: "Can I work on a project I started before the hackathon?",
    },
     
   
  ];



const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (index === openIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            {/* {item.question} {openIndex === index ? '-' : '+'} */}
            {item.question} <span className='plus-button'>+</span>

          </div>
          {openIndex === index && <div className="faq-answer">{item.answer}</div>}
          <hr className="hrule" />
        </div>
      ))}
    </div>
  );
};

export default Faq;

  